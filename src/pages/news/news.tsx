import {  useNavigate } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import { useMutation, useQuery ,useQueryClient } from "react-query";
import { useGetTodo, useDeleteTodo } from "../../hooks/todo/todohooks";
import { Grid, GridColumn} from '@progress/kendo-react-grid';
import { Loader } from "@progress/kendo-react-indicators";
import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
import { Fade } from '@progress/kendo-react-animation';
import { useState } from "react";

const News = () => {
    const [success,setSuccess] = useState<boolean>(false);
    const onToggle = () => setSuccess(true);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery('todo',useGetTodo);
    const { mutateAsync, isLoading: deleteLoading } = useMutation(useDeleteTodo,{
        onSuccess: () => {
            onToggle();
        }
    });

    const Actions =(e:any) => {

        return (
            <td>

                <Button themeColor={"tertiary"} style={{marginLeft:'10px', marginRight:'10px'}} onClick={() => navigate(`/news/edit/${e.dataItem.id}`)}>Edit</Button>
                <Button themeColor={"error"} onClick={()=> deleteItem(e.dataItem.id)}>
                {deleteLoading && <Loader type={"pulsing"} />}
                {!deleteLoading && 'Delete'}    
                
                </Button>
               
        </td>

        )
     
    }
    const deleteItem = async (e: any) => {
        console.log(e);
        await mutateAsync(e);
        queryClient.invalidateQueries('todo');
    };

    const toCreate = () => {
        navigate('/news/create');
    }
    return (
        <>
        
            <Button themeColor={"tertiary"} onClick={toCreate}>Create</Button>
            {isLoading && <Loader type={"pulsing"} /> }
            <Grid 
              data = {data}
              style={{ marginLeft:'10px', marginRight:'10px'}}
            >
                <GridColumn field="id" title="ID" />
                <GridColumn field="title" title="Title" />
                <GridColumn field="description" title="Description" />
                <GridColumn field="date" title="Date"  format="{0:dd/MM/yyyy}"/>
                <GridColumn title="Actions" cell={(e) => Actions(e)} />
                </Grid>
                <Fade>
          {success && (
            <Notification
              type={{ style: "success", icon: true }}
              closable={true}
              onClose={() => setSuccess(false)}
            >
              <span>The todo has been deleted</span>
            </Notification>
          )}
        </Fade>
      
        </>
    );
};
export default News;

