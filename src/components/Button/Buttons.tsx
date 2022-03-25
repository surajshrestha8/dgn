import { Button } from "@progress/kendo-react-buttons";
import { Loader } from "@progress/kendo-react-indicators";
const ButtonComponent = ({themeColor,text,loading}: any) => {
    return (
      <>
        <Button style={{marginTop: '10px'}} themeColor={themeColor} type={"submit"}>
          {loading && <Loader themeColor={"light"} />}
          {!loading && text}
        </Button>
      </>
    );
};

export default ButtonComponent;


