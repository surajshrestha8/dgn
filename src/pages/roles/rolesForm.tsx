import { Field, FieldWrapper, Form,FormElement } from "@progress/kendo-react-form";
import { Label } from "@progress/kendo-react-labels";
import { FormInput, RadioInput, DescriptionInput } from "../../components/FormInputs/FormInputs";
import {ButtonComponent} from "../../components/Button/Buttons";
import { Button } from "@progress/kendo-react-buttons";
import { useState,useMemo,useCallback } from "react";

import {
  MultiSelectTree,
  MultiSelectTreeChangeEvent,
  MultiSelectTreeExpandEvent,
  getMultiSelectTreeValue,
} from "@progress/kendo-react-dropdowns";
import {
  processMultiSelectTreeData,
  expandedState,
} from "./dataoperations";

const dataItemKey = "id";
const checkField = "checkField";
const checkIndeterminateField = "checkIndeterminateField";
const subItemsField = "items";
const expandField = "expanded";
const textField = "text";

const fields = {
  dataItemKey,
  checkField,
  checkIndeterminateField,
  expandField,
  subItemsField,
};


const RoleForm = () => {
  const initials = [
    { text: "news.create", id: 2 },
    { text: "news.read", id: 3 },
    { text: "news.update", id: 4 },

  ];
  const data = [
    {
      text: "News",
      id: 1,
      items: [
        { text: "news.create", id: 2 },
        { text: "news.read", id: 3 },
        { text: "news.update", id: 4 },
        { text: "news.delete",id:5},
      ],
    },
    {
      text: "Blog",
      id:6,
      items: [
        {text: "blog.create",id:7},
        {text: "blog.delete",id:8},
        {text: "blog.update",id:9},
        {text: "blog.read",id:10},
      ],
    },
  ];

  const [value, setValue] = useState<any[]>([]);
  const [expanded, setExpanded] = useState<any>([data[0][dataItemKey]]);

  const onChange = (event: MultiSelectTreeChangeEvent) =>
    setValue(getMultiSelectTreeValue(data, { ...fields, ...event, value }));
  const onExpandChange = useCallback(
    (event: MultiSelectTreeExpandEvent) =>
      setExpanded(expandedState(event.item, dataItemKey, expanded)),
    [expanded]
  );

  const treeData = useMemo(
    () => processMultiSelectTreeData(data, { expanded, value, ...fields }),
    [expanded, value]
  );


  const status = [
    {label:'Active',value:'active'},
    {label:'Inactive',value:'inactive'},
  ];

  const handleSubmit=(data:any)=> {
    console.log(data);
    console.log(value);
    const datas ={
      title: data.title,
      description: data.description,
      status: data.status,
      permissions: value,
    };
    console.log(datas);
  }
    return (
        <>
          <Form
          initialValues={{
            permissions: initials,
            title: "Suraj"
          }}
            onSubmit={handleSubmit}
            render={()=> (
              <div style={{display:'flex',justifyContent:'center'}}>
                <FormElement style={{width:'400px'}}>              
                <Field
                  name="title"
                  label="Title"
                  icon="k-icon k-i-tell-a-friend"
                  component={FormInput}
                  />
                <Field
                  name="description"
                  label="Description"
                  component={DescriptionInput}
                  type="textarea"
                />
                    <Field
                 name="loginurl"
                 label="Login Url"
                 component={FormInput}
                />
                <Field 
                  name="status"
                  label="Status"
                  component={RadioInput}
                  data={status}
                  />
                  <Label>Permissions</Label>
                <MultiSelectTree
                  name="permissions"
        
                  data={treeData}
                  value={value}
                  onChange={onChange}
                  textField={textField}
                  dataItemKey={dataItemKey}
                  checkField={checkField}
                  checkIndeterminateField={checkIndeterminateField}
                  subItemsField={subItemsField}
                  expandField={expandField}
                  onExpandChange={onExpandChange} 
                />
                <ButtonComponent themeColor="tertiary" text="Submit" style={{width:'100%'}} />
                <Button themeColor={"primary"} style={{width:'100%',marginTop:'5px'}}>Cancel</Button>       
         
                </FormElement>        
           
              </div>
            )}
            />
        </>
    );
};

export default RoleForm;

