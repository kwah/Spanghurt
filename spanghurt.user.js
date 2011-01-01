// ==UserScript==
// @name           Spanghurt
// @namespace      http://kwah.org/
// @description    Spanghurt is the codename v5 of what was formerly the Neobux 2+ script for Neobux.. The script aims to plugin extra bits of info into Neobux to make your life easier when you're managing referrals or analysing your account.. Once this is a bit more fully formed there'll be more info at kwah.org but for now look out for Neobux 2+ (thread author:kwah) in the Neobux forums =]
// @include        http*://www.neobux.com/*
// ==/UserScript==

function debugLog()
{
  if (2 <= arguments.length) {
    console.group();
  }
  for (var i = 0; i < arguments.length; i++) {
    console.info(arguments[i]);
  }
  if (2 <= arguments.length) {
    console.groupEnd();
  }
}


function pageCodeDebugLog()
{
  if (2 <= arguments.length) {
    console.group();
  }
  for (var i = 0; i < arguments.length; i++) {
    console.info(arguments[i]);
  }
  if (2 <= arguments.length) {
    console.groupEnd();
  }
}


function errorLog()
{
  if (2 <= arguments.length) {
    console.group();
  }
  for (var i = 0; i < arguments.length; i++) {
    if('undefined' !== typeof GM_log) { GM_log(arguments[i]); }
    console.info(arguments[i]);
  }
  if (2 <= arguments.length) {
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
    errorLog("ERROR!\nObject_merge(arg_oldObj, arg_newObj)\n\narg_oldObj is not an Object!", arguments);
    return -1;
  }
  if('object' !== typeof arg_newObj) {
    errorLog("ERROR!\nObject_merge(arg_oldObj, arg_newObj)\n\narg_newObj is not an Object!", arguments);
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

  var returnType = arg_options.prefType || typeof arg_defaultValue;

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
  var tmpUrlVars = document.location.search.substring(1).split('&');
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
  var tmpUrlVars = document.location.pathname.substring(1).split('/');
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
  }
  this.languageCode = detectLanguageCode();

  function detectPageCode ()
  {

    if(testAgainstUrlPath(['v'])) { return 'viewingAdvertisement'; }
    if(testAgainstUrlPath(['forum'])) { return 'viewingForums'; }

    if(testAgainstUrlPath(['c']))
    {
      if(testAgainstUrlParameters(['s=i'])) { return 'accSummary'; }
      if(testAgainstUrlPath(['b'])) { return 'banners'; }
      if(testAgainstUrlPath(['d'])) { return 'personalSettings'; }
      if(testAgainstUrlPath(['a'])) {
        if(testAgainstUrlParameters(['s1=pgt'])) { return 'advertisementSettings_purchasingClickPack'; }
        return 'advertisementSettings';
      }
      
      if(testAgainstUrlPath(['rq'])) { return 'rentalQueueSettings'; }

      if(testAgainstUrlPath(['rs'])) {
        return 'referralStatistics'; 
      }

      if(testAgainstUrlPath(['rl']))
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
      if(testAgainstUrlPath(['h'])) { return 'historyLogs'; }
      if(testAgainstUrlPath(['ll'])) { return 'loginHistory'; }
      if(testAgainstUrlPath(['rba'])) { return 'rentalBalancePage'; }
      if(testAgainstUrlPath(['gm'])) { return 'goldenMembershipPage'; }
      if(testAgainstUrlPath(['gpa'])) { return 'goldenPackBalancePage'; }

      return 'accSummary';
    }


    if(testAgainstUrlParameters(['m','v'])) { return 'viewAdvertisementsPage'; }
    if(testAgainstUrlParameters(['u=p'])) { return 'neobuxFrontPage'; }



    return 'unrecognisedUrlParameters';
  }

  this.pageCode = detectPageCode();

};

console.group();
console.info(currentPage.pageCode);
console.groupEnd();




function extractNumberOfRefs()
{
  // If currently viewing the rented/direct ref listings, update the stored values accordingly
  if (currentPage.pageCode.match(/referralListings/))
  {
    // Deduce which page is being viewed
    var _pageRefType = null;
    if(currentPage.pageCode.split('_').indexOf('Rented')) {
      _pageRefType = 'Rented';
    } else {
      _pageRefType = 'Direct';
    }

    debugLog('_pageRefType',_pageRefType);

    var tmp_numberOfRefs = null;
    var noOfRefsString = docEvaluate('//td[@class="f_r"]/descendant::span[@class="f_b"]');

    // Only expecting one result if the user has referrals
    if(1 == noOfRefsString.snapshotLength)
    {
      noOfRefsString = noOfRefsString.snapshotItem(0);

      if (noOfRefsString.textContent.match(/\d+/)) {
        tmp_numberOfRefs = parseInt(noOfRefsString.textContent.match(/\d+/), 10);
      } else {
        errorLog('An Error has occured.\n\r 1 == (noOfRefsString.snapshotLength) \n\r !(noOfRefsString.textContent.match(/\d+/))')
      }
    }
    else
    {
      /**
       * Most likely reason for incorrect snapshotLength is an error in page load or zero refs.
       * Will now check for zero refs.
       */
      var zeroRefsXpath = {
        'EN': '//span[contains(text(),"You don\'t have")]',
        'PT': '//span[contains(text(),"Não tem referidos")]'
      };
      var zeroRefsString = docEvaluate(zeroRefsXpath[currentPage.languageCode()]);

      // If evidence of zero refs is found, set the number of refs to zero (0)
      tmp_numberOfRefs = (1 == zeroRefsString.snapshotLength) ? 0 : false;
    }

    // Now store the number of detected referrals if numberOfRefs is not false
    // manipulatePrefs.setPref('numberOf' + _pageRefType + 'Refs', tmp_numberOfRefs);

    return tmp_numberOfRefs;
  }
  else if(currentPage.pageCode.match(/accSummary/))
  {
//    TODO: Extract number of refs from main page
    var tmp_elmAccountInfo = docEvaluate('//td[@class="t_preto_r"]/parent::tr/parent::tbody/descendant::td');

    //console.info(tmp_elmAccountInfo);
    function displayTextContent(arg_element){
      return arg_element.textContent.replace(/mk_tt\(.*\)/,'').replace(/[><+=;\s]+/g,'');
    }

    var tmp_currentTd;
    var tmp_nextTd;

    var tmp_lookupArray = [
      [/since:/i, 'You have been a member since {value}'],
      [/type:/i, 'You are a {value} member'],
      [/expires:/i, 'Your membership expires on {value}'],
      [/rented:/i, 'You have {value} rented referrals'],
      [/direct:/i, 'You have {value} direct referrals'],
      [/you:/i, 'As a member of Neobux you have clicked {value} ads'],
      [/your referrals:/i, 'In total, you have been credited from {value} of your referrals ads'],
      [/main balance:/i, 'Your main balance is {value}'],
      [/rental balance:/i, 'Your golden pack balance is {value}'],
      [/golden pack balance:/i, 'Your golden pack balance is {value}'],
      [/recieved:/i, 'You have cashed out {value} from Neobux'],
      [/direct purchases:/i, 'You have directly transferred {value} from your account balance back into Neobux'],
      [/exposure clicks:/i, 'You have {value} exposure clicks available for you to show ads with']
    ];

    for(var i=0; i<tmp_elmAccountInfo.snapshotLength; i++)
    {
      tmp_currentTd = tmp_elmAccountInfo.snapshotItem(i);
      tmp_nextTd = tmp_elmAccountInfo.snapshotItem(i+1);

      for(var j=0; j<tmp_lookupArray.length; j++){
        if(tmp_currentTd.textContent.match(tmp_lookupArray[j][0])) {
          console.info(tmp_lookupArray[j][1].replace(/{value}/, displayTextContent(tmp_nextTd)));
        }
      }
    }
  }

}




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

    this.getStoredGraphData = function()
    {
      return get('graphData', {}, {prefType: 'JSON'});
    };


    this.reformatGraphData = function()
    {
      var tmp_graphData = new Array();
      var tmp_graphDataObject = new Object();
      var tmp_currentGraphFriendlyName;
      var currentDataset;
      var tmp_currentDatasetName;
      var tmp_currentDate;

      for (var _i in this.dataGrabbedFromCurrentPage())
      {
        tmp_currentGraphFriendlyName = friendlyNameLookup[this.dataGrabbedFromCurrentPage()[_i][0]];
        tmp_graphData[tmp_currentGraphFriendlyName] = this.dataGrabbedFromCurrentPage()[_i];

        currentDataset = tmp_graphData[tmp_currentGraphFriendlyName];

        console.info('_i',_i,
         'this.dataGrabbedFromCurrentPage()[_i]',this.dataGrabbedFromCurrentPage()[_i],
         'friendlyNameLookup[this.dataGrabbedFromCurrentPage()[_i][0]]',friendlyNameLookup[this.dataGrabbedFromCurrentPage()[_i][0]]
         );



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

      debugLog('this.getStoredGraphData()',this.getStoredGraphData());
      set('graphData',Object_merge(this.getStoredGraphData(), tmp_graphDataObject),{ prefType: 'JSON' });

      return get('graphData',Object_merge(this.getStoredGraphData(), tmp_graphDataObject),{ prefType: 'JSON' });

    };


    this.mergeGraphDataOnPageWithStoredData = function ()
    {

    };
  };

  debugLog('chartData.dataGrabbedFromCurrentPage()', chartData.dataGrabbedFromCurrentPage());
  debugLog('chartData.reformatGraphData()', chartData.reformatGraphData());

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
  var AdResetTime_hours;

  function setTime(arg_dateTime,arg_time)
  {
    arg_dateTime.setHours(arg_time[0]);
    arg_dateTime.setMinutes(arg_time[1]);
    arg_dateTime.setSeconds(arg_time[2]);

    return arg_dateTime;
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
    for (var tmp_i = 0; tmp_i < locationOfTimeString.snapshotLength; tmp_i++)
    {

      // var dateTimeString = '2009/06/07 20:46'; (assuming format yyyy/mm/dd hh:dd )
      var dateTimeString = locationOfTimeString.snapshotItem(tmp_i).textContent.match(/([\d]{4})\/([\d]{2})\/([\d]{2}) ([\d]{2}):([\d]{2})/) || -1;

      if (-1 === dateTimeString) {
        /* do nothing */
      }
      else
      {
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
        console.info('serverTimeOffset', serverTimeDifference, { prefType:'string' } );
        set('serverTimeOffset', serverTimeDifference, { prefType:'string' } );


        var adResetTimeString = locationOfTimeString.snapshotItem(0).textContent;
        adResetTimeString = adResetTimeString.match(/([\d]{2}):([\d]{2})/);

        // ART = Ad Reset Time
        var tmp_ART = {
          hour: parseInt(adResetTimeString[1], 10),
          minute: parseInt(adResetTimeString[2], 10)
        };

        //      debugLog(tmp_ART);

        var AdResetTimeDifference = (tmp_ART.hour + (tmp_ART.minute / 60));
        console.info('AdResetTime_hours', AdResetTimeDifference, { prefType:'string' } );
        set('AdResetTime_hours', AdResetTimeDifference, { prefType:'string' } );

        break;
      }

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

    var RegExp_AdPage = /^http[s]?:\/\/www\.neobux\.com\/m\/v\//;
    var IsMatch = RegExp_AdPage.test(CurrentUrl);

    // If it is the ads page AND the script should automatically detect the offset,
    if (IsMatch && get("AutoDetectTimeOffset", true, {prefType:'string'})) {
      this.FetchAndSetTimeOffset();
    }

    var serverTimeOffset = get('serverTimeOffset', 0, {prefType:'float'});
    set('serverTimeOffset', serverTimeOffset, {prefType:'string'});

    return serverTimeOffset;
  };


  var locationToInsertTimeString;

  this.insertClock = function(_timeOffset,_adResetOffset)
  {
    locationToInsertTimeString = document.querySelectorAll('img#logo')[0].parentNode.parentNode;
    var localTime = formatTime(dateToday);
    var serverTime = (this.GetServerTimeOffset()) ? this.GetServerTimeAndOffsetText(this.GetServerTimeOffset()) : 'You must "View Advertisements" for this to show correctly.';

//  debugLog('Local: ' + localTime + ' Server: ' + serverTime);

    if(document.getElementById('containerDiv_timer')) {
      //document.getElementById('containerDiv_timer').innerHTML = containerDiv_timer.innerHTML;
    } else {
      locationToInsertTimeString.innerHTML = '<div id="localServerTimeText" style="font-family:mono,monospace; font-size:x-small; margin-bottom:-15px; padding-top:0.7em;">&nbsp; Local time: ' + localTime + '  --  Server time: ' + serverTime + '</div>' + locationToInsertTimeString.innerHTML;
      locationToInsertTimeString.setAttribute('valign', '');
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

    location.href = "javascript:(" + padZeros + function () {

      if ('undefined' === typeof Highcharts)
      {
        //move container off screen to stop a transparent div blocking clicks on rest of page
        //Also colour it so that if it does cause a problem, it isn't invisible
        //todo: add the event handler before this javascript is called and then remove it here if the timer chart cannot show

        document.getElementById('containerDiv_timer').style.left = '-1000px';
        document.getElementById('containerDiv_timer').style.backgroundColor = 'black';
        alert("Cannot show the clicking guide graph because graphs are unavailable on this page. Try the account summary page or referral statistics page.");
      }
      else
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
            formatter: function ()
            {
              var _from = padZeros(localMidnight.getHours(), 2) + ':' + padZeros(localMidnight.getMinutes(), 2);
              localMidnight = new Date(localMidnight.setHours(localMidnight.getHours() + Math.floor(this.y), localMidnight.getMinutes() + ((this.y - Math.floor(this.y)) * 60)));
              var _to = padZeros(localMidnight.getHours(), 2) + ':' + padZeros(localMidnight.getMinutes(), 2);

              return '<b>' + this.point.name + '</b>: ' + (Math.floor(this.y * 100) / 100) + 'hours == From: ' + _from + ' To: ' + _to;
            }
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                formatter: function ()
                {
                  if (0 === this.x) {
                    localMidnight.setHours(0, 0, 0);
                  }
                  var _from = padZeros(localMidnight.getHours(), 2) + ':' + padZeros(localMidnight.getMinutes(), 2);
                  localMidnight = new Date(localMidnight.setHours(localMidnight.getHours() + Math.floor(this.y), localMidnight.getMinutes() + ((this.y - Math.floor(this.y)) * 60)));
                  var _to = padZeros(localMidnight.getHours(), 2) + ':' + padZeros(localMidnight.getMinutes(), 2);

                  return _from + '-' + _to;
                }
              }
            }
          },
          legend: {
            layout: 'vertical'
          },
          series: [
            {
              type: 'pie',
              name: 'Time periods',
              data: _timePeriods
            }
          ]
        });

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



// Used for detection on pages
var langStrings_Neo = {
  'EN': {
    'Yesterday': 'Yesterday',
    'Today': 'Today',
    'No clicks yet': 'No clicks yet'
  }
};

// Used for output from the script
var langStrings = {
  'en-GB': {
    'N/A':'N/A'
  }
};

// tl = Translate to Local
function tl(arg_langString){
  var tmp_langCode = 'en-GB';
  if(langStrings){
    if(langStrings[tmp_langCode]){
      if(langStrings[tmp_langCode][arg_langString]){
        return langStrings[tmp_langCode][arg_langString];
      }
      else {
        errorLog('Error! tl(arg_langString)\nLanguage string not found amongst translated strings for '+tmp_langCode+'. Returning the submitted arg_langString: '+arg_langString);
        return arg_langString;
      }
    }
    else {
      errorLog('Error! tl(arg_langString)\nLanguage set not found amongst translations. Returning the submitted arg_langString: '+arg_langString);
      return arg_langString;
    }
  }
  else {
    errorLog('Error! tl(arg_langString)\nTranslations object not found. Returning the submitted arg_langString: '+arg_langString);
    return arg_langString;
  }
}

// ntl = Neobux TransLate to Local
function ntl(arg_langString){
  var tmp_langCode = 'en-GB';

  if(langStrings_Neo){
    if(langStrings_Neo[tmp_langCode]){
      if(langStrings_Neo[tmp_langCode][arg_langString]){
        return langStrings_Neo[tmp_langCode][arg_langString];
      }
      else {
        errorLog('Error! ntl(arg_langString)\nLanguage string not found amongst translated strings for '+tmp_langCode+'. Returning the submitted arg_langString: '+arg_langString);
        return arg_langString;
      }
    }
    else {
      errorLog('Error! ntl(arg_langString)\nLanguage set not found amongst translations. Returning the submitted arg_langString: '+arg_langString);
      return arg_langString;
    }
  }
  else {
    errorLog('Error! ntl(arg_langString)\nTranslations object not found. Returning the submitted arg_langString: '+arg_langString);
    return arg_langString;
  }
}


var referralListings = new function()
{
  function extractReferralDataFromListingsPage()
  {
    // Grab contents of mtx[] array delivered onto the referral listings page
    var xpathResults_mtx = docEvaluate("//script[contains(.,'mtx=')]").snapshotItem(0).textContent;
    var tmp_refData = xpathResults_mtx.match(/mtx=\[(.*?),\];/)[1];

    // Insert this into a JSON
    var tmpObj_currentPageRefData = JSON.parse('{"mtx": ['+tmp_refData.replace(/'/g,'"')+']}') || -1;


    if(-1 === tmpObj_currentPageRefData){
      // The data extracted couldn't be parsed into a valid JSON string / object so 'return' out of the function
      errorLog('There was an error extracting the referral listings data.');
      return -1;
    }

    return tmpObj_currentPageRefData;
  }

  function restructureData(arg_referralListingsData)
  {
    // Data pushed by Neobux is in the following format:

    /**
     * m = mtx[i]
     *
     * m[0] = Row # as shown in the first column
     * m[1] = Real name for referral / else 0
     * m[2] = Came From (direct) / Referral Since (rented) { (currentRefMTX[2] == '9') ? referrals[z - 1].referralSince : currentRefMTX[2] }
     * m[3] = Next Payment (rented) / Referral Since (direct) { (currentRefMTX[2] == '9') ? referrals[z - 1].referralSince : currentRefMTX[2] }
     * m[4] = Last Click Date { (currentRefMTX[4] == '9') ? referrals[z - 1].lastClick : (currentRefMTX[4] == 'N') ? 'No clicks yet' : (currentRefMTX[4] == 'O') ? 'Yesterday' : (currentRefMTX[4] == 'H') ? 'Today' : currentRefMTX[4] }
     * m[5] = Total Clicks
     * m[6] = Overall Average { (currentRefMTX[6] == '-.---' || currentRefMTX[6] == 999) ? '-.---' : currentRefMTX[6] }
     * m[7] = Some kind of long ID # / hash / something
     * m[8] = Unknown exact purpose 0/1 value used within much of the HTML attributes / function parameters
     * m[9] = Value of the checkbox
     * m[10] = When colouring by average is disabled, should background be gray (1) or white (0)
     * m[11] = *unused
     * m[12] = *unused
     * m[13] = Can golden graph button be displayed
     * m[14] = Minigraph click data (Ultimates only)
     * m[15] = Flag id (rented refs only)
     * m[16] = Can referral be recycled
     * m[17] = Is referral locked (rented refs only)
     * m[18] = Can referral be sold (direct refs only)
     * m[19] = Anonymous referral ID (is numerical - prefix of R or D is added on for display only)
     *
     */

    // Will convert to the following structure:
    /*
    *
    * referrals = {
    *   refID: {
    *     referralType: [ rented | direct ],
    *     lastSeen: < dateTime >,
    *     data: {
    *       <dateTime> : {
    *         flag: < flag colour >,
    *         referralSince: < dateTime >,
    *         lastClick: < date >,
    *         totalClicks: < number >,
    *         overallAverage: < decimal >
    *       },
    *       <dateTime> : {
    *         flag: < flag colour >,
    *         referralSince: < dateTime >,
    *         lastClick: < date >,
    *         totalClicks: < number >,
    *         overallAverage: < decimal >
    *       }
    *     }
    *   },
    *   // more refs
    * };
    *
    */

    // NB: How often a new dateTime is created vs. an existing one is updated will need a setting
    // Meanwhile, will create a new one on every page load / running of the script

//    console.info('restructureData:\n\n','arg_referralListingsData',arg_referralListingsData);

    var tmp_referrals = {};
    var tmp_currentDateTime = new Date();
    var cr, pr;
    var cr_ID, pr_ID;

    for(var i = 0; i < arg_referralListingsData.length; i++)
    {
      console.group();
      console.info('i',i);

    /**
     * ## referralSince and lastClick ##
     * if date/time in one row is the same as the row before, mtx contains a '9'
     * instead of the duplicated date
     *
     * ## lastClick ##
     * 'Today' is coded as 'N' (unknown reason for this code);
     * 'Yesterday' is coded as 'O' (in Portuguese, Yesterday == Ontem)
     *
     * ## overallAverage ##
     * when referral is younger than 24hours old and has not yet clicked,
     * average is displayed as '-.---'
     *
     */

      // Current Referral
      cr = arg_referralListingsData[i];
      cr_ID = ('0' == cr[1]) ? cr[19] : cr[1];
      // Previous Referral
      pr = arg_referralListingsData[i-1] || arg_referralListingsData[i];
      pr_ID = ('0' == pr[1]) ? pr[19] : pr[1];

      var flagLookup = {
        0: 'White',
        1: 'Red',
        2: 'Orange',
        3: 'Yellow',
        4: 'Green',
        5: 'Blue'
      };

      if (0 < location.href.indexOf('ss3=2'))
      {
        tmp_referrals[cr_ID] = {
          ID: ('0' == cr[1]) ? 'R' + cr[19] : cr[1],
          referralType: 'R',
          lastSeen: tmp_currentDateTime.toString(),
          hash: cr[7],

          referralSince: ('9' == cr[2]) ? pr.referralSince : cr[2],

          flag: flagLookup[cr[15]],
          locked: (1 === cr[17]) ? 'Y' : 'N',
          recycleable: (1 === cr[16]) ? 'Y' : 'N',

          nextPayment: cr[3],
          lastClick: ('9' == cr[4]) ? pr.lastClick : ('N' == cr[4]) ? ntl('No clicks yet') : ('O' == cr[4]) ? ntl('Yesterday') : ('H' == cr[4]) ? ntl('Today') : cr[4],
          totalClicks: cr[5],
          overallAverage: ('-.---' == cr[6] || 999 == cr[6]) ? '-.---' : cr[6]
        };
      }
      else if (0 < location.href.indexOf('ss3=1'))
      {
        tmp_referrals[cr_ID] = {
          ID: ('0' == cr[1]) ? 'D' + cr[19] : cr[1],
          referralType: 'D',
          lastSeen: tmp_currentDateTime,
          hash: cr[7],

          cameFrom: cr[2],
          referralSince: ('9' == cr[3]) ? pr.referralSince : cr[3],

          lastClick: ('9' == cr[4]) ? pr.lastClick : ('N' == cr[4]) ? ntl('No clicks yet') : ('O' == cr[4]) ? ntl('Yesterday') : ('H' == cr[4]) ? ntl('Today') : cr[4],
          totalClicks: cr[5],
          overallAverage: ('-.---' == cr[6] || 999 == cr[6]) ? '-.---' : cr[6],
          sellable: (1 === cr[18]) ? 'Y' : 'N'
        };
      }

      /* Ultimate only stuff, based on the ultimate minigraphs */
      // Current limit for minigraphs is when viewing 300 refs or fewer - 30/12/2010
      if(currentUser.accountType.showUltimateFeatures && 300 >= refsPerPage)
      {
        tmp_referrals[cr_ID].minigraph = {
          'rawClickData': ('0' == cr[14]) ? '0000000000'.split('') : cr[14].split(''),
          'clicks': new Array()
        };

        // NB: If the user account isn't actually ultimate, but is viewing / testing ultimate features, fill in substitute data
        cr.minigraph.rawClickData = currentUser.accountType.isUltimate ? cr.minigraph.rawClickData : [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

        // Now reverse the order of the array so that the most recent days are first ([0] == today, [1] == yesterday)
        cr.minigraph.rawClickData =  cr.minigraph.rawClickData.reverse();

        // Copy the click data to a separate array and verify/coerce each value to a number
        for (var i = 0; i < cr.minigraph.rawClickData.length; i++) {
          cr.minigraph.clicks[i] = parseInt(cr.minigraph.rawClickData[i], 10);
        }

        /**
         * Compute the mean and variance using a "numerically stable algorithm".
         * Based on http://maiaco.com/articles/computingStatsInJS.php
         * 30/12/2010 - above link no longer exists, mirror found at
         * http://code.google.com/p/ocropodium/source/browse/static/js/stats.js?spec=svnd8375a8cd3f640b35cbbb42d9669411dde9248eb&r=d8375a8cd3f640b35cbbb42d9669411dde9248eb
         *
         * Also temporarily copied in below:
         */

        var sqsum = 0;
        cr.minigraph.mean = new Array();
        cr.minigraph.sum = new Array();
        cr.minigraph.variance = new Array();
        cr.minigraph.sdev = new Array();

        cr.minigraph.mean[0] = cr.minigraph.clicks[0];
        cr.minigraph.sum[0] = cr.minigraph.clicks[0];
        cr.minigraph.variance[0] = cr.minigraph.clicks[0];
        cr.minigraph.sdev[0] = cr.minigraph.clicks[0];

        for (var i = 1; i < cr.minigraph.clicks.length; ++i)
        {
          var x = cr.minigraph.clicks[i];
          var delta = x - cr.minigraph.mean[i-1];
          var sweep = i + 1.0;
          cr.minigraph.mean[i] = cr.minigraph.mean[i-1] + (delta / sweep);
          sqsum += delta * delta * (i / sweep);

          cr.minigraph.sum[i] = cr.minigraph.mean[i] * (i + 1);
          cr.minigraph.variance[i] = sqsum / (i + 1);
          cr.minigraph.sdev[i] = Math.sqrt(cr.minigraph.variance[i]);
        }

//        /** Returns an object that contains the count, sum,
//         * minimum, median, maximum, mean, variance, and
//         * standard deviation of the series of numbers stored
//         * in the specified array.  This function changes the
//         * specified array by sorting its contents. */
//        function Stats(data) {
//            this.count = data.length;
//
//            /* Sort the data so that all seemingly
//             * insignificant values such as 0.000000003 will
//             * be at the beginning of the array and their
//             * contribution to the mean and variance of the
//             * data will not be lost because of the precision
//             * of the CPU. */
//            data.sort(ascend);
//
//            /* Since the data is now sorted, the minimum value
//             * is at the beginning of the array, the median
//             * value is in the middle of the array, and the
//             * maximum value is at the end of the array. */
//            this.min = data[0];
//            var middle = Math.floor(data.length / 2);
//            if ((data.length % 2) != 0) {
//                this.median = data[middle];
//            }
//            else {
//                this.median = (data[middle - 1] + data[middle]) / 2;
//            }
//            this.max = data[data.length - 1];
//
//            /* Compute the mean and variance using a
//             * numerically stable algorithm. */
//            var sqsum = 0;
//            this.mean = data[0];
//            for (var i = 1;  i < data.length;  ++i) {
//                var x = data[i];
//                var delta = x - this.mean;
//                var sweep = i + 1.0;
//                this.mean += delta / sweep;
//                sqsum += delta * delta * (i / sweep);
//            }
//            this.sum = this.mean * this.count;
//            this.variance = sqsum / this.count;
//            this.sdev = Math.sqrt(this.variance);
//        }
//
//        /** Returns a string that shows all the properties and
//         * their values for this Stats object. */
//        Stats.prototype.toString = function() {
//            var s = 'Stats';
//            for (var attr in this) {
//                if (typeof(this[attr]) != 'function') {
//                    s += '  ' + attr + ' ' + this[attr];
//                }
//            }
//            return s;
//        }
//
//
//        /** Compares two objects using
//         * built-in JavaScript operators. */
//        function ascend(a, b) {
//            if (a < b)
//                return -1;
//            else if (a > b)
//                return 1;
//            return 0;
//        }

      } /* END calculating stats for minigraph clicks */

      //console.info(JSON.stringify(tmp_referrals));
      console.groupEnd();
      
    } /* End of for(var i = 0; i < arg_referralListingsData.length; i++) {} loop  */

//    console.info('restructureData:\n\n','tmp_referrals',tmp_referrals);
    return tmp_referrals;
  }


  this.init = function ()
  {
    var storedReferralData = get('referrals',{},{ prefType:'JSON' });
    var referralData;

    var tmp_referralDataFromListingsPage = { mtx:'' };
    tmp_referralDataFromListingsPage = extractReferralDataFromListingsPage();
    
    if(-1 !== tmp_referralDataFromListingsPage)
    {
      // Restructure the data from the given mtx=[] format into the same structure as our stored info
      var tmp_referralsOnCurrentPage = restructureData(tmp_referralDataFromListingsPage.mtx);

      // Merge the newly fetched data with the stored data
      referralData = Object_merge(storedReferralData,tmp_referralsOnCurrentPage);

      set('referrals',referralData,{ prefType:'JSON' });
    }
  }
};

if(0 < location.href.indexOf('ss3=1') || 0 < location.href.indexOf('ss3=2')) {
  referralListings.init();
}




// if(false) allows for easy nesting of the code and allows it to be highlighted without worry about it being executed
if(false)
{
  /*FOLLOWING CODE IS FROM V4, NOT YET REWRITTEN / PORTED / WHATEVER*/
  function extractReferralListingsData()
  {
    // Iterate through mtx data and assign into the referrals object for easier
    // access later
    for (var z = 0; z < mtx.length; z++)
    {
      // NOTE: mtx.length = # of referrals shown on current page
      // (not necessarily the same as the [max] number of refs per page - eg, may only be 3 refs on page 2 if only 13 refs)

      var currentRefMTX = mtx[z];

      /*If the referral has not clicked yet, the referral has been inactive for as long as it has been owned
       Else the referral has been inactive since the date of its last click*/
      if (cr.lastClick.match(/No clicks yet/))
      {
        cr.inactiveDays = NumDaysSince(cr.referralSince, 'days', script.preferences.lastClick_fullerTimers, script.preferences.shortFormatTimer.lastClick, 'lastClick');
        cr.accurateLastClick = NumDaysSince(cr.referralSince, 'decimal', script.preferences.lastClick_fullerTimers, false, 'lastClick');
      }
      else
      {
        cr.inactiveDays = NumDaysSince(cr.lastClick, 'days', script.preferences.lastClick_fullerTimers, script.preferences.shortFormatTimer.lastClick, 'lastClick');
        cr.accurateLastClick = NumDaysSince(cr.lastClick, 'decimal', script.preferences.lastClick_fullerTimers, false, 'lastClick');
      }

      cr.ownedSince_summarised = NumDaysSince(cr.referralSince, 'mins', script.preferences.referralSince_fullerTimers, script.preferences.shortFormatTimer.referralSince, 'daysOwned');

    }
  }


  /*
  * Need to grab the data that is contained within p,
  * so will overwrite the function to make it add the data in p to the localStorage
  */
  // ORIGINAL - 30/12/2010
  //function ved1(o, p) {
  //console.info('ved1(o,p)',arguments);
  //  if (p == "0") {
  //    ved2(o, p);
  //  } else {
  //    ved_cht(o, p);
  //  }
  //}

  function ved1(o, p)
  {

    // Date strings for the last 90 days
    var dates_array = [];
    var i=0;
    do {
      var tmpDate = new Date();
      tmpDate.setDate(new Date().getDate() - i);
      dates_array[i] = tmpDate.getFullYear() + '/' + padZeros(tmpDate.getMonth()+1, 2) + '/' + padZeros(tmpDate.getDate(), 2);
      i++;
    }while(90 >= i);

    //console.info("ved1(o,p)", arguments);

    var tmpData = JSON.parse('{ "data":'+p.replace(/'/g,'"')+'}');

    var tmp_ID = tmpData.data[0];
    var tmp_Clicks = tmpData.data[1];
    var tmp_CreditedClicks = tmpData.data[2] || tmpData.data[1];

    var tmpObj_referral = {};
    var tmp_refID = tmp_ID.match(/[0-9]+/);

    tmpObj_referral[tmp_refID] = {
      ID: tmp_ID,
      clickData: {
        clicks: {},
        creditedClicks: {}
      }
    };

    for(var i = 0; i < tmp_Clicks.length; i++) {
      tmpObj_referral[tmp_refID].clickData.clicks[dates_array[tmp_Clicks.length - i - 1]] = tmp_Clicks[i];
      tmpObj_referral[tmp_refID].clickData.creditedClicks[dates_array[tmp_Clicks.length - i - 1]] = tmp_CreditedClicks[i];
    }

    // console.info(tmpObj_referral);
    var tmp_StoredRefData = JSON.parse(localStorage.getItem('referrals'));
    Object_merge(tmp_StoredRefData,tmpObj_referral);

    localStorage.setItem('referrals',JSON.stringify(tmp_StoredRefData));
    //console.info(JSON.parse(localStorage.getItem('referrals')));

    // </end> custom code
    // <begin> Original function:
    if (p == "0") {
      ved2(o, p);
    } else {
      ved_cht(o, p);
    }
  }

  // Insert the functions into page-land using the 'location hack'
  location.href = 'javascript:' + Object_merge + padZeros + ved1;


  /*

  function ved_tt(o, p) {
  console.info('ved_tt(o, p)',arguments);

    var pos = jQuery("#refch" + o).offset();
    var width = -284;
    jQuery("#chtdiv0").css({left: pos.left + width + ("px"), top: pos.top + "px"});
    d("chtdiv").innerHTML = "<table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" height=\"100%\"><tr><td align=\"center\"><img src=\"" + imgserver + "/imagens/n/wait_g.gif\" width=\"32\" height=\"32\"></td></tr></table>";
    d("chtdiv_t").innerHTML = "&nbsp;";
    jQuery("#chtdiv0").show();
    ved(o, p);
  }

  function mk_ch_ref(x, o, w0, w, O, L, m) {

  console.info('mk_ch_ref(x, o, w0, w, O, L, m)',arguments);

    if (m == 0) {
      n = [0, 0, 0];
    } else {
      n = m;
    }
    var s1 = 20, s2 = 20, s3 = 20, s4 = 50;
    if (L == 1) {
      s3 = 30;
    }
    var g = [s1, s2, s3, s4];
    var chart = new (Highcharts.Chart)({
      chart: {
        renderTo: x,
        defaultSeriesType: "line",
        margin: g,
        showAxes: 1,
        borderWidth: 0,
        shadow: 0
      },
      title: {
        text: ""
      },
      xAxis: {
        categories: o,
        labels: {
          enabled: 0
        },
        tickmarkPlacement: "on",
        gridLineWidth: 1,
        lineColor: "#fff",
        tickColor: "#fff",
        gridLineColor: "#ddd"
      },
      yAxis: {
        title: {
          enabled: 0,
          text: null
        },
        min: -0.1,
        endOnTick: 0,
        startOnTick: 0,
        tickPixelInterval: 20,
        plotLines: [
          {
            value: 0,
            width: 1,
            color: "#888"
          }
        ]
      },
      tooltip: {
        formatter: function () {
          return "<b>" + this.series.name + "</b><br/>" + this.x + ": " + w0 + this.y + " " + w;
        }
      },
      legend: {
        enabled: L,
        layout: "horizontal",
        symbolWidth: 5,
        style: {
          left: "auto",
          bottom: "5px",
          right: "5px",
          top: "auto",
          font: "normal 12px Verdana, sans-serif"
        }
      },
      plotOptions: {
        line: {
          lineWidth: 2,
          marker: {
            enabled: 1,
            symbol: "circle",
            radius: 3,
            states: {
              hover: {
                enabled: 1,
                radius: 5
              }
            }
          }
        }
      },
      series: O,
      credits: {
        enabled: 0
      }
    });

    chart.updatePosition();
  }

  */
}








// x = id of the container where the graph is to be inserted
// y = title displayed on the graph
// o = x axis categories
// w0 = prefix to x axis value in tooltip
// w = suffix to x axis value in tooltip
// O = array containing x series values and title above the graph
// L = legend enabled [true|false]
// m = y axis plot bands (3-value array or 0)
// mn = y-axis minimum
// p = x-axis plot bands (3-value array or 0)

//function mk_ch(x, y, o, w0, w, O, L, m, mn, p)

function mk_ch(x, y, o, w0, w, O, L, m, mn, p)
{
if (xuw != true) return '';
if (m == 0) n = [0, 0, 0];
else n = m;
if (p == 0) pn = [0, 0, 0, 0];
else pn = p;
var s1 = 30,
  s2 = 20,
  s3 = 20,
  s4 = 50;
if (L == 1) s1 = 20, s3 = 30;
if (y == '') s1 = 10;
if (mn == 'x') {
mn = -0.2;
maxout = 4
} else maxout = null;
var g = [s1, s2, s3, s4];
var chart = new Highcharts.Chart({
chart: {
  renderTo: x,
  defaultSeriesType: 'line',
  margin: g,
  showAxes: 1,
  borderColor: '#4572A7',
  backgroundColor: '#fff',
  borderWidth: 0,
  shadow: 0
},
title: {
  text: y,
  style: {
    margin: '10px 0 0 10px',
    textAlign: 'center',
    font: 'normal 12px Verdana, sans-serif'
  }
},
xAxis: {
  categories: o,
  labels: {
    enabled: 0
  },
  tickmarkPlacement: "on",
  gridLineWidth: 1,
  lineColor: '#fff',
  tickColor: '#fff',
  gridLineColor: (p == 0) ? '#eee' : '',
  plotBands: [{
    from: 0,
    to: pn[0],
    color: 'rgba(170,170,170,.3)'
  },
    {
      from: pn[0],
      to: pn[1],
      color: 'rgba(255,101,79,.3)'
    },
    {
      from: pn[1],
      to: pn[2],
      color: 'rgba(246,189,15,.3)'
    },
    {
      from: pn[2],
      to: pn[3],
      color: 'rgba(139,186,0,.3)'
    }]
},
yAxis: {
  title: {
    enabled: 0,
    text: null
  },
  min: mn,
  max: maxout,
  endOnTick: 0,
  startOnTick: 0,
  tickPixelInterval: 20,
  plotLines: [{
    value: 0,
    width: 1,
    color: '#888'
  }],
  plotBands: [{
    from: 0,
    to: n[0],
    color: 'rgba(255,101,79,.3)'
  },
    {
      from: n[0],
      to: n[1],
      color: 'rgba(246,189,15,.3)'
    },
    {
      from: n[1],
      to: n[2],
      color: 'rgba(139,186,0,.3)'
    }]
},
tooltip: {
  formatter: function () {
    return '<b>' + this.series.name + '</b><br/>' + this.x + ': ' + w0 + this.y + ' ' + w
  }
},
legend: {
  enabled: L,
  layout: 'horizontal',
  symbolWidth: 5,
  style: {
    left: 'auto',
    bottom: '5px',
    right: '5px',
    top: 'auto',
    font: 'normal 12px Verdana, sans-serif'
  }
},
plotOptions: {
  line: {
    lineWidth: 2,
    marker: {
      enabled: 1,
      symbol: 'circle',
      radius: 3,
      states: {
        hover: {
          enabled: 1,
          radius: 5
        }
      }
    }
  }
},
series: O,
credits: {
  enabled: 0
}
})
}

function mk_ch2(_containerID, _graphTitle, _x_axisCategories, _tooltipPrefix, _tooltipSuffix, _x_ValuesAndTitle, _legendEnabled, _y_axisPlotBands, _y_axisMin, _x_axisPlotBands) {
var pn;

if (0 === _y_axisPlotBands) {
n = [0, 0, 0];
} else {
n = _y_axisPlotBands;
}
if (0 === _x_axisPlotBands) {
pn = [0, 0, 0, 0];
} else {
pn = _x_axisPlotBands;
}
var s1 = 30,
  s2 = 20,
  s3 = 20,
  s4 = 50;
if (1 == _legendEnabled) {
s1 = 20, s3 = 30;
}
if ("" == _graphTitle) {
s1 = 10;
}
if ("x" == _y_axisMin) {
_y_axisMin = -0.2;
maxout = 4;
} else {
maxout = null;
}
var g = [s1, s2, s3, s4];


var chart = new(Highcharts.Chart)({
chart: {
  renderTo: _containerID,
  defaultSeriesType: "line",
  margin: g,
  showAxes: 1,
  borderColor: "#4572A7",
  backgroundColor: "#fff",
  borderWidth: 0,
  shadow: 0
},
title: {
  text: _graphTitle,
  style: {
    margin: "10px 0 0 10px",
    textAlign: "center",
    font: "normal 12px Verdana,sans-serif"
  }
},
xAxis: {
  categories: _x_axisCategories,
  labels: {
    enabled: 0
  },
  tickmarkPlacement: "on",
  gridLineWidth: 1,
  lineColor: "#fff",
  tickColor: "#fff",
  gridLineColor: 0 === _x_axisPlotBands ? "#eee" : "",
  plotBands: [{
    from: 0,
    to: pn[0],
    color: "rgba(170,170,170,.25)"
  },
    {
      from: pn[0],
      to: pn[1],
      color: "rgba(255,101,79,.25)"
    },
    {
      from: pn[1],
      to: pn[2],
      color: "rgba(246,189,15,.25)"
    },
    {
      from: pn[2],
      to: pn[3],
      color: "rgba(139,186,0,.25)"
    }]
},
yAxis: {
  title: {
    enabled: 0,
    text: null
  },
  min: _y_axisMin,
  max: maxout,
  endOnTick: 0,
  startOnTick: 0,
  tickPixelInterval: 20,
  plotLines: [{
    value: 0,
    width: 1,
    color: "#888"
  }],
  plotBands: [{
    from: 0,
    to: n[0],
    color: "rgba(255,101,79,.25)"
  },
    {
      from: n[0],
      to: n[1],
      color: "rgba(246,189,15,.25)"
    },
    {
      from: n[1],
      to: n[2],
      color: "rgba(139,186,0,.25)"
    }]
},
tooltip: {
  formatter: function () {
    return "<b>" + this.series.name + "</b><br/>" + this.x + ": " + _tooltipPrefix + this.y + " " + _tooltipSuffix;
  }
},
legend: {
  enabled: _legendEnabled,
  layout: "horizontal",
  symbolWidth: 5,
  style: {
    left: "auto",
    bottom: "5px",
    right: "5px",
    top: "auto",
    font: "normal 12px Verdana,sans-serif"
  }
},
plotOptions: {
  line: {
    lineWidth: 2,
    marker: {
      enabled: 1,
      symbol: "circle",
      radius: 3,
      states: {
        hover: {
          enabled: 1,
          radius: 5
        }
      }
    }
  }
},
series: _x_ValuesAndTitle,
credits: {
  enabled: 0
}
});
}


/*

mk_ch2("ch_cliques",
    "",
    ["2010/12/15", "2010/12/16", "2010/12/17", "2010/12/18", "2010/12/19", "2010/12/20", "2010/12/21", "2010/12/22", decodeURIComponent(escape("Yesterday")), decodeURIComponent(escape("Today"))],
    "foo",
    decodeURIComponent(escape("Clicks")),
    [
      {
        name: decodeURIComponent(escape("Local Time")),
        data: [8, 0, 9, 11, 0, 0, 0, 1, 2, 10]
      },
      {
        name: decodeURIComponent(escape("Server Time")),
        data: [8, 2, 7, 11, 0, 0, 0, 3, 4, 6]
      }
    ],
    1,
    [2,4,9],
    -1.1,
    [3]
  ); */

