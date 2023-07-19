import '../styles/global/emptyresult.css'

function EmptyResult() {
    return (

      <div className="empty__result">
        <div className="empty__result-wrapper">
          <p>0 products found with these options</p>
          <img src="../assets/layouts/search-icon.svg" alt="Search Icon" />
        </div>
      </div>
      
    );
  }
  
  export default EmptyResult;
  