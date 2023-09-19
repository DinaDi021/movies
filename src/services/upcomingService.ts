import {IMovie, IPagination, IRes} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const upcomingService = {
    getAll: (page: number): IRes<IPagination<IMovie>> => apiService.get(urls.upcoming, {
        params: {page}
    })
}

export {
    upcomingService
}