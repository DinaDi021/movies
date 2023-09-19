import {apiService} from "./apiService";
import {urls} from "../constants";
import {IMovie, IPagination, IRes} from "../interfaces";

const moviesService = {
    getAll: (page: number, genreId:number, sorted: string):IRes<IPagination<IMovie>> => apiService.get(urls.movies, {
        params: {
            page,
            with_genres: genreId,
            sort_by: sorted
        }
    }),
    getById: (id: number): IRes<IMovie> => apiService.get(urls.movie.byId(id))
}

export {moviesService}