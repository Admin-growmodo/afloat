import './heading.css'
function Heading({ style, headingText, paragraphText }) {
    return (
        <div className='global__heading' style={style}>
            <div className='container'>
                <div className='row global__heading-col'>
                    <div className='col-12'>
                        <h1>{headingText}</h1>

                        {paragraphText ? <p>{paragraphText}</p> : ''}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Heading;