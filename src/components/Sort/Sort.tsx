import {FC, useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import styles from './Sort.module.css'

import {moviesActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {SelectInputProps} from "@mui/material/Select/SelectInput";

const SortComponent: FC = () => {
    const dispatch = useAppDispatch();
    const {selectedSortBy} = useAppSelector((state) => state.movies);
    const [query, setQuery] = useSearchParams();
    const selectedSort = query.get('sorted');

    useEffect(() => {
        if (selectedSort) {
            dispatch(moviesActions.setSortBy(selectedSort));
        }
    }, [dispatch, query]);

    const handleSortChange: SelectInputProps<string>['onChange'] = (event) => {
        const selectedSortBy = event.target.value;
        setQuery({ ...query, sorted: selectedSortBy })
        dispatch(moviesActions.setSortBy(selectedSortBy));
    };

    return (
        <div className={styles.sortDiv}>
            <FormControl fullWidth sx={{ "& .MuiInputLabel-root": { color: "#005B64", "&.Mui-focused": { color: "#164044" } }, "& .MuiOutlinedInput-root": { "&.Mui-focused fieldset": { borderColor: "#005B64" } }, "& .MuiSelect-root": { color: "#005B64", "&:hover": { color: "#164044" } } }}>
                <InputLabel htmlFor="my-select">
                    Sort by
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Sort by"
                    onChange={handleSortChange}
                    value={selectedSortBy || ""}
                    sx={{color: "#005B64", "&:focus": { borderColor: "#005B64" }}}
                >
                    <MenuItem value="without_sorting">Without sorting</MenuItem>
                    <MenuItem value="popularity.asc">Popularity <ArrowUpwardIcon></ArrowUpwardIcon> </MenuItem>
                    <MenuItem value="popularity.desc">Popularity <ArrowDownwardIcon></ArrowDownwardIcon></MenuItem>
                    <MenuItem value="vote_average.asc"><span>Vote Average</span> <ArrowUpwardIcon></ArrowUpwardIcon></MenuItem>
                    <MenuItem value="vote_average.desc">Vote Average <ArrowDownwardIcon></ArrowDownwardIcon></MenuItem>
                    <MenuItem value="release_date.asc">Release Date <ArrowUpwardIcon></ArrowUpwardIcon></MenuItem>
                    <MenuItem value="release_date.desc">Release Date <ArrowDownwardIcon></ArrowDownwardIcon></MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export { SortComponent };
