import React, {FC} from 'react';
import {Link} from "react-router-dom";

import styles from "./Sidebar.module.css";

import {Popular, PopularPreview} from "../Popular";
import {Upcoming, UpcomingPreview} from "../Upcoming";

const Sidebar: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link to={`/movies/popular`}>
                    <h3>Popular now:</h3>
                </Link>
                <Popular/>
                <PopularPreview/>
            </div>
            <div className={styles.wrapper}>
                <Link to={`/movies/upcoming`}>
                    <h3>Released soon:</h3>
                </Link>
                <Upcoming/>
                <UpcomingPreview/>
            </div>
        </div>
    );
};

export {Sidebar};