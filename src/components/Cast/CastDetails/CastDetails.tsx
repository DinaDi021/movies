import {FC, PropsWithChildren} from 'react';

import styles from './CastDetails.module.css'

import empty from '../../../assets/img/empty.jpg'
import {ICast} from "../../../interfaces";

interface IProps extends PropsWithChildren {
actor: ICast
}

const CastDetails: FC<IProps> = ({actor}) => {

    const {name, profile_path} = actor;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + profile_path;

    return (
        <div className={styles.actors}>
            <h3>{name}</h3>
            <img className={styles.actorImg} src={profile_path? imageURL: empty } alt={name}/>
        </div>
    );
};
export {CastDetails};