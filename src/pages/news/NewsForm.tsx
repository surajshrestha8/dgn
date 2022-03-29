import { Form, Field, FormElement} from '@progress/kendo-react-form';
import { DropDownListFilterChangeEvent, } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { useSaveTodo, useUpdateTodo } from '../../hooks/todo/todohooks';
import ButtonComponent from '../../components/Button/Buttons';
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
import { Loader } from '@progress/kendo-react-indicators';

const NewsForm = ({todo,isSuccess,id}: any, loading:any) => {

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
            setSuccessMessge("Todo added successfully");
            setSuccess();
            navigate('/news');
        } 
    });
    const {mutateAsync:updateTodo,isLoading:updateLoading} = useMutation('todo',useUpdateTodo,{
      onSuccess:()=> {
        setSuccessMessge("Todo updatedSuccessFully");
        setSuccess();
        navigate('/news');
      }

    });
    const handleSubmit = async (data: object) => {
        if(!id) {
          mutateAsync(data);
          console.log(data);
          queryClient.invalidateQueries('todo');

        } else {
          updateTodo({data,id});
          console.log(id);
          console.log(data);
          queryClient.invalidateQueries('todo');

        }
    
    };
    
    return (
        <>
        <div style={{display:'flex',justifyContent:'center'}}>
          {!isSuccess && <Loader type="pulsing"/>}
          {isSuccess  && (
             <Form
             initialValues={{
               title: todo?.title || '',
               description: todo?.description,
               gender: todo?.gender,
               country: todo?.country,
               city: todo?.city,
             }}
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
                         icon=""
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
                       <ButtonComponent themeColor="tertiary" text="Submit" loading={isLoading} />
                       <Button themeColor={"primary"} style={{marginTop: '10px', marginLeft: '10px'}} onClick={()=>navigate('/news')}>
                         Cancel
                       </Button>
                 </FormElement>
             )}
             />

          )}
         
            </div>
            </>
    )
};

export default NewsForm;
