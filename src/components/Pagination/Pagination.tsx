import React from 'react';
import {useSearchParams} from "react-router-dom";

import {Pagination} from "@mui/material";

interface PaginationsProps {
    totalPages: number;
}
const Paginations: React.FC<PaginationsProps> = ({totalPages}) => {
    const [query, setQuery] = useSearchParams()
    let currentPage = +query.get('page') || 1;

    if (currentPage > 500) {
        currentPage = 500;
        setQuery(prev => {
            prev.set('page', '500');
            return prev;
        });
    }


    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setQuery((prev) => {
            prev.set('page', page.toString());
            return prev;
        });
    };

    return (
        <div>
            <Pagination
                count={totalPages > 500 ? 500 : totalPages}
                page={+currentPage}
                variant="outlined"
                color="secondary"
                onChange={handlePageChange}/>
        </div>
    );
};

export {Paginations};