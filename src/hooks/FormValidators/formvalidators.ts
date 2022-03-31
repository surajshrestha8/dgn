export const nameValidator = (value: string) =>
  !value
    ? "Title is required"
    : "";
    
export const descriptionValidator = (value: string) => 
        !value
        ? "Description is required"
        : ""

export const DateValidator = (value: Date) => 
     !value
     ? "Date required"
     : ""

export const genderValidator = (value: string) =>
    !value
    ? "Select a gender"
    :""

export const dropDownValidator = (value: string) => 
 !value
 ? "Select a city"
 : ""

export const dropDownCountryValidator = (value: string) => 
    !value ? "Select a country" : ""

const emailRegex : RegExp = new RegExp(/\S+@\S+\.\S+/);
  export const emailValidator = (value: string) => 
  !value ? "Enter email"
  : emailRegex.test(value) ? "" : "Enter valid email"

const nameRegex: RegExp = new RegExp(/[A-Z][a-z]{0,30}$/); 
const capitalRegex: RegExp = new RegExp(/[A-Z][A-Z]{0,30}$/);
const whiteSpaceRegex: RegExp = new RegExp(/\s/)
const numberRegex: RegExp = new RegExp(/\d/);
const characterRegex: RegExp = new RegExp(/^[-_/.,@#$!`~*()=+^]/);

export const firstNameValidator = (value:string) =>
!value ?  "Enter  name"
: whiteSpaceRegex.test(value) ? "Name should not contain white space"
: !nameRegex.test(value) ? "First letter should be capital"
: capitalRegex.test(value) ? "Only first letter must be capital" 
: numberRegex.test(value) ? "Name should not contain digits"
: characterRegex.test(value) ? "Name must not contain other characters"
: "" 

export const passwordValidator = (value: string) => 
  !value ? "Enter password"
  : value.length <= 8 ? "Password must be atleast 8 characters long"
  : !numberRegex.test(value) ? "Password must contain numbers"
  : ""
export const phoneNumberValidator = (value: string) => 
!value ? "Enter phone number"
: value.length > 10 ? "Phone number should be of 10 digits"
: value.length <10 ? "Phone number should not be less than 10 digits"
: ""
