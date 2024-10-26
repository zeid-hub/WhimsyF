import "./DashProduct.css"
import SellerDashboard from "./SellerDash"
import SellerProducts from "./SellerProducts"


function DashProducts (){
    return (
        <div className="div-dash-products">
            <SellerDashboard />
            <SellerProducts />
        </div>
    )
}

export default DashProducts