import React, {FC, PropsWithChildren} from "react";
import {Rating} from "@mui/material";

interface IProps extends PropsWithChildren {
    value: number
}
const StarRating: FC<IProps> = ({ value }) => {
    return (
        <Rating
            value={value / 2}
        />
    );
};

export {StarRating};