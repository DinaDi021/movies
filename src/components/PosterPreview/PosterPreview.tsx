import React, {FC, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import styles from '../MovieInfo/MovieInfoDetails/MovieInfoDetails.module.css'

import {videoService} from "../../services";
import {IVideo} from "../../interfaces";

const PosterPreview: FC = () => {
    const [videos, setVideos] =useState<IVideo[]>([]);
    const { id } = useParams();

    useEffect(() => {
        videoService.getById(+id).then(({ data }) => {
            const videoResults: IVideo[] = data.results;

            const trailers = videoResults.filter((video) => video.type === 'Trailer');

            setVideos(trailers);
        });
    }, [id]);

    const currentVideo = videos.length > 0 ? videos[0] : null;

    return (
        <div className={styles.containerVideo}>
            {currentVideo && (
                <div key={currentVideo.id}>
            <iframe
                width="510"
                height="285"
                src={`https://www.youtube.com/embed/${currentVideo.key}`}
                title={currentVideo.name}
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
                </div>
            )}
        </div>
    );
};

export { PosterPreview };
