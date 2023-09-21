import React from 'react';
import {Upcoming} from "../Upcoming";
import {Popular} from "../Popular";

const Sidebar = () => {
    return (
        <div>
            <Upcoming/>
            <Popular/>
        </div>
    );
};

export {Sidebar};