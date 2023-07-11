import Filter from "./Filter/Filter";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import Heading from "./Heading/Heading";

function Shop() {
  return (
    <div className="shop">
        <Breadcrumbs></Breadcrumbs>
        <Heading></Heading>
        <Filter></Filter>
    </div>
  );
}

export default Shop;
