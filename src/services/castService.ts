import {urls} from "../constants";
import {apiService} from "./apiService";
import {ICredits, IRes} from "../interfaces";

const castService = {
    getById: (id:number): IRes<ICredits> => apiService.get(urls.credits.byId(id)),
};

export {castService};
