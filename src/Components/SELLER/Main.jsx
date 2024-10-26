import "./Main.css"

function MainContent () {
    return (
        <div className="div-content">
            <h2>Summary</h2>
            <div className="div-summary">
                <div className="div-sales">
                    <h3>Total Sales</h3>
                    <p>$12,345</p>
                </div>
                <div className="div-sales">
                    <h3>Total Orders</h3>
                    <p>45</p>
                </div>
                <div className="div-sales">
                    <h3>Total Customers</h3>
                    <p>30</p>
                </div>
            </div>
        </div>
    )
}

export default MainContent