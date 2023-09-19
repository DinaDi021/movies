import {IGenres, IRes} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService ={
    getAll: (): IRes<IGenres> => apiService.get(urls.genre)
}
export {
    genreService
}