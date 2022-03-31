import {  useNavigate } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import { useMutation, useQuery ,useQueryClient } from "react-query";
import { useGetTodo, useDeleteTodo } from "../../hooks/todo/todohooks";
import { Grid, GridColumn, GridPageChangeEvent} from '@progress/kendo-react-grid';
import { Loader } from "@progress/kendo-react-indicators";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { useState } from "react";
import { useNotificationStore } from "../../store/app.store";

interface PageState {
    skip: number;
    take: number;
};

const initialDataState: PageState = { skip: 0, take: 10 };

const News = () => {
    
    const [page, setPage] = useState<PageState>(initialDataState);
    const pageChange = (event: GridPageChangeEvent) => {
      setPage(event.page);
    };

    const [visible,setVisible] = useState<boolean>(false);
    const [todoId,settodoId] = useState<any>("");
    const toggleDialog = (id: any) => {
        setVisible(!visible);
        settodoId(id);
    }
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { data, isLoading, isSuccess } = useQuery('todo',useGetTodo);
    const { mutateAsync, isLoading: deleteLoading } = useMutation(useDeleteTodo,{
        onSuccess: () => {
            setSuccessMessge("Todo deleted successfully");
            setSuccess();
        }
    });
    const { setSuccess, setSuccessMessge} = useNotificationStore();

    const Actions =(e:any) => {
        return (
            <td>
                <Button themeColor={"tertiary"} style={{marginLeft:'10px', marginRight:'10px'}} onClick={() => navigate(`/news/edit/${e.dataItem.id}`)}>Edit</Button>
                <Button themeColor={"error"} onClick={()=>toggleDialog(e.dataItem.id)}>  
                  Delete  
                </Button>   
            </td>
        )
    };

    const deleteItem = async () => {
        await mutateAsync(todoId);
        queryClient.invalidateQueries('todo');
        settodoId("");
        setVisible(!visible);
    };
    return (
        <>        
            {isLoading && <Loader type={"pulsing"} /> }
            {isSuccess && (
               <Grid 
               data = {data?.slice(page.skip, page.take + page.skip)}
               style={{ marginLeft:'10px', marginRight:'10px',marginTop: '10px'}}
               skip={page.skip}
               take={page.take}
               total={data?.length}
               pageable={true}
               onPageChange={pageChange}
             >
                 <GridColumn field="id" title="ID" />
                 <GridColumn field="title" title="Title" />
                 <GridColumn field="description" title="Description" />
                 <GridColumn field="date" title="Date"  format="{0:dd/MM/yyyy}"/>
                 <GridColumn title="Actions" cell={(e) => Actions(e)} />
                 </Grid>
                

            )}
           
        {visible && (
        <Dialog title={"Please confirm"} onClose={toggleDialog}>
          <p style={{ margin: "25px", textAlign: "center" }}>
            Are you sure you want to delete this item?
          </p>
          <DialogActionsBar>
            <button
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              onClick={toggleDialog}
            >
              No
            </button>
            <button
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              onClick={deleteItem}
            >
               {deleteLoading && <Loader type={"pulsing"} />}
               {!deleteLoading && 'Delete'}
            </button>
          </DialogActionsBar>
        </Dialog>
      )}
        </>
    );
};
export default News;

