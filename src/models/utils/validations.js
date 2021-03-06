const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const namePattern = /^[a-zA-Z ]{2,30}$/;
const textareaPattern =/^[-èé() .+-@_a-zA-Z0-9]{3,500}$/;
const phonePattern = /^\+|00(?:[0-9] ?){6,14}[0-9]$/;
const capPattern = /^\d{5}$/;
/**
 * @help: https://regexr.com/3c53v
 *(?=.*\d)  should contain at least one digit
 * (?=.*[a-z]) should contain at least one lower case
 * (?=.*[A-Z])  should contain at least one upper case
 * [a-zA-Z0-9]{8,}  should contain at least 8 from the mentioned characters
 * (?=.*[0-9]) - Assert a string has at least one number;
 * (?=.*[!@#$%^&*]) - Assert a string has at least one special character.
 */

//const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{3,}$/;


export const validateEmail = (val) =>
  emailPattern.test(val)

export const validateName = (val) =>
  namePattern.test(val)

export const validatePassword = (val) =>
  passwordPattern.test(val)

export const validatePhone = (val) =>
  phonePattern.test(val)
export const validateCap = (val) =>
  capPattern.test(val)
export const validatetextarea = (val) =>
  textareaPattern.test(val)


