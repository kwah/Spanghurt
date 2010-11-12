// ==UserScript==
// @name           Spanghurt
// @namespace      http://kwah.org/
// @description    Spanghurt is the codename v5 of what was formerly the Neobux 2+ script for Neobux.. The script aims to plugin extra bits of info into Neobux to make your life easier when you're managing referrals or analysing your account.. Once this is a bit more fully formed there'll be more info at kwah.org but for now look out for Neobux 2+ (thread author:kwah) in the Neobux forums =]
// @include        http*://www.neobux.com/*
// ==/UserScript==

function debugLog()
{
  if (arguments.length >= 2)
  {
    console.group();
  }
  for (var i = 0; i < arguments.length; i++)
  {
    console.info(arguments[i]);
  }
  if (arguments.length >= 2)
  {
    console.groupEnd();
  }
}

function errorLog()
{
  if (arguments.length >= 2)
  {
    console.group();
  }
  for (var i = 0; i < arguments.length; i++)
  {
    GM_log(arguments[i]);
    console.info(arguments[i]);
  }
  if (arguments.length >= 2)
  {
    console.groupEnd();
  }
}
function docEvaluate(arg_xpath)
{
  return document.evaluate(arg_xpath,
      document,
      null,
      XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
      null);
}

// Append zeros to the _input until the _desiredStringLength is reached
function padZeros(_input,_desiredStringLength)
{
  var currentLength = _input.toString().length;
  var output = _input;
  for(var i=0; i < (_desiredStringLength - currentLength); i++) {
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
    errorLog("ERROR!\nObject_merge(arg_oldObj, arg_newObj)\n\arg_oldObj is not an Object!", arguments);
    throw Error;
  }
  if('object' !== typeof arg_newObj) {
    errorLog("ERROR!\nObject_merge(arg_oldObj, arg_newObj)\n\narg_newObj is not an Object!", arguments);
    throw Error;
  }


  for (var newVar in arg_newObj)
  {
    switch(typeof arg_newObj[newVar]){
      case "boolean":
      //Fall-through
      case "string":
      //Fall-through
      case "number":
        arg_oldObj[newVar] = arg_newObj[newVar];
        break;

      case "object":
        arg_oldObj[newVar] = this[newVar] || {};
        Object_merge(arg_oldObj[newVar], arg_newObj[newVar]);
        break;

      case "function":
        if('merge' !== newVar){
          arg_oldObj[newVar] = arg_newObj[newVar];
        }
        break;

      default:
        errorLog('Error!\nObject_merge(arg_newObj)');
    }
  }

  return arg_oldObj;

}


var dateToday = new Date();
var dateYesterday = new Date();
dateYesterday.setDate(dateToday.getDate() - 1);

// Date strings for the last 90 days
var dates_array = [];
var i=0;
do
{
  var tmpDate = new Date();
  tmpDate.setDate(new Date().getDate() - i);
  dates_array[i] = tmpDate.getFullYear() + '/' + padZeros(tmpDate.getMonth()+1, 2) + '/' + padZeros(tmpDate.getDate(), 2);
  i++;

}while(90 >= i);

var TODAY_STRING = dates_array[0];
var YESTERDAY_STRING = dates_array[1];


var Neobux = {};
Neobux.possibleAccTypes = [
  'Standard',
  'Golden',
  'Emerald',
  'Sapphire',
  'Platinum',
  'Diamond',
  'Ultimate',
  'Pioneer'
];

Neobux.accountDefaults =
{
  'minDaysForAutopay': {
    'Standard': 20,
    'Golden':   20,
    'Emerald':  20,
    'Sapphire': 18,
    'Platinum': 20,
    'Diamond':  14,
    'Ultimate': 10,
    'Pioneer':  20
  },

  'recycleCost': {
    'Standard': 0.07,
    'Golden':   0.07,
    'Emerald':  0.06,
    'Sapphire': 0.07,
    'Platinum': 0.06,
    'Diamond':  0.07,
    'Ultimate': 0.04,
    'Pioneer':  0.07
  },

  'goldenPackCost': {
    'Standard': 0,
    'Golden':   0,
    'Emerald':  290,
    'Sapphire': 290,
    'Platinum': 490,
    'Diamond':  490,
    'Ultimate': 890,
    'Pioneer':  0
  },

  // Values taken from the help files (quoted above)
  'autopayValues': {
    'Standard': [
      {'minRefs': 0, 'cost': 0.0075},
      {'minRefs': 251, 'cost': 0.0080},
      {'minRefs': 1001, 'cost': 0.0085},
      {'minRefs': 1251, 'cost': 0.0090},
      {'minRefs': 1751, 'cost': 0.0095}
    ],
    'Golden': [
      {'minRefs': 0, 'cost': 0.0060},
      {'minRefs': 501, 'cost': 0.0065},
      {'minRefs': 751, 'cost': 0.0070},
      {'minRefs': 1001, 'cost': 0.0075},
      {'minRefs': 1501, 'cost': 0.0080}
    ],
    'Emerald': [
      {'minRefs': 0, 'cost': 0.0060},
      {'minRefs': 501, 'cost': 0.0065},
      {'minRefs': 751, 'cost': 0.0070},
      {'minRefs': 1251, 'cost': 0.0075},
      {'minRefs': 1501, 'cost': 0.0080}
    ],
    'Sapphire': [
      {'minRefs': 0, 'cost': 0.0060},
      {'minRefs': 751, 'cost': 0.0065},
      {'minRefs': 1001, 'cost': 0.0070},
      {'minRefs': 1501, 'cost': 0.0075},
      {'minRefs': 1751, 'cost': 0.0080}
    ],
    'Platinum': [
      {'minRefs': 0, 'cost': 0.0060},
      {'minRefs': 501, 'cost': 0.0065},
      {'minRefs': 751, 'cost': 0.0070},
      {'minRefs': 1251, 'cost': 0.0075},
      {'minRefs': 1501, 'cost': 0.0080}
    ],
    'Diamond': [
      {'minRefs': 0, 'cost': 0.0060},
      {'minRefs': 1001, 'cost': 0.0065},
      {'minRefs': 1251, 'cost': 0.0070},
      {'minRefs': 1751, 'cost': 0.0075}
    ],
    'Pioneer': [
      {'minRefs': 0, 'cost': 0.0060},
      {'minRefs': 1251, 'cost': 0.0065},
      {'minRefs': 1501, 'cost': 0.0070}
    ]
  },

  'renewalFees': {
    15: -1,
    30: -1,
    60: -1,
    90: -1,
    150: -1,
    240: -1
  }
};

var defaultSettings =
{
  columnPrefixes: {
    flag: " | ",
    referralName: "",
    referralSince: "",
    nextPayment: "",
    lastClick: "",
    totalClicks: "",
    average: "",
    clickText: "",
    average1: "",
    average2: "",
    RSA: "",
    SD: "",
    profit: "$"
  },

  shrinkColumnContents: {
    flag: true,
    referralName: true,
    referralSince: true,
    nextPayment: true,
    lastClick: true,
    totalClicks: false,
    average: false,
    clickText: true,
    average1: true,
    average2: true,
    RSA: true,
    SD: true,
    profit: false
  },

  numeriseDates: {
    flag: null,
    referralName: null,
    referralSince: true,
    nextPayment: null,
    lastClick: true,
    totalClicks: null,
    average: null,
    clickText: null,
    average1: null,
    average2: null,
    RSA: null,
    SD: null,
    profit: null
  },

  shortFormatTimer: {
    flag: null,
    referralName: null,
    referralSince: true,
    nextPayment: null,
    lastClick: true,
    totalClicks: null,
    average: null,
    clickText: null,
    average1: null,
    average2: null,
    RSA: null,
    SD: null,
    profit: null
  },

  showColumn: {
    flag: true,
    referralName: true,
    referralSince: true,
    nextPayment: true,
    lastClick: true,
    totalClicks: true,
    average: true,
    clickText: true,
    average1: true,
    average2: true,
    RSA: true,
    SD: true,
    profit: true
  },

  numberOfRefs: {"Rented":-1,"Direct":-1},

  timePeriods: {
    smallGraph: [5,7,10],// Time Periods for 'smaller' 10day graphs
    largeGraph: [5,10,15],// Time Periods for larger 15day graphs
    recent: 7,// Time Period for 'recent' section of the Referral statistics sidebar
    minigraphs: 5,// Time Period for footer row clicks average
    averageCols: [10,7],// Time Period for the 'average1' & 'average2' column (previously defined as the A10&A7 column)
    extensionsGraph: [7,15,30,60,90]
  }
};

var friendlyNameLookup = {
  'ch_cliques': 'personalClicks',
  'ch_cr': 'rentedClicks',
  'ch_cd': 'directClicks',
  'ch_recycle': 'recycleCost',
  'ch_extensions': 'renewalCost',
  'ch_autopay': 'autopayCost',
  'ch_trrb': 'transferAmounts',
  'ch_ext_schedule': 'extensions',
  'ch_earnings': 'referralEarinings',
  'ch_profit': 'referralProfit'
};



/* consts -- declared as vars because firebug doesn't like consts being declared more than once..
* todo: add a wrapper that checks if consts have been declared & avoids redeclaring if so (try/catch)
* */
/*try{
  const personalClickValue_ultimate = 0.02;
  const referralClickValue_default = 0.01;
  const personalClickValue_default = 0.01;
  const referralClickValue_standard = 0.005;
} catch(e) {}*/

var personalClickValue_ultimate = 0.02;
var referralClickValue_default = 0.01;
var personalClickValue_default = 0.01;
var referralClickValue_standard = 0.005;



/**
 * :Handles stored preferences (eg, referral listings column preferences) and locally cached values (eg, username / number of referrals)
 * @param arg_prefName The name of the stored value that is stored to / fetched from.
 * @param arg_defaultValue The value to return if the value isn't found in storage.
 * @param arg_valueType Indicates the data type that the value will be stored as (where possible) / the data type that the stored value will be returned as. Useful for indicating JSON data. Defaults to string.
 **/
/*function PREF(arg_prefName, arg_defaultValue, arg_valueType)
 {
 this.get = localStorage.getItem(arg_prefName, arg_defaultValue);
 this.set = localStorage.setItem(arg_prefName, arg_defaultValue);
 return this;
 }*/


/*
 // helper function to create closures based on passed-in arguments:
 var bindGetterSetter = function(obj,p,properties)
 {
 obj.__defineGetter__(p, function() { return properties[p]; });
 obj.__defineSetter__(p, function(val) { properties[p]=val; return this; });
 };

 // http://stackoverflow.com/questions/377716/javascript-automatic-getter-setters-john-resig-book/378395#378395
 function USER( arg_properties ) {

 for (var prop in arg_properties) {
 bindGetterSetter(this, prop, arg_properties);
 }
 }
 */

function get(arg_prefName, arg_defaultValue, arg_options)
{
  if ("object" === typeof arg_options) {
    //arg_options = arg_options;
  }
  else {
    errorLog('ERROR: function: get()','arg_options is not an object!!','arguments:',arguments);
    arg_options = {};
  }

  var returnType = arg_options.prefType = arg_options.prefType || typeof arg_defaultValue;

  var tmp = localStorage.getItem(arg_prefName);
  if(!tmp) {
    errorLog('Error retrieving value from localStorage, using supplied defualt value.',arguments);
    tmp = set(arg_prefName, arg_defaultValue, arg_options);
  }

  switch (returnType)
  {
    case 'float':
      return parseFloat(tmp);
    case 'string':
      return tmp.toString();
    case 'JSON':
      try {
        return JSON.parse(tmp);
      } catch(e){
        return {};
      }
    default:
      return tmp;
  }
}

function set(arg_prefName, arg_defaultValue, arg_options)
{
  if ("object" === typeof arg_options) {
    //arg_options = arg_options;
  }
  else {
    errorLog('ERROR: function: set()','arg_options is not an object!!','arguments:',arguments);
    arg_options = {};
  }

  arg_options.prefType = arg_options.prefType || typeof arg_defaultValue;

  var tmp_value;

//  debugLog('arg_prefName', arg_prefName, 'arg_defaultValue', arg_defaultValue, 'arg_options', arg_options);
//  debugLog('arg_options.prefType', arg_options.prefType);
  switch (arg_options.prefType)
  {
    case 'float':
      tmp_value = parseFloat(arg_defaultValue);
      break;
    case 'string':
      tmp_value = arg_defaultValue.toString();
      break;
    case 'JSON':
      tmp_value = JSON.stringify(arg_defaultValue);
      break;
    default:
      tmp_value = arg_defaultValue;
      break;
  }

//  debugLog('tmp_value', tmp_value);

  localStorage.setItem(arg_prefName, tmp_value);
  return get(arg_prefName, tmp_value, arg_options);
}


/**
 * :Object used for holding information about the account that the current user of the script is logged into
 *
 **/
var currentUser = new function()
{
  this.username = (document.getElementById('t_conta').textContent) ? set('username', document.getElementById('t_conta').textContent, {prefType:'string'}) : get('username', document.getElementById('t_conta').textContent, {prefType:'string'});

  this.accountType = new function ()
  {
    var accDiv = docEvaluate('//div[@class="tag"][last()]');
    var tmp_accountType;


    // If the accType can be grabbed from the page, cache it
    if(0 < accDiv.snapshotLength){
      accDiv = accDiv.snapshotItem(0);

      for (var i = 0; i < Neobux.possibleAccTypes.length; i++)
      {
        if (accDiv.textContent.match(Neobux.possibleAccTypes[i]))
        {
          tmp_accountType = {
            "numerical": i,
            'verbose': Neobux.possibleAccTypes[i]
          };

          set('accountType', tmp_accountType, {prefType:'JSON'});

        }
      }
    }

    // If the accountType info was on the page, the stored copy will have been updated
    // (else we'll just be grabbing the cached version)
    tmp_accountType = get('accountType',{numerical:0, verbose:'unknown'},{prefType: 'JSON'});


    this.numerical = tmp_accountType.numerical;
    this.verbose = tmp_accountType.verbose;

    this.showUltimateFeatures = (6 == tmp_accountType.numerical);
    this.isUltimate = 6 === tmp_accountType.numerical;
    this.isStandard = 0 === tmp_accountType.numerical;

    return this;
  };

  this.ownClickValue = (this.accountType.isUltimate)      ? personalClickValue_ultimate : personalClickValue_default;
  this.referralClickValue = (this.accountType.isStandard) ? referralClickValue_standard : referralClickValue_default;

};

debugLog('currentUser', currentUser);


var chartData = new function ()
{
  this.dataGrabbedFromCurrentPage = function()
  {
    var xpathResults_graphData = docEvaluate('//script[contains(text(),"eval")]');

    // If testing in Firebug, xpathResults_graphData.snapshotLength == 2
    if (1 == xpathResults_graphData.snapshotLength || 2 == xpathResults_graphData.snapshotLength)
    {
      /**
       *  If only one matching <script> ... </script> tag found, it is the correct one
       * NOTE :: If testing in Firebug, xpathResults_graphData.snapshotLength == 2
       * Now extract data::
       */

      /**
       * First, remove instances of the word 'eval' and then split it up based on
       * these rules ::
       * eval(w('
       * ')); eval(w('
       */

      var evals = xpathResults_graphData.snapshotItem(0).text.replace(/[ ]?eval\(w\('/g, '').split("'));");
    }

    var graphData = new Array();

    // Cycle through each individual eval (ie, graph / graphNumber)
    for (var graphNumber = 0, length = evals.length - 1; graphNumber < length; graphNumber++)
    {
      // logger('graphNumber = '+graphNumber);
      var evalString = evals[graphNumber];

      // Decode evalString using the w(i) function from the Neobux page
      var decodedEvalString = NeobuxDecodeEvalString(evalString);

      // debugLog(decodedEvalString.replace(');',']').replace('mk_ch(','graphData['+graphNumber+']
      // = ['));
      eval(decodedEvalString.replace(');', ']').replace('mk_ch(', 'graphData[' + graphNumber + '] = ['));
    }

    // Decode evalString using the w(i) function from the Neobux page
    function U(arg_a)
    {
      return arg_a * 10;
    }

    function u0(arg_a)
    {
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

    return graphData;
  };

  this.storedGraphData = function()
  {
    return get('graphData',{},{prefType: 'JSON'});
  };


  this.graphData = function()
  {
    var tmp_graphData = new Array();
    var tmp_graphDataObject = new Object();
    var tmp_currentGraphFriendlyName;
    var currentDataset;
    var tmp_currentDatasetName;
    var tmp_currentDate;

    for (var _i in this.dataGrabbedFromCurrentPage())
    {
      /*debugLog('_i',_i,
       'this.grabDataFromPage()[_i]',this.grabDataFromPage()[_i],
       'friendlyNameLookup[this.grabDataFromPage()[_i][0]]',friendlyNameLookup[this.grabDataFromPage()[_i][0]]
       );*/

      tmp_currentGraphFriendlyName = friendlyNameLookup[this.dataGrabbedFromCurrentPage()[_i][0]];
      tmp_graphData[tmp_currentGraphFriendlyName] = this.dataGrabbedFromCurrentPage()[_i];

      currentDataset = tmp_graphData[tmp_currentGraphFriendlyName];

      debugLog('currentDataset', currentDataset);

//      console.info('currentDataset[5].length',currentDataset[5].length);
      for(var i = 0; i < currentDataset[5].length; i++)
      {
//          console.info('i = ',i);
        tmp_currentDatasetName = currentDataset[5][i].name;
        tmp_graphDataObject[tmp_currentGraphFriendlyName] = tmp_graphDataObject[tmp_currentGraphFriendlyName] || {};
        tmp_graphDataObject[tmp_currentGraphFriendlyName][tmp_currentDatasetName] = tmp_graphDataObject[tmp_currentGraphFriendlyName][tmp_currentDatasetName] || {};

        for(var j = 0; j < currentDataset[2].length; j++)
        {
//          console.info('j = ',j);
//console.info(i,j,currentDataset[5]);
          tmp_currentDate = currentDataset[2][j].replace(/today/i,TODAY_STRING).replace(/yesterday/i,YESTERDAY_STRING);
          tmp_graphDataObject[tmp_currentGraphFriendlyName][tmp_currentDatasetName][tmp_currentDate] = currentDataset[5][i].data[j];

        }
      }
    }

    debugLog('this.storedGraphData()',this.storedGraphData());
    return set('graphData',Object_merge(this.storedGraphData(), tmp_graphDataObject),{prefType: 'JSON'});

  };


  this.mergeGraphDataOnPageWithStoredData = function ()
  {

  };
};

debugLog('chartData.dataGrabbedFromCurrentPage()', chartData.dataGrabbedFromCurrentPage());
debugLog('chartData.graphData()', chartData.graphData());


/*
 function grabChartData(arg_chartData, arg_page, arg_currentUser) {}


 debugLog('GRAPHS_onCurrentPage',GRAPHS_onCurrentPage);


 */



console.info(localStorage);
