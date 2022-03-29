import { FormInput,PasswordInput } from "../../components/FormInputs/FormInputs";
import { Form, Field, FormElement} from '@progress/kendo-react-form';
import { emailValidator, passwordValidator } from "../../hooks/FormValidators/formvalidators";

import ButtonComponent from "../../components/Button/Buttons";
import { Button } from "@progress/kendo-react-buttons";
import { Navigate, useNavigate } from "react-router-dom";
const ResetPassword = () => {
    return (
        <>
        <div style={{display:'flex',justifyContent:'center'}}>
            <h3>Reset Password</h3>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Form 
             render={() => (
               <FormElement style={{width:'300'}}>
                
                    <Field
                        type="email"
                        name="email"
                        label="Email"
                        icon="k-icon k-i-email" 
                        component={FormInput}
                        validator={emailValidator}
                    />
                    <Field
                     name="password"
                     label="Password"
                     icon="k-icon k-i-lock"
                     component={PasswordInput}
                     validator={passwordValidator}
                    />
                      <Field
                     name="password_confirmation"
                     label="Confirm Password"
                     icon="k-icon k-i-lock"
                     component={PasswordInput}
                     validator={passwordValidator}
                    />
                   <div style={{display:'flex',justifyContent:'center'}}>
                     <ButtonComponent themeColor="tertiary" text="Reset Password" />
    
                   </div>     
               </FormElement>
           )}
        />

        </div>
          
        </>
    );
};
export default ResetPassword;