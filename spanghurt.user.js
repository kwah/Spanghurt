// ==UserScript==
// @name           Spanghurt
// @namespace      http://kwah.org/
// @description    Spanghurt is the codename v5 of what was formerly the Neobux 2+ script for Neobux.. The script aims to plugin extra bits of info into Neobux to make your life easier when you're managing referrals or analysing your account.. Once this is a bit more fully formed there'll be more info at kwah.org but for now look out for Neobux 2+ (thread author:kwah) in the Neobux forums =]
// @include        http*://www.neobux.com/*
// @icon           http://img30.imageshack.us/img30/1708/neokwahavatar.png
// ==/UserScript==

//var tl8strings = {};
var tl8strings = {
  'EN': {
    " Days <small>(excl. Today)</small>" : " Days <small>(excl. Today)</small>",
    " Days <small>(incl. Today)</small>" : " Days <small>(incl. Today)</small>",
    " Days Ago and " : " Days Ago and ",
    " Days Ago" : " Days Ago",
    " [nb: the second value includes an estimate of your personal clicks]" : " [nb: the second value includes an estimate of your personal clicks]",
    ", based on the projected values" : ", based on the projected values",
    "15 days (The \"Base Rate\")" : "15 days (The \"Base Rate\")",
    "150 days (25% discount)" : "150 days (25% discount)",
    "240 days (30% discount)" : "240 days (30% discount)",
    "30 days (5% discount)" : "30 days (5% discount)",
    "60 days (10% discount)" : "60 days (10% discount)",
    "90 days (18% discount)" : "90 days (18% discount)",
    "Amanhã" : "Amanhã",
    "Aujourd'hui" : "Aujourd'hui",
    "AutoPay value" : "AutoPay value",
    "Autopay" : "Autopay",
    "Average Free Recycles: " : "Average Free Recycles: ",
    "Avg. #Recycles: " : "Avg. #Recycles: ",
    "Avg. Clicks: " : "Avg. Clicks: ",
    "Avg. Expense: " : "Avg. Expense: ",
    "Avg. Income: " : "Avg. Income: ",
    "Avg. Transfer: " : "Avg. Transfer: ",
    "Ayer" : "Ayer",
    "Close" : "Close",
    "Credited clicks" : "Credited clicks",
    "Demain" : "Demain",
    "Details about your expenses for " : "Details about your expenses for ",
    "Details about your income sources for " : "Details about your income sources for ",
    "Direct 'Real' Average" : "Direct 'Real' Average",
    "Direct Average" : "Direct Average",
    "Direct Clicks" : "Direct Clicks",
    "Direct" : "Direct",
    "Do you use autopay?" : "Do you use autopay?",
    "Eilen" : "Eilen",
    "Expenses" : "Expenses",
    "Extended:" : "Extended:",
    "Extension value" : "Extension value",
    "Extensions" : "Extensions",
    "Fixed (Micro):" : "Fixed (Micro):",
    "Fixed:" : "Fixed:",
    "For how long do you usually renew your referrals?" : "For how long do you usually renew your referrals?",
    "Gestern" : "Gestern",
    "Golden Pack" : "Golden Pack",
    "Gross Income" : "Gross Income",
    "Heute" : "Heute",
    "Hier" : "Hier",
    "Hoje" : "Hoje",
    "How many direct referrals do you have?" : "How many direct referrals do you have?",
    "How many rented referrals do you have?" : "How many rented referrals do you have?",
    "Hoy" : "Hoy",
    "Huomenna" : "Huomenna",
    "If you aren't sure about any of these, just click save and the script will automatically detect / correct these for you.</i></small>" : "If you aren't sure about any of these, just click save and the script will automatically detect / correct these for you.</i></small>",
    "Local Time" : "Local Time",
    "Mañana" : "Mañana",
    "Micro:" : "Micro:",
    "Mini:" : "Mini:",
    "Morgen" : "Morgen",
    "Net Income" : "Net Income",
    "Net" : "Net",
    "Ontem" : "Ontem",
    "Personal Clicks" : "Personal Clicks",
    "Projected Gross Income" : "Projected Gross Income",
    "Projected Income" : "Projected Income",
    "Recycle value" : "Recycle value",
    "Recycles" : "Recycles",
    "Referrals" : "Referrals",
    "Regular:" : "Regular:",
    "Rented 'Real' Average" : "Rented 'Real' Average",
    "Rented Average" : "Rented Average",
    "Rented Clicks" : "Rented Clicks",
    "Rented" : "Rented",
    "Save Settings" : "Save Settings",
    "Spanghurt Script Preferences" : "Spanghurt Script Preferences",
    "Spanghurt! Initial Setup" : "Spanghurt! Initial Setup",
    "Statistics Summary" : "Statistics Summary",
    "Sum: " : "Sum: ",
    "Summary Totals" : "Summary Totals",
    "Summary of Income / Projected Income / Expenses / Profit for " : "Summary of Income / Projected Income / Expenses / Profit for ",
    "The last " : "The last ",
    "To get the script up and running as quickly as possible you need to supply a few extra details about your account and how you manage it." : "To get the script up and running as quickly as possible you need to supply a few extra details about your account and how you manage it.",
    "Today Only" : "Today Only",
    "Today" : "Today",
    "Tomorrow" : "Tomorrow",
    "Total 'Real' Average" : "Total 'Real' Average",
    "Total Average" : "Total Average",
    "Total number of referrals" : "Total number of referrals",
    "Total" : "Total",
    "Totals between " : "Totals between ",
    "Transfer value" : "Transfer value",
    "Tänään" : "Tänään",
    "What is the time difference between your time and the server's time?" : "What is the time difference between your time and the server's time?",
    "Yesterday Only" : "Yesterday Only",
    "Yesterday" : "Yesterday",
    "Αύριο" : "Αύριο",
    "Σήμερα" : "Σήμερα",
    "Χθες" : "Χθες"
  }
};

var tmp_translationStringsNeeded = {};
//tmp_translationStringsNeeded = JSON.parse(localStorage.getItem('translationStringsNeeded')) || {};

var tl8_counter = 0;

function tl8(arg_originalString)
{
  arg_originalString = (arg_originalString);

//  console.info('start translation of ',arg_originalString);
  if('undefined' == typeof tl8strings[localStorage.getItem('neobuxLanguageCode')]){
    tl8strings[localStorage.getItem('neobuxLanguageCode')] = {};
  }
  if('undefined' == typeof tl8strings[localStorage.getItem('neobuxLanguageCode')][arg_originalString])
  {
    console.group();
//    console.info('Error!\n\nTranslation string for "',arg_originalString, '" not found');
    tmp_translationStringsNeeded[arg_originalString] = arg_originalString;
    localStorage.setItem('translationStringsNeeded',JSON.stringify(tmp_translationStringsNeeded));

    console.info('Record of the translation strings yet to be translated has been updated\n\n missing string = '+arg_originalString);

    tl8_counter++;
    if(tl8_counter < 0){
      console.info('arg_originalString = ', arg_originalString);
      console.info('tmp_translationStringsNeeded[arg_originalString] = ',tmp_translationStringsNeeded[arg_originalString]);
      console.info('JSON.stringify(tmp_translationStringsNeeded) = ',JSON.stringify(tmp_translationStringsNeeded));
      console.info(JSON.parse(localStorage.getItem('translationStringsNeeded')));
    }
    console.groupEnd();
    return (arg_originalString);
  }
  return tl8strings[localStorage.getItem('neobuxLanguageCode')][arg_originalString];
}


/**
 * Compatibility functions
 */
if('undefined' === typeof GM_log){
  function GM_log() {
    //console.info(arguments);
    //location.href = "javascript:void(console.info('JSON.parse('"+JSON.stringify(arguments)+"')'));";
  }
}

if('undefined' === typeof console){
  var console = {
    info: function() {
      location.href = "javascript:void(console.group());";
      for(var i=0; i<arguments.length; i++){
        location.href = "javascript:void(console.info('"+arguments[i]+"'));";
      }
      location.href = "javascript:void(console.groupEnd());";
    },
    group: function() { location.href = "javascript:void(console.group());"; },
    groupEnd: function() { location.href = "javascript:void(console.groupEnd());"; }
  };
  console.info('console not defined');
}

if('undefined' === typeof GM_addStyle){
  function GM_addStyle(arg_css) {
    var head = document.getElementsByTagName("head")[0];
    if (head) {
      var style = document.createElement("style");
      style.textContent = arg_css;
      style.type = "text/css";
      head.appendChild(style);
    }
    return style;
  }
}


/**
 * Logging functions
 */
function debugLog()
{
  if (2 >= arguments.length) {
    console.group();
  }
//  if('undefined' !== typeof GM_log) {
//    if (1 == arguments.length) {
//      GM_log(arguments[0]);
//    }else {
//      GM_log(arguments.join('\n----\n'));
//    }
//  }
  for (var i = 0; i < arguments.length; i++) {
    console.info(arguments[i]);
    if('undefined' !== typeof GM_log) { GM_log(arguments[i]); }
  }
  if (2 >= arguments.length) {
    console.groupEnd();
  }
}

function pageCodeDebugLog()
{
  if (2 >= arguments.length) {
    console.group();
  }
  for (var i = 0; i < arguments.length; i++) {
    console.info(arguments[i]);
  }
  if (2 >= arguments.length) {
    console.groupEnd();
  }
}

function errorLog()
{
  if (2 >= arguments.length) {
//    console.group();
  }
//  if('undefined' !== typeof GM_log) {
//    if (1 == arguments.length) {
//      GM_log(arguments[0]);
//    }else {
//      GM_log(arguments.join('\n----\n'));
//    }
//  }
  for (var i = 0; i < arguments.length; i++) {
    console.info(arguments[i]);
    if('undefined' !== typeof GM_log) { GM_log(arguments[i]); }
  }
  if (2 >= arguments.length) {
//    console.groupEnd();
  }
}


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

/**
 * Creates an alert-style popup on screen which fades out the rest of the page, creating a page-modal type effect
 * Usage:
 *  var importantMessage = new ModalDialog(string 'idOfDialog', string 'the innerHTML of the dialog');
 * followed by:
 *  importantMessage.show();
 * and
 *  importantMessage.hide();
 */
function ModalDialog(arg_dialogId) {
  this.create = function (arg_Css, arg_innerHTML)
  {
    var tmp_cssText;
    var shadowBackdrop;

    tmp_cssText = arg_Css;
    if(null === typeof arg_Css) {
      tmp_cssText = 'background-color: white; margin: 8em auto; padding: 2em; width: 30em;';
    }

    shadowBackdrop = document.getElementById('shadowBackdrop_'+arg_dialogId);
    if(shadowBackdrop){
      shadowBackdrop.parentNode.removeChild(shadowBackdrop);
    }

    GM_addStyle('#shadowBackdrop_'+arg_dialogId+' { background-color: black; height: 100%; left: 0; opacity: 0.3; position: fixed; top: 0; width: 100%; }');

    shadowBackdrop = document.createElement('div');
    shadowBackdrop.id = 'shadowBackdrop_'+arg_dialogId;
    shadowBackdrop.setAttribute('class',"overlay");

    shadowBackdrop.innerHTML = '';

    shadowBackdrop.style.display = 'none';

    document.body.appendChild(shadowBackdrop);


    GM_addStyle('#modalDialogWrapper_'+arg_dialogId+' { height: 100%; left: 0; position: absolute; top: 0; width: 100%; }');
    GM_addStyle('#modalDialogElement_'+arg_dialogId+' { '+tmp_cssText+' }');

    var modalDialogWrapper = document.getElementById('modalDialogWrapper_'+arg_dialogId);
    if(modalDialogWrapper) {
      modalDialogWrapper.parentNode.removeChild(modalDialogWrapper);
    }

    modalDialogWrapper = document.createElement('div');
    modalDialogWrapper.id = 'modalDialogWrapper_'+arg_dialogId;
    modalDialogWrapper.style.display = 'none';

    var modalDialogElement = document.createElement('div');
    modalDialogElement.innerHTML = arg_innerHTML;
    modalDialogElement.id = 'modalDialogElement_'+arg_dialogId;

    modalDialogWrapper.appendChild(modalDialogElement);
    document.body.appendChild(modalDialogWrapper);


    this.dialogElement = modalDialogWrapper;

    return modalDialogWrapper;
  };
  this.show = function()
  {
    document.getElementById('shadowBackdrop_'+arg_dialogId).style.display = '';
    document.getElementById('modalDialogWrapper_'+arg_dialogId).style.display = '';
  };
  this.hide = function()
  {
    document.getElementById('shadowBackdrop_'+arg_dialogId).style.display = 'none';
    document.getElementById('modalDialogWrapper_'+arg_dialogId).style.display = 'none';
  };
  return this;
}



/**
 * Initial Setup of the script
 */

// Depending upon the storage method used, a true value may be stored as boolean or string type so shall test for both
if(("true" !== localStorage.getItem('setupComplete') && true !== localStorage.getItem('setupComplete')))
{
  var shadowBackdrop;
  var initialSetupDiv;

  var initialSetupDialog = new ModalDialog('initialSetup');
  initialSetupDialog.create(
      'background-color: white; margin: 8em auto; padding: 2em; width: 30em;',
      '' +
      '<strong>'+tl8('Spanghurt! Initial Setup')+'</strong><br>' +
      '<br>' +
      '<hr>' +
      tl8('To get the script up and running as quickly as possible you need to supply a few extra details about your account and how you manage it.')+"<br>" +
      '<hr>' +
      '<br>' +
      ''+tl8('How many direct referrals do you have?')+' <input id="initialSetup_directReferrals" size="4" value="0" type="text" /><br>' +
      ''+tl8('How many rented referrals do you have?')+' <input id="initialSetup_rentedReferrals" size="4" value="0" type="text" /><br>' +
      ''+tl8('Do you use autopay?')+' <input id="initialSetup_autopay" type="checkbox" /><br>' +
      '<br>' +
      ''+tl8('For how long do you usually renew your referrals?')+' <select id="initialSetup_normalRenewalLength">' +
      '<option value="15">'+tl8('15 days (The "Base Rate")')+'</option>' +
      '<option value="30" selected="selected">'+tl8('30 days (5% discount)')+'</option>' +
      '<option value="60">'+tl8('60 days (10% discount)')+'</option>' +
      '<option value="90">'+tl8('90 days (18% discount)')+'</option>' +
      '<option value="150">'+tl8('150 days (25% discount)')+'</option>' +
      '<option value="240">'+tl8('240 days (30% discount)')+'</option>' +
      '</select> <br>' +
      '<br>' +
      ''+tl8('What is the time difference between your time and the server\'s time?')+' <input id="initialSetup_timeDifference" size="4" value="" type="text" /><br>' +
      '<br>' +
      '<small><i>'+tl8("If you aren't sure about any of these, just click save and the script will automatically detect / correct these for you.</i></small>")+
      '<br>' +
      '<input id="initialSetup_save" value="'+tl8('Save Settings')+'" type="button"/>' +
      '<input id="initialSetup_close" value="'+tl8('Close')+'" type="button"/>' +
      ''
      );


  initialSetupDialog.show();


  document.getElementById('initialSetup_save').addEventListener('click',function() {
    var tmp_directRefs = document.getElementById('initialSetup_directReferrals').value.match(/([0-9]+)/) || [,0];
    var tmp_rentedRefs = document.getElementById('initialSetup_rentedReferrals').value.match(/([0-9]+)/) || [,0];
    var tmp_autopay = document.getElementById('initialSetup_autopay').checked;
    var tmp_renewalLength = document.getElementById('initialSetup_normalRenewalLength').value;
    var tmp_timeDifference = document.getElementById('initialSetup_timeDifference').value.match(/([+-]?[0-9]+)/) || [,0];

    if(0 <= tmp_directRefs[1] &&
            0 <= tmp_directRefs[1] &&
            0 <= tmp_renewalLength &&
            (0 <= tmp_timeDifference[1] || 0 >= tmp_timeDifference[1])
        )
    {

      if(confirm(tl8('Please check that this is what you have entered then click okay to save it or cancel to retry:')+'\n\n' +
          tl8('Direct Referrals: ')   + tmp_directRefs[1] + '\n' +
          tl8('Rented Referrals ')    + tmp_directRefs[1]+'\n' +
          tl8('Autopay On: ')         + tmp_autopay+'\n' +
          tl8('Length of Renewals: ') + tmp_renewalLength+'\n' +
          tl8('Time Difference: ')    + tmp_timeDifference[1])
          )
      {

        localStorage.setItem('numberOfDirectReferrals', tmp_directRefs[1]);
        localStorage.setItem('numberOfRentedReferrals', tmp_rentedRefs[1]);
        localStorage.setItem('autopayOn', tmp_autopay);
        localStorage.setItem('renewalsLength', tmp_renewalLength);
        localStorage.setItem('serverTimeOffset', tmp_timeDifference[1]);

        localStorage.setItem('setupComplete', true);


        alert(tl8('Settings saved! The script will run on the next Neobux page that you load.'));

        initialSetupDialog.hide();

      }
    }
    else{
      alert(tl8('There was an error with what you have entered. Please correct what you have entered and try again:')+'\n\n' +
          tl8('Direct Referrals: ')   + tmp_directRefs[1] + '\n' +
          tl8('Rented Referrals ')    + tmp_directRefs[1]+'\n' +
          tl8('Autopay On: ')         + tmp_autopay+'\n' +
          tl8('Length of Renewals: ') + tmp_renewalLength+'\n' +
          tl8('Time Difference: ')    + tmp_timeDifference[1]);
    }

  },false);

  document.getElementById('initialSetup_close').addEventListener('click',function() {
    initialSetupDialog.hide();
  },false);


  //stop the remainder of the script
  //return;
}



var dateToday = new Date();
var dateYesterday = new Date();
dateYesterday.setDate(dateToday.getDate() - 1);

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


var rentalBands = [];
var tmp_baseBandPrice = 0.20; //The lowest price band starts at $0.20
var AUTOPAY_DISCOUNT = 0.85; // 15% discount when paying via autopay

for(var i=0; i < 8; i++)
{
  // Minimum number of referrals for this price band to apply:
  // Maximum number of referrals for this price band to apply:
  // Base cost of initial purchase of a single referral for 30days:
  // Cost of autopay:
  rentalBands[i] =
  {
    minRefs: ( (i*250) + 1 ), //                1,      251,    501,    751,    1001,   1251,   1501,   1751
    maxRefs: ( (i+1) * 250 ), //                250,    500,    750,    1000,   1250,   1500,   1750,   2000
    costOfRent: tmp_baseBandPrice + (i*0.01), //$0.20,  $0.21,  $0.22,  $0.23,  $0.24,  $0.25,  $0.26,  $0.27
    costOfAutopay: Math.round(((tmp_baseBandPrice + (i*0.01)) / 30) * AUTOPAY_DISCOUNT * 10000) / 10000 //NB: rounded to 4 decimal places
  };
}
//The first band includes people who have zero refs (eg, cost to rent)
rentalBands[0].minRefs = 0;

//The final band has no upper limit on the max number of refs
rentalBands[7].maxRefs = Infinity;

var bulkRenewalDiscounts = {
  15: 1.00, // 0% discount
  30: 0.95, // 5% discount
  60: 0.90, // 10% discount
  90: 0.82, // 18% discount
  150: 0.75, // 25% discount
  240: 0.70 // 30% discount
};

var tmp_NeobuxAccountTypeDetails = {
  'Standard': { 'minDaysForAutopay': 20, 'recycleCost': 0.07, 'goldenCost': 0,  'goldenPackCost': 0,    'rentalBandAdjuster': 0},
  'Golden':   { 'minDaysForAutopay': 20, 'recycleCost': 0.07, 'goldenCost': 0,  'goldenPackCost': 0,    'rentalBandAdjuster': 0},
  'Emerald':  { 'minDaysForAutopay': 20, 'recycleCost': 0.06, 'goldenCost': 90, 'goldenPackCost': 200,  'rentalBandAdjuster': -1},
  'Sapphire': { 'minDaysForAutopay': 18, 'recycleCost': 0.07, 'goldenCost': 90, 'goldenPackCost': 200,  'rentalBandAdjuster': 0},
  'Platinum': { 'minDaysForAutopay': 20, 'recycleCost': 0.06, 'goldenCost': 90, 'goldenPackCost': 400,  'rentalBandAdjuster': -1},
  'Diamond':  { 'minDaysForAutopay': 14, 'recycleCost': 0.07, 'goldenCost': 90, 'goldenPackCost': 400,  'rentalBandAdjuster': 0},
  'Ultimate': { 'minDaysForAutopay': 10, 'recycleCost': 0.04, 'goldenCost': 90, 'goldenPackCost': 800,  'rentalBandAdjuster': -3},
  'Pioneer':  { 'minDaysForAutopay': 20, 'recycleCost': 0.07, 'goldenCost': 0,  'goldenPackCost': 0,    'rentalBandAdjuster': 0}
};

/*
for(var accountType in tmp_NeobuxAccountTypeDetails){
  if(tmp_NeobuxAccountTypeDetails.hasOwnProperty(accountType))
  {
    tmp_NeobuxAccountTypeDetails[accountType].referralPrices = {
      initialRent: 0,
          autopay: 0
    };

    for(var renewalLength in bulkRenewalDiscounts){
      if(bulkRenewalDiscounts.hasOwnProperty(renewalLength)){
        tmp_NeobuxAccountTypeDetails[accountType].referralPrices[renewalLength] = tmp_NeobuxAccountTypeDetails[accountType].referralPrices.initialRent * renewalLength * bulkRenewalDiscounts[renewalLength];
      }
    }
  }
}
*/

console.info(tmp_NeobuxAccountTypeDetails);

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
    'Golden':   90,
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
      {'minRefs': 0, 'cost': 0.0060},
      {'minRefs': 501, 'cost': 0.0065},
      {'minRefs': 751, 'cost': 0.0070},
      {'minRefs': 1001, 'cost': 0.0075},
      {'minRefs': 1501, 'cost': 0.0080}
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
    'Ultimate': [
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

var friendlyNameLookup =
{
  'ch_cliques': 'personalClicks',
  'ch_cr': 'rentedClicks',
  'ch_cd': 'directClicks',
  'ch_recycle': 'recycleCost',
  'ch_extensions': 'renewalCost',
  'ch_autopay': 'autopayCost',
  'ch_trrb': 'transfersToRentalBalance',

  'ch_earnings': 'referralEarnings',
  'ch_profit': 'referralProfit',
  'ch_trar': 'automaticRecycles',
  'ch_trpb': 'transferToPackBalance',

  'ch_ext_schedule8': 'extensions_631To720',
  'ch_ext_schedule7': 'extensions_541To630',
  'ch_ext_schedule6': 'extensions_451To540',
  'ch_ext_schedule5': 'extensions_361To450',
  'ch_ext_schedule4': 'extensions_271To360',
  'ch_ext_schedule3': 'extensions_181To270',
  'ch_ext_schedule2': 'extensions_91To180',
  'ch_ext_schedule1': 'extensions_0To90',
  'ch_ext_schedule': 'extensions'
};

var graphLengthLookup =
{
  'ch_cliques': 10,
  'ch_cr': 10,
  'ch_cd': 10,
  'ch_recycle': 15,
  'ch_extensions': 15,
  'ch_autopay': 15,
  'ch_trrb': 15,

  'ch_earnings': 15,
  'ch_profit': 15,
  'ch_trar': 15,
  'ch_trpb': 15,

  'ch_ext_schedule8': 90,
  'ch_ext_schedule7': 90,
  'ch_ext_schedule6': 90,
  'ch_ext_schedule5': 90,
  'ch_ext_schedule4': 90,
  'ch_ext_schedule3': 90,
  'ch_ext_schedule2': 90,
  'ch_ext_schedule1': 90
};




var clickValues = {
  Standard: {
    Extended: {
      value: 0.015,
      commission: {
        rented: 0.01,
        direct: 0.01
      }
    },
    Standard: {
      value: 0.01,
      commission: {
        rented: 0.005,
        direct: 0.005
      }
    },
    Mini: {
      value: 0.005,
      commission: {
        rented: 0,
        direct: 0
      }
    },
    Micro: {
      value: 0.001,
      commission: {
        rented: 0,
        direct: 0
      }
    },
    Fixed: {
      value: 0.001,
      commission: {
        rented: 0.005,
        direct: 0.0005
      }
    }
  },
  Golden: {
    Extended: {
      value: 0.02,
      commission: {
        rented: 0.02,
        direct: 0.02
      }
    },
    Standard: {
      value: 0.01,
      commission: {
        rented: 0.01,
        direct: 0.01
      }
    },
    Micro: {
      value: 0.001,
      commission: {
        rented: 0,
        direct: 0
      }
    },
    Fixed: {
      value: 0.01,
      commission: {
        rented: 0.01,
        direct: 0.005
      }
    }
  }
};

// Fixed Micro ads are the same value and commission for standard AND golden members
clickValues['Standard'].FixedMicro = {
  value: 0.001,
  commission: {
    rented: 0, //Note that if the ad is purchased for 90days or more, will get comissions - same as fixed
    direct: 0 //Note that if the ad is purchased for 90days or more, will get comissions - same as fixed
  }
};
clickValues['Golden'].FixedMicro = {
  value: 0.001,
  commission: {
    rented: 0, //Note that if the ad is purchased for 90days or more, will get comissions - same as fixed
    direct: 0 //Note that if the ad is purchased for 90days or more, will get comissions - same as fixed
  }
};

// Mini ads are the same value and commission for standard AND golden members
clickValues['Standard'].Mini = {
  value: 0.005,
  commission: {
    rented: 0,
    direct: 0
  }
};
clickValues['Golden'].Mini = {
  value: 0.005,
  commission: {
    rented: 0,
    direct: 0
  }
};

//Initially set all golden packs to be the same as the Golden values
clickValues['Emerald'] = {};
clickValues['Sapphire'] = {};
clickValues['Platinum'] = {};
clickValues['Diamond'] = {};
clickValues['Ultimate'] = {};

Object_merge(clickValues['Emerald'],clickValues['Golden']);
Object_merge(clickValues['Sapphire'],clickValues['Golden']);
Object_merge(clickValues['Platinum'],clickValues['Golden']);
Object_merge(clickValues['Diamond'],clickValues['Golden']);
Object_merge(clickValues['Ultimate'],clickValues['Golden']);



//Now to do the golden-pack-specific settings::
/*Standard Ads click value*/
clickValues['Emerald'].Standard.value   = 0.012;
clickValues['Sapphire'].Standard.value  = 0.012;
clickValues['Platinum'].Standard.value  = 0.015;
clickValues['Diamond'].Standard.value   = 0.015;
clickValues['Ultimate'].Standard.value  = 0.02;


/*Fixed Ads click value - same as standard ads for golden & golden-pack members*/
clickValues['Emerald'].Fixed.value  = clickValues['Emerald'].Standard.value;
clickValues['Sapphire'].Fixed.value = clickValues['Sapphire'].Standard.value;
clickValues['Platinum'].Fixed.value = clickValues['Platinum'].Standard.value;
clickValues['Diamond'].Fixed.value  = clickValues['Diamond'].Standard.value;
clickValues['Ultimate'].Fixed.value = clickValues['Ultimate'].Standard.value;

/*Fixed Ads direct-click value - same as standard ads for golden & golden-pack members
* Except Golden members*/
clickValues['Standard'].Fixed.commission.direct = 0.0005;
clickValues['Golden'].Fixed.commission.direct   = 0.005;
clickValues['Emerald'].Fixed.commission.direct  = clickValues['Emerald'].Standard.commission.direct;
clickValues['Sapphire'].Fixed.commission.direct = clickValues['Sapphire'].Standard.commission.direct;
clickValues['Platinum'].Fixed.commission.direct = clickValues['Platinum'].Standard.commission.direct;
clickValues['Diamond'].Fixed.commission.direct  = clickValues['Diamond'].Standard.commission.direct;
clickValues['Ultimate'].Fixed.commission.direct = clickValues['Ultimate'].Standard.commission.direct;



/**
 * :Handles stored preferences (eg, referral listings column preferences) and locally cached values (eg, username / number of referrals)
 * @param arg_prefName The name of the stored value that is stored to / fetched from.
 * @param arg_defaultValue The value to return if the value isn't found in storage.
 * @param arg_options Indicates the data type that the value will be stored as (where possible) / the data type that the stored value will be returned as. Useful for indicating JSON data. Defaults to string.
 **/

function getPref(arg_prefName, arg_defaultValue, arg_options)
{
  if ("object" === typeof arg_options) {
    //arg_options = arg_options;
  }
  else {
    errorLog('ERROR: function: getPref()','arg_options is not an object!!','arguments:',arguments);
    arg_options = {};
  }

  var returnType = arg_options.prefType || typeof arg_defaultValue;

  var tmp = localStorage.getItem(arg_prefName);
  if(!tmp) {
    errorLog('Error retrieving value from localStorage, using supplied default value.',arguments);
    tmp = setPref(arg_prefName, arg_defaultValue, arg_options);
  }

  switch (returnType)
  {
    case 'float':
      return parseFloat(tmp);
    case 'integer':
      return parseInt(tmp);
    case 'string':
      return tmp.toString();
    case 'boolean':
        if('true' === tmp.toString()) { return true; }
        if('false' === tmp.toString()) { return false; }
      return !!tmp;
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

function setPref(arg_prefName, arg_defaultValue, arg_options)
{
  if ("object" === typeof arg_options) {
    //arg_options = arg_options;
  }
  else {
    errorLog('ERROR: function: setPref()','arg_options is not an object!!','arguments:',arguments);
    arg_options = {};
  }

  arg_options.prefType = arg_options.prefType || typeof arg_defaultValue;

  var tmp_value;
  switch (arg_options.prefType)
  {
    case 'float':
      tmp_value = parseFloat(arg_defaultValue);
      break;
    case 'integer':
      tmp_value = parseInt(arg_defaultValue);
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


  localStorage.setItem(arg_prefName, tmp_value);


  /*Having issues with the localStorage being wiped occasionally [nb: caused by a privacy addon] so storing to GM_log too as a backup*/
  // Also having issues with floats not being able to be stored :S
  if("undefined" !== typeof GM_setValue) {
    try
    {
      GM_setValue(arg_prefName, tmp_value);
    } catch(e) {
      GM_setValue(arg_prefName, tmp_value.toString());
    }
  }
  return getPref(arg_prefName, tmp_value, arg_options);
}



function testAgainstUrlParameters(arg_urlVarTests)
{
  var tmpUrlVars = document.location.search.substring(1).split('&');
  for(var tmpUrlVarTest in arg_urlVarTests) {
    if(!(0 <= tmpUrlVars.indexOf(arg_urlVarTests[tmpUrlVarTest]))) {
      return false;
    }
  }

  // console.info('Found the following within the URL:',arg_urlVarTests);
  return true;
}
function testAgainstUrlPath(arg_urlTests)
{
  var tmpUrlVars = document.location.pathname.substring(1).split('/');

  for(var tmpUrlVarTest in arg_urlTests) {
    if(!(0 <= tmpUrlVars.indexOf(arg_urlTests[tmpUrlVarTest]))) {
      return false;
    }
  }

//  console.info('Found the following within the URL:',arg_urlTests);
  return true;
}

var currentPage = new function()
{
  function detectLanguageCode()
  {
    var tmp_langCodes = {
      'f-us': 'EN', // English
      'f-pt': 'PT', // Portuguese
      'f-es': 'ES', // Spanish
      'f-gr': 'GR', // Greece
      'f-fi': 'FI', // Finnish
      'f-se': 'SE', //
      'f-de': 'DE', //
      'f-fr': 'FR'  // French
    };

    for(var tmp_langCode in tmp_langCodes){
      if(tmp_langCodes.hasOwnProperty(tmp_langCode)){
        if(document.querySelectorAll('.band2')[0].children[0].children[0].getAttribute('class').match(tmp_langCode))
        {
//          console.info("document.querySelectorAll('.band2')[0].children[0].children[0].getAttribute('class') = " + document.querySelectorAll('.band2')[0].children[0].children[0].getAttribute('class'));
//          console.info('tmp_langCode = '+tmp_langCode);
          setPref('neobuxLanguageCode', tmp_langCodes[tmp_langCode], {prefType: 'string'});
        }
      }
    }

    //Return the stored language code, defaulting to EN;
    return getPref('neobuxLanguageCode', 'EN', {prefType: 'string'});
  };

  this.languageCode = detectLanguageCode();

  function detectPageCode ()
  {
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
      if(testAgainstUrlPath(['rs'])) { return 'referralStatistics'; }

      if(testAgainstUrlPath(['rl']))
      {
        if(testAgainstUrlParameters(['ss3=1']))
        {
          //WARNING: TODO: NOT TESTED LINKS / ARROW DIRECTIONS FOR DIRECT REFS PAGES

          if(testAgainstUrlParameters(['ss2=1']))
          {
            if(testAgainstUrlParameters(['ss1=2'])) { return 'referralListings_Direct_name_Desc'; }
            if(testAgainstUrlParameters(['ss1=1'])) { return 'referralListings_Direct_refSince_Asc'; }
            if(testAgainstUrlParameters(['ss1=5'])) { return 'referralListings_Direct_nextPayment_Desc'; }
            if(testAgainstUrlParameters(['ss1=4'])) { return 'referralListings_Direct_lastClick_Asc'; }
            if(testAgainstUrlParameters(['ss1=3'])) { return 'referralListings_Direct_totalClicks_Desc'; }
            if(testAgainstUrlParameters(['ss1=7'])) { return 'referralListings_Direct_clickAverage_Desc'; }
            return 'referralListings_Direct_UNKNOWNSORT';
          }

          if(testAgainstUrlParameters(['ss2=2']))
          {
            if(testAgainstUrlParameters(['ss1=2'])) { return 'referralListings_Direct_name_Asc'; }
            if(testAgainstUrlParameters(['ss1=1'])) { return 'referralListings_Direct_refSince_Desc'; }
            if(testAgainstUrlParameters(['ss1=5'])) { return 'referralListings_Direct_nextPayment_Asc'; }
            if(testAgainstUrlParameters(['ss1=4'])) { return 'referralListings_Direct_lastClick_Desc'; }
            if(testAgainstUrlParameters(['ss1=3'])) { return 'referralListings_Direct_totalClicks_Asc'; }
            if(testAgainstUrlParameters(['ss1=7'])) { return 'referralListings_Direct_clickAverage_Asc'; }
            return 'referralListings_Direct_UNKNOWNSORT';
          }

          return 'referralListings_Direct_DEFAULTSORT';
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


    if(testAgainstUrlPath(['m','v'])) { return 'viewAdvertisementsPage'; }
    if(testAgainstUrlPath(['v']) && testAgainstUrlParameters(['a=l'])) { return 'viewingAdvertisement'; }
    if(testAgainstUrlParameters(['u=p'])) { return 'neobuxFrontPage'; }



    return 'unrecognisedUrlParameters';
  }

  this.pageCode = detectPageCode();

};

console.info('checkpoint #1');
console.info('currentPage.pageCode = ',currentPage.pageCode);
console.info('checkpoint #2');

function extractNumberOfRefs()
{
  // If currently viewing the rented/direct ref listings, update the stored values accordingly
  if (currentPage.pageCode.match(/referralListings/))
  {
    // Deduce which page is being viewed
    var _pageRefType = null;
    if(0 <= currentPage.pageCode.split('_').indexOf('Rented')) {
      _pageRefType = 'Rented';
    } else {
      _pageRefType = 'Direct';
    }
// console.info('_pageRefType = ',_pageRefType);
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
      var zeroRefsString = docEvaluate(zeroRefsXpath[currentPage.languageCode]);

      // If evidence of zero refs is found, set the number of refs to zero (0)
      tmp_numberOfRefs = (1 == zeroRefsString.snapshotLength) ? 0 : false;
    }

    // Now store the number of detected referrals if numberOfRefs is not false
//    console.info('tmp_numberOfRefs = ',tmp_numberOfRefs);
    if(0 <= tmp_numberOfRefs){
      setPref('numberOf' + _pageRefType + 'Referrals', tmp_numberOfRefs, { prefType: 'text' });
    }
    return tmp_numberOfRefs;
  }
  else if(currentPage.pageCode.match(/accSummary/))
  {
//    TODO: Extract number of refs from main page
    var tmp_elmAccountInfo = docEvaluate('//td[@class="t_preto_r"]/parent::tr/parent::tbody/descendant::td');

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
      [/received:/i, 'You have cashed out {value} from Neobux'],
      [/direct purchases:/i, 'You have directly transferred {value} from your account balance back into Neobux'],
      [/exposure clicks:/i, 'You have {value} exposure clicks available for you to show ads with']
    ];

    for(var i=0; i<tmp_elmAccountInfo.snapshotLength; i++)
    {
      tmp_currentTd = tmp_elmAccountInfo.snapshotItem(i);
      tmp_nextTd = tmp_elmAccountInfo.snapshotItem(i+1);

      for(var j=0; j<tmp_lookupArray.length; j++){
        if(tmp_currentTd.textContent.match(tmp_lookupArray[j][0])) {
//          console.info(tmp_lookupArray[j][1].replace(/{value}/, displayTextContent(tmp_nextTd)));
        }
      }
    }
  }

}

console.info('checkpoint #3');
extractNumberOfRefs();
console.info('checkpoint #4');

/**
 * :Object used for holding information about the account that the current user of the script is logged into
 *
 **/
var currentUser = new function()
{
  function getPerAutoPayFee(arg_accountType, arg_numberOfRentedReferrals)
  {
    var defaultAutopayValues = Neobux.accountDefaults.autopayValues[arg_accountType.verbose];

    var totalRentedRefs = (0 <= arg_numberOfRentedReferrals) ? arg_numberOfRentedReferrals : 0;
    var perAutoPayCost = 0;

    var j = defaultAutopayValues.length - 1;
    var currentTest;
    do
    {
      currentTest = defaultAutopayValues[j];

//      console.info('currentTest.minRefs = '+currentTest.minRefs+'\n'+
//          'totalRentedRefs = '+totalRentedRefs+'\n'+
//          'currentTest.cost = '+currentTest.cost);

      if(parseInt(currentTest.minRefs, 10) < parseInt(totalRentedRefs, 10)) {
        perAutoPayCost = currentTest.cost;
      }

    } while((parseInt(defaultAutopayValues[j--].minRefs, 10) > parseInt(totalRentedRefs, 10)));

    return perAutoPayCost;
  }


  if(document.getElementById('t_conta')) {
    this.username = setPref('username', document.getElementById('t_conta').textContent, {prefType:'string'});
  } else {
    this.username = getPref('username', 'unknownUsername', {prefType:'string'});
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

          setPref('accountType', tmp_accountType, {prefType:'JSON'});

        }
      }
    }

    // If the accountType info was on the page, the stored copy will have been updated
    // (else we'll just be grabbing the cached version)
    tmp_accountType = getPref('accountType',{numerical:0, verbose:'unknown'},{prefType: 'JSON'});

    this.numerical = tmp_accountType.numerical;
    this.verbose = tmp_accountType.verbose;

    this.showUltimateFeatures = (6 == tmp_accountType.numerical);
    this.isUltimate = 6 === tmp_accountType.numerical;
    this.isStandard = 0 === tmp_accountType.numerical;

    this.cost = getPref('accountTypeCost',Neobux.accountDefaults.goldenPackCost[this.verbose], {prefType:'float'});

    return this;
  };

  this.ownClickValue = clickValues[this.accountType.verbose].Fixed.value;
  this.rentedReferralClickValue = clickValues[this.accountType.verbose].Fixed.commission.rented;
  this.directReferralClickValue = clickValues[this.accountType.verbose].Fixed.commission.direct;

  this.numberOfRefs = {
    Rented: getPref('numberOfRentedReferrals',defaultSettings.numberOfRefs['Rented'], { prefType: 'integer' }),
    Direct: getPref('numberOfDirectReferrals',defaultSettings.numberOfRefs['Direct'], { prefType: 'integer' })
  };

  this.recycleFee = getPref('recycleFee',Neobux.accountDefaults['recycleCost'][this.accountType.verbose], { prefType: 'float' });

  this.autopayFee = getPerAutoPayFee(this.accountType,this.numberOfRefs.Rented);

  this.preferences = new function ()
  {
//    this.columnPrefixes = getPref(tmp_prefs[i],defaultSettings['columnPrefixes'], { prefType: 'JSON' });
//    this.numeriseDate = getPref(tmp_prefs[i],defaultSettings['numeriseDate'], { prefType: 'JSON' });
//    this.shortFormatTimer = getPref(tmp_prefs[i],defaultSettings['shortFormatTimer'], { prefType: 'JSON' });
//    this.showColumn = getPref(tmp_prefs[i],defaultSettings['showColumn'], { prefType: 'JSON' });
//    this.shrinkColumnContents = getPref(tmp_prefs[i],defaultSettings['shrinkColumnContents'], { prefType: 'JSON' });
//    this.timePeriods = getPref(tmp_prefs[i],defaultSettings['timePeriods'], { prefType: 'JSON' });

    //JSON vars
    var tmp_prefs = ['columnPrefixes','numeriseDates','shortFormatTimer','showColumn','shrinkColumnContents','timePeriods'];
    for(var i=0; i<tmp_prefs.length; i++){
      this[tmp_prefs[i]] = getPref(tmp_prefs[i],defaultSettings[tmp_prefs[i]], { prefType: 'JSON' });
    }

    //Boolean vars
    this['flag_textify'] = getPref('flag_textify',true, { prefType: 'boolean' });
  };
};

console.info('checkpoint #5');
debugLog('currentUser', currentUser);
console.info('checkpoint #6');

var chartData = new function ()
{
  this.dataGrabbedFromCurrentPage = function()
  {
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


    var xpathResults_graphData = docEvaluate('//script[contains(text(),"eval")]');
    //NB: If testing in Firebug, xpathResults_graphData.snapshotLength increases the snapshotLength

    for(var i=0; i<xpathResults_graphData.snapshotLength; i++){
      //console.info(xpathResults_graphData.snapshotItem(i).innerHTML.match(/eval/g).length);
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

//        console.info(decodedEvalString);

      eval(decodedEvalString.replace(');', ']').replace('mk_ch(', 'graphData[' + graphNumber + '] = ['));
    }

    return graphData;
  };

  this.getStoredGraphData = function()
  {
    return getPref('graphData', {}, {prefType: 'JSON'});
  };


  this.reformatGraphData = function()
  {
    var tmp_graphData = new Array();
    var tmp_graphDataObject = new Object();
    var tmp_currentGraphFriendlyName;
    var currentDataset;
    var tmp_currentDatasetName;
    var tmp_currentDate;

    // english | pt | es | greek | FI | SE | DE
    var tl8_today = /today|hoje|hoy|Σήμερα|Tänään|Idag|Heute|Aujourd'hui/i;
    var tl8_yesterday = /yesterday|ontem|ayer|Χθες|Eilen|Igår|Gestern|Hier/i;
    var tl8_tomorrow = /tomorrow/i;

    var tmp_dataGrabbedFromCurrentPage = this.dataGrabbedFromCurrentPage();

    for (var _i in tmp_dataGrabbedFromCurrentPage)
    {
      tmp_currentGraphFriendlyName = friendlyNameLookup[tmp_dataGrabbedFromCurrentPage[_i][0]];
      tmp_graphData[tmp_currentGraphFriendlyName] = tmp_dataGrabbedFromCurrentPage[_i];

      currentDataset = tmp_graphData[tmp_currentGraphFriendlyName];

      for(var i = 0; i < currentDataset[5].length; i++)
      {
        tmp_currentDatasetName = currentDataset[5][i].name;
        tmp_graphDataObject[tmp_currentGraphFriendlyName] = tmp_graphDataObject[tmp_currentGraphFriendlyName] || {};
        tmp_graphDataObject[tmp_currentGraphFriendlyName][tmp_currentDatasetName] = tmp_graphDataObject[tmp_currentGraphFriendlyName][tmp_currentDatasetName] || {};

        for(var j = 0; j < currentDataset[2].length; j++)
        {
          //If the current date isn't represented as a date, assume that it is a localised version of today/yesterday/tomorrow etc and potentially needs translating
          if(!currentDataset[2][j].match(/[0-9]{4}\/[0-9]{2}\/[0-9]{2}/)) { tl8(currentDataset[2][j]); }
          tmp_currentDate = currentDataset[2][j].replace(tl8_today,TODAY_STRING).replace(tl8_yesterday,YESTERDAY_STRING).replace(tl8_tomorrow,TOMORROW_STRING);
          tmp_graphDataObject[tmp_currentGraphFriendlyName][tmp_currentDatasetName][tmp_currentDate] = currentDataset[5][i].data[j];
        }
      }
    }

    setPref('graphData',Object_merge(this.getStoredGraphData(), tmp_graphDataObject),{ prefType: 'JSON' });
    return getPref('graphData',Object_merge(this.getStoredGraphData(), tmp_graphDataObject),{ prefType: 'JSON' });
  };


  this.mergeGraphDataOnPageWithStoredData = function ()
  {

  };

  this.init = function() {
    //TODO: Rearrange the logic of this slightly
    this.reformatGraphData();
  }
};


if(currentPage.pageCode.match(/accSummary/) || currentPage.pageCode.match(/referralStatistics/))
{
  try{
    chartData.init();
  } catch(e) {
    alert("ERROR!\n\n chartData.init() failed\n\n"+e);
  }
}


function insertLocalServerTime()
{

  function formatTime(arg_time)
  {
    var tmp_Hours = arg_time.getHours();
    var tmp_Minutes = arg_time.getMinutes();
    var tmp_Seconds = arg_time.getSeconds();

    return padZeros(tmp_Hours,2) + ':' + padZeros(tmp_Minutes,2); //+ ":" + padZeros(tmp_Seconds,2);
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
    setPref('localMidnight', localMidnight.toString(), {prefType:'string'});

    /* If server time is five hours behind (-5), Neobux's midnight will be five hours AFTER local midnight
      && vice versa, thus need to minus the offset
      NB, the offset might move the day to tomorrow/yesterday so will need to reset the date to 'today' */
    neoMidnight = new Date(new Date(localMidnight).getTime() - offsetMS);
    neoMidnight = new Date(neoMidnight.setDate(localMidnight.getDate()));
    setPref('neoMidnight', neoMidnight.toString(), {prefType:'string'});


    AdResetTime_hours = getPref('AdResetTime_hours',0, {prefType:'string'}) * 1000 * 60 * 60;
    adResetTime = new Date(new Date(localMidnight).getTime() + AdResetTime_hours);
    adResetTime = new Date(adResetTime.setDate(localMidnight.getDate()));
    setPref('adResetTime', adResetTime.toString(), {prefType:'string'});


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

        //      console.info(tmp_CST);

        var ServerDateTime = new Date(dateToday);
        ServerDateTime.setFullYear(tmp_CST.year, (tmp_CST.month - 1), tmp_CST.day);
        ServerDateTime.setHours(tmp_CST.hour, tmp_CST.minute);

        var ServerTime = ServerDateTime.getTime();
        var LocalTime = dateToday.getTime();
        var one_hour = 1000 * 60 * 60;

        var serverTimeDifference = (ServerTime - LocalTime) / (one_hour);
        serverTimeDifference = Math.floor(serverTimeDifference * 1000) / 1000;

        setPref('serverTimeOffset', serverTimeDifference, { prefType:'string' } );


        var adResetTimeString = locationOfTimeString.snapshotItem(0).textContent;
        adResetTimeString = adResetTimeString.match(/([\d]{2}):([\d]{2})/);

        // ART = Ad Reset Time
        var tmp_ART = {
          hour: parseInt(adResetTimeString[1], 10),
          minute: parseInt(adResetTimeString[2], 10)
        };

        //      console.info(tmp_ART);

        var AdResetTimeDifference = (tmp_ART.hour + (tmp_ART.minute / 60));
        setPref('AdResetTime_hours', AdResetTimeDifference, { prefType:'string' } );

        break;
      }

    }
  };


  this.GetServerTimeOffset = function()
  {
    /*
      Check whether the page being loaded is the 'View Advertisements' page
      If it is, call this.GetServerTimeOffset() to calculate & store the offset amount [if auto-detecting the offset is enabled]
    */

    // Check whether current page is the "View Advertisements" page
    var CurrentUrl = document.location.href;

    var RegExp_AdPage = /^http[s]?:\/\/www\.neobux\.com\/m\/v\//;
    var IsMatch = RegExp_AdPage.test(CurrentUrl);

    // If it is the ads page AND the script should automatically detect the offset,
    if (IsMatch && getPref("AutoDetectTimeOffset", true, {prefType:'string'})) {
      this.FetchAndSetTimeOffset();
    }

    return getPref('serverTimeOffset', 0, {prefType:'float'});
  };


  var locationToInsertTimeString;

  this.insertClock = function(arg_timeOffset,arg_adResetOffset)
  {
    locationToInsertTimeString = document.querySelectorAll('img#logo')[0].parentNode.parentNode;
    if(locationToInsertTimeString)
    {
      var localTime = formatTime(dateToday);
      var serverTime = (0 <= this.GetServerTimeOffset() || 0 >= this.GetServerTimeOffset()) ? this.GetServerTimeAndOffsetText(this.GetServerTimeOffset()) : 'You must "View Advertisements" for this to show correctly.';

  //  console.info('Local: ' + localTime + ' Server: ' + serverTime);

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


//      console.info('Local Midnight ',padZeros(localMidnight.getHours(),2)+':'+padZeros(localMidnight.getMinutes(),2),
//          'Server Midnight ',padZeros(neoMidnight.getHours(),2)+':'+padZeros(neoMidnight.getMinutes(),2),
//          'Ad Reset Time ',padZeros(adResetTime.getHours(),2)+':'+padZeros(adResetTime.getMinutes(),2));
//
//      console.info(localMidnight,neoMidnight,adResetTime);
    }
  };


  this.insertClickGuide = function()
  {

    var localMidnightToAdResetTime = (adResetTime - localMidnight) / (1000 * 60 * 60);
    var localMidnightToNeobuxMidnight = (neoMidnight - localMidnight) / (1000 * 60 * 60);

    //    console.info(localMidnightToAdResetTime);
    //    console.info(localMidnightToNeobuxMidnight);


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
  //      console.info('localMidnightToAdResetTime < localMidnightToNeobuxMidnight');

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

  //      console.info('localMidnightToAdResetTime > localMidnightToNeobuxMidnight');

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

  //      console.info('localMidnightToAdResetTime == localMidnightToNeobuxMidnight');

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

    //    console.info(_timePeriods);

    location.href = "javascript:(" + function () {

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

      if ('undefined' === typeof Highcharts)
      {
        //move container off screen to stop a transparent div blocking clicks on rest of page
        //Also colour it so that if it does cause a problem, it isn't invisible
        //todo: add the event handler before this javascript is called and then remove it here if the timer chart cannot show

        document.getElementById('containerDiv_timer').style.left = '-1000px';
        document.getElementById('containerDiv_timer').style.backgroundColor = 'black';
        console.info("Cannot show the clicking guide graph because graphs are unavailable on this page. Try the account summary page or referral statistics page.");
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
      document.getElementById('containerDiv_timer').style.display = ('none' == document.getElementById('containerDiv_timer').style.display) ? '' : 'none' ;
    },false);

  };

  this.insertClock(this.GetServerTimeOffset(),getPref('AdResetTime_hours',0, {prefType:'string'}));
  this.insertClickGuide();

}


try {
  insertLocalServerTime();
} catch(e) {
  alert("ERROR!\n\n insertLocalServerTime(); failed\n\n"+e);
}


var availableGraphs = [];

for(var graphId in friendlyNameLookup){
  availableGraphs.push(graphId);
}


// Used for detection on pages
var langStrings_Neo = {
  'US': {
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
  var tmp_langCode = document.querySelectorAll('.c0')[0].getAttribute('class').match(/f-([a-z]{2})/)[1].toUpperCase();

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
//      console.group();
//      console.info('i',i);

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

          flag: flagLookup[cr[15]],
          locked: (1 === cr[17]) ? 'Y' : 'N',
          recycleable: (1 === cr[16]) ? 'Y' : 'N',

          nextPayment: ('9' == cr[3]) ? tmp_referrals[pr_ID].nextPayment : cr[3]
        };
      }
      else if (0 < location.href.indexOf('ss3=1'))
      {
        tmp_referrals[cr_ID] = {
          ID: ('0' == cr[1]) ? 'D' + cr[19] : cr[1],
          referralType: 'D',
          cameFrom: cr[2],
          sellable: (1 === cr[18]) ? 'Y' : 'N'
        };
      }


      function todayYesterdayToDate(arg_string){
        var searchRegex_today = /today/i;
        var searchRegex_yesterday = /yesterday/i;

        return arg_string.replace(searchRegex_today,dates_array[0]).replace(searchRegex_yesterday,dates_array[1]);
      }

      tmp_referrals[cr_ID].lastSeen = tmp_currentDateTime.toString();
      tmp_referrals[cr_ID].hash = cr[7];
      tmp_referrals[cr_ID].referralSince = todayYesterdayToDate(('9' == cr[2]) ? tmp_referrals[pr_ID].referralSince : cr[2]);
      tmp_referrals[cr_ID].lastClick = todayYesterdayToDate(('9' == cr[4]) ? tmp_referrals[pr_ID].lastClick : ('N' == cr[4]) ? ntl('No clicks yet') : ('O' == cr[4]) ? dates_array[1] : ('H' == cr[4]) ? dates_array[0]: cr[4]);
      tmp_referrals[cr_ID].totalClicks = cr[5];
      tmp_referrals[cr_ID].overallAverage = ('-.---' == cr[6] || 999 == cr[6]) ? '-.---' : cr[6];

//      console.info('cr: ',cr,'\n\n','pr: ',pr);

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
//      console.groupEnd();

    } /* End of for(var i = 0; i < arg_referralListingsData.length; i++) {} loop  */

//    console.info('restructureData:\n\n','tmp_referrals',tmp_referrals);
    return tmp_referrals;
  }


  this.init = function ()
  {
    /**
     * Check how many referrals are being shown per page:  If the user is ultimate and has more than 100 referrals showing, minigraphs will not be displayed
     * If the user has fewer than 10 referrals, the option to select the # of referrals is not present, thus refsPerPage must be set manually
    */
    var refsPerPageSelector = document.getElementById('rlpp');
    var refsPerPage = (null === refsPerPageSelector) ? 10 : parseInt(refsPerPageSelector.options[refsPerPageSelector.selectedIndex].value, 10);

    var storedReferralData = getPref('referrals',{},{ prefType:'JSON' });
    var referralData;

    var tmp_referralDataFromListingsPage = { mtx:'' };
    tmp_referralDataFromListingsPage = extractReferralDataFromListingsPage();

    if(-1 !== tmp_referralDataFromListingsPage)
    {
      // Restructure the data from the given mtx=[] format into the same structure as our stored info
      var tmp_referralsOnCurrentPage = restructureData(tmp_referralDataFromListingsPage.mtx);

      // Merge the newly fetched data with the stored data
      referralData = Object_merge(storedReferralData,tmp_referralsOnCurrentPage);

      setPref('referrals',referralData,{ prefType:'JSON' });
    }
  }
};

if(0 < location.href.indexOf('ss3=1') || 0 < location.href.indexOf('ss3=2')) {
  try
  {
    referralListings.init();
  } catch(e)
  {
    alert("ERROR!\n\n referralListings.init() failed\n\n"+e);
  }
}



function PREFERENCE_INPUT_FIELD(arg_inputType, arg_preferenceId, arg_label, arg_values, arg_longDescription, arg_cssStyle_Label, arg_cssStyle_Input)
{
  var tmp_container = document.createElement('span');
  tmp_container.id = 'label_'+arg_preferenceId;
  tmp_container.title = arg_longDescription;
  var tmp_innerHTML = '';
  tmp_innerHTML += '<label for="'+arg_preferenceId+'">'+arg_label;

  switch(arg_inputType)
  {
    case 'text':
      tmp_innerHTML += '<input type="text" value="'+arg_values.toString()+'" id="'+arg_preferenceId+'"/>';
      break;
  }

  tmp_innerHTML += ''+
      '</label>'+
      '<br>';

  tmp_container.innerHTML = tmp_innerHTML;
  console.info(tmp_container.innerHTML);

  return tmp_container.innerHTML;

}

var preferencesDialogStuff = {
  'username': {
    inputType: 'text',
    preferenceId: 'username',
    label: 'Username: ',
    values: 'kwah',
    longDescription: "Your account's username.",
    cssStyle_Label: '',
    cssStyle_Input: ''
  },
  'rentedReferralsCount': {
    inputType: 'text',
    preferenceId: 'rentedReferralsCount',
    label: 'Rented Refs: ',
    values: 417,
    longDescription: "How many rented referrals you have.",
    cssStyle_Label: '',
    cssStyle_Input: ''
  }
};

var tmp_preferencesDialogInnerHtml = ''+
    '<div style="max-height:99%; background-color:pink;">'+
    '<h1>Preferences</h1>'+
    '<br>';

for(var tmp_prefId in preferencesDialogStuff)
{
  tmp_preferencesDialogInnerHtml += ''+
      PREFERENCE_INPUT_FIELD(
          preferencesDialogStuff[tmp_prefId].inputType,
          preferencesDialogStuff[tmp_prefId].preferenceId,
          preferencesDialogStuff[tmp_prefId].label,
          preferencesDialogStuff[tmp_prefId].values,
          preferencesDialogStuff[tmp_prefId].longDescription,
          preferencesDialogStuff[tmp_prefId].cssStyle_Label,
          preferencesDialogStuff[tmp_prefId].cssStyle_Input
          );
}

tmp_preferencesDialogInnerHtml += ''+
    ''+
    '</div>' +
    '<div>' +
    '<button id="preferencesDialog_Close">Close</button>' +
    '</div>';


var preferencesDialog;
preferencesDialog = new ModalDialog('preferencesDialog');
preferencesDialog.create('background-color: white; margin: 8em auto; padding: 2em; width: 40em;',tmp_preferencesDialogInnerHtml);

document.getElementById('preferencesDialog_Close').addEventListener('click',function() { preferencesDialog.hide(); },false);




var logo =
{
  insert: function()
  {
    // Inserts the logo for the script into the page

    // the language icon in upper right of page
    var xpathResults_logoLocation = docEvaluate('//ul[@id="menu"]/li[@id="menuli"]/parent::ul/parent::td');

    if (1 == xpathResults_logoLocation.snapshotLength)
    {

      // Container for logo image to allow it to look correct in the page
      if(document.getElementById('spanghurtLogoContainer')){
        document.getElementById('spanghurtLogoContainer').parentNode.removeChild(document.getElementById('spanghurtLogoContainer'));
      }
      var elmnt_td = document.createElement('td');
      elmnt_td.id = 'spanghurtLogoContainer';

      elmnt_td.style.paddingLeft = '8px';
      elmnt_td.style.paddingRight = '8px';
      elmnt_td.innerHTML = ' &nbsp;|&nbsp; &nbsp;';


      if(document.getElementById('spanghurtLogo')){
        document.getElementById('spanghurtLogo').parentNode.removeChild(document.getElementById('spanghurtLogo'));
      }

      var elmnt_logoImage = document.createElement('img');
      elmnt_logoImage.id = 'spanghurtLogo';

      elmnt_logoImage.setAttribute('rel', '#scriptPreferences');

      elmnt_logoImage.style.cursor = 'pointer';
      elmnt_logoImage.border = "0";
      elmnt_logoImage.width = '16';
      elmnt_logoImage.alt = tl8('Spanghurt Script Preferences');
      elmnt_logoImage.title = tl8('Spanghurt Script Preferences');
      elmnt_logoImage.src = 'http://kwah.org/neobux/script/images/logo.png';
//      elmnt_logoImage.src = 'http://img262.imageshack.us/img262/3654/neobuxv3logolargered2.png';
      // img.src = 'http://img262.imageshack.us/img262/4965/neobuxv3logolargered3.png';



      elmnt_td.appendChild(elmnt_logoImage);

      xpathResults_logoLocation.snapshotItem(0).parentNode.appendChild(elmnt_td);

    }
  },

  addClickEvent: function(arg_clickFunction)
  {
    document.getElementById('spanghurtLogo').addEventListener('click',function() { arg_clickFunction(); },false);
  },

  init: function()
  {
    this.insert();
    this.addClickEvent(preferencesDialog.show);
  }

};

try {
  logo.init();
} catch(e) {
  alert("ERROR!\n\n logo.init(); failed\n\n"+e);
}




var profitGraph = new function()
{

};


function graphShortCodeToReadableDescription(arg_shortCode)
{
  var tmp_headerValue = '';
  switch(arg_shortCode)
  {
    case 'personalClicks':
      tmp_headerValue = tl8('Local Time');
      break;
    case 'directClicks':
    //fall through
    case 'rentedClicks':
      tmp_headerValue = tl8('Credited clicks');
      break;
    case 'recycleCost':
      tmp_headerValue = tl8('Recycle value');
      break;
    case 'renewalCost':
      tmp_headerValue = tl8('Extension value');
      break;
    case 'autopayCost':
      tmp_headerValue = tl8('AutoPay value');
      break;
    case 'transfersToRentalBalance':
      tmp_headerValue = tl8('Transfer value');
      break;
    case 'referralEarnings':
      tmp_headerValue = tl8('Extension value');
      break;
    case 'referralProfit':
      tmp_headerValue = tl8('Extension value');
      break;
    case 'automaticRecycles':
      tmp_headerValue = tl8('Referrals');
      break;
    case 'transferToPackBalance':
      tmp_headerValue = tl8('Transfer value');
      break;
    case 'extensions_631To720':
    //fall through
    case 'extensions_541To630':
    //fall through
    case 'extensions_451To540':
    //fall through
    case 'extensions_361To450':
    //fall through
    case 'extensions_271To360':
    //fall through
    case 'extensions_181To270':
    //fall through
    case 'extensions_91To180':
    //fall through
    case 'extensions_0To90':
    //fall through
    case 'extensions':
      //fall through
      tmp_headerValue = tl8('Total number of referrals');
      break;
  }
  return tmp_headerValue;
}


var chartDataBars = new function()
{
  var maxDataBarWidth = 0;
  this.graphsOnCurrentPage = [];

  for(var i=0; i < availableGraphs.length; i++){
    if(document.getElementById(availableGraphs[i])){
      this.graphsOnCurrentPage.push(availableGraphs[i]);
    }
  }


  var dataBarIntervals = {
//    10: [0,1,2,3,4,5,6,7,8,9],
    10: [4,6,9],
    15: [4,9,14],
//    15: [0,1,2,3,4],
    90: [29,59,89]
  };

  this.getDataBarData = function(arg_graphId)
  {
    var tmp_graphLength = graphLengthLookup[arg_graphId];
    var tmp_dataSet = getPref('graphData', {}, {prefType:'JSON'})[friendlyNameLookup[arg_graphId]];
    var tmp_currentDayData;
    var dataBarData = {};
    var tmp_sum = [];
    var tmp_average = [];
    var tmp_maxInterval = 0;
    var tmp_currentDate;
    var tmp_currentValue;


    // The extensions due graphs needs special handling.
    if (!friendlyNameLookup[arg_graphId].match(/extensions_([0-9]+)To([0-9]+)/))
    {
//      for (var j in tmp_dataSet)
//      {
      var j = graphShortCodeToReadableDescription(friendlyNameLookup[arg_graphId]);
//        console.info('j = '+j);
//        console.info('tmp_dataSet = '+tmp_dataSet);

      for (var i = 0; i < dataBarIntervals[tmp_graphLength].length; i++) {
        tmp_maxInterval = (dataBarIntervals[tmp_graphLength][i] > tmp_maxInterval) ? dataBarIntervals[tmp_graphLength][i] : tmp_maxInterval;
      }

      var tmp_roundedTo = 10000;
      for (var m = 0; m <= tmp_maxInterval; m++)
      {
        tmp_currentDate = dates_array[m];
        tmp_currentValue = tmp_dataSet[j][tmp_currentDate];

        if(arg_graphId == 'ch_cr' && m<3 || false){
//            console.info(tl8(tmp_currentDate));
//            console.info(tl8(tmp_currentValue));
        }

        tmp_sum[m] = tmp_sum[m - 1] + tmp_currentValue || tmp_currentValue;
        tmp_average[m] = tmp_sum[m] / (m + 1);

        dataBarData[tmp_currentDate] = {
          'value': Math.round(tmp_currentValue * tmp_roundedTo) / tmp_roundedTo,
          'sum': Math.round(tmp_sum[m] * tmp_roundedTo) / tmp_roundedTo,
          'avg': Math.round(tmp_average[m] * tmp_roundedTo) / tmp_roundedTo
        };

        if ('ch_cr' == arg_graphId) {
          dataBarData[tmp_currentDate].avgIncome = Math.round(tmp_average[m] * currentUser.rentedReferralClickValue * tmp_roundedTo) / tmp_roundedTo;
        }
        if ('ch_cd' == arg_graphId) {
          dataBarData[tmp_currentDate].avgIncome = Math.round(tmp_average[m] * currentUser.directReferralClickValue * tmp_roundedTo) / tmp_roundedTo;
        }
        if ('ch_cliques' == arg_graphId) {
          dataBarData[tmp_currentDate].avgIncome = Math.round(tmp_average[m] * currentUser.ownClickValue * tmp_roundedTo) / tmp_roundedTo;
        }
        if ('ch_recycle' == arg_graphId) {
          dataBarData[tmp_currentDate].avgRecycles = Math.round(tmp_average[m] / currentUser.recycleFee * tmp_roundedTo) / tmp_roundedTo;
        }
      }
//      }
    }

    return dataBarData;

  };

  this.init = function()
  {
    var graphBarCSS = "" +
        ".dataBarContainer { margin-top:10px; border-collapse:collapse; margin: 10px auto 10px; max-width: 85%; min-width:75%; white-space:nowrap; }" +
        ".dataBarContainer tr { border:1px solid #AAAAAA; }" +
        ".graphBar {  color:#444444; clear:both; font-family:verdana; font-size:9px; font-weight:bold; height:14px; padding:1px 2%; vertical-align:middle; }" +
        ".graphBarFirstCell { text-align: left; min-width: 8em;}" +
        ".graphBarSecondCell { text-align: left; }" +
        "";
    GM_addStyle(graphBarCSS);

    var tmp_dataBarText;
    var tmp_dataSet;
    var tmp_dataBarDataToOutput;
    var tmp_graphLength;

    function dataToOutputToDataBar(arg_dataSet,arg_dataBarIntervals,arg_dataBarTitle,arg_fieldToShow,arg_daysPrefix,arg_daysSuffix,arg_numberOfFixedDecimalPoints)
    {
      tmp_dataBarDataToOutput = [];

      try
      {
        for(var y = arg_dataBarIntervals.length - 1; 0 <= y; y--)
        {
          tmp_counter = (tmp_dateAdjuster[0] == -1) ? y : 0 - arg_dataBarIntervals[y] - tmp_dateAdjuster[1];
          tmp_dataBarDataToOutput.push(
            arg_daysPrefix+ (arg_dataBarIntervals[y]+1)+ arg_daysSuffix +
                arg_dataSet[dates_array[arg_dataBarIntervals[tmp_counter]]][arg_fieldToShow].toFixed(arg_numberOfFixedDecimalPoints)
          );
        }
        return arg_dataBarTitle+ tmp_dataBarDataToOutput.join(' ');
      }catch(e){
        console.info('ERROR! \n',e);
        return 'error in calculations';
      }
    }

    function createDataBarRow(arg_graphId,argBarCode,arg_dataBarColumns,arg_customDataBarCss)
    {

      var elmt_bar = document.createElement("tr");
      elmt_bar.setAttribute("id", arg_graphId+'__'+argBarCode);
      elmt_bar.setAttribute("style", arg_customDataBarCss);

      for(var i=0; i<arg_dataBarColumns.length; i++){
        var elmt_col = document.createElement("td");
        elmt_col.setAttribute("class", "graphBar"+((0 == i)?" graphBarFirstCell":"") + ((1 == i)?" graphBarSecondCell":""));
        elmt_col.innerHTML = arg_dataBarColumns[i];
        elmt_bar.appendChild(elmt_col);
      }

      var currentDataBarWidth = elmt_bar.textContent.split('').length;
      maxDataBarWidth = (maxDataBarWidth < currentDataBarWidth) ? currentDataBarWidth : maxDataBarWidth;

      return elmt_bar;
    }


    for(var i=0; i < this.graphsOnCurrentPage.length; i++)
    {

      tmp_graphLength = graphLengthLookup[this.graphsOnCurrentPage[i]];
      tmp_dataSet = this.getDataBarData(this.graphsOnCurrentPage[i]);
      var tmp_dateAdjuster = friendlyNameLookup[this.graphsOnCurrentPage[i]].match(/extensions_([0-9]+)To([0-9]+)/) || [-1,0];

      var tmp_counter = 0;
      var graphBarsContainerId = this.graphsOnCurrentPage[i]+'_containers';

      if(document.getElementById(graphBarsContainerId)) {
        document.getElementById(graphBarsContainerId).parentNode.removeChild(document.getElementById(graphBarsContainerId));
      }


      var chartContainer = document.getElementById(this.graphsOnCurrentPage[i]);

      var graphBarTable = document.createElement("table");
      graphBarTable.setAttribute("id", graphBarsContainerId);
      graphBarTable.setAttribute("class", 'dataBarContainer');

      // Generic DataBars
      switch(this.graphsOnCurrentPage[i])
      {
        case 'ch_cliques':
          // Fall-through
        case 'ch_cd':
          // Fall-through
        case 'ch_cr':
          graphBarTable.appendChild(
              createDataBarRow(this.graphsOnCurrentPage[i],
                'sum',
                [tl8('Sum: '), dataToOutputToDataBar(tmp_dataSet,dataBarIntervals[tmp_graphLength],'','sum','(',') ',0)],
                ''
              )
          );
          graphBarTable.appendChild(
              createDataBarRow(this.graphsOnCurrentPage[i],
                'avg',
                [tl8('Avg. Clicks: '), dataToOutputToDataBar(tmp_dataSet,dataBarIntervals[tmp_graphLength],'','avg','(',') ',3)],
                ''
              )
          );
          graphBarTable.appendChild(
              createDataBarRow(this.graphsOnCurrentPage[i],
                'avgIncome',
                [tl8('Avg. Income: '), dataToOutputToDataBar(tmp_dataSet,dataBarIntervals[tmp_graphLength],'','avgIncome','(',') $',3)],
                ''
              )
          );
          break;
        case 'ch_recycle':
          // Fall-through
        case 'ch_extensions':
          // Fall-through
        case 'ch_autopay':
          // Fall-through
        case 'ch_trrb':
          // Fall-through
        case 'ch_earnings':
          // Fall-through
        case 'ch_profit':
          graphBarTable.appendChild(
              createDataBarRow(this.graphsOnCurrentPage[i],
                'sum',
                [tl8('Sum: '), dataToOutputToDataBar(tmp_dataSet,dataBarIntervals[tmp_graphLength],'','sum','(',') $',3)],
                ''
              )
          );
          graphBarTable.appendChild(
              createDataBarRow(this.graphsOnCurrentPage[i],
                'avg',
                [tl8('Avg. Expense: '), dataToOutputToDataBar(tmp_dataSet,dataBarIntervals[tmp_graphLength],'','avg','(',') $',3)],
                ''
              )
          );


      }


      // Specific DataBars
      switch(this.graphsOnCurrentPage[i])
      {
        case 'ch_recycle':
          graphBarTable.appendChild(
              createDataBarRow(this.graphsOnCurrentPage[i],
                'avg',
                [tl8('Avg. #Recycles: '), dataToOutputToDataBar(tmp_dataSet,dataBarIntervals[tmp_graphLength],'','avgRecycles','(',') ',3)],
                ''
              )
          );

        break;


        case 'ch_trpb':

          graphBarTable.appendChild(
              createDataBarRow(this.graphsOnCurrentPage[i],
                'sum',
                [tl8('Sum: '), dataToOutputToDataBar(tmp_dataSet,dataBarIntervals[tmp_graphLength],'','sum','(',') $',3)],
                ''
              )
          );
          graphBarTable.appendChild(
              createDataBarRow(this.graphsOnCurrentPage[i],
                'avg',
                [tl8('Avg. Transfer: '), dataToOutputToDataBar(tmp_dataSet,dataBarIntervals[tmp_graphLength],'','avg','(',') $',3)],
                ''
              )
          );

        break;

        case 'ch_trar':

          graphBarTable.appendChild(
              createDataBarRow(this.graphsOnCurrentPage[i],
                'sum',
                [tl8('Sum: '), dataToOutputToDataBar(tmp_dataSet,dataBarIntervals[tmp_graphLength],'','sum','(',') ',1)],
                ''
              )
          );
          graphBarTable.appendChild(
              createDataBarRow(this.graphsOnCurrentPage[i],
                'avg',
                [tl8('Average Free Recycles: '), dataToOutputToDataBar(tmp_dataSet,dataBarIntervals[tmp_graphLength],'','avg','(',') ',1)],
                ''
              )
          );

        break;

      }

      chartContainer.parentNode.appendChild(graphBarTable);
    }

    GM_addStyle('.dataBarContainer { width:'+(maxDataBarWidth/1.75)+'em; }');

    //    var dataBarsOnPage = document.body.getElementsBy
    //    document.getElementById(this.graphsOnCurrentPage[i]+'_'+i).addEventListener('click', function(){ dataBarClickHandler(this.graphsOnCurrentPage[i]+'_'+i); }, false);
  };

};


var exportTabs = new function()
{

  var _currentGraph,tmp_currentGraphId;


  this.insertStyles = function ()
  {
    var newDialog_Style = "" +
        "#modalContainer {"+
        "background-color: transparent;"+
        "position: absolute;"+
        "width: 100%;"+
        "height: 100%;"+
        "top: 0px;"+
        "left: 0px;"+
        "z-index: 10000;"+
        "background-image: url(tp.png); /* required by MSIE to prevent actions on lower z-index elements */"+
        " }"+

        "#alertBox {"+
        "position: relative;"+
        "width: 300px;"+
        "min-height: 100px;"+
        "margin-top: 50px;"+
        "border: 2px solid #000;"+
        "background-color: #F2F5F6;"+
        "background-image: url(alert.png);"+
        "background-repeat: no-repeat;"+
        "background-position: 20px 30px;"+
        " }"+

        "#modalContainer > #alertBox {"+
        "position: fixed;"+
        " }"+

        "#alertBox h1 {"+
        "margin: 0;"+
        "font: bold 0.9em verdana,arial;"+
        "background-color: #78919B;"+
        "color: #FFF;"+
        "border-bottom: 1px solid #000;"+
        "padding: 2px 0 2px 5px;"+
        " }"+

        "#alertBox p {"+
        "font-family: verdana,arial;"+
        "padding: 10px;"+
        "margin: 10px;"+
        "height: auto;"+
        " }"+

        "#alertBox textarea {"+
        "font-family: monospace,courier new,verdana,arial;"+
        "font-size: x-small;"+
        "margin: 15px;"+
        "margin-top: 0px;"+
        "height: auto;"+
        "width: 85%;"+
        " }"+

        "#alertBox #closeBtn {"+
        "display: block;"+
        "position: relative;"+
        "margin: 15px auto;"+
        "padding: 3px;"+
        "border: 2px solid #000;"+
        "width: 70px;"+
        "font: 0.7em verdana,arial;"+
        "text-transform: uppercase;"+
        "text-align: center;"+
        "color: #FFF;"+
        "background-color: #78919B;"+
        "text-decoration: none;"+
        "}";




    var newDialogStyle = document.body.appendChild(document.createElement('style'));
    newDialogStyle.setAttribute('type', 'text/css');
    newDialogStyle.innerHTML = newDialog_Style;



    var tabStyles = '';
    tabStyles += '.exportTab { -moz-border-radius: 0.6em 0.6em 0px 0px; display: inline-block; font-size: xx-small; padding: 0px 7px; margin-right: 7px; text-align: center; cursor: pointer; }';
    tabStyles += '.csvExportTab{ background-color:#ecd; }';
    tabStyles += '.tsvExportTab{ background-color:#edc; }';
    tabStyles += '.xmlExportTab{ background-color:#cde; }';
    tabStyles += '.textExportTab{ background-color:#dce; }';

    GM_addStyle(tabStyles);
  }


  function EXPORT_TAB(arg_exportType, arg_exportTabText, arg_textDescription, arg_textareaContents)
  {
    var exportTab = document.createElement('div');
    // exportTab.style.cssFloat = 'left';
    // exportTab.style.width = '20px';
    exportTab.className = arg_exportType+'ExportTab exportTab';
    exportTab.id = arg_exportType+'ExportTab_'+tmp_currentGraphId;

    exportTab.innerHTML = arg_exportTabText;

    var textareaContents = arg_textareaContents || "not found";
    var textareaContentsReverse = "not found";
    var messageHeader = arg_textDescription || "not found";

    if(_currentGraph.export)
    {
      textareaContents = _currentGraph.export[arg_exportType];
      textareaContentsReverse = _currentGraph.export.reverse[arg_exportType];
      messageHeader = 'Exporting the "'+_currentGraph.name+'" graph as '+arg_exportTabText+':';
    }


    exportTab.addEventListener('click', function exportTabs_onClick(event)
    {
      // (event.ctrlKey && event.altKey && event.shiftKey)

      if (event.ctrlKey && textareaContentsReverse)
      {
        var exportTab = new ModalDialog('exportTab_'+arg_exportType);
        exportTab.create('background-color: white; margin: 8em auto; padding: 2em; width: 16em;',
            '' +
                '<h3>'+'Exporting to '+arg_exportTabText+'..'+'</h3>' +
                messageHeader+'<br>' +
                '<textarea style="height: 15em; width: 15em;">'+textareaContentsReverse +'</textarea><br>' +
                '<button id="'+arg_exportType+'ExportTab_okButton">Ok</button>');
      }
      else
      {
        var exportTab = new ModalDialog('exportTab_'+arg_exportType);
        exportTab.create('background-color: white; margin: 8em auto; padding: 2em; width: 16em;',
            '' +
                '<h3>'+'Exporting to '+arg_exportTabText+'..'+'</h3>' +
                messageHeader+'<br>' +
                '<textarea style="height: 15em; width: 15em;">'+textareaContents+'</textarea><br>' +
                '<button id="'+arg_exportType+'ExportTab_okButton">Ok</button>');
      }

      document.getElementById(arg_exportType+'ExportTab_okButton').addEventListener('click',
          function (event){
            exportTab.hide();
          }, false);


      exportTab.show();


      //      createExportDialog(messageHeader,textareaContents,'Exporting to '+arg_exportTabText+'..','Close',textareaContentsReverse,event);
    }, false);


    return exportTab;
  }

  function dataToExportFormat(arg_format, arg_data, arg_length)
  {
    //    console.info('dataToExportFormat arguments: ',arguments);
    var tmp_valuesArray = [];
    var tmp_valuesToExportArray = [];
    var exportString = '';
    var maxCount = 10;

    if(arg_length){
      maxCount = arg_length;
    }


    var tmp_currentDate;
    if(tmp_currentGraphId.match(/ch_ext_schedule/)){}else{
      for(var tmp_j = 0; tmp_j < maxCount; tmp_j++)
      {
        tmp_currentDate = dates_array[tmp_j];
        //      console.info('tmp_currentDate = ',tmp_currentDate);
        if('undefined' !== typeof arg_data[tmp_currentDate]) {
          tmp_valuesArray.push([tmp_currentDate,arg_data[tmp_currentDate]]);
        }
      }
    }

    try{
      switch(arg_format){
        case 'csv':
          for(var i = 0; i < maxCount; i++) {
            tmp_valuesToExportArray[i] = tmp_valuesArray[i].join(',');
          }
          return tmp_valuesToExportArray.join(',\n');
          break;
        case 'tsv':
          for(var i = 0; i < maxCount; i++) {
            tmp_valuesToExportArray[i] = tmp_valuesArray[i].join("\t");
          }
          return tmp_valuesToExportArray.join("\t\n");
          break;
        case 'text':
          for(var i = 0; i < maxCount; i++) {
            tmp_valuesToExportArray[i] = tmp_valuesArray[i][1];
          }
          return tmp_valuesToExportArray.join("\t\n");
          break;
      }
    }catch(e){
      console.info("ERROR!\n#" +
          'tmp_currentGraphId = ',tmp_currentGraphId,"\n" +
          "Error details: \n",e);
      return 'Error retrieving data';
    }
  }

  //  console.info(dataToExportFormat('csv',getPref('graphData',{},{prefType:'JSON'})['rentedClicks']['Credited clicks'],4));
  //  console.info(dataToExportFormat('tsv',getPref('graphData',{},{prefType:'JSON'})['rentedClicks']['Credited clicks'],4));
  //  console.info(dataToExportFormat('text',getPref('graphData',{},{prefType:'JSON'})['rentedClicks']['Credited clicks'],4));


  this.init = function()
  {
    this.insertStyles();

    for(var _NameOfCurrentGraph in availableGraphs)
    {
      tmp_currentGraphId = availableGraphs[_NameOfCurrentGraph];
      if(document.getElementById(tmp_currentGraphId))
      {

        var tmp_dataSet = getPref('graphData',{},{prefType:'JSON'});
        _currentGraph = tmp_dataSet[friendlyNameLookup[tmp_currentGraphId]];

        var referenceNode = document.getElementById(tmp_currentGraphId);

        //        console.info('tmp_currentGraphId: ',tmp_currentGraphId,'\n',
        //            '_currentGraph: ',_currentGraph,'\n',
        //            'referenceNode: ',referenceNode);


        var tmp_currentDataset;
        var tmp_headerValue;
        switch(tmp_currentGraphId)
        {
          case 'ch_cliques':
            tmp_headerValue = 'Local Time';
            break;
          case 'ch_cd':
          //fall through
          case 'ch_cr':
            tmp_headerValue = 'Credited clicks';
            break;
          case 'ch_recycle':
            tmp_headerValue = 'Recycle value';
            break;
          case 'ch_extensions':
            tmp_headerValue = 'Extension value';
            break;
          case 'ch_autopay':
            tmp_headerValue = 'AutoPay value';
            break;
          case 'ch_trrb':
            tmp_headerValue = 'Transfer value';
            break;
          case 'ch_earnings':
            tmp_headerValue = 'Extension value';
            break;
          case 'ch_profit':
            tmp_headerValue = 'Extension value';
            break;
          case 'ch_trar':
            tmp_headerValue = 'Referrals';
            break;
          case 'ch_trpb':
            tmp_headerValue = 'Transfer value';
            break;
          case 'ch_ext_schedule8':
          //fall through
          case 'ch_ext_schedule7':
          //fall through
          case 'ch_ext_schedule6':
          //fall through
          case 'ch_ext_schedule5':
          //fall through
          case 'ch_ext_schedule4':
          //fall through
          case 'ch_ext_schedule3':
          //fall through
          case 'ch_ext_schedule2':
          //fall through
          case 'ch_ext_schedule1':
          //fall through
          case 'ch_ext_schedule':
            //fall through
            tmp_headerValue = 'Total number of referrals';
            break;
        }
        tmp_currentDataset = getPref('graphData',{},{prefType:'JSON'})[friendlyNameLookup[tmp_currentGraphId]][tmp_headerValue];


        if(tmp_currentGraphId.match(/ch_ext_schedule/))
        {}
        else
        {
          //      console.info('tmp_currentDataset: ',tmp_currentDataset)
          //        console.info(dataToExportFormat('csv',tmp_currentDataset,4));
          //        console.info(dataToExportFormat('tsv',tmp_currentDataset,4));
          //        console.info(dataToExportFormat('text',tmp_currentDataset,4));

          try
          {
            //// Add Export Links
            // Create and insert wrapper for export 'tabs'
            var exportTabsWrapper = document.createElement('div');
            exportTabsWrapper.setAttribute('style','bottom:-1px; margin-left:17px; margin-top:4px; position:relative; text-align:left;');
            exportTabsWrapper.id = 'exportTabsWrapper_'+tmp_currentGraphId;
            exportTabsWrapper.innerHTML = ' ';

            referenceNode.parentNode.insertBefore(exportTabsWrapper,referenceNode);

//            console.info('tmp_currentGraphId = ',tmp_currentGraphId);

            var exportTabTypes = ['CSV','TSV','Text'];
            for(var i=0; i<exportTabTypes.length; i++)
            {
//              console.info('tmp_currentGraphId = ',tmp_currentGraphId,'\n','exportTabTypes[i] = ',exportTabTypes[i]);
              var exportTabElement = EXPORT_TAB(exportTabTypes[i].toLowerCase(),
                    exportTabTypes[i],
                    tmp_headerValue,
                    dataToExportFormat(exportTabTypes[i].toLowerCase(),tmp_currentDataset,10)
                  );

              if(document.getElementById(exportTabTypes[i].toLowerCase()+'ExportTab_'+tmp_currentGraphId)){
                document.getElementById(exportTabTypes[i].toLowerCase()+'ExportTab_'+tmp_currentGraphId).innerHTML = exportTabElement.innerHTML
              }else{
                document.getElementById('exportTabsWrapper_'+tmp_currentGraphId).appendChild(exportTabElement);
              }

            }
          } catch(e) {
            console.info("ERROR!\nCannot add export tabs.\n\nFull error message:\n",e)
          }
        }
      }
    }
  }

};




if(currentPage.pageCode.match(/accSummary/i) || currentPage.pageCode.match(/referralStatistics/i)) {
  try {
    chartDataBars.init();
  } catch(e) {
    alert("ERROR!\n\n chartDataBars.init(); failed\n\n"+e);
  }
  try {
    exportTabs.init();
  } catch(e) {
    alert("ERROR!\n\n  exportTabs.init(); failed\n\n"+e);
  }

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
  if (true != xuw) return '';
  if (0 == m) n = [0, 0, 0];
  else n = m;
  if (0 == p) pn = [0, 0, 0, 0];
  else pn = p;
  var s1 = 30,
      s2 = 20,
      s3 = 20,
      s4 = 50;
  if (1 == L) s1 = 20, s3 = 30;
  if ('' == y) s1 = 10;
  if ('x' == mn) {
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
      gridLineColor: (0 == p) ? '#eee' : '',
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



var convertRefListingsToUl = function(){

  console.info(localStorage);

  var referrals = JSON.parse(localStorage.getItem('referrals'))

  console.info(referrals);


  function to_ul (obj) {
      // --------v create an <ul> element
      var f, li, ul = document.createElement ("ul");

      // --v loop through its children
      for (var i in obj)
      {
          if(obj.hasOwnProperty(i))
          {
              //console.info(i);
              li = document.createElement ("li");
              // if the child has a 'folder' prop on its own, call me again
              if ('object' == typeof obj[i]) {
                  li.appendChild (to_ul (obj[i]));
              } else {
                  // console.info(document.createTextNode(i));
                  li.appendChild(document.createTextNode(i + ' = ' + obj[i]));
              }
              ul.appendChild(li);
          }
      }

      return ul;
  }


  this.init = function() {
    var tmp_ul = to_ul(referrals);

    console.info(tmp_ul);

//    document.body.innerHTML = "";
    document.body.appendChild(tmp_ul);
  }
};


//convertRefListingsToUl.init();


var widenPages = new function(){

  this.referralListings = function(){
    document.body.children[1].style.width = '90%';
    document.body.children[1].style.padding = '0 4em';

    document.getElementById('tblprp').style.maxWidth = '78em';
    document.getElementById('tblprp').style.overflow = 'auto';

    GM_addStyle('.l { white-space: nowrap; } ')
  };

  this.accountSummary = function(){
//    document.body.children[1].style.maxWidth = '90%';
//    document.body.children[1].style.minWidth = '50%';
//    document.body.children[1].style.width = '';
//    document.body.children[1].style.padding = '0 0 0 4em';
  }

  this.generic = function(){;
    document.body.children[0].style.width = '';
    document.body.children[0].style.maxWidth = '98%';
    document.body.children[1].style.width = '1100px';
  }
};



function insertAdCounterBox(arg_dateIndex, arg_adCounts, arg_adCountChange_currentPageview)
{
  if('undefined' === typeof GM_addStyle){
    function GM_addStyle(arg_css) {
      var head = document.getElementsByTagName("head")[0];
      if (head) {
        var style = document.createElement("style");
        style.textContent = arg_css;
        style.type = "text/css";
        head.appendChild(style);
      }
      return style;
    }
  }

  var elmnt_totalsContainer = document.createElement('div');
  elmnt_totalsContainer.id = 'clickTotalsContainer';
  elmnt_totalsContainer.setAttribute('style', 'position: fixed; bottom: 2em; right: 2em; width: 150px; min-height: 10em; background-color: white; border: 1px solid black; font-size:x-small !important; padding: 1em 1em; opacity: 0.5;');

  elmnt_totalsContainer.setAttribute('onmouseover','document.getElementById("clickTotalsContainer").style.opacity = "1"; ');
  elmnt_totalsContainer.setAttribute('onmouseout','document.getElementById("clickTotalsContainer").style.opacity = "0.5";');

  GM_addStyle(".adCountIncrementButton { width: 2.5em; text-align:center; font-size: xx-small; }"+
      ".adCountDecrementButton { width: 2.5em; text-align:center; font-size: xx-small; }"+
      "#clickTotalsContainer table tr td { font-size:x-small; }");



  // If the date navigated to doesn't currently exist in the adCounts data, create the data object for it
  if(!arg_adCounts[dates_array[arg_dateIndex]]){
    arg_adCounts[dates_array[arg_dateIndex]] = {};
  }

  // Similarly, check that each of the ad type counts are valid and/or/else reset to zero
  arg_adCounts[dates_array[arg_dateIndex]]['extended']    = (arg_adCounts[dates_array[arg_dateIndex]]['extended'] >= 0 )    ? arg_adCounts[dates_array[arg_dateIndex]]['extended'] : 0;
  arg_adCounts[dates_array[arg_dateIndex]]['regular']     = (arg_adCounts[dates_array[arg_dateIndex]]['regular'] >= 0 )     ? arg_adCounts[dates_array[arg_dateIndex]]['regular'] : 0;
  arg_adCounts[dates_array[arg_dateIndex]]['mini']        = (arg_adCounts[dates_array[arg_dateIndex]]['mini'] >= 0 )        ? arg_adCounts[dates_array[arg_dateIndex]]['mini'] : 0;
  arg_adCounts[dates_array[arg_dateIndex]]['fixed']       = (arg_adCounts[dates_array[arg_dateIndex]]['fixed'] >= 0 )       ? arg_adCounts[dates_array[arg_dateIndex]]['fixed'] : 0;
  arg_adCounts[dates_array[arg_dateIndex]]['fixedMicro']  = (arg_adCounts[dates_array[arg_dateIndex]]['fixedMicro'] >= 0 )  ? arg_adCounts[dates_array[arg_dateIndex]]['fixedMicro'] : 0;
  arg_adCounts[dates_array[arg_dateIndex]]['micro']       = (arg_adCounts[dates_array[arg_dateIndex]]['micro'] >= 0 )       ? arg_adCounts[dates_array[arg_dateIndex]]['micro'] : 0;


  // If the date navigated to doesn't currently exist in the arg_adCountChange_currentPageview data, create the data object for it
  if(!arg_adCountChange_currentPageview[dates_array[arg_dateIndex]]){
    arg_adCountChange_currentPageview[dates_array[arg_dateIndex]] = {};
  }

  //Check that each of the pageview ad counts exist, else assign 0 to it
  //Note: when new dates are navigated to and the above code has to create a record for that date, these sub-objects will not exist
  arg_adCountChange_currentPageview[dates_array[arg_dateIndex]]['extended']   = arg_adCountChange_currentPageview[dates_array[arg_dateIndex]]['extended']   || 0;
  arg_adCountChange_currentPageview[dates_array[arg_dateIndex]]['regular']    = arg_adCountChange_currentPageview[dates_array[arg_dateIndex]]['regular']    || 0;
  arg_adCountChange_currentPageview[dates_array[arg_dateIndex]]['mini']       = arg_adCountChange_currentPageview[dates_array[arg_dateIndex]]['mini']       || 0;
  arg_adCountChange_currentPageview[dates_array[arg_dateIndex]]['fixed']      = arg_adCountChange_currentPageview[dates_array[arg_dateIndex]]['fixed']      || 0;
  arg_adCountChange_currentPageview[dates_array[arg_dateIndex]]['fixedMicro'] = arg_adCountChange_currentPageview[dates_array[arg_dateIndex]]['fixedMicro'] || 0;
  arg_adCountChange_currentPageview[dates_array[arg_dateIndex]]['micro']      = arg_adCountChange_currentPageview[dates_array[arg_dateIndex]]['micro']      || 0;



  var tmp_foo = {
    extended: {
      adCount: (arg_adCounts[dates_array[arg_dateIndex]]['extended'] >= 0 ) ? arg_adCounts[dates_array[arg_dateIndex]]['extended'] : 0,
      text: tl8("Extended:"),
      countsToTos37: true,
      value: 0.02
    },
    regular: {
      adCount: (arg_adCounts[dates_array[arg_dateIndex]]['regular'] >= 0 ) ? arg_adCounts[dates_array[arg_dateIndex]]['regular'] : 0,
      text: tl8("Regular:"),
      countsToTos37: true,
      value: 0.01
    },
    mini: {
      adCount: (arg_adCounts[dates_array[arg_dateIndex]]['mini'] >= 0 ) ? arg_adCounts[dates_array[arg_dateIndex]]['mini'] : 0,
      text: tl8("Mini:"),
      countsToTos37: false,
      value: 0.005
    },
    fixed: {
      adCount: (arg_adCounts[dates_array[arg_dateIndex]]['fixed'] >= 0 ) ? arg_adCounts[dates_array[arg_dateIndex]]['fixed'] : 0,
      text: tl8("Fixed:"),
      countsToTos37: true,
      value: 0.01
    },
    fixedMicro: {
      adCount: (arg_adCounts[dates_array[arg_dateIndex]]['fixedMicro'] >= 0 ) ? arg_adCounts[dates_array[arg_dateIndex]]['fixedMicro'] : 0,
      text: tl8("Fixed (Micro):"),
      countsToTos37: true,
      value: 0.001
    },
    micro: {
      adCount: (arg_adCounts[dates_array[arg_dateIndex]]['micro'] >= 0 ) ? arg_adCounts[dates_array[arg_dateIndex]]['micro'] : 0,
      text: tl8("Micro:"),
      countsToTos37: false,
      value: 0.001
    }
  };


  var tmp_totalsContainerHTML = "";

  tmp_totalsContainerHTML += "" +
      "<center><button id='date_decrementButton' class='adCountDecrementButton'>-</button>" +
      "<span id='date_textCount'>"+dates_array[arg_dateIndex]+"</span>" +
      "<button id='date_incrementButton' class='adCountIncrementButton'>+</button></center>" +
      "<br>"+
      "<table>";

  for(var tmp_label in tmp_foo) {
    if(tmp_foo.hasOwnProperty(tmp_label))
    {
      tmp_totalsContainerHTML += [
        "<tr><td>"+ tmp_foo[tmp_label].text,
        "<button id='"+tmp_label+"AdCount_incrementButton' class='adCountIncrementButton'>+</button>",
        "<span id='extendedAdCount_textCount'>"+tmp_foo[tmp_label].adCount+"</span>",
        "<span style='font-size:xx-small; font-style: italic; font-color: #333333; '>("+((arg_adCountChange_currentPageview[dates_array[arg_dateIndex]][tmp_label] > 0) ? "+"+arg_adCountChange_currentPageview[dates_array[arg_dateIndex]][tmp_label]:arg_adCountChange_currentPageview[dates_array[arg_dateIndex]][tmp_label])+")</span>",
        "<button id='"+tmp_label+"AdCount_decrementButton' class='adCountDecrementButton'>-</button>"+"</td></tr>"
      ].join('</td><td>');
    }
  }

  tmp_totalsContainerHTML += "</table>";
  elmnt_totalsContainer.innerHTML = tmp_totalsContainerHTML;

  if(document.getElementById('clickTotalsContainer')){
      document.getElementById('clickTotalsContainer').parentNode.removeChild(document.getElementById('clickTotalsContainer'));
  }
  document.body.appendChild(elmnt_totalsContainer);




  /* Add handlers for changing the currently selected date */

  // NB: The date index is in reverse order (ie, n days into the past) thus incrementing this index equates to going an increased number of days into the past
  document.getElementById('date_decrementButton').addEventListener('click',function () {
    insertAdCounterBox(arg_dateIndex + 1, arg_adCounts, arg_adCountChange_currentPageview);
  },false);

  document.getElementById('date_incrementButton').addEventListener('click',function () {
    insertAdCounterBox(arg_dateIndex - 1, arg_adCounts, arg_adCountChange_currentPageview);
  },false);


  /* Add handlers for changing the ad counts */

  function addIncrementListener(arg_adType, arg_oldAdCounts, arg_tmp_adCountChange_currentPageview)
  {
    var tmp_adCounts = {};
    Object_merge(tmp_adCounts, arg_oldAdCounts);

    var tmp_adCountChange = {};
    Object_merge(tmp_adCountChange, arg_tmp_adCountChange_currentPageview);

    tmp_adCountChange[dates_array[arg_dateIndex]][arg_adType] = parseInt(tmp_adCountChange[dates_array[arg_dateIndex]][arg_adType]) + 1;
    tmp_adCounts[dates_array[arg_dateIndex]][arg_adType] = parseInt(arg_oldAdCounts[dates_array[arg_dateIndex]][arg_adType]) + 1;

    //If the adcount is less than zero, reset it to 0 (cannot click fewer than zero of any ad-type) and undo the change
    // to the adcount for the current pageview
    if(0 > tmp_adCounts[dates_array[arg_dateIndex]][arg_adType]){
      tmp_adCounts[dates_array[arg_dateIndex]][arg_adType] = 0;
      tmp_adCountChange[dates_array[arg_dateIndex]][arg_adType] = parseInt(tmp_adCountChange[dates_array[arg_dateIndex]][arg_adType]) - 1;
    }

    document.getElementById(arg_adType+'AdCount_incrementButton').addEventListener('click',function ()
    {
      console.info('tmp_adCounts (on increment click) = ',JSON.stringify(tmp_adCounts));
      console.info('tmp_adCountChange (on increment click) = ',JSON.stringify(tmp_adCountChange));
      insertAdCounterBox(arg_dateIndex, tmp_adCounts, tmp_adCountChange);
      // Workaround for GM access checks/violations
      // http://wiki.greasespot.net/Greasemonkey_access_violation
      setTimeout(function() {
        setPref('ownAdCountTally',tmp_adCounts, { prefType: 'JSON' });
      }, 0);
    },false);
  }

  function addDecrementListener(arg_adType, arg_oldAdCounts, arg_tmp_adCountChange_currentPageview)
  {
    var tmp_adCounts = {};
    Object_merge(tmp_adCounts, arg_oldAdCounts);

    var tmp_adCountChange = {};
    Object_merge(tmp_adCountChange, arg_tmp_adCountChange_currentPageview);

    tmp_adCountChange[dates_array[arg_dateIndex]][arg_adType] = parseInt(tmp_adCountChange[dates_array[arg_dateIndex]][arg_adType]) - 1;
    tmp_adCounts[dates_array[arg_dateIndex]][arg_adType] = parseInt(arg_oldAdCounts[dates_array[arg_dateIndex]][arg_adType]) - 1;

    //If the adcount is less than zero, reset it to 0 (cannot click fewer than zero of any ad-type) and undo the change
    // to the adcount for the current pageview
    if(0 > tmp_adCounts[dates_array[arg_dateIndex]][arg_adType]){
      tmp_adCounts[dates_array[arg_dateIndex]][arg_adType] = 0;
      tmp_adCountChange[dates_array[arg_dateIndex]][arg_adType] = parseInt(tmp_adCountChange[dates_array[arg_dateIndex]][arg_adType]) + 1;
    }

    document.getElementById(arg_adType+'AdCount_decrementButton').addEventListener('click',function ()
    {
      console.info('tmp_adCounts (on increment click) = ',JSON.stringify(tmp_adCounts));
      console.info('tmp_adCountChange (on increment click) = ',JSON.stringify(tmp_adCountChange));
      insertAdCounterBox(arg_dateIndex, tmp_adCounts, tmp_adCountChange);
      // Workaround for GM access checks/violations
      // http://wiki.greasespot.net/Greasemonkey_access_violation
      setTimeout(function() {
        setPref('ownAdCountTally',tmp_adCounts, { prefType: 'JSON' });
      }, 0);
    },false);
  }

  // Loop through the different ad types and call the function that adds the click events for the increment and decrement buttons
  for(var tmp_label in arg_adCounts[dates_array[arg_dateIndex]]) {
    if(arg_adCounts[dates_array[arg_dateIndex]].hasOwnProperty(tmp_label))
    {
      addDecrementListener(tmp_label, arg_adCounts, arg_adCountChange_currentPageview);
      addIncrementListener(tmp_label, arg_adCounts, arg_adCountChange_currentPageview);
    }
  }
}


function addClickStatsToGoldenGraph(){
  function mk_ch_ref(x, o, w0, w, O, L, m)
  {
    console.info(arguments);
    if (0 == m)
    {
      n = [0, 0, 0];
    } else
    {
      n = m;
    }
    var s1 = 20, s2 = 20, s3 = 20, s4 = 50;
    if (1 == L)
    {
      s3 = 30;
    }
    var g = [s1, s2, s3, s4];
    var chart = new (Highcharts.Chart)({chart: {renderTo: x, defaultSeriesType: "line", margin: g, showAxes: 1, borderWidth: 0, shadow: 0}, title: {text: ""}, xAxis: {categories: o, labels: {enabled: 0}, tickmarkPlacement: "on", gridLineWidth: 1, lineColor: "#fff", tickColor: "#fff", gridLineColor: "#ddd"}, yAxis: {title: {enabled: 0, text: null}, min: -0.1, endOnTick: 0, startOnTick: 0, tickPixelInterval: 20, plotLines: [
      {value: 0, width: 1, color: "#888"}
    ]}, tooltip: {formatter: function ()
    {
      return "<b>" + this.series.name + "</b><br/>" + this.x + ": " + w0 + this.y + " " + w;
    }}, legend: {enabled: L, layout: "horizontal", symbolWidth: 5, style: {left: "auto", bottom: "5px", right: "5px", top: "auto", font: "normal 12px Verdana, sans-serif"}}, plotOptions: {line: {lineWidth: 2, marker: {enabled: 1, symbol: "circle", radius: 3, states: {hover: {enabled: 1, radius: 5}}}}}, series: O, credits: {enabled: 0}});


    /*start extra stuff added to the function*/
    var newElmnt = document.createElement('div');
    console.info('O[0].data: ', O[0].data);

    var disp_clicks = "Clicks:";
    var disp_sum = "Sums:";
    var disp_avg = "Avgs:";

    var clicks = [];
    var sum = [];
    var avg = [];


    for (var i = 0; i < O[0].data.length; i++) {
      disp_clicks += ' ' + O[0].data[i];
      clicks[i] = O[0].data[i];
    }

//    for (var i = 0; i < O[0].data.length; i++) {
//      sum[i] = clicks[i] + sum[i-1] | clicks[i];
    for (var i = O[0].data.length - 1; 0 <= i; i--)
    {
      sum[i] = ('undefined' !== typeof sum[i+1]) ? clicks[i] + sum[i+1] : clicks[i];
      avg[i] = (sum[i] / (O[0].data.length - i)).toFixed(1);

//      console.info('i = '+i, '(O[0].data.length - i) = '+((O[0].data.length - i)+1), 'clicks[i] = '+clicks[i], 'sum[i+1] = '+sum[i+1], 'sum[i] = '+sum[i]);
//      console.info('clicks: ',clicks,'\n','sum: ',sum,'\n','avg: ',avg);
    }

    //for (var i = O[0].data.length - 1; i >= 0; i--) {
//    for (var i = 0; i < O[0].data.length; i++) {
//      disp_sum += ' ' + sum[i];
//      disp_avg += ' ' + avg[i].toFixed(1);
//    }

    newElmnt.innerHTML = '<table class="refGraphDatabar">' +
        '<tr><td>'+ [
          'Day # '+'</td><td>'+[9,8,7,6,5,4,3,2,1,0].join('</td><td>'),
          'Clicks:'+'</td><td>'+clicks.join('</td><td>'),
          'Sum: '+'</td><td>'+sum.join('</td><td>'),
          'Avg: '+'</td><td>'+avg.join('</td><td>')].join('</td></tr><tr><td>') +
        '</td></tr>' +
        '</table>';

    newElmnt.style.padding = '0 1.5em 1em';

    document.getElementById(x).style.minHeight = '130px';
    document.getElementById(x).style.height = '';
//    document.getElementById(x).style.minWidth = '280px';
    document.getElementById(x).style.width = '280px';
    document.getElementById(x).style.textAlign = 'center';
    document.getElementById(x).appendChild(newElmnt);
  }


  GM_addStyle(".refGraphDatabar { border-collapse: collapse; }" +
      ".refGraphDatabar tbody tr td { font-size: x-small; padding:0 1px; border: 1px solid black; }");

//  console.info('mk_ch_ref.toString() : ',mk_ch_ref.toString());
  var script = document.createElement("script");
  script.setAttribute('type','text/javascript');
  script.text = mk_ch_ref.toString();
  document.body.appendChild(script);

}

var referralListings_columns = new function()
{
  function addColumn(arg_row,arg_columnText,arg_colId,arg_customCSS)
  {
    var tmp_newColumn;

//    console.info(arg_colId);
    var tmp_existingCol = document.getElementById(arg_colId);
    if(tmp_existingCol) {
      tmp_existingCol.parentNode.removeChild(tmp_existingCol);
    }

    /*NB: container needs to be a table otherwise Firefox disposes of the contaning <td> due to it not being within a suitable containing element*/
    var tmp_container = document.createElement('table');
    tmp_container.innerHTML = '' +
        '<tbody><tr><td id="'+arg_colId+'"' +
          ' class="'+arg_row.children[arg_row.children.length - 1].getAttribute('class')+'"' +
          ' style="'+arg_row.children[arg_row.children.length - 1].getAttribute('style') +
          arg_customCSS+'"' +
        '>' +
          arg_columnText+
        '</td></tr></tbody>';

    tmp_newColumn = tmp_container.children[0].children[0].children[0];
    arg_row.appendChild(tmp_newColumn);
    colCount++;

  }

  function dateToDHM(arg_date)
  {
    var oneSecond = 1000;
    var oneMinute = oneSecond * 60;
    var oneHour = oneMinute * 60;
    var oneDay = oneHour * 24;

    var now = new Date();

//    console.info('now: ',now,'\nother date: ',arg_date);

    var t_diff = new Date(arg_date) - now;
//    console.info('t_diff = '+t_diff);


    var future = (0 < t_diff);
    var remaining_time = (0 < t_diff) ? t_diff : t_diff * -1;

//    console.info('remaining_time: ',remaining_time);

    var diff_days = Math.floor(remaining_time / oneDay);
    remaining_time -= diff_days * oneDay;

//    console.info('diff_days: ',diff_days,'\nremaining_time: ',remaining_time);

    var diff_hrs = Math.floor(remaining_time / oneHour);
    remaining_time -= diff_hrs * oneHour;

//    console.info('diff_hrs: ',diff_hrs,'\nremaining_time: ',remaining_time);

    var diff_mins = Math.floor(remaining_time / oneMinute);
    remaining_time -= diff_mins * oneMinute;

//    console.info('diff_mins: ',diff_mins,'\nremaining_time: ',remaining_time);

    var diff_secs = Math.floor(remaining_time / oneSecond);
    remaining_time -= diff_secs * oneSecond;

//    console.info('diff_secs: ',diff_secs,'\nremaining_time: ',remaining_time);

   return '['+
       diff_days+'d'+
       ', '+diff_hrs+'h'+
       ', '+diff_mins+'m'+
//       ', '+diff_secs+'s'+
       ']';
  }
  function dateToD(arg_date)
  {
    var oneSecond = 1000;
    var oneMinute = oneSecond * 60;
    var oneHour = oneMinute * 60;
    var oneDay = oneHour * 24;

    var now = new Date();
    var t_diff = new Date(arg_date) - now;

    var future = (0 < t_diff);
    var remaining_time = (0 < t_diff) ? t_diff : t_diff * -1;

    var diff_days = Math.floor(remaining_time / oneDay);
    remaining_time -= diff_days * oneDay;

    if(isNaN(diff_days)){
      return '--';
    }

    return '['+
       diff_days+'d' +
       ']';
  }

  function nextPaymentStringToDate(arg_string)
  {
    arg_string = arg_string.toString();
//    console.info('nextPaymentStringToDate: \n','arg_string : ',arg_string);
    var onesec = 1000;
    var onemin = onesec * 60;
    var onehr = onemin * 60;
    var oneday = onehr * 24;

    /* nb: bugfix - occasionally neobux displafs displays a negative # of hours for the next payment date which breaks the regex */
//    var spliced = arg_string.match(/([0-9]+).*([0-9]{2}):([0-9]{2})/);
    var spliced = arg_string.match(/([0-9]+)[^-]*(-?[0-9]{1,2}):([0-9]{2})/);
    var tmp_days = spliced[1]*1;
    var tmp_hours = spliced[2]*1;
    var tmp_mins = spliced[3]*1;

    var tmp_date = new Date( (new Date()*1) +
        (tmp_days * oneday) +
        (tmp_hours * onehr) +
        (tmp_mins * onemin) );

//    console.info(tmp_days+'d, '+tmp_hours+'h, '+tmp_mins+'m');
    return tmp_date;

  }

  this.editHeaderRow = function ()
  {

  }

  this.mainLoop = function()
  {
    var tmp_currentID, tmp_income, tmp_value;
    var tmp_dhmOwned;

    var headerCol_idPrefix = 'header_';
    var newCol_idPrefix = ''; // set within the loop

    var columns = {
      incomeCol: {
        colType: 'new',
        colPrefix: '$',
        colSuffix: '',
        colHeaderText: 'Income'
      },
      refSince_DHM: {
        colType: 'new',
        colPrefix: '',
        colSuffix: '',
        colHeaderText: 'D/H/M Ref Since'
      },
      nextPayment_DHM: {
        colType: 'new',
        colPrefix: '',
        colSuffix: '',
        colHeaderText: 'D/H/M Next Payment'
      },
      lastClick_D: {
        colType: 'new',
        colPrefix: '',
        colSuffix: '',
        colHeaderText: 'D Last Click'
      },
      textifyFlag: {
        colType: 'new',
        colPrefix: '',
        colSuffix: '',
        colHeaderText: 'Flag Colour'
      }
    };


    for(var columnName in columns)
    {
      addColumn(headerRow,
          columns[columnName].colHeaderText,
          headerCol_idPrefix + columnName,
          '');
    }

    var tmp_colspans = document.querySelectorAll('div#tblprp td[colspan]');

    for(var i=1; i<tmp_colspans.length - 1;i++){
//      if(tmp_colspans[i],tmp_colspans[i].getAttribute('colspan') == (colCount-1){
        tmp_colspans[i],tmp_colspans[i].setAttribute('colspan', colCount);
//      }
//      console.info(tmp_colspans[i],tmp_colspans[i].getAttribute('colspan'));
    }

    for(var i=0; i<referralRows.length; i++){
      tmp_currentRow = referralRows[i];

      tmp_currentID = tmp_currentRow.children[colIndexes.refID].textContent.match(/[0-9]+/)[0];
      tmp_currentRow.id = tmp_currentID;
      tmp_currentRow.setAttribute('class',tmp_currentRow.getAttribute('class') + ' referralRow');

      GM_addStyle('.referralRow { letter-spacing: -0.01em; }');

      newCol_idPrefix = tmp_currentID + '_';

      for(var columnName in columns){
        switch(columnName){
          case 'incomeCol':
              if(currentPage.pageCode.match(/referralListings_Rented/)){
                tmp_value = (tmp_referralsData[tmp_currentID].totalClicks * currentUser.rentedReferralClickValue).toFixed(3);
              } else if(currentPage.pageCode.match(/referralListings_Direct/)){
                tmp_value = (tmp_referralsData[tmp_currentID].totalClicks * currentUser.directReferralClickValue).toFixed(3);
              }
          break;
          case 'refSince_DHM':
            tmp_value = dateToDHM(new Date(tmp_referralsData[tmp_currentID].referralSince));
          break;
          case 'nextPayment_DHM':
            tmp_value = dateToDHM(
                nextPaymentStringToDate(tmp_referralsData[tmp_currentID].nextPayment)
                );
          break;
          case 'lastClick_D':
            tmp_value = dateToD(new Date(tmp_referralsData[tmp_currentID].lastClick));
          break;
          case 'textifyFlag':
            tmp_value = tmp_referralsData[tmp_currentID].flag.split('')[0];
          break;
        }

        if('new' === columns[columnName].colType){
          try{
            addColumn(tmp_currentRow,
                columns[columnName].colPrefix + tmp_value + columns[columnName].colSuffix,
                newCol_idPrefix+columnName,
                ''
                );
          }catch(e) {
            console.info('error with new column - '+columnName+' ::\n',e);
          }
        }
      }
    }
  }

  this.init = function (arg_options)
  {
    var settings = {};
    var headerRow = document.querySelectorAll('div#tblprp table tr[onmouseover]')[0].parentNode.children[0];
    var referralRows = document.querySelectorAll('div#tblprp tr[onmouseover]');
    var tmp_currentRow;

    var colCount = document.querySelectorAll('div#tblprp td[colspan]')[1].getAttribute('colspan');

    var colIndexes = {
      refID: 3,
      refSince: 5
    };
    var tmp_referralsData = JSON.parse(localStorage.getItem('referrals'));
    console.info(tmp_referralsData);
  }
};

if(currentPage.pageCode.match(/referralListings_Rented/))
{
  widenPages.referralListings();


  var settings = {};
  var headerRow = document.querySelectorAll('div#tblprp table tr[onmouseover]')[0].parentNode.children[0];
  var referralRows = document.querySelectorAll('div#tblprp tr[onmouseover]');
  var tmp_currentRow;

  var colCount = document.querySelectorAll('div#tblprp td[colspan]')[1].getAttribute('colspan');

  var colIndexes = {
    refID: 3,
    refSince: 5
  };
  var tmp_referralsData = JSON.parse(localStorage.getItem('referrals'));
  console.info(tmp_referralsData);


  //referralListings_columns.init();
  referralListings_columns.mainLoop();

//  referralListingsNewColumnsTest();
  addClickStatsToGoldenGraph();

}

if(currentPage.pageCode.match(/accSummary/i))
{
  widenPages.accountSummary();
}


if(currentPage.pageCode.match(/viewAdvertisementsPage/i))
{
  var adCountData = getPref('ownAdCountTally',{}, { prefType: 'JSON' });
  insertAdCounterBox(0, adCountData, {});
}


function insertSidebar()
{
  // Function which inserts the 'Statistics Sidebar' to the referral statistics page

  // Location to insert the sidebar (right hand side)
  var locationToInsertSidebar = {
    right: docEvaluate("//td[@width='729']").snapshotItem(0).parentNode,
    left: document.body.querySelectorAll('.verde')[0].parentNode.parentNode.parentNode.parentNode.parentNode
  };


  // Time periods for the statistics sidebar where:
  // 0=today, 1=1day ago, 14=14days ago etc
  // [
  //    [starting day, ending day],
  //    [next time periods....],
  //    [another time period....],
  //    [etc..]
  // ]
  var sidebarTimePeriods = [[0,0],[1,1],[0,6],[1,6],[0,9],[1,9]];
  var tmp_dataSet = JSON.parse(localStorage.getItem('graphData'));
  var tmp_currentDataset;

  var sidebarData = {};
  var currentSidebarTimePeriod;
  var showProjected;

  var tmp_sum = [], tmp_currentValue = [], tmp_average = [];
  var tmp_currentDate;
  var tmp_foobar;

  var dataIsComplete = false;


  var tmp_foo = document.querySelectorAll('span.f_b');

  sidebarData.projectedClicks = {};
  sidebarData.projectedClicks['Rented'] = (currentUser.numberOfRefs.Rented * parseFloat(tmp_foo[4].textContent));
  sidebarData.projectedClicks['Direct'] = (currentUser.numberOfRefs.Direct * parseFloat(tmp_foo[2].textContent));
  sidebarData.projectedClicks['Total'] = (sidebarData.projectedClicks['Rented'] + sidebarData.projectedClicks['Direct']);

  console.info('sidebarData.projectedClicks = ',sidebarData.projectedClicks);

  sidebarData.projectedIncome = {};
  sidebarData.projectedIncome['Rented'] = (sidebarData.projectedClicks['Rented'] * currentUser.rentedReferralClickValue);
  sidebarData.projectedIncome['Direct'] = (sidebarData.projectedClicks['Direct'] * currentUser.directReferralClickValue);
  sidebarData.projectedIncome['Total'] = (sidebarData.projectedIncome['Rented'] + sidebarData.projectedIncome['Direct']);

  console.info('sidebarData.projectedIncome = ',sidebarData.projectedIncome);

  // // NOW CREATE THE ACTUAL SIDEBAR ////
  if(document.getElementById("sidebarContainer")) {
    document.getElementById("sidebarContainer").parentNode.removeChild(document.getElementById("sidebarContainer"));
  }

  var sidebarContainer = document.createElement("div");
  sidebarContainer.id = "sidebarContainer";

  GM_addStyle("#sidebarContainer { background-color:#FFFFFF; background-repeat:no-repeat; border:1px solid #AAAAAA; margin-left:5px; padding:0 10px 15px 8px; vertical-align:top; width:182px; }" +
      ".leftSide { position: inline-block; opacity: 1; }" +
//      ".rightSide { position: fixed; right: 2px; top:117px; opacity: 0.5; }" +
      ".rightSide { position: relative; right: 2px; top:0; }" +
      ".sidebarContent { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: x-small !important; }" +
      ".sidebarHeader { display:block; font-size:1.1em; text-align:center; } " +
      ".sidebarDetails { font-size: x-small; margin-left: 5px; } " +
      "h4 { color: #444; margin-top: 10px; margin-bottom:2px } " +
      "h5 { margin-top: 7px; margin-bottom:2px; margin-left:2px; } " +
      "h6 { font-size: xx-small !important; margin-top: 2px; margin-bottom:2px } " +
      ".h5_subHead { margin-top:2px; font-size:xx-small; } " +
      ".bold { font-weight: bold; } " +
      ".grey { color: #aaa; }");


  //Functions to quickly decide if info should be shown
  function showInfo(arg_toDisplay, arg_refType) { return (0 < currentUser.numberOfRefs[arg_refType]) ? arg_toDisplay : ''; }
  /*Show if user has rented referrals*/
  function SIRR(arg_toDisplay) { return (0 < currentUser.numberOfRefs.Rented) ? arg_toDisplay : ''; }
  /*Show if user has direct referrals*/
  function SIDR(arg_toDisplay) { return (0 < currentUser.numberOfRefs.Direct) ? arg_toDisplay : ''; }
  /*Show if user has referrals*/
  function SIR(arg_toDisplay) { return (0 < currentUser.numberOfRefs.Direct || 0 < currentUser.numberOfRefs.Rented) ? arg_toDisplay : ''; }

  function outputIfExists(arg_varToOutput,arg_textToDisplayOtherwise)
  {
    try { return arg_varToOutput; }
    catch(e) { return arg_textToDisplayOtherwise; }
  }


  var tmp = "";
  tmp += "<span class='sidebarContent'>";
  tmp += "<span class='sidebarHeader'>";
  tmp += "<h4 class='bold'>"+tl8('Statistics Summary')+"</h4>";
  tmp += "<i>"+tl8('Rented')+": " + currentUser.numberOfRefs.Rented + " / "+tl8('Direct')+": " + currentUser.numberOfRefs.Direct + "</i><br>";
  tmp += "<i>"+tl8('Total')+": " + (currentUser.numberOfRefs.Rented + currentUser.numberOfRefs.Direct) + "</i>";
  tmp += " </span>";


  for(var i=0; i < sidebarTimePeriods.length; i++)
  {
    currentSidebarTimePeriod = sidebarTimePeriods[i];

    /**
     * CHECK IF THE CURRENTLY SELECTED TIME PERIOD IS VALID
     * IF NOT, CONTINUE TO THE NEXT SIDEBAR TIME PERIOD
     **/
    if(!(0 <= currentSidebarTimePeriod[0]) || !(0 <= currentSidebarTimePeriod[1])) {
      console.info("ERROR!\n\n", "Sidebar Timeperiod #" + i + ' is not numerical. Moving onto next time period');
      continue;
    }
    if(currentSidebarTimePeriod[0] > currentSidebarTimePeriod[1]) {
      console.info("Error!\n\n", "Sidebar Timeperiod #" + i + ' is not in the correct order (end day is earlier than the start day). Moving onto next time period');
      continue;
    }
    //Default showing the projected values for the current time period to false and only enable it if required
    showProjected = false;

    //Fix the order of the time periods if the order is malformed
    if(currentSidebarTimePeriod[0] <= currentSidebarTimePeriod[1])
    {
      startDay = currentSidebarTimePeriod[0];
      endDay = currentSidebarTimePeriod[1];
    } else {
      startDay = currentSidebarTimePeriod[1];
      endDay = currentSidebarTimePeriod[0];
    }


    for(var j in tmp_dataSet)
    {
      if(tmp_dataSet.hasOwnProperty(j)){

        var tmp_headerValue = graphShortCodeToReadableDescription(j);
        tmp_currentDataset = tmp_dataSet[j][tmp_headerValue];


//        console.group();
        if(!sidebarData[j]) { sidebarData[j] = {}; }
//        console.info('j: ',j,'\n','sidebarData[j]: ',sidebarData[j]);
        for(var m=startDay; m<=endDay; m++)
        {
          tmp_currentDate = dates_array[m];

          if("undefined" !== typeof tmp_currentDataset[tmp_currentDate]) {
            tmp_currentValue = tmp_currentDataset[tmp_currentDate];
          }
          else
          {
            //Data is missing therefore mark it as incomplete
            dataIsComplete = true;
          }


          tmp_sum[m] = tmp_sum[m-1] + tmp_currentValue || tmp_currentValue;
          tmp_average[m] = tmp_sum[m] / (m+1);

          sidebarData[j][tmp_currentDate] = {
            'value': tmp_currentValue,
            'sum': tmp_sum[m],
            'avg': tmp_average[m]
          };
          //          console.info('JSON.stringify(dataBarData['+tmp_currentDate+']) = '+JSON.stringify(dataBarData[tmp_currentDate]));
        }
//        console.groupEnd();
      }
    }

//    console.info('sidebarData = ',sidebarData);

    var header = tl8("Totals between ") + startDay + tl8(" Days Ago and ") + (endDay+1) + tl8(" Days Ago");

    if(0 == startDay) {
      header = tl8("The last ") + (endDay+1) + tl8(" Days <small>(incl. Today)</small>");
    }
    if(1 == startDay) {
      header = tl8("The last ") + (endDay+1) + tl8(" Days <small>(excl. Today)</small>");
    }

    if(startDay == endDay) {
      if(0 == endDay) { header = tl8("Today Only"); showProjected = true; }
      else if(1 == endDay) { header = tl8("Yesterday Only"); }
      else { header = startDay + tl8("Days Ago"); }
    }
    var numberOfDays = (endDay - startDay) + 1;

    var tmp_income = (sidebarData['rentedClicks'][dates_array[endDay]].sum * currentUser.rentedReferralClickValue) + (sidebarData['directClicks'][dates_array[endDay]].sum * currentUser.directReferralClickValue);
    var tmp_income_inclOwnClicks = tmp_income + (sidebarData['personalClicks'][dates_array[endDay]].sum * currentUser.ownClickValue);
    var tmp_expenses = sidebarData['recycleCost'][dates_array[endDay]].sum +
        sidebarData['renewalCost'][dates_array[endDay]].sum +
        sidebarData['autopayCost'][dates_array[endDay]].sum +
        (numberOfDays * Neobux.accountDefaults['goldenPackCost'][currentUser.accountType.verbose] / 365);


    tmp += "<h5 class='bold grey'>[ "+header+" ]</h5>";
    if(!dataIsComplete) {
      tmp += "<span style='font-colour:pink;'>" + tl8('Incomplete') + "</span><br>";
    }
    tmp += "<span class='bold h5_subHead'>&nbsp; - "+tl8('Net')+" : $" + (tmp_income-tmp_expenses).toFixed(3) + " / $"+ (tmp_income_inclOwnClicks - tmp_expenses).toFixed(3) +"</span>";
    tmp += "<hr width= '155px' height='1px' color='#cccccc'/>";

    tmp += "<h6 title='"+tl8('Details about your income sources for ')+header.toLowerCase()+"'> + Income</h6>";
    tmp += "<div class='sidebarDetails'>";
    tmp += "- "+tl8('Personal Clicks')+": " + sidebarData['personalClicks'][dates_array[endDay]].sum + " / $"+(sidebarData['personalClicks'][dates_array[endDay]].sum * currentUser.ownClickValue).toFixed(3)+"<br>";
    tmp += SIRR("- "+tl8('Rented Clicks')+": " + sidebarData['rentedClicks'][dates_array[endDay]].sum + " / $"+(sidebarData['rentedClicks'][dates_array[endDay]].sum * currentUser.rentedReferralClickValue).toFixed(3) + "<br>");
    tmp += SIDR("- "+tl8('Direct Clicks')+": " + sidebarData['directClicks'][dates_array[endDay]].sum + " / $"+(sidebarData['directClicks'][dates_array[endDay]].sum * currentUser.directReferralClickValue).toFixed(3) + "<br>");
    tmp += "</div>";

    if(showProjected)
    {
      tmp += "<h6 title='"+tl8('Details about your income sources for ')+header.toLowerCase()+tl8(', based on the projected values')+"'> + "+tl8('Projected Income')+"</h6>";
    tmp += "<div class='sidebarDetails'>";
    tmp += SIRR("- "+tl8('Rented Clicks')+": " + sidebarData['projectedClicks'].Rented.toFixed(2) + " / $"+(sidebarData['projectedIncome'].Rented).toFixed(3) + "<br>");
    tmp += SIDR("- "+tl8('Direct Clicks')+": " + sidebarData['projectedClicks'].Direct.toFixed(2) + " / $"+(sidebarData['projectedClicks'].Direct).toFixed(3) + "<br>");
      tmp += "</div>";
    }

    tmp += "<h6 title='"+tl8('Details about your expenses for ')+header.toLowerCase()+"'> + "+tl8('Expenses')+"</h6>";
    tmp += "<div class='sidebarDetails'>";
    tmp += "- "+tl8('Recycles')+": $" + sidebarData['recycleCost'][dates_array[endDay]].sum.toFixed(2) + " / " + (sidebarData['recycleCost'][dates_array[endDay]].sum / currentUser.recycleFee).toFixed(0) + "<br>";
    tmp += "- "+tl8('Extensions')+": $" + sidebarData['renewalCost'][dates_array[endDay]].sum.toFixed(2) + "<br>";
    tmp += "- "+tl8('Autopay')+": $" + sidebarData['autopayCost'][dates_array[endDay]].sum.toFixed(3) + " / " + (sidebarData['autopayCost'][dates_array[endDay]].sum / currentUser.autopayFee) + "<br>";
    tmp += "- "+tl8('Golden Pack')+": $" + (numberOfDays * currentUser.accountType['cost'] / 365).toFixed(3) + "<br>";
    tmp += "</div>";

    tmp += "<h6 title='Some statistics for clicks made "+header.toLowerCase()+"'> + Stats</h6>";
    tmp += "<div class='sidebarDetails'>";
    tmp += SIRR("- "+tl8('Rented Average')+": " + (sidebarData['rentedClicks'][dates_array[endDay]].sum / (currentUser.numberOfRefs['Rented'] * numberOfDays)).toFixed(3) + "<br>");
    tmp += SIRR("- "+tl8("Rented 'Real' Average")+": " + "---" + "<br>");
    tmp += SIDR("- "+tl8('Direct Average')+": " + (sidebarData['directClicks'][dates_array[endDay]].sum / (currentUser.numberOfRefs['Direct'] * numberOfDays)).toFixed(3) + "<br>");
    tmp += SIDR("- "+tl8("Direct 'Real' Average")+": " + "---" + "<br>");
    tmp += SIRR(SIDR("- "+tl8('Total Average')+": " + ((sidebarData['rentedClicks'][dates_array[endDay]].sum + sidebarData['directClicks'][dates_array[endDay]].sum)/((currentUser.numberOfRefs['Rented'] + currentUser.numberOfRefs['Direct']) * numberOfDays)).toFixed(3) + "<br>"));
    tmp += SIRR(SIDR("- "+tl8("Total 'Real' Average")+": " + "---" + "<br>"));
    tmp += "</div>";

    tmp += "<h6 title='"+tl8('Summary of Income / Projected Income / Expenses / Profit for ')+header.toLowerCase()+tl8(' [nb: the second value includes an estimate of your personal clicks]')+"'> + "+tl8('Summary Totals')+"</h6>";
    tmp += "<div class='sidebarDetails'>";
    tmp += "- "+tl8('Gross Income')+": $" + tmp_income.toFixed(3) + " / $" + tmp_income_inclOwnClicks.toFixed(3) + "<br>";
    if(showProjected) { tmp += "- "+tl8('Projected Gross Income')+": $" + (sidebarData['projectedIncome'].Total.toFixed(3)) + "<br>"; }
    tmp += "- "+tl8('Expenses')+": $" + (tmp_expenses).toFixed(3) + "<br>";
    tmp += "- "+tl8('Net Income')+": $" + (tmp_income-tmp_expenses).toFixed(3) + " / $"+ (tmp_income_inclOwnClicks - tmp_expenses).toFixed(3) + "<br>";
    tmp += "</div>";
  }

  tmp += "</span>";

  sidebarContainer.innerHTML = tmp;

  // // *** INSERT STATISTICS SUMMARY INTO PAGE *** ////
  var wrapperTD = document.createElement('td');
  wrapperTD.setAttribute('valign','top');
  wrapperTD.appendChild(sidebarContainer);

  var statsSidebarPosition = getPref('statsSidebarPosition','right',{ prefType: 'text' });
  console.info('statsSidebarPosition = ',statsSidebarPosition,'\n','locationToInsertSidebar[statsSidebarPosition] = ',locationToInsertSidebar[statsSidebarPosition]);

  if('right' === statsSidebarPosition) {
//    sidebarContainer.setAttribute('onmouseover','document.getElementById("sidebarContainer").style.opacity = "1";');
//    sidebarContainer.setAttribute('onmouseout','document.getElementById("sidebarContainer").style.opacity = "0.5";');
  }

  sidebarContainer.setAttribute('class',statsSidebarPosition+'Side');
  locationToInsertSidebar[statsSidebarPosition].appendChild(wrapperTD);


}


if(currentPage.pageCode.match(/referralStatistics/))
{
  try
  {
    insertSidebar();
  } catch(e)
  {
    alert("ERROR!\n\n  insertSidebar(); failed\n\n"+e);
  }
}

  try
  {
    widenPages.generic();
  } catch(e)
  {
    alert("ERROR!\n\n widenPages.generic(); failed\n\n"+e);
  }




if(tl8_counter>0){
  console.info("NOTE!!\n\nUntranslated strings on this page!!");
  console.info(localStorage.getItem('translationStringsNeeded'));
}


console.info(getPref('neobuxLanguageCode', 'EN', {prefType: 'string'}));