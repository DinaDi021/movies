import React, {FC} from 'react';
import {CircularProgress} from "@mui/material";

const IsLoading: FC = () => {
    return (
        <div>
            <CircularProgress />
        </div>
    );
};

export {IsLoading};