import { DatePicker } from '@progress/kendo-react-dateinputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { FieldRenderProps , FieldWrapper} from '@progress/kendo-react-form';
import { Input, RadioGroup, InputPropsContext } from '@progress/kendo-react-inputs';
import { Label, Error, Hint } from '@progress/kendo-react-labels';
import { Icon } from '@progress/kendo-react-common';
import classes from  './forminputs.module.css';


export const FormInput = (fieldRenderProps: FieldRenderProps) => {
    const {
      validationMessage,
      touched,
      label,
      id,
      valid,
      disabled,
      className,
      hint,
      type,
      optional,
      icon,
      ...others
    } = fieldRenderProps;
  
    const showValidationMessage: string | false | null =
       touched ? validationMessage : '';
    const showHint: boolean = !showValidationMessage && hint;
    const hintId: string = showHint ? `${id}_hint` : "";
    const errorId: string = showValidationMessage ? `${id}_error` : "";
    
    return (
      <FieldWrapper>
        <Label
          editorId={id}
          editorValid={valid}
          editorDisabled={disabled}
          optional={optional}
        >
          {label}
        </Label>
       
    
        <div className={"k-form-field-wrap"}>

          <div className={classes.inputbox}>
  
          <Icon name={icon} style={{alignSelf:'center',marginLeft:'5px'}} themeColor={"dark"} />
          <style>
            {
              `
              .myinput {
                border: none;
                outline: none;
              }
              .myinput:focus {
                border:none;
                outline: none;
                box-shadow: none;
                background-color: white;
              }
              `
            }
          </style>
          
          <Input
            valid={valid}
            type={type}
            id={id}
            className="myinput"
            disabled={disabled}
            ariaDescribedBy={`${hintId} ${errorId}`}
            {...others}
          />
          </div>
       
          {showHint && <Hint id={hintId}>{hint}</Hint>}
          {showValidationMessage && (
            <Error id={errorId}>{validationMessage}</Error>
          )}
        </div>
      </FieldWrapper>
    );
  };


  export const DescriptionInput = (fieldRenderProps: FieldRenderProps) => {
    const {
      validationMessage,
      touched,
      label,
      id,
      valid,
      disabled,
      hint,
      type,
      optional,
      ...others
    } = fieldRenderProps;
  
    const showValidationMessage: string | false | null =
      touched && validationMessage;
    const showHint: boolean = !showValidationMessage && hint;
    const hintId: string = showHint ? `${id}_hint` : "";
    const errorId: string = showValidationMessage ? `${id}_error` : "";
  
    return (
      <FieldWrapper>
        <Label
          editorId={id}
          editorValid={valid}
          editorDisabled={disabled}
          optional={optional}
        >
          {label}
        </Label>
        <div className={"k-form-field-wrap"}>
          <Input
            valid={valid}
            type={type}
            id={id}
            disabled={disabled}
            ariaDescribedBy={`${hintId} ${errorId}`}
            {...others}
          />
          {showHint && <Hint id={hintId}>{hint}</Hint>}
          {showValidationMessage && (
            <Error id={errorId}>{validationMessage}</Error>
          )}
        </div>
      </FieldWrapper>
    );
  };
  export const DatePickerInput = (fieldRenderProps: FieldRenderProps) => {
    const {
      validationMessage,
      touched,
      label,
      id,
      valid,
      disabled,
      hint,
      type,
      optional,
      ...others
    } = fieldRenderProps;
  
    const showValidationMessage: string | false | null =
      touched && validationMessage;
    const showHint: boolean = !showValidationMessage && hint;
    const hintId: string = showHint ? `${id}_hint` : "";
    const errorId: string = showValidationMessage ? `${id}_error` : "";
  
    return (
      <FieldWrapper>
        <Label
          editorId={id}
          editorValid={valid}
          editorDisabled={disabled}
          optional={optional}
        >
          {label}
        </Label>
        <div className={"k-form-field-wrap"}>
          <DatePicker
            valid={valid}
            id={id}
            disabled={disabled}
            ariaDescribedBy={`${hintId} ${errorId}`}
            {...others}
          />
          {showHint && <Hint id={hintId}>{hint}</Hint>}
          {showValidationMessage && (
            <Error id={errorId}>{validationMessage}</Error>
          )}
        </div>
      </FieldWrapper>
    );
  };
 
  export const RadioInput = (fieldRenderProps: FieldRenderProps) => {
    const {
      validationMessage,
      touched,
      label,
      id,
      valid,
      disabled,
      hint,
      type,
      optional,
      ...others
    } = fieldRenderProps;
  
    const showValidationMessage: string | false | null =
      touched && validationMessage;
    const showHint: boolean = !showValidationMessage && hint;
    const hintId: string = showHint ? `${id}_hint` : "";
    const errorId: string = showValidationMessage ? `${id}_error` : "";
  
    return (
      <FieldWrapper>
        <Label
          editorId={id}
          editorValid={valid}
          editorDisabled={disabled}
          optional={optional}
        >
          {label}
        </Label>
        <div className={"k-form-field-wrap"}>
          <RadioGroup
            valid={valid}
            disabled={disabled}
            ariaDescribedBy={`${hintId} ${errorId}`}
            {...others}
          />
          {showHint && <Hint id={hintId}>{hint}</Hint>}
          {showValidationMessage && (
            <Error id={errorId}>{validationMessage}</Error>
          )}
        </div>
      </FieldWrapper>
    );
  };
  export const DropdownInput = (fieldRenderProps: FieldRenderProps) => {
    const {
      validationMessage,
      touched,
      label,
      id,
      valid,
      disabled,
      hint,
      type,
      optional,
      ...others
    } = fieldRenderProps;
  
    const showValidationMessage: string | false | null =
      touched && validationMessage;
    const showHint: boolean = !showValidationMessage && hint;
    const hintId: string = showHint ? `${id}_hint` : "";
    const errorId: string = showValidationMessage ? `${id}_error` : "";
  
    return (
     
      <FieldWrapper>
        <Label
          editorId={id}
          editorValid={valid}
          editorDisabled={disabled}
          optional={optional}
        >
          {label}
        </Label>
     
        <div className={"k-form-field-wrap"}>
          <DropDownList
            valid={valid}
            disabled={disabled}
            ariaDescribedBy={`${hintId} ${errorId}`}
            {...others}
          />
          {showHint && <Hint id={hintId}>{hint}</Hint>}
          {showValidationMessage && (
            <Error id={errorId}>{validationMessage}</Error>
          )}
        </div>
      </FieldWrapper>
    );
  };

  //for login and registration
  export const PasswordInput = (fieldRenderProps: FieldRenderProps) => {
    const {
      validationMessage,
      touched,
      label,
      id,
      valid,
      disabled,
      hint,
      type,
      onClick,
      optional,
      icon,
      ...others
    } = fieldRenderProps;
  
    const showValidationMessage: string | false | null =
       touched ? validationMessage : '';
    const showHint: boolean = !showValidationMessage && hint;
    const hintId: string = showHint ? `${id}_hint` : "";
    const errorId: string = showValidationMessage ? `${id}_error` : "";
    
    return (
      <FieldWrapper>
        <Label
          editorId={id}
          editorValid={valid}
          editorDisabled={disabled}
          optional={optional}
        >
          {label}
        </Label>
        <div className={"k-form-field-wrap"} >
    
          <div className={classes.inputbox}>
          <Icon name={icon} style={{alignSelf:'center',marginLeft:'5px'}} themeColor={"dark"} />
         
          
          <Input
            valid={valid}
            type={type}
            id={id}
            className="myinput"
            disabled={disabled}
            ariaDescribedBy={`${hintId} ${errorId}`}
            {...others}
          />
          <Icon name="k-icon k-i-preview" style={{alignSelf:'center',marginRight:'5px',cursor:'pointer'}} onClick={onClick}></Icon>
          </div>
       
          {showHint && <Hint id={hintId}>{hint}</Hint>}
          {showValidationMessage && (
            <Error id={errorId}>{validationMessage}</Error>
          )}
        </div>
      </FieldWrapper>
    );
  };
