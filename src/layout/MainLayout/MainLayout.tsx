import React from 'react';
import {Outlet} from "react-router-dom";

import styles from './MainLayout.module.css'

import {Footer, Header, Sidebar} from "../../components";


const MainLayout = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className={styles.container}>
                <Sidebar/>
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>

        </div>
    );
};

export {MainLayout};