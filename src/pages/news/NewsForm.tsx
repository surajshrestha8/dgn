import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Input, RadioButton, RadioGroup } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { useNavigate } from 'react-router-dom';
import { Loader } from '@progress/kendo-react-indicators';
import { useMutation, useQueryClient } from 'react-query';
import { useSaveTodo } from '../../hooks/todo/todohooks';
import { useEffect, useState } from 'react';
import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
import { Fade } from '@progress/kendo-react-animation';
const NewsForm = ({todo}: any, loading:any) => {
    const data = [
        { label: "Female", value: "female" },
        { label: "Male", value: "male" },
        { label: "Other", value: "other" },
      ];
    

    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading } = useMutation('todo',useSaveTodo,{
        onSuccess:()=> {
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
        <Form
         onSubmit={handleSubmit}
         render={() => (
             <FormElement style={{ width: 400, marginLeft: '20px' }}>
                 <div className='mb-3'>

                 
                 <Field
                   name="title"
                   label="Title"
                   value={form?.title}
                   placeholder="Enter title"
                   component={Input} 


                  />
                  </div>
                  <Field
                    name="description"
                    label="Description"
                    placeholder = "Enter description"
                    component= {Input}
                  />
                 <DatePicker name="date" label="date" format={"dd-MMM-yyyy"} />
                 <RadioGroup name="gender"  data={data} />
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
    )
};

export default NewsForm;
