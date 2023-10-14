import {Link} from "react-router-dom";
import {FC} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import styles from './Header.module.css'

import {useAppDispatch, useAppLocation, useToggle} from "../../hooks";
import {genreActions, moviesActions, searchMoviesActions} from "../../redux";

const Header: FC = () => {
    const dispatch = useAppDispatch();
    const {pathname} = useAppLocation()
    const handleMoviesClick = () => {
        dispatch(genreActions.clearGenre());
        dispatch(moviesActions.clearSort())
        dispatch(searchMoviesActions.clearSearchMovies())
    };

    const {value, change} = useToggle(true);

    const linksClassName = value ? styles.links : styles.linksMobile;

    const menuButtonIcon = value ? <MenuIcon className={styles.menuIcon} /> : <CloseIcon className={styles.closeIcon} />

    return (
        <div className={styles.container}>
            <button className={styles.menuButton} onClick={change}>
                {menuButtonIcon}
            </button>
            <div className={linksClassName}>
                <Link className={styles.link}
                      style={{color: pathname === '/movies' ? 'var(--dark)' : 'var(--basic-white)'}}
                      to="/movies"
                      onClick={handleMoviesClick}
                >
                    Movies
                </Link>
                <Link className={styles.link}
                      style={{color: pathname === '/topRated' ? 'var(--dark)' : 'var(--basic-white)'}}
                      to="/topRated"
                >
                    TopRated
                </Link>
                <Link className={styles.link}
                      style={{color: pathname === '/search' ? 'var(--dark)' : 'var(--basic-white)'}}
                      to="/search"
                      onClick={handleMoviesClick}
                >
                    Search
                </Link>
            </div>
        </div>
    );
};

export {Header};