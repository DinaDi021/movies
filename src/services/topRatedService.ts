import {IMovie, IPagination, IRes} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const topRatedService = {
    getAll: (page: number): IRes<IPagination<IMovie>> => apiService.get(urls.topRated, {
        params: {page}
    })
}

export {topRatedService}