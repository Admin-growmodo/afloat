import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import Heading from './Heading/Heading';
import Filter from './Filter/Filter';
import './collection.css'

function Collection() {
  return (
    <div className="collection">
      <Breadcrumbs></Breadcrumbs>
      <Heading></Heading>
      <Filter></Filter>
    </div>
  );
}

export default Collection;
