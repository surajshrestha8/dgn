import axios from "axios";
export const useSaveTodo = async (data: any) => {
    const response  = await axios.post('https://6231811805f5f4d40d7bcb85.mockapi.io/todo',data);
    console.log(response);
};

export const useGetTodo = async () => {
    const response = await axios.get('https://6231811805f5f4d40d7bcb85.mockapi.io/todo');
    return response.data;
};
export const useDeleteTodo = async (id: any) => {
    const response = await fetch(`https://6231811805f5f4d40d7bcb85.mockapi.io/todo/${id}`,{
        method: 'DELETE',
    });

};
export const useUpdateTodo = async({id,data}:any) => {
    console.log(data,id);
    const response  = await axios.put(`https://6231811805f5f4d40d7bcb85.mockapi.io/todo/${id}`,data);
    console.log(response);
}

export const useGetTodoItem = async ( { queryKey } : any) => {
   const { id } = queryKey[1];
   console.log(id);
   const response = await axios.get(`https://6231811805f5f4d40d7bcb85.mockapi.io/todo/${id}`);
   return response.data;

};

