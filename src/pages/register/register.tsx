import { FormInput, PasswordInput } from "../../components/FormInputs/FormInputs";
import { Form, Field, FormElement} from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { emailValidator, passwordValidator, firstNameValidator, phoneNumberValidator } from "../../hooks/FormValidators/formvalidators";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const RegisterPage = () => {

    const navigate= useNavigate();
    const [type,setType] = useState("password");
    const typeSetter = () => {
      type === "text" && setType("password");
      type === "password" && setType("text");
    }

    const handleSubmit = (data: object) => {
        console.log(data);
    };
    console.log(type);

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
                      icon="k-icon k-i-user"
                      validator={firstNameValidator}
                    />
               
                    <Field
                      name="lastname"
                      label="Last Name"
                      type="text"
                      icon="k-icon k-i-user"
                      component={FormInput}
                      validator={firstNameValidator}
                    />
    

                    </div>
                   
                    <Field 
                      name="email"
                      label="Email"
                      type="email"
                      icon="k-icon k-i-email"
                      component={FormInput}
                      validator={emailValidator}
                      />
                      <Field 
                        name="address"
                        label="Address"
                        type="text"
                        icon="k-icon k-i-marker-pin"
                        component={FormInput}
                        validator={firstNameValidator}
                    />
                    <Field
                      name="phone"
                      label="Phone Number"
                      type="number"
                      icon="k-icon k-i-inbox"
                      min={0}
                      validator={phoneNumberValidator}
                      component={FormInput}
                    />
                      <Field
                        name="password"
                        label="Password"
                        type={type}
                        icon="k-icon k-i-lock"                       
                        component={PasswordInput}
                        validator={passwordValidator}
                        onClick={typeSetter}

                      />
    
                         <Field
                        name="password_confirmation"
                        label="Confirm Password"
                        type={type}
                        icon="k-icon k-i-lock"
                        onClick={typeSetter}
                        component={PasswordInput}
                        validator={passwordValidator}
                      />
                      <Button themeColor={"tertiary"} fillMode="link" onClick={()=>navigate("/login")}>Already have a account? Login!</Button>
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