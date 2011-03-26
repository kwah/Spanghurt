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
clickValues['Emerald'].Standard.value = 0.012;
clickValues['Sapphire'].Standard.value = 0.012;
clickValues['Platinum'].Standard.value = 0.015;
clickValues['Diamond'].Standard.value = 0.015;
clickValues['Ultimate'].Standard.value = 0.02;



function TEST_clickValues()
{
  var tmp_output = '';
  var tmp_linebreak = '\n';

  for( var memberType in clickValues){
  if( clickValues.hasOwnProperty(memberType) ){
      tmp_output += tmp_linebreak+'[b]'+memberType+'[/b]'+tmp_linebreak;

      for( var clickType in clickValues[memberType]){
      if( clickValues[memberType].hasOwnProperty(clickType) ){
          tmp_output += '[i]'+clickType+'[/i]'+ ' = $' + clickValues[memberType][clickType].value + tmp_linebreak;
          tmp_output += '--Direct = $'+clickValues[memberType][clickType].commission.direct + tmp_linebreak;
          tmp_output += '--Rented = $'+clickValues[memberType][clickType].commission.rented + tmp_linebreak;
      }
      }
  }
  }

  //Copy pasting from an alert (as opposed to console.info()) preserves the linebreaks
  alert(tmp_output);
}

TEST_clickValues();
console.info(clickValues);