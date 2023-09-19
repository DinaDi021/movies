import {IMovie, IPagination, IRes, IVideo} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const videoService = {
    getById: (videoId: number): IRes<IPagination<IVideo>> => apiService.get(urls.video.byId(videoId))
}

export {
    videoService
}