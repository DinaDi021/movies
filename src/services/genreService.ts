import { urls } from "../constants";
import { IGenres, IRes } from "../interfaces";
import { apiService } from "./apiService";

const genreService = {
  getAll: (): IRes<IGenres> => apiService.get(urls.genre),
};
export { genreService };
