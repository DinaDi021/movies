import {Link} from "react-router-dom";

import styles from './Header.module.css'

import {useAppDispatch, useAppLocation} from "../../hooks";
import {genreActions, moviesActions, searchMoviesActions} from "../../redux";
import {SwitchTheme} from "../SwitchTheme";

const Header = () => {
    const dispatch = useAppDispatch();
    const {pathname} = useAppLocation()
    const handleMoviesClick = () => {
        dispatch(genreActions.clearGenre());
        dispatch(moviesActions.clearSort())
        dispatch(searchMoviesActions.clearSearchMovies())
    };

    return (
        <div className={styles.container}>
            <Link
                style={{ color: pathname === '/movies' ? 'black' : 'white' }}
                to="/movies"
                onClick={handleMoviesClick}
            >
                Movies
            </Link>
            <Link
                style={{ color: pathname === '/topRated' ? 'black' : 'white' }}
                to="/topRated"
            >
                TopRated
            </Link>
            <Link
                style={{ color: pathname === '/search' ? 'black' : 'white' }}
                to="/search"
                onClick={handleMoviesClick}
            >
                Search
            </Link>
            <SwitchTheme/>
            {/*<UserInfo/>*/}
        </div>
    );
};

export {Header};