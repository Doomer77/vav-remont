import Header from "../header/Header";
import Footer from "../footer/Footer";
import React, {FC} from "react";
import styled from "@emotion/styled";

const Layout:FC = ({children}) => {
    return (
        <React.Fragment>
            <Header />
                {children}
            <Footer />
        </React.Fragment>
    )
}
export default Layout