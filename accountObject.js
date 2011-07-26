function ACCOUNT(arg_accountType) {
  var accountTypes = [
    'Standard',
    'Golden',
    'Emerald',
    'Sapphire',
    'Platinum',
    'Diamond',
    'Ultimate',
    'Pioneer'
  ];

  if(0 <= accountTypes.indexOf(arg_accountType)){

  } else {
    // Don't know what to do with the given / unrecognised accountType so return false
    return false;
  }

  var bulkRenewalDiscounts = {
    15: 1.00, // 0% discount
    30: 0.95, // 5% discount
    60: 0.90, // 10% discount
    90: 0.82, // 18% discount
    150: 0.75, // 25% discount
    240: 0.70 // 30% discount
  };


  var tmp_NeobuxAccountTypeDetails = {
    'Standard': { 'minDaysForAutopay': 20, 'recycleCost': 0.07, 'goldenCost': 0,  'goldenPackCost': 0,    'rentalBandAdjuster': 0  },
    'Golden':   { 'minDaysForAutopay': 20, 'recycleCost': 0.07, 'goldenCost': 0,  'goldenPackCost': 0,    'rentalBandAdjuster': 0  },
    'Emerald':  { 'minDaysForAutopay': 20, 'recycleCost': 0.06, 'goldenCost': 90, 'goldenPackCost': 200,  'rentalBandAdjuster': -1 },
    'Sapphire': { 'minDaysForAutopay': 18, 'recycleCost': 0.07, 'goldenCost': 90, 'goldenPackCost': 200,  'rentalBandAdjuster': 0  },
    'Platinum': { 'minDaysForAutopay': 20, 'recycleCost': 0.06, 'goldenCost': 90, 'goldenPackCost': 400,  'rentalBandAdjuster': -1 },
    'Diamond':  { 'minDaysForAutopay': 14, 'recycleCost': 0.07, 'goldenCost': 90, 'goldenPackCost': 400,  'rentalBandAdjuster': 0  },
    'Ultimate': { 'minDaysForAutopay': 10, 'recycleCost': 0.04, 'goldenCost': 90, 'goldenPackCost': 800,  'rentalBandAdjuster': -3 },
    'Pioneer':  { 'minDaysForAutopay': 20, 'recycleCost': 0.07, 'goldenCost': 0,  'goldenPackCost': 0,    'rentalBandAdjuster': 0  }
  };

  var tmp_NeobuxAccountTypeDetails_Arrays = {
    //          [minDaysForAutopay, recycleCost, goldenCost', goldenPackCost, rentalBandAdjuster]
    'Standard': [20,  0.07, 0,   0,    0  ],
    'Golden':   [20,  0.07, 90,  0,    0  ],
    'Emerald':  [20,  0.06, 90,  200,  -1 ],
    'Sapphire': [18,  0.07, 90,  200,  0  ],
    'Platinum': [20,  0.06, 90,  400,  -1 ],
    'Diamond':  [14,  0.07, 90,  400,  0  ],
    'Ultimate': [10,  0.04, 90,  800,  -3 ],
    'Pioneer':  [20,  0.07, 0,   0,    0  ]
  };

  var accountDetails = {
    'minDaysForAutopay': tmp_NeobuxAccountTypeDetails_Arrays[arg_accountType][0],
    'recycleCost': tmp_NeobuxAccountTypeDetails_Arrays[arg_accountType][1],
    'goldenCost': tmp_NeobuxAccountTypeDetails_Arrays[arg_accountType][2],
    'goldenPackCost': tmp_NeobuxAccountTypeDetails_Arrays[arg_accountType][3],
    'rentalBandAdjuster': tmp_NeobuxAccountTypeDetails_Arrays[arg_accountType][4]
  };

  //accountDetails.autopayFee =


  /**
   * MUCH OF THIS IS DUPLICATE / REDUNDANT WHEN USED WITH tmp_NeobuxAccountTypeDetails
   **/
  var tmp_accountDefaults = {
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
    }
  };
  function getRenewalFees(arg_accountType, arg_numberOfRentedRefs, arg_lengthOfRenewal) {
    var tmp_rentingBand = Math.floor(arg_numberOfRentedRefs / 250) + tmp_NeobuxAccountTypeDetails[arg_accountType].rentalBandAdjuster;
    tmp_rentingBand = (0 < tmp_rentingBand) ? tmp_rentingBand : 0;

    var tmp_rentingCost = ((rentalBands[tmp_rentingBand].costOfRent / 30) * arg_lengthOfRenewal * bulkRenewalDiscounts[arg_lengthOfRenewal]).toFixed(2);

    return tmp_rentingCost;
  }

  function createRentalBands() {
    var rentalBands = [];
    var tmp_baseBandPrice = 0.20; //The lowest price band starts at $0.20
    var AUTOPAY_DISCOUNT = 0.85; // 15% discount when paying via autopay
    for (var i = 0; 8 > i; i++) {
      // Minimum number of referrals for this price band to apply:
      // Maximum number of referrals for this price band to apply:
      // Base cost of initial purchase of a single referral for 30days:
      // Cost of autopay:
      rentalBands[i] = {
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

    return rentalBands;
  }

  function createClickValues(arg_accountType) {

    function Object_merge(arg_oldObj, arg_newObj) {
      // Function which merges objects, appending the contents of arg_newObj to the existing object arg_oldObj
      // * Runs infinitely levels deep
      // * Does not completely overwrite the existing object's children, instead only overwrites /
      //      adds where it exists in the arg_newObj

      if ('object' !== typeof arg_oldObj) {
        errorLog("ERROR!\nObject_merge(arg_oldObj, arg_newObj)\n\n arg_oldObj is not an Object!", arguments);
        return -1;
      }
      if ('object' !== typeof arg_newObj) {
        errorLog("ERROR!\nObject_merge(arg_oldObj, arg_newObj)\n\n arg_newObj is not an Object!", arguments);
        return -1;
      }

      // Loop through nodes that exist in the new object and add/replace them to the existing/old object
      for (var newVar in arg_newObj) {
        switch (typeof arg_newObj[newVar])
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
            if ('merge' !== newVar) {
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
            errorLog('Error! Object_merge(arg_oldObj, arg_newObj);\nCannot detect type of arg_newObj' + newVar + arg_newObj[newVar] + typeof arg_newObj[newVar]);
        }
      }
      return arg_oldObj;
    }


    // Array to be tested against
    var clickValues_Array = {
      //          [ [ extended            ],  [ standard            ],  [ mini                ],  [ fixed               ],  [ fixed micro          ],  [ micro               ] ]
      //          [ [ own   [rent , dir  ]],  [ own   [rent , dir  ]],  [ own   [rent , dir  ]],  [ own   [rent , dir  ]],  [ own   [rent , dir   ]],  [ own   [rent  , dir  ]] ],
      "Standard": [ [0.015, [0.01 , 0.01 ]],  [0.01 , [0.005, 0.005]],  [0.005, [0    , 0    ]],  [0.001, [0    , 0    ]],  [0.001, [0.005, 0.0005]],  [0.001,  [0    , 0    ]] ],
      "Golden":   [ [0.020, [0.02 , 0.02 ]],  [0.01 , [0.01 , 0.01 ]],  [0.001, [0    , 0    ]],  [0.01 , [0.01 , 0.005]],  [0.001, [0    , 0     ]],  [0.005,  [0    , 0    ]] ],
      "Emerald":  [ [0.02 , [0.02 , 0.02 ]],  [0.012, [0.01 , 0.01 ]],  [0.001, [0    , 0    ]],  [0.012, [0.01 , 0.01 ]],  [0.001, [0    , 0     ]],  [0.005,  [0    , 0    ]] ],
      "Sapphire": [ [0.02 , [0.02 , 0.02 ]],  [0.012, [0.01 , 0.01 ]],  [0.001, [0    , 0    ]],  [0.012, [0.01 , 0.01 ]],  [0.001, [0    , 0     ]],  [0.005,  [0    , 0    ]] ],
      "Platinum": [ [0.02 , [0.02 , 0.02 ]],  [0.015, [0.01 , 0.01 ]],  [0.001, [0    , 0    ]],  [0.015, [0.01 , 0.01 ]],  [0.001, [0    , 0     ]],  [0.005,  [0    , 0    ]] ],
      "Diamond":  [ [0.02 , [0.02 , 0.02 ]],  [0.015, [0.01 , 0.01 ]],  [0.001, [0    , 0    ]],  [0.015, [0.01 , 0.01 ]],  [0.001, [0    , 0     ]],  [0.005,  [0    , 0    ]] ],
      "Ultimate": [ [0.02 , [0.02 , 0.02 ]],  [0.02 , [0.01 , 0.01 ]],  [0.001, [0    , 0    ]],  [0.02 , [0.01 , 0.01 ]],  [0.001, [0    , 0     ]],  [0.005,  [0    , 0    ]] ]
    };

    function getClickValues(arg_accountType, arg_clickValuesArray){
      var cmt = arg_clickValuesArray[arg_accountType];

      if(!cmt) { console.info('arguments = ',arguments); return false; }

      var clickValues = {
        'extended':   { 'value': cmt[0][0], 'commission': { 'rented': cmt[0][1][0], 'direct': cmt[0][1][1] } },
        'standard':   { 'value': cmt[1][0], 'commission': { 'rented': cmt[1][1][0], 'direct': cmt[1][1][1] } },
        'mini':       { 'value': cmt[2][0], 'commission': { 'rented': cmt[2][1][0], 'direct': cmt[2][1][1] } },
        'fixed':      { 'value': cmt[3][0], 'commission': { 'rented': cmt[3][1][0], 'direct': cmt[3][1][1] } },
        'fixedMicro': { 'value': cmt[4][0], 'commission': { 'rented': cmt[4][1][0], 'direct': cmt[4][1][1] } },
        'micro':      { 'value': cmt[5][0], 'commission': { 'rented': cmt[5][1][0], 'direct': cmt[5][1][1] } }
      };
      return clickValues;
    }

    return getClickValues(arg_accountType, clickValues_Array);
  }

  accountDetails.clickValues = createClickValues(arg_accountType);

  return accountDetails;
}



var currentUser = new ACCOUNT('Golden');

console.info(currentUser);