// import { NavLink } from "react-router-dom";
// import "./SellerDash.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTachometer, faBox, faList, faCog  } from "@fortawesome/free-solid-svg-icons";

// function SellerDashboard (){
//     return (
//         <div className="div-sellerDash">
//             <h1 className="h1-header">WHIMSY</h1>
//             <NavLink className={"dashboard"} to={"/sellerdash"} > <FontAwesomeIcon icon={faTachometer}/> DASHBOARD</NavLink>
//             <NavLink className={"dashboard"} to={"/my-products"} > <FontAwesomeIcon icon={faBox}/> PRODUCTS</NavLink>
//             <NavLink className={"dashboard"} to={"/my-orders"}> <FontAwesomeIcon icon={faList}/> ORDERS</NavLink>
//             <NavLink className={"dashboard"} to={"/my-settings"}> <FontAwesomeIcon icon={faCog}/> SETTINGS</NavLink>
//         </div>
//     )
// }

// export default SellerDashboard;




import { NavLink } from "react-router-dom";
import "./SellerDash.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometer, faBox, faList, faCog } from "@fortawesome/free-solid-svg-icons";

function SellerDashboard() {
    return (
        <div className="seller-dashboard">
            {/* Header Section */}
            <h1 className="header-title">WHIMSY</h1>
            
            {/* Navigation Links */}
            <nav className="sidebar-navigation">
                <NavLink className="nav-link" to="/sellerdash" activeClassName="active-link">
                    <FontAwesomeIcon icon={faTachometer} /> Dashboard
                </NavLink>
                <NavLink className="nav-link" to="/my-products" activeClassName="active-link">
                    <FontAwesomeIcon icon={faBox} /> Products
                </NavLink>
                <NavLink className="nav-link" to="/my-orders" activeClassName="active-link">
                    <FontAwesomeIcon icon={faList} /> Orders
                </NavLink>
                <NavLink className="nav-link" to="/my-settings" activeClassName="active-link">
                    <FontAwesomeIcon icon={faCog} /> Settings
                </NavLink>
            </nav>
        </div>
    );
}

export default SellerDashboard;
