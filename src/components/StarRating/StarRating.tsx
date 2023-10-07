import React, {FC} from "react";
import {Rating} from "@mui/material";

interface IProps  {
    value: number
}
const StarRating: FC<IProps> = ({ value }) => {
    return (
    <Rating
        name="text-feedback"
        value={value / 2}
        readOnly
        precision={0.5}
        />
    );
};

export {StarRating};