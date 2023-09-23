import {Link} from "react-router-dom";

import styles from './PopularCard.module.css'

import {moviesActions} from "../../../redux";
import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../../interfaces";
import {useAppDispatch} from "../../../hooks";

interface IProps extends PropsWithChildren {
    popularMovie: IMovie
}
const PopularCard: FC<IProps> = ({popularMovie}) => {
    const dispatch = useAppDispatch();
    const {id, title, poster_path} = popularMovie;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + poster_path;

    const handleMovieClick = () => {
        dispatch(moviesActions.setSelectedMovie(popularMovie));
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

export {PopularCard};