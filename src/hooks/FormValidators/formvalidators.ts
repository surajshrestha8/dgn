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
