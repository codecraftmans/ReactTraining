import React from "react";
const TopHeaderComponent = () => {
    return (
        <React.Fragment>
            <div className="TopnavbarContent">
                <div className="container">
                    <div className="content">
                        <div className="logo">
                            <div className="menuicon">
                                <img src="https://img.icons8.com/ios/50/menu--v1.png" alt="icon" />
                            </div>
                            <img className="logo_img" src="https://www.pngkey.com/png/detail/520-5208886_healthkart-logo-png.png" alt="Healthkart Logo Png@pngkey.com" />
                        </div>
                        <div className="nav-search">
                            <img src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1" />
                            <input type="text" className="search" placeholder="Search for" />
                        </div>
                        <div className="buttons">
                            <button type="button" className="btn">Login</button>
                            <button type="button" className="btn">Signup</button>
                        </div>
                        <div className="nav_features">

                            <img className="wallet-icon" src="https://img.icons8.com/ios/50/wallet--v1.png" alt="wallet--v1" />
                            <img className="cart-icon" src="https://img.icons8.com/windows/32/bag-front-view.png" alt="bag-front-view" />
                        </div>
                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}


export default TopHeaderComponent;
