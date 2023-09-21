import {IPagination, IRes, IVideo} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const videoService = {
    getById: (id: number): IRes<IPagination<IVideo>> => apiService.get(urls.video.byId(id))
}

export {
    videoService
}