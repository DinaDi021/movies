import {IMovie, IPagination, IRes} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const popularService = {
    getAll: (page:number): IRes<IPagination<IMovie>> => apiService.get(urls.popular, {params: page})
}

export {
    popularService
}