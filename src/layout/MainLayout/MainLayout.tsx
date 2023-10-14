import React from 'react';
import {Outlet} from "react-router-dom";

import styles from './MainLayout.module.css'

import {Footer, Header, Sidebar} from "../../components";


const MainLayout = () => {
    return (
        <div>
            <>
                <Header/>
            </>
            <div className={styles.container}>
                <Sidebar/>
                <Outlet/>
            </div>
            <>
                <Footer/>
            </>
        </div>
    );
};

export {MainLayout};