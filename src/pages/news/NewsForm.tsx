import { Form, Field, FormElement} from '@progress/kendo-react-form';
import { DropDownListFilterChangeEvent, } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { useNavigate } from 'react-router-dom';
import { Loader } from '@progress/kendo-react-indicators';
import { useMutation, useQueryClient } from 'react-query';
import { useSaveTodo } from '../../hooks/todo/todohooks';
import { Notification } from '@progress/kendo-react-notification';
import { useEffect, useState } from 'react';
import { FormInput, DescriptionInput, DatePickerInput, RadioInput, DropdownInput } from '../../components/FormInputs/FormInputs';
import { useNotificationStore } from '../../store/app.store';
import { 
    nameValidator,
    descriptionValidator,
    DateValidator,
    genderValidator,
    dropDownValidator,
    dropDownCountryValidator,
} from '../../hooks/FormValidators/formvalidators';
import {
    CompositeFilterDescriptor,
    filterBy,
    FilterDescriptor,
  } from "@progress/kendo-data-query";

const NewsForm = ({todo}: any, loading:any) => {
    const datas = [
        { label: "Female", value: "female" },
        { label: "Male", value: "male" },
        { label: "Other", value: "other" },
      ];

      const country = ["Nepal", "India", "Pakistan", "Bangladesh", "Sri-Lanka", "Bhutan",];

      const { setSuccessMessge, setSuccess } = useNotificationStore();
   
      
const allData = [
    { text: "Pokhara"},{text:"Kathmandu"},{text:"Dharan"},{text:"Birgunj"},{text:"Butwal"},{text:"Mahendranagar"} ];

  console.log(allData.slice());

      const [data, setData] = useState(allData.slice());

  const filterData = (filter: FilterDescriptor | CompositeFilterDescriptor) => {
    const data = allData.slice();
    return filterBy(data, filter);
  };

  const filterChange = (event: DropDownListFilterChangeEvent) => {
    setData(filterData(event.filter));
  };

      
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading } = useMutation('todo',useSaveTodo,{
        onSuccess:()=> {
            setSuccessMessge("Todo addedd successfully");
            setSuccess();
            navigate('/news');
        } 
    });
    const handleSubmit = async (data: object) => {
        mutateAsync(data);
        console.log(data);
        queryClient.invalidateQueries('todo');
    };
    const [form,setForm] = useState<any>({});
    useEffect(() => {
        if(!todo) {
            return;
        }
        setForm(todo);

    },[todo]);
  
    console.log(form);
    

    return (
        <>
     
        <Form
         onSubmit={handleSubmit}
         render={() => (
             <FormElement style={{ width: 400, marginLeft: '20px' }}>
           

                 <Field
                   name="title"
                   label="Title"
                   placeholder="Enter title"
                   component={FormInput}
                   validator={nameValidator}
                  />
                  <Field
                    name="description"
                    label="Description"
                    placeholder = "Enter description"
                    component= {DescriptionInput}
                    validator={descriptionValidator}
                  />
                 <Field 
                   name="date"
                   label="Date"
                   component={DatePickerInput}
                   validator={DateValidator}
                   />
                 <Field
                   name="gender"
                   component={RadioInput}
                   data={datas}
                   validator={genderValidator}
                   />
                   <Field 
                     name="country"
                     label="Country"
                     component={DropdownInput}
                     data={country}
                     validator={dropDownCountryValidator}
                     />

                       <Field
                         name="city"
                         component={DropdownInput}
                         data={data}
                         label="City"
                         filterable={true}
                         onFilterChange={filterChange}
                         textField="text"
                         validator={dropDownValidator}
                         />
                  <Button themeColor={"tertiary"} type="submit" style={{marginTop: '10px'}} >
                      {isLoading && <Loader type={"pulsing"} /> }
                      {!isLoading && 'Submit'}
                  </Button>
                  <Button themeColor={"primary"} style={{marginTop: '10px', marginLeft: '10px'}} onClick={()=>navigate('/news')}>
                      Cancel
                  </Button>
             </FormElement>
             

         )}
         />
            </>
    )
};

export default NewsForm;
