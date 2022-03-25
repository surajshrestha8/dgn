import { FormInput } from "../../components/FormInputs/FormInputs";
import { Form, Field, FormElement} from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { emailValidator, passwordValidator, firstNameValidator } from "../../hooks/FormValidators/formvalidators";

const RegisterPage = () => {

    const handleSubmit = (data: object) => {
        console.log(data);
    };

    return (
        <>
        <div style={{ display: "flex", justifyContent: "center"}}>
          <h1>Register Page</h1>
        </div> 
        <div style={{ display: "flex", justifyContent: "center"}}>
            <Form
              onSubmit={handleSubmit}
              render={()=> (
                  <FormElement style={{width:'400px'}}>
                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                    <Field 
                      name="firstname"
                      type="text"
                      label="First Name"
                      component={FormInput}
                      validator={firstNameValidator}
                    />
                    <Field
                      name="lastname"
                      label="Last Name"
                      type="text"
                      component={FormInput}
                      validator={firstNameValidator}
                    />

                    </div>
                   
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
                         <Field
                        name="password_confirmation"
                        label="Confirm Password"
                        type="password"
                        component={FormInput}
                        validator={passwordValidator}
                      />
                      <div style={{marginTop:'10px'}}>
                      <Button themeColor={"tertiary"} type={"submit"} style={{width:"100%"}}>Sign Up</Button>

                      </div>
            
                  </FormElement>
              )} 
            />
            
        </div>
        </>
    );
};

export default RegisterPage;