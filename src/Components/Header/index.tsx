import React from "react";
import './index.css'
import TopHeaderComponent from "./topHeader";
const Header: React.FC<any> = () => {
    const menudata = [{
        dis_num: 'Wellnes',
        id:1,
        ch: [
            {
                dis_nm: 'Wellness Daily Essentials 1',
                url: '/DailyEssentials'
            },
            {
                dis_nm: 'Wellness Daily Essentials 2',
                url: '/DailyEssentials'
            },
            {
                dis_nm: 'Wellness Daily Essentials 3',
                url: '/DailyEssentials'
            },
            {
                dis_nm: 'Wellness Daily Essentials 4',
                url: '/DailyEssentials'
            },
        ]
    },
    {
        dis_num: 'Shop',
         id:2,
        ch: [
            {
                dis_nm: 'Shop Daily Essentials 1',
                url: '/DailyEssentials'
            },
            {
                dis_nm: 'Shop Daily Essentials 2',
                url: '/DailyEssentials'
            },
            {
                dis_nm: 'Shop Daily Essentials 3',
                url: '/DailyEssentials'
            },
            {
                dis_nm: 'Shop Daily Essentials 4',
                url: '/DailyEssentials'
            },
        ]
    },
    {
        dis_num: 'Health & Fitness',
         id:3,
        ch: [
            {
                dis_nm: 'Health & Fitness Daily Essentials 1',
                url: '/DailyEssentials'
            },
            {
                dis_nm: 'Health & Fitness Daily Essentials 2',
                url: '/DailyEssentials'
            },
            {
                dis_nm: 'Health & Fitness Daily Essentials 3',
                url: '/DailyEssentials'
            },
            {
                dis_nm: 'Health & Fitness Daily Essentials 4',
                url: '/DailyEssentials'
            },
        ]
    },
    {
        dis_num: 'Nutrition',
         id:4,
        ch: [
            {
                dis_nm: 'Nutrition Daily Essentials 1',
                url: '/DailyEssentials'
            },
            {
                dis_nm: 'Nutrition Daily Essentials 2',
                url: '/DailyEssentials'
            },
            {
                dis_nm: 'Nutrition Daily Essentials 3',
                url: '/DailyEssentials'
            },
            {
                dis_nm: 'Nutrition Daily Essentials 4',
                url: '/DailyEssentials'
            },
        ]
    },
    {
        dis_num: 'Blog',
         id:5,
    }
    ]
    const megaMenu = (childNodes: any, menuType:any) => {
        if(menuType==2){
            return (
            <div className="nav_itemsChildContainer">
                <div className="childs">

                   Alternamte menu here
                </div>
            </div>
        )    
        }else {
            return (
            <div className="nav_itemsChildContainer">
                <div className="childs">

                    <ul className='nav_items_Child'>
                        {childNodes.map((item: any, i: number) => {
                            return (
                                <li key={`childNo_${i}`}>{item.dis_nm}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
        }
        
    }
    return (
        <React.Fragment>

            <nav className="NavbarContentWrapper">
                <TopHeaderComponent></TopHeaderComponent>
                <div className="bottomNavbarContent">
                    <div className="container">
                        <div className="bottomNavbarContentWrapper">
                            <ul className="bottomNavbarList">
                                {menudata.map((menu, mi) => {
                                    let menuType=1;
                                    if(menu.id==3){
                                        menuType=2
                                    }
                                    return (
                                        <li key={`lv1 ${mi}`} className={`nav_items`}>
                                            <div className="menu_name">
                                                {menu.dis_num}
                                            </div>
                                            {menu.ch && menu.ch.length > 0 ? megaMenu(menu.ch, menuType) : <></>}


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
