import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useGetTodoItem } from "../../hooks/todo/todohooks";
import NewsForm from "./NewsForm";
const EditNews = () => {
    const { id } = useParams();
    const { data: todo, isLoading } = useQuery(['todo',{id} ],useGetTodoItem);
    return <NewsForm todo={todo} loading={isLoading} />
}
export default EditNews;