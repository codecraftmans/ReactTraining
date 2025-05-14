import React from "react";
import HomePageComponent from "../../Pages/Home";
import Header from "../Header";
const LayoutComponent = () => {
    return (<React.Fragment>
        <Header />
        <HomePageComponent />
    </React.Fragment>)
}
export default LayoutComponent;