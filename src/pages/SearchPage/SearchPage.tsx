import React from 'react';

import styles from './SearchPage.module.css'
import {Search} from "../../components";

const SearchPage = () => {
    return (
        <div className={styles.search}>
            <Search/>
        </div>
    );
};

export {SearchPage};