import { useLocation } from "react-router-dom";

export const useBreadcrumbs = () => {
    const {pathname} = useLocation();

    const arr = pathname.split("/");
    arr.shift();
    console.log(arr);
    const breadCrumbData = [   {
      id: "home",
      text: "Home",
    },];

    for( let i=0;i<arr.length;i++) {
      const news= {
    
        id: arr[i],
        text: arr[i].charAt(0).toUpperCase() +arr[i].slice(1),
        
  
    };
    breadCrumbData.push(news);
    }
    return { breadCrumbData };

}

