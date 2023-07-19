import './content.css'
import Slider from "react-slick";
import { useState } from 'react'
import { SELECTED_PRODUCT } from './constant';
import ProductModal from '../../modals/ProductModal/ProductModal'

function Content({ triggerSidebar }) {
    let product = SELECTED_PRODUCT[0]
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
        setShowModal(!showModal);
    };

    const toggleSidebar = () => {
        triggerSidebar(true);
        setShowModal(false)
    };
    
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >

            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.328 26.671L22.3279 26.6709L15.7472 20.1142C15.7323 20.0994 15.7205 20.0817 15.7124 20.0623L15.2525 20.2532L15.7124 20.0623C15.7044 20.0428 15.7002 20.022 15.7002 20.0009C15.7002 19.9799 15.7044 19.959 15.7124 19.9396C15.7205 19.9202 15.7323 19.9025 15.7472 19.8877C15.7472 19.8877 15.7472 19.8876 15.7472 19.8876L22.3237 13.334C22.3424 13.3168 22.3669 13.3074 22.3923 13.3077C22.4185 13.3079 22.4436 13.3185 22.4621 13.3371C22.4806 13.3556 22.4911 13.3807 22.4913 13.4069C22.4914 13.4323 22.482 13.4568 22.4648 13.4754L16.2725 19.6462L15.9171 20.0003L16.2725 20.3545L22.4691 26.5295C22.4692 26.5296 22.4692 26.5296 22.4693 26.5297C22.488 26.5484 22.4985 26.5737 22.4985 26.6002C22.4985 26.6267 22.488 26.6521 22.4693 26.6709C22.4506 26.6896 22.4252 26.7002 22.3988 26.7002C22.3722 26.7002 22.3468 26.6897 22.328 26.671Z" fill="#161616" stroke="#161616" />
            </svg>

        </button>
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >

            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.672 13.329L17.6721 13.3291L24.2528 19.8858C24.2677 19.9006 24.2795 19.9183 24.2876 19.9377L24.7475 19.7468L24.2876 19.9377C24.2956 19.9572 24.2998 19.978 24.2998 19.9991C24.2998 20.0201 24.2956 20.041 24.2876 20.0604C24.2795 20.0798 24.2677 20.0975 24.2528 20.1123C24.2528 20.1123 24.2528 20.1124 24.2528 20.1124L17.6763 26.666C17.6577 26.6832 17.6331 26.6926 17.6077 26.6923C17.5815 26.6921 17.5564 26.6815 17.5379 26.663C17.5194 26.6444 17.5089 26.6193 17.5087 26.5931C17.5086 26.5677 17.518 26.5432 17.5352 26.5246L23.7275 20.3538L24.0829 19.9997L23.7275 19.6455L17.5309 13.4705C17.5308 13.4704 17.5308 13.4704 17.5307 13.4703C17.512 13.4516 17.5015 13.4263 17.5015 13.3998C17.5015 13.3733 17.512 13.3479 17.5307 13.3291C17.5494 13.3104 17.5748 13.2998 17.6012 13.2998C17.6278 13.2998 17.6532 13.3103 17.672 13.329Z" fill="#161616" stroke="#161616" />
            </svg>

        </button>
    );

    return (
        <div className='product__main'>
            <div className='container'>
                <div className='row product__main-inner'>
                    <div className='col-6 product__main-images--wrapper'>
                        <Slider asNavFor={nav2}
                            ref={(slider1) => setNav1(slider1)}
                            slidesToShow={1}
                            arrows={true}
                            prevArrow={<SlickArrowLeft />}
                            nextArrow={<SlickArrowRight />}>
                            {product && product.images.map((img, index) => (
                                <div className='product__main-images' key={index}>
                                    <img src={img} alt="Product Sample Image" />
                                </div>
                            ))}
                        </Slider>
                        <Slider className='slider-preview'
                            asNavFor={nav1}
                            ref={(slider2) => setNav2(slider2)}
                            slidesToShow={2}
                            swipeToSlide={true}
                            focusOnSelect={true}>
                            {product && product.images.map((img, index) => (
                                <div key={index}>
                                    <div className='product__main-images--preview' key={index}>
                                        <img src={img} alt="Product Sample Image" />
                                    </div>
                                </div>
                            ))}
                        </Slider>

                    </div>
                    <div className='col-6 product__main-contents--wrapper'>
                        <div className='product__main-contents'>
                            <h3>{product.title}</h3>
                            <p>{product.price}</p>
                            <button className='primary-btn addtocart__btn' onClick={() => setShowModal(true)}>Add to cart</button>
                            <ProductModal show={showModal} onCloseButtonClick={toggleShowModal} openSidebar={toggleSidebar} />
                        </div>
                        <div id='product__accordion' className='accordion'>

                            <div className='accordion-item'>
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <img className='delivery-expectations-icon' src='../assets/layouts/product/delivery-expectations-icon.svg' alt="delivery" />
                                        Delivery expectations
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#product__accordion">
                                    <div className="accordion-body">
                                        <p>{product.delivery_expectations}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Product details
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#product__accordion">
                                    <div className="accordion-body">
                                        <p>{product.product_details}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        The gift experience
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#product__accordion">
                                    <div className="accordion-body">
                                        <p>{product.the_gift_experience}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;