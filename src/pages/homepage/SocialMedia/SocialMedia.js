import './socialmedia.css'
function SocialMedia() {
    return (
        <div className='socialmedia'>
            <div className='container'>
                <div className='row socialmedia__title'>
                    <h3>Follow us on instagram!</h3>
                    <p>@theafloatapp</p>
                </div>
                <div className='row socialmedia__content'>
                    <img src="../assets/layouts/socialmedia-image.png" />
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;
