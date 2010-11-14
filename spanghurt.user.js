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


function pageCodeDebugLog()
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
    if(GM_log) { GM_log(arguments[i]); }
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
    errorLog("ERROR!\nObject_merge(arg_oldObj, arg_newObj)\n\narg_oldObj is not an Object!", arguments);
    throw Error;
  }
  if('object' !== typeof arg_newObj) {
    errorLog("ERROR!\nObject_merge(arg_oldObj, arg_newObj)\n\narg_newObj is not an Object!", arguments);
    throw Error;
  }


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



function testAgainstUrlParameters(arg_urlVarTests)
{
  var tmpUrlVars = location.search.split('?')[1].split('&');
//  console.info(tmpUrlVars);
  for(var tmpUrlVarTest in arg_urlVarTests) {
//    console.info('tmpUrlVars.indexOf('+arg_urlVarTests[tmpUrlVarTest]+') = ',tmpUrlVars.indexOf(arg_urlVarTests[tmpUrlVarTest]));
    if(!(0 <= tmpUrlVars.indexOf(arg_urlVarTests[tmpUrlVarTest]))) {
      return false;
    }
  }

  console.info('Found the following within the URL:',arg_urlVarTests);
  return true;
}
function testAgainstUrlPath(arg_urlTests)
{
  var tmpUrlVars = location.pathname.split('/');
//  console.info(tmpUrlVars);
  for(var tmpUrlVarTest in arg_urlTests) {
//    console.info('tmpUrlVars.indexOf('+arg_urlTests[tmpUrlVarTest]+') = ',tmpUrlVars.indexOf(arg_urlTests[tmpUrlVarTest]));
    if(!(0 <= tmpUrlVars.indexOf(arg_urlTests[tmpUrlVarTest]))) {
      return false;
    }
  }

  console.info('Found the following within the URL:',arg_urlTests);
  return true;
}

var currentPage = new function()
{
  function detectLanguageCode()
  {
    if(document.body.textContent.match(/Change Language To Portuguese/i)) { set('neobuxLanguageCode', 'EN', {prefType: 'string'}); }
    if(document.body.textContent.match(/Change Language To English/i)) { set('neobuxLanguageCode', 'PT', {prefType: 'string'}); }

    return get('neobuxLanguageCode', 'EN', {prefType: 'string'});
  };
  this.languageCode = detectLanguageCode();

  function detectPageCode ()
  {

    if(testAgainstUrlPath(['v'])) { return 'viewingAdvertisement'; }
    if(testAgainstUrlPath(['forum'])) { return 'viewingForums'; }

    if(testAgainstUrlParameters(['u=c']))
    {
      if(testAgainstUrlParameters(['s=i'])) { return 'accSummary'; }
      if(testAgainstUrlParameters(['s=b'])) { return 'banners'; }
      if(testAgainstUrlParameters(['s=d'])) { return 'personalSettings'; }
      if(testAgainstUrlParameters(['s=a'])) { return 'advertisementSettings'; }
      if(testAgainstUrlParameters(['s=rq'])) { return 'rentalQueueSettings'; }

      if(testAgainstUrlParameters(['s=rs'])) {
        if(testAgainstUrlParameters(['ss3=0'])) { return 'referralStatistics'; }
      }

      if(testAgainstUrlParameters(['s=r']))
      {
        if(testAgainstUrlParameters(['ss3=1']))
        {
          //WARNING: TODO: NOT TESTED LINKS / ARROW DIRECTIONS FOR DIRECT REFS PAGES

          if(testAgainstUrlParameters(['ss2=1']))
          {
            if(testAgainstUrlParameters(['ss1=2'])) { return 'referralListings_Rented_name_Desc'; }
            if(testAgainstUrlParameters(['ss1=1'])) { return 'referralListings_Rented_refSince_Asc'; }
            if(testAgainstUrlParameters(['ss1=5'])) { return 'referralListings_Rented_nextPayment_Desc'; }
            if(testAgainstUrlParameters(['ss1=4'])) { return 'referralListings_Rented_lastClick_Asc'; }
            if(testAgainstUrlParameters(['ss1=3'])) { return 'referralListings_Rented_totalClicks_Desc'; }
            if(testAgainstUrlParameters(['ss1=7'])) { return 'referralListings_Rented_clickAverage_Desc'; }
            return 'referralListings_Rented_UNKNOWNSORT';
          }

          if(testAgainstUrlParameters(['ss2=2']))
          {
            if(testAgainstUrlParameters(['ss1=2'])) { return 'referralListings_Rented_name_Asc'; }
            if(testAgainstUrlParameters(['ss1=1'])) { return 'referralListings_Rented_refSince_Desc'; }
            if(testAgainstUrlParameters(['ss1=5'])) { return 'referralListings_Rented_nextPayment_Asc'; }
            if(testAgainstUrlParameters(['ss1=4'])) { return 'referralListings_Rented_lastClick_Desc'; }
            if(testAgainstUrlParameters(['ss1=3'])) { return 'referralListings_Rented_totalClicks_Asc'; }
            if(testAgainstUrlParameters(['ss1=7'])) { return 'referralListings_Rented_clickAverage_Asc'; }
            return 'referralListings_Rented_UNKNOWNSORT';
          }

          return 'referralListings_Rented_DEFAULTSORT';
        }
        if(testAgainstUrlParameters(['ss3=2']))
        {
            /**
             * Name           &ss1=2 &ss2= (2Asc/1Desc)??
             * Ref Since      &ss1=1 &ss2= (1Asc/2Desc)
             * Next Payment   &ss1=5 &ss2= (2Asc/1Desc)
             * Last Click     &ss1=4 &ss2= (1Asc/2Desc)
             * Clicks         &ss1=3 &ss2= (2Asc/1Desc)
             * Average        &ss1=7 &ss2= (2Asc/1Desc)
             *
             * &ss1 = column to be sorted by
             * &ss2 = asc / desc
             * &ss3 = direct / rented refs
             *
             *  vars[1] = [2,2,1,'Sort by Referral ID#'];
                vars[2] = [1,1,2,'Sort by the total time that the referral has been Owned']; // Does not match existing arrow directions
                vars[3] = [5,2,1,'Sort by time until Next Payment is Due'];
                vars[4] = [4,1,2,"Sort by time since the referral's Last Click"];
                vars[5] = [3,2,1,'Sort by Total Number of Clicks'];
                vars[6] = [7,2,1,'Sort by Average number of clicks'];
             */

          if(testAgainstUrlParameters(['ss2=1']))
          {
            if(testAgainstUrlParameters(['ss1=2'])) { return 'referralListings_Rented_name_Desc'; }
            if(testAgainstUrlParameters(['ss1=1'])) { return 'referralListings_Rented_refSince_Asc'; }
            if(testAgainstUrlParameters(['ss1=5'])) { return 'referralListings_Rented_nextPayment_Desc'; }
            if(testAgainstUrlParameters(['ss1=4'])) { return 'referralListings_Rented_lastClick_Asc'; }
            if(testAgainstUrlParameters(['ss1=3'])) { return 'referralListings_Rented_totalClicks_Desc'; }
            if(testAgainstUrlParameters(['ss1=7'])) { return 'referralListings_Rented_clickAverage_Desc'; }
            return 'referralListings_Rented_UNKNOWNSORT';
          }

          if(testAgainstUrlParameters(['ss2=2']))
          {
            if(testAgainstUrlParameters(['ss1=2'])) { return 'referralListings_Rented_name_Asc'; }
            if(testAgainstUrlParameters(['ss1=1'])) { return 'referralListings_Rented_refSince_Desc'; }
            if(testAgainstUrlParameters(['ss1=5'])) { return 'referralListings_Rented_nextPayment_Asc'; }
            if(testAgainstUrlParameters(['ss1=4'])) { return 'referralListings_Rented_lastClick_Desc'; }
            if(testAgainstUrlParameters(['ss1=3'])) { return 'referralListings_Rented_totalClicks_Asc'; }
            if(testAgainstUrlParameters(['ss1=7'])) { return 'referralListings_Rented_clickAverage_Asc'; }
            return 'referralListings_Rented_UNKNOWNSORT';
          }

          return 'referralListings_Rented_DEFAULTSORT';
        }
      }
      if(testAgainstUrlParameters(['s=h'])) { return 'historyLogs'; }
      if(testAgainstUrlParameters(['s=ll'])) { return 'loginHistory'; }
      if(testAgainstUrlParameters(['s=rba'])) { return 'rentalBalancePage'; }
      if(testAgainstUrlParameters(['s=gm'])) { return 'goldenMembershipPage'; }
      if(testAgainstUrlParameters(['s=gpa'])) { return 'goldenPackBalancePage'; }

      return 'accSummary';
    }


    if(testAgainstUrlParameters(['u=v'])) { return 'viewAdvertisementsPage'; }
    if(testAgainstUrlParameters(['u=p'])) { return 'neobuxFrontPage'; }



    return 'unrecognisedUrlParameters';
  }

  this.pageCode = detectPageCode();

};

console.group();
console.info(currentPage.pageCode);
console.groupEnd();



/**
 * :Object used for holding information about the account that the current user of the script is logged into
 *
 **/
var currentUser = new function()
{
  if(document.getElementById('t_conta')) {
    this.username = set('username', document.getElementById('t_conta').textContent, {prefType:'string'});
  } else {
    this.username = get('username', 'unknownUsername', {prefType:'string'});
  }

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


if(currentPage.pageCode.match(/accSummary/) || currentPage.pageCode.match(/referralStatistics/))
{
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
      return get('graphData', {}, {prefType: 'JSON'});
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

  //      debugLog('currentDataset', currentDataset);

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

}
/*
 function grabChartData(arg_chartData, arg_page, arg_currentUser) {}


 debugLog('GRAPHS_onCurrentPage',GRAPHS_onCurrentPage);


 */



console.info(localStorage);




function insertLocalServerTime()
{

  function formatTime(arg_time)
  {
    var _Hours = arg_time.getHours();
    var _Minutes = arg_time.getMinutes();
    var _Seconds = arg_time.getSeconds();

    return padZeros(_Hours,2) + ':' + padZeros(_Minutes,2); //+ ":" + padZeros(_Seconds,2);
  }

  var localMidnight;
  var currentLocalTime;
  var currentServerTime;
  var neoMidnight;
  var adResetTime;
  var AdResetTime_hours

  function setTime(arg_dateTime,arg_Time)
  {
    var tmpDateTime = arg_dateTime;
    tmpDateTime.setHours(arg_Time[0]);
    tmpDateTime.setMinutes(arg_Time[1]);
    tmpDateTime.setSeconds(arg_Time[2]);

    return tmpDateTime;
  }

  // Calculate and return the server time formatted correctly
  this.GetServerTimeAndOffsetText = function(arg_serverTimeOffset)
  {
    var offsetMS = arg_serverTimeOffset * 1000 * 60 * 60;

    currentLocalTime = new Date(dateToday);
    currentServerTime = new Date(currentLocalTime.getTime() + offsetMS);


    localMidnight = setTime(new Date(dateToday),[0,0,0]);
    set('localMidnight', localMidnight.toString(), {prefType:'string'});

    /* If server time is five hours behind (-5), Neobux's midnight will be five hours AFTER local midnight
      && vice versa, thus need to minus the offset
      NB, the offset might move the day to tomorrow/yesterday so will need to reset the date to 'today' */
    neoMidnight = new Date(new Date(localMidnight).getTime() - offsetMS);
    neoMidnight = new Date(neoMidnight.setDate(localMidnight.getDate()));
    set('neoMidnight', neoMidnight.toString(), {prefType:'string'});


    AdResetTime_hours = get('AdResetTime_hours',0, {prefType:'string'}) * 1000 * 60 * 60;
    adResetTime = new Date(new Date(localMidnight).getTime() + AdResetTime_hours);
    adResetTime = new Date(adResetTime.setDate(localMidnight.getDate()));
    set('adResetTime', adResetTime.toString(), {prefType:'string'});


    var timeOffset_text = '';
    if (0 < arg_serverTimeOffset) {
      timeOffset_text = '+' + parseFloat(arg_serverTimeOffset.toFixed(2));
    }
    else if (0 > arg_serverTimeOffset) {
      timeOffset_text = parseFloat(arg_serverTimeOffset.toFixed(2));
    }
    else {
      timeOffset_text = '+-' + arg_serverTimeOffset;
    }

    // Return the time in the format HH:MM(:SS optional)

    return formatTime(currentServerTime) + ' (' + timeOffset_text + 'hrs)';

  };


  // Calculate and return the size of the time difference/offset
  this.FetchAndSetTimeOffset = function()
  {
    // Hunt for the current server time string
    var locationOfTimeString = docEvaluate('//td[@class="f_r"]/span');

    if(2 == locationOfTimeString.snapshotLength)
    {
      // var dateTimeString = '2009/06/07 20:46';
      var dateTimeString = locationOfTimeString.snapshotItem(1).textContent;

      // Grab necessary info from the dateTime string (assuming format yyyy/mm/dd hh:dd )
      dateTimeString = dateTimeString.match(/([\d]{4})\/([\d]{2})\/([\d]{2}) ([\d]{2}):([\d]{2})/);


      // NB: parseInt("08") == 0 so must definition of base 10 required
      // CST = Current Server Time
      var tmp_CST = {
        year: parseInt(dateTimeString[1], 10),
        month: parseInt(dateTimeString[2], 10),
        day: parseInt(dateTimeString[3], 10),

        hour: parseInt(dateTimeString[4], 10),
        minute: parseInt(dateTimeString[5], 10)
      };

//      debugLog(tmp_CST);

      var ServerDateTime = new Date(dateToday);
      ServerDateTime.setFullYear(tmp_CST.year, (tmp_CST.month - 1), tmp_CST.day);
      ServerDateTime.setHours(tmp_CST.hour, tmp_CST.minute);

      var ServerTime = ServerDateTime.getTime();
      var LocalTime = dateToday.getTime();
      var one_hour = 1000 * 60 * 60;

      var serverTimeDifference = (ServerTime - LocalTime) / (one_hour);
      serverTimeDifference = Math.floor(serverTimeDifference * 1000) / 1000;
      set('serverTimeOffset', serverTimeDifference, {prefType:'string'});


      var adResetTimeString = locationOfTimeString.snapshotItem(0).textContent;
      adResetTimeString = adResetTimeString.match(/([\d]{2})\:([\d]{2})/);

      // ART = Ad Reset Time
      var tmp_ART = {
        hour: parseInt(adResetTimeString[1], 10),
        minute: parseInt(adResetTimeString[2], 10)
      };

//      debugLog(tmp_ART);

      var AdResetTimeDifference = (tmp_ART.hour + (tmp_ART.minute / 60));
      set('AdResetTime_hours', AdResetTimeDifference, {prefType:'string'});

    }
  };


  this.GetServerTimeOffset = function()
  {
    /*
      Check whether the page being loaded is the 'View Advertisements' page
      If it is, call this.GetServerTimeOffset() to calculate & store the offset amount [if autodetecting the offset is enabled]
    */

    // Check whether current page is the "View Advertisements" page
    var CurrentUrl = document.location.href;

    var RegExp_AdPage = /^http[s]?:\/\/www\.neobux\.com\/\?u\=v/;
    var IsMatch = RegExp_AdPage.test(CurrentUrl);

    // If it is the ads page AND the script should automatically detect the offset,
    if (IsMatch && get("AutoDetectTimeOffset", true, {prefType:'string'})) {
      this.FetchAndSetTimeOffset();
    }

    var serverTimeOffset = get('serverTimeOffset', 0, {prefType:'float'});
    set('serverTimeOffset', serverTimeOffset, {prefType:'string'});

    return serverTimeOffset;
  };


  var xpathResults_timeLocation;

  this.insertClock = function(_timeOffset,_adResetOffset)
  {
    /*
     * TODO: simplify *VERY* ugly xpath, whilst maintaining robustness..
     * Cannot search for td that only has &nbsp; as it's contents
     * Cannot search for td@align=left because returns multiple results
     * NOTE:: Avoiding any search term / method that returns multiple results or that depends on a value that is likely to change
    */

//  var xpath = "//div/descendant::td[contains(.,'$')]/ancestor::tr/child::td[@align='left']";
    var xpath = "//div[contains(@style,'width: 902px') or contains(@style,'width:902px')]/descendant::td[contains(.,'$')]/ancestor::tr/child::td[@align='left']";
    xpathResults_timeLocation = docEvaluate(xpath);

    var localTime = formatTime(dateToday);
    var serverTime = (!!this.GetServerTimeOffset()) ? this.GetServerTimeAndOffsetText(this.GetServerTimeOffset()) : 'You must "View Advertisements" for this to show correctly.';

//  debugLog('Local: ' + localTime + ' Server: ' + serverTime);

    if(document.getElementById('containerDiv_timer')) {
      //document.getElementById('containerDiv_timer').innerHTML = containerDiv_timer.innerHTML;
    } else {
      xpathResults_timeLocation.snapshotItem(0).innerHTML = '<div id="localServerTimeText" style="font-family:mono,monospace; font-size:x-small; margin-bottom:-15px; padding-top:0.7em;">&nbsp; Local time: ' + localTime + '  --  Server time: ' + serverTime + '</div>' + xpathResults_timeLocation.snapshotItem(0).innerHTML;
      xpathResults_timeLocation.snapshotItem(0).setAttribute('valign', '');
    }

    var containerDiv_timer = document.createElement('div');
    containerDiv_timer.innerHTML = '<div style="width: 750px; height: 450px; display:none; position:absolute; top:100px; left:100px;" id="containerDiv_timer"></div>';

    // Used mostly during testing - if the container div is already present update it rather than add another
    if(document.getElementById('containerDiv_timer')) {
      document.getElementById('containerDiv_timer').innerHTML = containerDiv_timer.innerHTML;
    } else {
      document.body.appendChild(containerDiv_timer);
    }


//    debugLog('Local Midnight ',padZeros(localMidnight.getHours(),2)+':'+padZeros(localMidnight.getMinutes(),2),
//        'Server Midnight ',padZeros(neoMidnight.getHours(),2)+':'+padZeros(neoMidnight.getMinutes(),2),
//        'Ad Reset Time ',padZeros(adResetTime.getHours(),2)+':'+padZeros(adResetTime.getMinutes(),2));
//
//    debugLog(localMidnight,neoMidnight,adResetTime);

  };


  this.insertClickGuide = function()
  {

    var localMidnightToAdResetTime = (adResetTime - localMidnight) / (1000 * 60 * 60);
    var localMidnightToNeobuxMidnight = (neoMidnight - localMidnight) / (1000 * 60 * 60);

    //    debugLog(localMidnightToAdResetTime);
    //    debugLog(localMidnightToNeobuxMidnight);


    var _timePeriods = [];
    var localMidnightToFirstEvent;
    var FirstEventToSecondEvent;
    var SecondEventToLocalMidnight;
    var FirstTP;
    var SecondTP;
    var ThirdTP;

    /*
     * Test the a = (local midnight to ad reset) time & b = (local midnight to neobux midnight) time
     * If a < b, the order is 1) local midnight 2) neobux midnight 3) ad resets
     * If a > b, the order is 1) local midnight 2) ad resets 3) neobux midnight
     * If a == b, the ads reset at the same time as the neobux midnight ticks over,
     *  .. and the order is 1) local midnight 2) ad reset+neobux midnight

     * Based on this logic, decide which order to display the 'chunks' of the clock
     */

    var tmp_displayOrder;
    if(localMidnightToAdResetTime < localMidnightToNeobuxMidnight) { tmp_displayOrder = 1; }
    if(localMidnightToAdResetTime > localMidnightToNeobuxMidnight) { tmp_displayOrder = 2; }
    if(localMidnightToAdResetTime == localMidnightToNeobuxMidnight) { tmp_displayOrder = 3; }

    switch(tmp_displayOrder)
    {
      case 1:
  //      debugLog('localMidnightToAdResetTime < localMidnightToNeobuxMidnight');

        localMidnightToFirstEvent = localMidnightToAdResetTime;
        FirstEventToSecondEvent = localMidnightToNeobuxMidnight - localMidnightToAdResetTime;
        SecondEventToLocalMidnight = 24 - (localMidnightToFirstEvent + FirstEventToSecondEvent);

        FirstTP = 'Local Midnight to Ad Reset Time';
        SecondTP = 'Ad Reset Time to Neobux Midnight';
        ThirdTP = 'Neobux Midnight to Local Midnight';

        _timePeriods.push({
          name: FirstTP,
          y: localMidnightToFirstEvent,
          color: '#AA4643'
        });
        _timePeriods.push({
          name: SecondTP,
          y: FirstEventToSecondEvent,
          color: '#4572A7'
        });
        _timePeriods.push({
          name: ThirdTP,
          y: SecondEventToLocalMidnight,
          color: '#AA4643'
        });

      break;
      case 2:

  //      debugLog('localMidnightToAdResetTime > localMidnightToNeobuxMidnight');

        localMidnightToFirstEvent = localMidnightToNeobuxMidnight;
        FirstEventToSecondEvent = localMidnightToAdResetTime - localMidnightToNeobuxMidnight;
        SecondEventToLocalMidnight = 24 - (localMidnightToFirstEvent + FirstEventToSecondEvent);

        FirstTP = 'Local Midnight to Neobux Midnight';
        SecondTP = 'Neobux Midnight to Ad Reset Time';
        ThirdTP = 'Ad Reset Time to Local Midnight';

        _timePeriods.push({
          name: FirstTP,
          y: localMidnightToFirstEvent,
          color: '#AA4643'
        });
        _timePeriods.push({
          name: SecondTP,
          y: FirstEventToSecondEvent,
          color: '#4572A7'
        });
        _timePeriods.push({
          name: ThirdTP,
          y: SecondEventToLocalMidnight,
          color: '#AA4643'
        });

      break;
      case 3:

  //      debugLog('localMidnightToAdResetTime == localMidnightToNeobuxMidnight');

        localMidnightToFirstEvent = localMidnightToAdResetTime;
        FirstEventToSecondEvent = 24 - (localMidnightToFirstEvent);

        FirstTP = 'Local Midnight to Neobux Midnight And Ad Reset Time';
        SecondTP = 'Neobux Midnight And Ad Reset Time to Local Midnight';

        _timePeriods.push({
          name: FirstTP,
          y: localMidnightToFirstEvent,
          color: '#AA4643'
        });
        _timePeriods.push({
          name: SecondTP,
          y: FirstEventToSecondEvent,
          color: '#4572A7'
        });

      break;

    }

    // Transfer script variables to the window
    location.href = "javascript:void(window._timePeriods = new Array())";
    for(var i = 0; i < _timePeriods.length; i++) {
      location.href = "javascript:void(window._timePeriods["+i+"] = JSON.parse('"+JSON.stringify(_timePeriods[i])+"'))";
    }
    location.href = "javascript:void(window.adResetTime = new Date('"+adResetTime.toString()+"'))";
    location.href = "javascript:void(window.neoMidnight = new Date('"+neoMidnight.toString()+"'))";
    location.href = "javascript:void(window.localMidnight = new Date('"+localMidnight.toString()+"'))";

    //    debugLog(_timePeriods);

    location.href = "javascript:(" + function () {

      if('undefined' !== typeof Highcharts)
      {
        var chart = new Highcharts.Chart({
          chart: {
            renderTo: 'containerDiv_timer',
            margin: [20,20,80,20],
            backgroundColor: '#eeeeee'
          },
          title: {
            text: ''
          },
          plotArea: {
            shadow: null,
            borderWidth: null,
            backgroundColor: null
          },
          tooltip: {
            formatter: function () {
              function padZeros(_input,_desiredStringLength)
              {
                var currentLength = _input.toString().length;
                var output = _input;
                for(var i=0; i < (_desiredStringLength - currentLength); i++) {
                  output = '0' + output;
                }
                return output;
              }
              var _from = padZeros(localMidnight.getHours(),2)+':'+padZeros(localMidnight.getMinutes(),2);
              localMidnight = new Date(localMidnight.setHours(localMidnight.getHours() + Math.floor(this.y),localMidnight.getMinutes() + ((this.y - Math.floor(this.y))*60) ));
              var _to = padZeros(localMidnight.getHours(),2) + ':' + padZeros(localMidnight.getMinutes(),2);

              return '<b>'+ this.point.name +'</b>: ' + (Math.floor(this.y*100) / 100) + 'hours == From: '+_from+' To: '+_to;
            }
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                formatter: function () {
                  function padZeros(_input,_desiredStringLength)
                  {
                    var currentLength = _input.toString().length;
                    var output = _input;
                    for(var i=0; i < (_desiredStringLength - currentLength); i++) {
                      output = '0' + output;
                    }
                    return output;
                  }
                  if(0 === this.x){localMidnight.setHours(0,0,0);}
                  var _from = padZeros(localMidnight.getHours(),2)+':'+padZeros(localMidnight.getMinutes(),2);
                  localMidnight = new Date(localMidnight.setHours(localMidnight.getHours() + Math.floor(this.y),localMidnight.getMinutes() + ((this.y - Math.floor(this.y))*60) ));
                  var _to = padZeros(localMidnight.getHours(),2) + ':' + padZeros(localMidnight.getMinutes(),2);

                  return _from+'-'+_to;
                }
              }
            }
          },
          legend: {
            layout: 'vertical'
          },
          series: [{
            type: 'pie',
            name: 'Time periods',
            data: _timePeriods
          }]
        });

      }
      else
      {
        //move container off screen to stop a transparent div blocking clicks on rest of page
        //Also colour it so that if it does cause a problem, it isn't invisible
        //todo: add the event handler before this javascript is called and then remove it here if the timer chart cannot show
        document.getElementById('containerDiv_timer').style.left = '-1000px';
        document.getElementById('containerDiv_timer').style.backgroundColor = 'black';
//        alert("Cannot show the clicking guide graph because graphs are unavailable on this page. Try the account summary page or referral statistics page.");
      }


      //todo: look into passing parameters into the ()
    } + ")()";

    document.getElementById('localServerTimeText').addEventListener('click',function localServerTime_onClick(){
      console.info('time clicked');
      document.getElementById('containerDiv_timer').style.display = ('none' == document.getElementById('containerDiv_timer').style.display) ? '' : 'none' ;
    },false);

  };

  if(!!this.GetServerTimeOffset()) {
    this.insertClock(this.GetServerTimeOffset(),get('AdResetTime_hours',0, {prefType:'string'}));
    this.insertClickGuide();
  }

}

insertLocalServerTime();