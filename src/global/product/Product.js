import './product.css'
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import Heading from "./Heading/Heading";
import Content from "./Content/Content";
import Related from "./Related/Related";
import { useOutletContext } from "react-router-dom";

function Product() {
  const [showSidebar, setShowSidebar] = useOutletContext();
  const triggerSidebar = (val) => {
    setShowSidebar(val);
  };
  return (
    <div className="single__product">
      <Breadcrumbs></Breadcrumbs>
      <Heading></Heading>
      <Content triggerSidebar={triggerSidebar}></Content>
      <Related></Related>
    </div>
  );
}

export default Product;
