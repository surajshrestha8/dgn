import { DatePicker } from '@progress/kendo-react-dateinputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { FieldRenderProps , FieldWrapper} from '@progress/kendo-react-form';
import { Input, RadioGroup } from '@progress/kendo-react-inputs';
import { Label, Error, Hint } from '@progress/kendo-react-labels';

export const FormInput = (fieldRenderProps: FieldRenderProps) => {
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