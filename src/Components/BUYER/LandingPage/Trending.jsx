import "./Trending.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TrendingProduct () {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="div-trending">
            <h2 className="trending-header">Trending Products</h2>
            <p className="trending-description">Discover the latest and most popular products that everyone is talking about!</p>
            <Slider {...settings} className="div-slider">
                <div className="div-products">
                    <img className="the-image" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHww" alt="" />
                </div>
                <div className="div-products">
                    <img className="the-image" src="https://media.istockphoto.com/id/1490695529/photo/fitness-woman-in-sportswear-with-soft-orthopedic-insoles-and-sneakers-for-jogging-treatment.webp?b=1&s=170667a&w=0&k=20&c=6JPsi-a_K24yfEDrVIiyDvSPKKoQ9YyV1Y2CwLL30sQ=" alt="" /></div>
                <div className="div-products">
                    <img className="the-image" src="https://images.unsplash.com/photo-1584433305355-9cb73387fc61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcHN8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
                <div className="div-products">
                    <img className="the-image" src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fHww" alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default TrendingProduct;
