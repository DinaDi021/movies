import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import styles from "../TopRatedCard/TopRatedCard.module.css";
import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../../interfaces";
import {moviesActions} from "../../../redux";
import {StarRating} from "../../StarRating";

interface IProps extends PropsWithChildren {
    topRat: IMovie
}
const TopRatedCard: FC<IProps> = ({topRat}) => {
    const dispatch = useDispatch();
    const {id, title, vote_average, poster_path} = topRat;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + poster_path;

    const handleMovieClick = () => {
        dispatch(moviesActions.setSelectedMovie(topRat));
    };

    return (
        <div className={styles.CardFilm}>
            <Link to={`/movie/${id}`} onClick={handleMovieClick}>
                <div>
                    <div>
                        <h3>{title}</h3>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <StarRating value={vote_average}/>
                            <span style={{marginLeft: '10px'}}>{vote_average}</span>
                        </div>
                    </div>
                    <div>
                        <img className={styles.image} src={imageURL} alt={title}/>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export {TopRatedCard};