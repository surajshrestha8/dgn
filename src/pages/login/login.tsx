import { FormInput, PasswordInput } from "../../components/FormInputs/FormInputs";
import { Form, Field, FormElement} from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { emailValidator, passwordValidator } from "../../hooks/FormValidators/formvalidators";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Checkbox } from "@progress/kendo-react-inputs";

const LoginPage = () => {
    const [type,setType] = useState("password");
    const typeSetter = () => {
        type === "password" && setType("text");
        type === "text" && setType("password");
    }
    const navigate = useNavigate();
    const handleSubmit = (data:object) => {
        console.log(data);
    };
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
            <h1>Login</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center'}} >
            

            
            <Form 
              onSubmit={handleSubmit}
              render={() => (
                  <FormElement  style={{width: '300px'}}>
                      <Field 
                        name="email"
                        label="Email"
                        type="email"
                        icon="k-icon k-i-email"
                        component={FormInput}
                        validator={emailValidator}
                       />
                        <Field 
                        name="password"
                        label="Password"
                        type={type}
                        icon="k-icon k-i-lock"
                        onClick={typeSetter}
                        component={PasswordInput}
                        validator={passwordValidator}
                       />
                       <div style={{marginTop:'10px'}}>
                        <Field
                          name="rememberme"
                          label=" Remember me"
                          component={Checkbox}
                        />

                       </div>
                       
                       <Button fillMode={"link"} themeColor={"tertiary"} onClick={()=> navigate('/register')}>Dont have account? Sign up</Button>
                       <Button fillMode={"link"} style={{textAlign:'center'}} themeColor={"tertiary"}>Forgot password? </Button>
                       <div style={{ marginTop:'10px'}}>
                       <Button size={"large"} themeColor={"tertiary"} style={{width: '100%'}} type={"submit"}>Login</Button>

                       </div>
                       
                  </FormElement>
            
              )}
              />
              </div>
        </>
    );
};
export default LoginPage;