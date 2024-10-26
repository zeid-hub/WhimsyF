import "./SellerOrders.css"
import SellerDashboard from "./SellerDash"
import MyOrders from "./Orders"

function SellOrders () {
    return (
        <div className="div-sell-orders">
            <SellerDashboard/>
            <MyOrders/>
        </div>
    )
}

export default SellOrders