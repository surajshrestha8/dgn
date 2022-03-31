import { FormInput } from "../../components/FormInputs/FormInputs";
import { Form, Field, FormElement} from '@progress/kendo-react-form';
import { emailValidator } from "../../hooks/FormValidators/formvalidators";
import {ButtonComponent} from "../../components/Button/Buttons";
import { Button } from "@progress/kendo-react-buttons";
import {  useNavigate } from "react-router-dom";
const ForgotPassword = () => {
    const navigate = useNavigate();
    return (
        <>
         <Form 
           render={() => (
               <FormElement>
                   <div style={{display:'flex',justifyContent:'center'}}>
                    <Field
                        type="email"
                        name="email"
                        label="Email"
                        icon="k-icon k-i-email" 
                        component={FormInput}
                        validator={emailValidator}
                    />
                   </div>
                   <div style={{display:'flex',justifyContent:"center"}}>
                     <ButtonComponent themeColor="tertiary" text="Forgot Password" />
                     <Button themeColor="primary" onClick={()=>navigate('/login')} style={{height:'30px',marginTop:'10px',marginLeft:'5px'}} >Back</Button>
                   </div>     
               </FormElement>
           )}
        />
        
        </>
    );
};

export default ForgotPassword;
