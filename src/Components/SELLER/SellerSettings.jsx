import "./SellerSettings.css"
import SellerDashboard from "./SellerDash"

function Settings () {
    return (
        <div className="div-seller-settings">
            <SellerDashboard/>
            <div className="div-settings">
                <h1 className="h1-settings">Seller Settings</h1>
            </div>
        </div>
    )
}

export default Settings