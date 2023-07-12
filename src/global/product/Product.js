import './product.css'
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import Heading from "./Heading/Heading";
import Content from "./Content/Content";
import Related from "./Related/Related";

function Product({ title, content, image, categories }) {
  return (
    <div className="single__product">
        <Breadcrumbs></Breadcrumbs>
        <Heading></Heading>
        <Content></Content>
        <Related></Related>
    </div>
  );
}

export default Product;
