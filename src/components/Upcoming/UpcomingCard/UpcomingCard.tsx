import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import styles from './UpcomingCard.module.css'

import {moviesActions} from "../../../redux";
import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../../interfaces";

interface IProps extends PropsWithChildren {
    upcomingMovie: IMovie
}
const UpcomingCard: FC<IProps> = ({upcomingMovie}) => {
    const dispatch = useDispatch();
    const {id, title, poster_path} = upcomingMovie;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + poster_path;

    const handleMovieClick = () => {
        dispatch(moviesActions.setSelectedMovie(upcomingMovie));
    };

    return (
        <Link to={`/movie/${id}`} onClick={handleMovieClick}>
            <div className={styles.UpcomingCard}>
                <h4>{title}</h4>
                <img src={imageURL} alt={title}/>
            </div>
        </Link>
    );
};

export {UpcomingCard};