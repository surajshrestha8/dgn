import { FormInput } from "../../components/FormInputs/FormInputs";
import { Form, Field, FormElement} from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Loader } from '@progress/kendo-react-indicators';
import { emailValidator, passwordValidator } from "../../hooks/FormValidators/formvalidators";

const LoginPage = () => {
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
                        component={FormInput}
                        validator={emailValidator}
                       />
                        <Field 
                        name="password"
                        label="Password"
                        type="password"
                        component={FormInput}
                        validator={passwordValidator}
                       />
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