/**
 * Utility functions
 */
function docEvaluate(arg_xpath)
{
  return document.evaluate(arg_xpath,
      document,
      null,
      XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
      null);
}

// Append zeros to the _input until the _desiredStringLength is reached
function padZeros(arg_input,arg_desiredStringLength)
{
  var currentLength = arg_input.toString().length;
  var output = arg_input;
  for(var i=0; i < (arg_desiredStringLength - currentLength); i++) {
    output = '0' + output;
  }
  return output;
}

// Function that merges objects, appending the contents of _newObj to the existing object
// * Runs infinitely levels deep
// * Does not completely overwrite the existing object's children, instead only overwrites/adds when it exists in the arg_newObj
function Object_merge(arg_oldObj, arg_newObj)
{
  if('object' !== typeof arg_oldObj) {
    errorLog("ERROR!\nObject_merge(arg_oldObj, arg_newObj)\n\n arg_oldObj is not an Object!", arguments);
    return -1;
  }
  if('object' !== typeof arg_newObj) {
    errorLog("ERROR!\nObject_merge(arg_oldObj, arg_newObj)\n\n arg_newObj is not an Object!", arguments);
    return -1;
  }

  // Loop through nodes that exist in the new object and add/replace them to the existing/old object
  for (var newVar in arg_newObj)
  {
    switch(typeof arg_newObj[newVar])
    {
      //If data is a value (boolean/string/number/function) then "update" it to the 'new' value (or add if not present)
      case "boolean":
      //Fall-through
      case "string":
      //Fall-through
      case "number":
        arg_oldObj[newVar] = arg_newObj[newVar];
        break;

      case "function":
        // stop the 'merge' function being copied
        // nb, applies when this function is added to object.prototype
        if('merge' !== newVar){
          arg_oldObj[newVar] = arg_newObj[newVar];
        }
        break;

      //Else if the data is an object, it will have sub-items of its own
      // run the merge() function on this object to recurse deeper and merge these sub-items.
      case "object":
        arg_oldObj[newVar] = arg_oldObj[newVar] || {};
        Object_merge(arg_oldObj[newVar], arg_newObj[newVar]);
        break;

      default:
        errorLog('Error! Object_merge(arg_oldObj, arg_newObj);\nCannot detect type of arg_newObj'+newVar+arg_newObj[newVar]+typeof arg_newObj[newVar]);
    }
  }
  return arg_oldObj;
}




// Date strings for the last 90 days and the next 720days
var dates_array = [];
var i=-720;
do
{
  var tmpDate = new Date();
  tmpDate.setDate(new Date().getDate() - i);
  dates_array[i] = tmpDate.getFullYear() + '/' + padZeros(tmpDate.getMonth()+1, 2) + '/' + padZeros(tmpDate.getDate(), 2);
  i++;

}while(90 >= i);

var TODAY_STRING = dates_array[0];
var YESTERDAY_STRING = dates_array[1];
var TOMORROW_STRING = dates_array[-1];




function getGraphData()
{
  // Decode evalString using the w(i) function from the Neobux page
  function U(arg_a) {
    return arg_a * 10;
  }

  function u0(arg_a) {
    return String.fromCharCode(U(arg_a));
  }

  // function w(_i) {
  function NeobuxDecodeEvalString(arg_input)
  {
    var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o = "";
    var c1, c2, c3, e1, e2, e3, e4;
    var j = 0;
    arg_input = arg_input.replace(/[^A-Za-z0-9\+\/=]/g, "");
    do {
      e1 = k.indexOf(arg_input.charAt(j++));
      e2 = k.indexOf(arg_input.charAt(j++));
      e3 = k.indexOf(arg_input.charAt(j++));
      e4 = k.indexOf(arg_input.charAt(j++));
      c1 = e1 << 2 | e2 >> 4;
      c2 = (e2 & 15) << 4 | e3 >> 2;
      c3 = (e3 & 3) << 6 | e4;
      o = o + u0(c1 / 10);
      if (64 != e3)
      {
        o = o + u0(c2 / 10);
      }
      if (64 != e4)
      {
        o = o + u0(c3 / 10);
      }
    } while (j < arg_input.length);

    return o;
  }


  var xpathResults_graphData = docEvaluate('//script[contains(text(),"eval")]');
  //NB: If testing in Firebug, xpathResults_graphData.snapshotLength increases the snapshotLength

  for(var i=0; i<xpathResults_graphData.snapshotLength; i++)
  {
    //debugLog(xpathResults_graphData.snapshotItem(i).innerHTML.match(/eval/g).length);
    if(xpathResults_graphData.snapshotItem(i).innerHTML.match(/eval\(w\('/g)) {
      /**
     *  If only one matching <script> ... </script> tag found, it is the correct one
     * Now extract data::
     */

    /**
     * First, remove instances of the word 'eval' and then split it up based on
     * these rules ::
     * eval(w('
     * ')); eval(w('
     */
      var evals = xpathResults_graphData.snapshotItem(i).text.replace(/[ ]?eval\(w\('/g, '').split("'));");
    }
  }

  var graphData = new Array();

  // Cycle through each individual eval (ie, graph / graphNumber)
  for (var graphNumber = 0, length = evals.length - 1; graphNumber < length; graphNumber++)
  {
    // logger('graphNumber = '+graphNumber);
    var evalString = evals[graphNumber];

    // Decode evalString using the w(i) function from the Neobux page
    var decodedEvalString = NeobuxDecodeEvalString(evalString);
    eval(decodedEvalString.replace(');', ']').replace('mk_ch(', 'graphData[' + graphNumber + '] = ['));
  }

  return graphData;
}

console.info(getGraphData());

var tmp_blankAccountCache = new function()
{
  var tmp_currentDateTime = new Date();
  var tmp_currentDate = tmp_currentDateTime.getFullYear() + '/' +
      padZeros(tmp_currentDateTime.getMonth()+1, 2) + '/' +
      padZeros(tmp_currentDateTime.getDate(), 2);

  this.ownClicks = {};
  this.graphs = {};
  this.referrals = { };
  this.user = {};

  this.ownClicks[tmp_currentDate] =
  {
    extended: 0,
    regular: 0,
    mini: 0,
    fixed: 0,
    fixedMicro: 0,
    micro: 0
  };

  this.graphs[tmp_currentDate] = {
    ownClicks_localTime: 0,
    ownClicks_serverTime: 0,
    referralClicks: {
      rented: 0,
      direct: 0
    },
    recycleFees: 0,
    automaticRecycles: 0,
    extensions: 0,
    autopay: 0,
    transfers: {
      toRentalBalance: 0,
      toGoldenPackBalance: 0
    },
    extensionsDue: 0
  };

  function createBlankReferral()
  {
    var tmp_blankReferral = {
      referralType: "R",
      referralSince: "2001/01/01 00:01",
      lastSeen: 0,
      goldenGraphClickData: { },
      ultimateClickData: { },
      referralListingsData: { }
    };
    tmp_blankReferral.goldenGraphClickData[tmp_currentDate] = {
      creditedClicks: 0,
      actualClicks: 0
    };
    tmp_blankReferral.ultimateClickData[tmp_currentDate] = {
      creditedClicks: 0
    };
    tmp_blankReferral.referralListingsData[tmp_currentDate] = {
        nextPayment: 0,
        lastClick: 0,
        totalClicks: 0,
        average: 0,
        realAverage: 0
    };
    return tmp_blankReferral;
  }

  this.user.registrationDate = 0;
  this.user[tmp_currentDate] = {
    totalClicks: 0,
    goldenMembershipExpirationDate: 0,
    goldenPackMembershipExpirationDate: 0,
    numberOfReferrals: {
      Rented: 0,
      Direct: 0
    },
    seenAdvertisementsTotal: {
      user: 0,
      referrals: 0
    },
    account: {
      accountType: 0,
      mainBalance: 0,
      rentalBalance: 0,
      goldenPackBalance: 0,
      received: 0,
      directPurchases: 0,
      exposureClicks: 0,
      NeoPoints: 0
    }
  }
};

var storedAccountCache = getPref('accountCache', tmp_blankAccountCache, { prefType: 'JSON' });
var accountCache = {};

Object_merge(accountCache, tmp_blankAccountCache);
Object_merge(accountCache,storedAccountCache);

//console.info(accountCache);


function convertRawGraphDataToCacheFormat(arg_rawGraphData, arg_accountCache)
{
  var tmp_currentGraph = '';
  var tmp_accountCache = arg_accountCache;

  var GRAPH_ID = 0;
  var DATES = 2;
  var DATA = 5;
  
  // english | pt | es | greek | FI | SE | DE
  var tl8_today = /today|hoje|hoy|Σήμερα|Tänään|Idag|Heute|Aujourd'hui/i;
  var tl8_yesterday = /yesterday|ontem|ayer|Χθες|Eilen|Igår|Gestern|Hier/i;
  var tl8_tomorrow = /tomorrow/i;

  var tmp_currentDate = '';

  for(var tmp_graphData in arg_rawGraphData){
    if(arg_rawGraphData.hasOwnProperty(tmp_graphData))
    {
      tmp_currentGraph = arg_rawGraphData[tmp_graphData];
      switch(tmp_currentGraph[0])
      {
        case 'ch_cliques':
            //Number of clicks done personally, that contribute to TOS#3.7 as reported by the graph
            if(1 === tmp_currentGraph[DATA].length)
            {
              // Only server time clicks are being shown, thus both
              //   server time and local time values are identical
              for(var i=0; i<tmp_currentGraph[DATES].length; i++)
              {
                tmp_currentDate = tmp_currentGraph[DATES][i].replace(tl8_today,TODAY_STRING).replace(tl8_yesterday,YESTERDAY_STRING).replace(tl8_tomorrow,TOMORROW_STRING);

                if(!arg_accountCache.graphs[tmp_currentDate]) {
                  arg_accountCache.graphs[tmp_currentDate] = {};
                }
                arg_accountCache.graphs[tmp_currentDate].ownClicks_localTime = tmp_currentGraph[DATA][0].data[i];
                arg_accountCache.graphs[tmp_currentDate].ownClicks_serverTime = tmp_currentGraph[DATA][0].data[i];
              }
            }
            else if(2 === tmp_currentGraph[DATA].length)
            {
              // First one is local time
              // Second one is server time
              for(var i=0; i<tmp_currentGraph[DATES].length; i++)
              {
                tmp_currentDate = tmp_currentGraph[DATES][i].replace(tl8_today,TODAY_STRING).replace(tl8_yesterday,YESTERDAY_STRING).replace(tl8_tomorrow,TOMORROW_STRING);

                if(!arg_accountCache.graphs[tmp_currentDate]) {
                  arg_accountCache.graphs[tmp_currentDate] = {};
                }
                arg_accountCache.graphs[tmp_currentDate].ownClicks_localTime = tmp_currentGraph[DATA][0].data[i];
                arg_accountCache.graphs[tmp_currentDate].ownClicks_serverTime = tmp_currentGraph[DATA][1].data[i];
              }
            }
        break;
        case 'ch_cr':
            //Number of rented referrals' clicks credited to you
            if(1 === tmp_currentGraph[DATA].length) {
              for(var i=0; i<tmp_currentGraph[DATES].length; i++)
              {
                tmp_currentDate = tmp_currentGraph[DATES][i].replace(tl8_today,TODAY_STRING).replace(tl8_yesterday,YESTERDAY_STRING).replace(tl8_tomorrow,TOMORROW_STRING);

                if(!arg_accountCache.graphs[tmp_currentDate]) {
                  arg_accountCache.graphs[tmp_currentDate] = {};
                }
                if(!arg_accountCache.graphs[tmp_currentDate].referralClicks) {
                  arg_accountCache.graphs[tmp_currentDate].referralClicks = {};
                }
                arg_accountCache.graphs[tmp_currentDate].referralClicks.rented = tmp_currentGraph[DATA][0].data[i];
              }
            }
        break;
        case 'ch_cd':
            //Number of direct referrals' clicks credited to you
            if(1 === tmp_currentGraph[DATA].length) {
              for(var i=0; i<tmp_currentGraph[DATES].length; i++)
              {
                tmp_currentDate = tmp_currentGraph[DATES][i].replace(tl8_today,TODAY_STRING).replace(tl8_yesterday,YESTERDAY_STRING).replace(tl8_tomorrow,TOMORROW_STRING);

                if(!arg_accountCache.graphs[tmp_currentDate]) {
                  arg_accountCache.graphs[tmp_currentDate] = {};
                }
                if(!arg_accountCache.graphs[tmp_currentDate].referralClicks) {
                  arg_accountCache.graphs[tmp_currentDate].referralClicks = {};
                }
                arg_accountCache.graphs[tmp_currentDate].referralClicks.direct = tmp_currentGraph[DATA][0].data[i];
              }
            }
        break;
        case 'ch_recycle':
            //Amount spent on recycling referrals
            if(1 === tmp_currentGraph[DATA].length) {
              for(var i=0; i<tmp_currentGraph[DATES].length; i++)
              {
                tmp_currentDate = tmp_currentGraph[DATES][i].replace(tl8_today,TODAY_STRING).replace(tl8_yesterday,YESTERDAY_STRING).replace(tl8_tomorrow,TOMORROW_STRING);

                if(!arg_accountCache.graphs[tmp_currentDate]) {
                  arg_accountCache.graphs[tmp_currentDate] = {};
                }
                arg_accountCache.graphs[tmp_currentDate].recycleFees = tmp_currentGraph[DATA][0].data[i];
              }
            }
        break;
        case 'ch_trar':
            //Number of referrals recycled automatically for free
            if(1 === tmp_currentGraph[DATA].length) {
              for(var i=0; i<tmp_currentGraph[DATES].length; i++)
              {
                tmp_currentDate = tmp_currentGraph[DATES][i].replace(tl8_today,TODAY_STRING).replace(tl8_yesterday,YESTERDAY_STRING).replace(tl8_tomorrow,TOMORROW_STRING);

                if(!arg_accountCache.graphs[tmp_currentDate]) {
                  arg_accountCache.graphs[tmp_currentDate] = {};
                }
                arg_accountCache.graphs[tmp_currentDate].automaticRecycles = tmp_currentGraph[DATA][0].data[i];
              }
            }
        break;
        case 'ch_extensions':
            //Amount spent on extending (renewing) referrals
            if(1 === tmp_currentGraph[DATA].length) {
              for(var i=0; i<tmp_currentGraph[DATES].length; i++)
              {
                tmp_currentDate = tmp_currentGraph[DATES][i].replace(tl8_today,TODAY_STRING).replace(tl8_yesterday,YESTERDAY_STRING).replace(tl8_tomorrow,TOMORROW_STRING);

                if(!arg_accountCache.graphs[tmp_currentDate]) {
                  arg_accountCache.graphs[tmp_currentDate] = {};
                }
                arg_accountCache.graphs[tmp_currentDate].extensions = tmp_currentGraph[DATA][0].data[i];
              }
            }
        break;
        case 'ch_autopay':
            //Amount spent on autopay
            if(1 === tmp_currentGraph[DATA].length) {
              for(var i=0; i<tmp_currentGraph[DATES].length; i++)
              {
                tmp_currentDate = tmp_currentGraph[DATES][i].replace(tl8_today,TODAY_STRING).replace(tl8_yesterday,YESTERDAY_STRING).replace(tl8_tomorrow,TOMORROW_STRING);

                if(!arg_accountCache.graphs[tmp_currentDate]) {
                  arg_accountCache.graphs[tmp_currentDate] = {};
                }
                arg_accountCache.graphs[tmp_currentDate].autopay = tmp_currentGraph[DATA][0].data[i];
              }
            }
        break;
        case 'ch_trrb':
            //Transfers to rental balance
            if(1 === tmp_currentGraph[DATA].length) {
              for(var i=0; i<tmp_currentGraph[DATES].length; i++)
              {
                tmp_currentDate = tmp_currentGraph[DATES][i].replace(tl8_today,TODAY_STRING).replace(tl8_yesterday,YESTERDAY_STRING).replace(tl8_tomorrow,TOMORROW_STRING);

                if(!arg_accountCache.graphs[tmp_currentDate]) {
                  arg_accountCache.graphs[tmp_currentDate] = {};
                }
                if(!arg_accountCache.graphs[tmp_currentDate].transfers) {
                  arg_accountCache.graphs[tmp_currentDate].transfers = {};
                }
                arg_accountCache.graphs[tmp_currentDate].transfers.toRentalBalance = tmp_currentGraph[DATA][0].data[i];
              }
            }
        break;
        case 'ch_trpb':
            //Transfers to rental balance
            if(1 === tmp_currentGraph[DATA].length) {
              for(var i=0; i<tmp_currentGraph[DATES].length; i++)
              {
                tmp_currentDate = tmp_currentGraph[DATES][i].replace(tl8_today,TODAY_STRING).replace(tl8_yesterday,YESTERDAY_STRING).replace(tl8_tomorrow,TOMORROW_STRING);

                if(!arg_accountCache.graphs[tmp_currentDate]) {
                  arg_accountCache.graphs[tmp_currentDate] = {};
                }
                if(!arg_accountCache.graphs[tmp_currentDate].transfers) {
                  arg_accountCache.graphs[tmp_currentDate].transfers = {};
                }
                arg_accountCache.graphs[tmp_currentDate].transfers.toGoldenPackBalance = tmp_currentGraph[DATA][0].data[i];
              }
            }
        break;
        case 'ch_ext_schedule8':
        //fall-through
        case 'ch_ext_schedule7':
        //fall-through
        case 'ch_ext_schedule6':
        //fall-through
        case 'ch_ext_schedule5':
        //fall-through
        case 'ch_ext_schedule4':
        //fall-through
        case 'ch_ext_schedule3':
        //fall-through
        case 'ch_ext_schedule2':
        //fall-through
        case 'ch_ext_schedule1':
            //Number of referrals due to expire
            if(1 === tmp_currentGraph[DATA].length) {
              for(var i=0; i<tmp_currentGraph[DATES].length; i++)
              {
                tmp_currentDate = tmp_currentGraph[DATES][i].replace(tl8_today,TODAY_STRING).replace(tl8_yesterday,YESTERDAY_STRING).replace(tl8_tomorrow,TOMORROW_STRING);

                if(!arg_accountCache.graphs[tmp_currentDate]) {
                  arg_accountCache.graphs[tmp_currentDate] = {};
                }
                arg_accountCache.graphs[tmp_currentDate].extensionsDue = tmp_currentGraph[DATA][0].data[i];
              }
            }
        break;
      }
    }
  }
  return tmp_accountCache;
}

convertRawGraphDataToCacheFormat(getGraphData(), accountCache);
setPref('accountCache', accountCache, { prefType: 'JSON' });
