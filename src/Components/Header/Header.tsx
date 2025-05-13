import React from "react";
import './index.css'
const Header = () => {
    const menudata = [{
        dis_num: 'Wellnes'
    },
    {
        dis_num: 'Shop'
    },
    {
        dis_num: 'Health & Fitness'
    },
    {
        dis_num: 'Nutrition'
    },
    {
        dis_num: 'Wellness'
    },
    {
        dis_num: 'Blog'
    }
    ]
    return (
        <React.Fragment>

            <nav className="NavbarContentWrapper">
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
                <div className="bottomNavbarContent">
                    <div className="container">
                        <div className="bottomNavbarContentWrapper">
                            <ul className="bottomNavbarList">
                                {menudata.map((menu, mi) => {
                                    return (
                                        <li key={`lv1 ${mi}`} className={`nav_items`}>
                                            <div className="menu_name">
                                                {menu.dis_num}
                                            </div>
                                            <div className="nav_itemsChildContainer">
                                                <div className="childs">
                                                    <ul className='nav_items_Child'>
                                                        <li>Daily Essentials</li>
                                                        <li>Vitamins and Minerals</li>
                                                        <li>Weight Management</li>
                                                        <li>Other Supplements</li>
                                                        <li>Hair</li>
                                                    </ul>
                                                </div>
                                                <div className="childs">
                                                    <ul className='nav_items_Child'>
                                                        <li>Daily Essentials</li>
                                                        <li>Vitamins and Minerals</li>
                                                        <li>Weight Management</li>
                                                        <li>Other Supplements</li>
                                                        <li>Hair</li>

                                                    </ul>
                                                </div>
                                                <div className="childs">
                                                    <ul className='nav_items_Child'>
                                                        <li>Daily Essentials</li>
                                                        <li>Vitamins and Minerals</li>
                                                        <li>Weight Management</li>
                                                        <li>Other Supplements</li>
                                                        <li>Hair</li>

                                                    </ul>
                                                </div>
                                                <div className="childs">
                                                    <ul className='nav_items_Child'>
                                                        <li>Daily Essentials</li>
                                                        <li>Vitamins and Minerals</li>
                                                        <li>Weight Management</li>
                                                        <li>Other Supplements</li>
                                                        <li>Hair</li>

                                                    </ul>
                                                </div>

                                            </div>









                                        </li>

                                    )
                                })}


                            </ul>
                        </div>


                    </div>
                </div>








            </nav>


        </React.Fragment>
    )
}


export default Header;
