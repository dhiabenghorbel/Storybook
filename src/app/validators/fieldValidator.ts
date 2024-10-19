import { validate } from "../../stories/Input/Validation/Validation.tsx"
import { AppError } from "../models/IError.ts";

export const isValidRegEx = (value: any, pattern?: string, required?: boolean): boolean => {
  if (!required && !value) return true;
  if ((required && value === "") || (required && !value)) return false;
  if (value && pattern) return new RegExp(pattern).test(value);
  return true;
};

export const isValidArrayDate = (date: Array<any>) => {
  if (date[0] || date[1]) {
    return true;
  }
  return false;
};

export const isValidDate = (value: any, required?: boolean): boolean => {
  if (!required && !value) return false;
  if ((required && value === "") || (required && !value)) return false;
  if (value)
    return (
      new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/).test(value) ||
      new RegExp(/^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/).test(value) ||
      new RegExp(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/).test(value) ||
      new RegExp(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/).test(value)
    );
  return false;
};

export const isValidEmail = (value: any, required?: boolean): boolean => {
  if (!required && !value) return true;
  if ((required && value === "") || (required && !value)) return false;
  if (value) {
    return new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(String(value).toLowerCase());
  }
  return true;
};

export const isValidPercentage = (value: any, required?: boolean): boolean => {
  if (!required && !value) return true;
  if ((required && value === "") || (required && !value)) return false;
  if (value) {
    return new RegExp(/^100$|^[0-9]{1,2}$|^[0-9]{1,2}\.[0-9]{1,2}$/).test(String(value).toLowerCase());
  }
  return true;
};

export const isValidNumber = (value: any, min?: string | number | undefined, max?: string | number | undefined, regex?: string, required?: boolean): boolean => {
  if (!required && !value) return true;
  if ((required && value === "") || (required && !value)) return false;
  const isNumber = new RegExp(/^[0-9.]*$/).test(value);
  if (!isNumber) return false;
  if (isNumber && min && max) return min <= parseFloat(value) && parseFloat(value) <= max;
  if (isNumber && min) return min <= parseFloat(value);
  if (isNumber && max) return parseFloat(value) <= max;
  if (isNumber && regex) return new RegExp(regex).test(value);
  return true;
};

export const isValidTelephoneNumber = (value: any, required: boolean | undefined, length: string) => {
  let onError = required ? true : false;
  let message = required ? "Field is required" : "Invalid format";
  const isNumber = new RegExp(/^[0-9.]*$/).test(value);

  if (value) {
    if (value.length > 0) {
      if (value.length === parseInt(length) && isNumber) {
        onError = false;
      } else {
        onError = true;
        message = !isNumber ? "Invalid format" : "telephone-validation-length";
      }
    }
  }

  return { onError, message };
};

export const defaultValidation = (value: any, required?: boolean): boolean => {
  if (!value && !required) return true;
  if ((required && value === "") || (required && !value)) return false;
  return true;
};

export const checkError = (
  type: string,
  value: any,
  required?: boolean,
  min?: string | number | undefined,
  max?: string | number | undefined,
  regex?: string,
  readOnly?: boolean,
  validationType?: string
): AppError => {
  let onError: boolean = false;
  let message: string = "Unexpected error";
  switch (type) {
    case "text":
      if (validationType && validationType !== "text") onError = validate(value, validationType, required, min, max, regex).currentOnError;
      else onError = !isValidRegEx(value, regex, required);
      if (validationType && validationType !== "text") message = validate(value, validationType, required, min, max, regex).currentMessage;
      else if (value && value.length > 0) message = "Invalid format";
      else message = "Field is required";
      break;
    case "number":
      onError = !isValidNumber(value, min, max, regex, required);
      if (value && value.length > 0) message = "validation-numeric";
      else message = "Field is required";
      break;
    case "percent":
      onError = !isValidPercentage(value, required);
      if (value && value.length > 0) message = "validation-percentage";
      else message = "Field is required";
      break;
    case "email":
      onError = !isValidEmail(value, required);
      message = value && value.length > 0 ? " must be a valid email address" : "Field is required";
      break;
    default:
      onError = validate(value, validationType || type, required, min, max, regex).currentOnError;
      message = validate(value, validationType || type, required, min, max, regex).currentMessage;
      break;
  }
  if (readOnly) onError = false;
  return { onError, message };
};

export const isValidESPAFI = (value: string, required: boolean | undefined) => {
  let onError = required && !value ? true : false;
  let message = required && !value ? "Field is required" : "Uppercase only without accents";

  let validate = true;
  if (value) validate = new RegExp("^[A-Z ,]*$").test(value);
  onError = onError || !validate;

  return { onError, message };
};

export const isValidNifNie = (value: string, required: boolean | undefined) => {
  let onError = false;
  let message = required && !value ? "Field is required" : "Invalid format";

  if (value && value.length > 0 && (value.length <= 8 || value.length >= 10)) {
    message = "Invalid format";
  }

  const validate = (dni: string) => {
    let number: number = 0;
    let newNumber: number;
    let character: string;
    let checkedCharacter: string;
    const regEx: string = "^[0-9]{8,8}[A-Za-z]|[XYZ]{1}[0-9]{7}[A-Za-z]$";
    const nieFirstCharRegEx: string = "^[XYZ]{1}$";

    //Check if it has a correct NIF/NIE format
    if (new RegExp(regEx).test(dni)) {
      const firstChar = dni.substring(0, 1);
      //Check if first char is a letter or a number (it will depend if it is a NIE or a NIF)
      if (new RegExp(nieFirstCharRegEx).test(firstChar)) {
        const restOfNumbers = dni.substring(1, dni.length - 1);
        if (firstChar === "X") number = parseInt("0" + restOfNumbers);
        if (firstChar === "Y") number = parseInt("1" + restOfNumbers);
        if (firstChar === "Z") number = parseInt("2" + restOfNumbers);
      } else {
        number = parseInt(dni.substring(0, dni.length - 1));
      }

      character = dni.substr(dni.length - 1, 1);
      newNumber = number % 23;
      checkedCharacter = "TRWAGMYFPDXBNJZSQVHLCKET";
      checkedCharacter = checkedCharacter.substring(newNumber, newNumber + 1);

      if (checkedCharacter !== character.toUpperCase()) {
        onError = true;
        message = "validation-letter-nie-nif";
      } else {
        onError = false;
      }
    } else {
      onError = true;
    }
  };

  validate(value);
  return { onError, message };
};

export const isValidateDNI = (value: string, required: boolean | undefined) => {
  let onError = required ? true : false;
  let message = required ? "Field is required" : "Invalid format";

  let dni_regex = /^\d{8}[a-zA-Z]$/;

  if (dni_regex.test(value) === true) {
    let number = value.substr(0, value.length - 1);
    let lett = value.substr(value.length - 1, 1);
    number = parseFloat(number) % 23;
    let letter = "TRWAGMYFPDXBNJZSQVHLCKET";
    letter = letter.substring(number, number + 1);
    if (letter !== lett.toUpperCase()) {
      onError = true;
      message = "validation-letter-dni";
    } else {
      onError = false;
    }
  } else if (value) {
    onError = true;
    message = "Invalid format";
  }
  return { onError, message };
};

export const isValidIban = (value: string, required: boolean | undefined) => {
  const codeLengths: { [key: string]: number } = {
    AD: 24,
    AE: 23,
    AT: 20,
    AZ: 28,
    BA: 20,
    BE: 16,
    BG: 22,
    BH: 22,
    BR: 29,
    CH: 21,
    CR: 21,
    CY: 28,
    CZ: 24,
    DE: 22,
    DK: 18,
    DO: 28,
    EE: 20,
    ES: 24,
    FI: 18,
    FO: 18,
    FR: 27,
    GB: 22,
    GI: 23,
    GL: 18,
    GR: 27,
    GT: 28,
    HR: 21,
    HU: 28,
    IE: 22,
    IL: 23,
    IS: 26,
    IT: 27,
    JO: 30,
    KW: 30,
    KZ: 20,
    LB: 28,
    LI: 21,
    LT: 20,
    LU: 20,
    LV: 21,
    MC: 27,
    MD: 24,
    ME: 22,
    MK: 19,
    MR: 27,
    MT: 31,
    MU: 30,
    NL: 18,
    NO: 15,
    PK: 24,
    PL: 28,
    PS: 29,
    PT: 25,
    QA: 29,
    RO: 24,
    RS: 22,
    SA: 24,
    SE: 24,
    SI: 19,
    SK: 24,
    SM: 27,
    TN: 24,
    TR: 26
  };
  let onError = required ? true : false;
  let message = required ? "Field is required" : "Invalid format";

  const validate = (code: string[]) => {
    let digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, letter => {
      return String(letter.charCodeAt(0) - 55);
    });

    return mod97(digits); // final check
  };

  const mod97 = (string: string) => {
    let checksum: number = parseInt(string.slice(0, 2));
    let fragment: string;
    for (var offset = 2; offset < string.length; offset += 7) {
      fragment = String(checksum) + string.substring(offset, offset + 7);
      checksum = parseInt(fragment, 10) % 97;
    }

    return checksum;
  };

  //Check input
  if (value && value !== "") {
    let valueToUpperCase = String(value).toUpperCase();
    //Check hasEmptyChars
    //TODO: Change empty characters validation as "enter" or /n are not detected as empty spaces/characters
    if (!valueToUpperCase.match(" ")) {
      let iban = valueToUpperCase.replace(/[^A-Z0-9]/g, ""); // keep only alphanumeric characters
      // Check length
      if (iban.length > 0) {
        const upperChaCharacters = value.match(/^[A-Z]{2}/);
        const countryCharacters = iban.match(/^[A-Z]{2}/);
        //Check country code characters
        if (upperChaCharacters && countryCharacters && countryCharacters.length > 0) {
          const countryCode: string = countryCharacters[0];
          onError = true;
          message = "validation-iban-length";
          //Check country code exists
          if (countryCode && codeLengths[countryCode]) {
            //Check length of iban with country code
            if (iban.length === codeLengths[countryCode]) {
              onError = true;
              message = "Invalid format";
              let code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/); // match and capture (1) the country code, (2) the check digits, and (3) the rest
              //Check syntax and checksum iban validation
              if (code) {
                onError = true;
                message = "validation-iban";
                //Final check
                if (validate(code) === 1) {
                  onError = false;
                }
              }
            } else {
              //Check country code length and drop a message if number of characters needed for that country code are less/more
              if (codeLengths[countryCode] > iban.length) {
                onError = true;
                message = "validation-iban-country-code-less-digits";
              } else {
                onError = true;
                message = "validation-iban-country-code-more-digits";
              }
            }
          } else {
            onError = true;
            message = "validation-iban-country-code-valid";
          }
        } else {
          onError = true;
          message = "validation-iban-letters";
        }
      }
    } else {
      onError = true;
      message = "validation-iban-empty-characters";
    }
  }
  return { onError, message };
};

export const isValidateNIE = (value: string, required: boolean | undefined) => {
  let onError = required ? true : false;
  let message = required ? "Field is required" : "Invalid format";
  let nie_regex = "^[XYZ]([0-9]{7})([A-Z])$";
  let number: number = 0;
  let newNumber: number;
  let character: string;
  let checkedCharacter: string;

  if (value && value.match(nie_regex)) {
    const firstChar = value.substring(0, 1);
    const restOfNumbers = value.substring(1, value.length - 1);
    if (firstChar === "X") number = parseInt("0" + restOfNumbers);
    if (firstChar === "Y") number = parseInt("1" + restOfNumbers);
    if (firstChar === "Z") number = parseInt("2" + restOfNumbers);
    character = value.substr(value.length - 1, 1);
    newNumber = number % 23;
    checkedCharacter = "TRWAGMYFPDXBNJZSQVHLCKET";
    checkedCharacter = checkedCharacter.substring(newNumber, newNumber + 1);
    if (checkedCharacter !== character.toUpperCase()) {
      onError = true;
      message = "NIE-Non-valid";
    } else {
      onError = false;
    }
  } else if (value) {
    onError = true;
    message = "Invalid format";
  }

  return { onError, message };
};

export const isValidSSNumber = (value: string, required: boolean | undefined) => {
  let onError = required ? true : false;
  let message = required ? "Field is required" : "Invalid format";
  // SSNUMBER TO CHECK - 28 12345678 40

  const validate = (provinceNumbers: string, secuentialNumbers: string, controlNumbers: string) => {
    let firstTenChars: string = String(provinceNumbers) + String(secuentialNumbers);
    if (parseInt(secuentialNumbers) < 10000000) {
      //Get first 10 characters (provinceNumbers{2 digits} + secuentialNumber{8 digits});
      firstTenChars = (parseInt(secuentialNumbers) + parseInt(provinceNumbers) * 10000000).toString();
    }
    //First 10 chars mod 97
    const remainMod97: number = parseInt(firstTenChars) % 97;
    //If remainMod97 result is below 10, we add a 0 in front of the number (1 would be 01), if not.. we use the current value of remainMod97
    const controlNumbersToTest: string = (String(remainMod97).length > 0 && String(remainMod97).length < 2 ? "0" : "") + String(remainMod97);
    //Final check - calculated control numbers must be equal to control number (Last 2 digits of the whole number), which is received as "controlNumbers"
    controlNumbersToTest === controlNumbers ? (onError = false) : (message = "validation-ssnumber");
  };

  //Check input
  if (value && value !== "") {
    //Check if value length is not 0
    if (value.length > 0) {
      message = "validation-ssnumber-empty-characters";
      onError = true;
      //Check if has empty chars /TODO: Change empty characters validation as "enter" or /n are not detected as empty spaces/characters
      if (!value.match(" ")) {
        message = "validation-ssnumber-length";
        //Check length of spanish ss number
        if (value.length === 12) {
          let formattedValues = value.match(/^([0-9]{2})([0-9]{8})([0-9]{2})$/); // match and capture (1) the province number, (2) the secuential number of the person, and (3) the control digits
          message = "validation-ssnumber-numeric";
          if (formattedValues && formattedValues.length > 0) {
            validate(formattedValues[1], formattedValues[2], formattedValues[3]);
          }
        }
      }
    }
  }

  return { onError, message };
};

export const isValidTextAreaLength = (value: string, required: boolean | undefined, length: string | number) => {
  let onError = required ? true : false;
  let message = required ? "Field is required" : "Invalid format";

  if (value) {
    if (value.length > 0) {
      if (value.length > length) {
        onError = true;
        message = "textarea-validation-length";
      } else {
        onError = false;
      }
    }
  }
  return { onError, message };
};

export const isValidCc = (value: string, required: boolean | undefined) => {
  let onError = required ? true : false;
  let message = required ? "Field is required" : "Invalid format";
  if (validate(value)) {
    onError = false;
  } else if (!value && required) {
    onError = true;
    message = "Field is required";
  } else {
    onError = true;
    message = "Invalid format";
  }

  return { onError, message };
};

export const isValidSeguridadSocial = (value: string, required: boolean | undefined) => {
  function correctSS(ssNumber: any) {
    function getSum(num: any) {
      return num[9] * 2 + num[8] * 3 + num[7] * 5 + num[6] * 7 + num[5] * 11 + num[4] * 13 + num[3] * 17 + num[2] * 19 + num[1] * 23 + num[0] * 29;
    }
    const finalNum = 9 - (getSum(ssNumber) % 10);
    return finalNum === ssNumber[10];
  }

  let onError = required ? true : false;
  const isNumber = new RegExp(/^[0-9.]*$/).test(value);
  let message = required ? "Field is required" : "Invalid format";
  if (value) {
    if (value.length === 11 && value[0] === "1" && isNumber && correctSS(value)) {
      onError = false;
    } else {
      onError = true;
      message = "validation-ssnumber-incorrect";
    }
  }

  return { onError, message };
};
