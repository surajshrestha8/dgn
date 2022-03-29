import { FormInput, PasswordInput } from "../../components/FormInputs/FormInputs";
import { Form, Field, FormElement} from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { emailValidator, passwordValidator } from "../../hooks/FormValidators/formvalidators";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Checkbox } from "@progress/kendo-react-inputs";
import { useAuthStore, useNotificationStore } from "../../store/app.store";
import { Notification,NotificationGroup } from "@progress/kendo-react-notification";

const LoginPage = () => {

    const [type,setType] = useState("password");
    const navigate = useNavigate();
    const {email,password,login,isLoggedIn} = useAuthStore();
    const {setSuccess,setSuccessMessge,message,removeSuccess,success,error,setErrorMessage,removeError,setError} = useNotificationStore();
    console.log(email,password);
    const typeSetter = () => {
        type === "password" && setType("text");
        type === "text" && setType("password");
    }
    if(isLoggedIn){
        navigate('/');
    }
    useEffect(()=> {
        setTimeout(()=>{
            removeError();
            removeSuccess();
        },3000);
    },[error])

    const handleSubmit = (data:any) => {
        if(data.email===email && data.password===password) {
            login();
            setSuccessMessge("Login Successfull");
            setSuccess();
            navigate('/news');
        } else {
            setErrorMessage("Invalid credentials");
            setError();
        }

    };
    return (
        <>
        <div style={{display:'flex',justifyContent:'center',marginBottom:'20px',marginTop:'20px'}}>
        <NotificationGroup>
            {success &&  (
                <Notification
                  type={{ style: "success", icon: true }}
                  closable={true}
                  style={{ width: '200px',height: '30px'}}
                  onClose={() => removeSuccess()}
                >
                  <span>{message}</span>
                </Notification>
                
              )}
                 {error &&  (
                <Notification
                  type={{ style: "error", icon: true }}
                  closable={true}
                  style={{ width: '200px',height: '30px'}}
                  onClose={() => removeError()}
                >
                  <span>{message}</span>
                </Notification>
                
              )}
              

      </NotificationGroup>

        </div>
       
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
                       <Button fillMode={"link"} style={{textAlign:'center'}} themeColor={"tertiary"} onClick={()=>navigate('/password/forgot')}>Forgot password? </Button>
                       <Button fillMode={"link"} style={{textAlign:'center'}} themeColor={"tertiary"} onClick={()=>navigate('/password/reset')}>Reset Password? </Button>
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