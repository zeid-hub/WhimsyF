import "./Seller.css"
import SellerDashboard from "./SellerDash";
import MainContent from "./Main";

function Seller () {
    return (
        <div className="div-seller">
            <SellerDashboard/>
            <MainContent/>
        </div>
    )
}

export default Seller;