import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import FooterMarcas from './FooterMarcas'
import Footer from './Footer';

const Layout = () => {

    return (
        <React.Fragment>
            <Navbar />
            <Outlet className="content-body" />
            <FooterMarcas/>
            <Footer />
        </React.Fragment>
    )
} 

export default Layout;