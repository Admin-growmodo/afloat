import './steps.css'
function Steps() {
    return (
       <div className='steps'>
           <div className='container'>
                <div className='row steps__title'>
                    <div className='col-12'>
                        <h2>how it works</h2>
                        <p>Explore the best of the best for local gifting. Click, buy, delivered! A gift is always more meaningful from Afloat.</p>
                    </div>
                </div>
                <div className='row steps__content'>
                    <div className='col-4 steps__content-col'>
                        <p>Select your city and choose an occasion</p>
                        <img src="../assets/layouts/step1.svg" alt="Step1"/>
                        <h3>Step1</h3>
                    </div>
                    <div className='col-4 steps__content-col'>
                        <p>Shop a curated list of gifts from your favorite local stores.</p>
                        <img src="../assets/layouts/step2.svg" alt="Step2"/>
                        <h3>Step2</h3>
                    </div>
                    <div className='col-4 steps__content-col'>
                        <p>Enjoy same-day or next-day delivery direct to your recipient.</p>
                        <img src="../assets/layouts/step3.svg" alt="Step3"/>
                        <h3>Step3</h3>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default Steps;
