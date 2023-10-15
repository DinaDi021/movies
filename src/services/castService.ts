import { urls } from "../constants";
import { ICredits, IRes } from "../interfaces";
import { apiService } from "./apiService";

const castService = {
  getById: (id: number): IRes<ICredits> =>
    apiService.get(urls.credits.byId(id)),
};

export { castService };
