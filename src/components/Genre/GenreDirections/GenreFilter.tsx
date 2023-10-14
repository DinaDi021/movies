import {useSearchParams} from "react-router-dom";

import styles from './GenreBadge.module.css'

import {genreActions} from "../../../redux";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {FC} from "react";

const GenreFilter: FC = () => {
    const dispatch = useAppDispatch();
    const {genres, selectedGenreId } = useAppSelector(state => state.genres);
    const [query, setQuery] = useSearchParams();

    const handleGenreClick = (genreId: number) => {
        const genreIdString = genreId.toString();

        setQuery({ ...query, genreId: genreIdString });
        dispatch(genreActions.setGenre({ id: genreId }));
    };

    return (
        <div className={styles.container}>
            {genres.map((genre) => (
                <button
                    key={genre.id}
                    onClick={() => handleGenreClick(genre.id)}
                    className={selectedGenreId === genre.id ? styles.activeButton : ''}
                >
                    {genre.name}
                </button>
            ))}
        </div>
    );
};

export {GenreFilter};
