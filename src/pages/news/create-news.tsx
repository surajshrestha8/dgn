
import { useState } from 'react';
import NewsForm from './NewsForm';

const CreateNews = () => {

    const [success,setisSuccess] = useState<boolean>(true);
  
    return <NewsForm isSuccess={success} />
};

export default CreateNews;

