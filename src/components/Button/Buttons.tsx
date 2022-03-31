import { Button } from "@progress/kendo-react-buttons";
import { Loader } from "@progress/kendo-react-indicators";
export const ButtonComponent = ({themeColor,text,loading,type}: any) => {
    return (
      <>
        <Button
          style={{marginTop: '10px',width:'100%'}}
          themeColor={themeColor} 
          type={type}
        >
          {loading && <Loader themeColor={"light"} />}
          {!loading && text}
        </Button>
      </>
    );
};




