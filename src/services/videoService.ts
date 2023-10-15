import { urls } from "../constants";
import { IPagination, IRes, IVideo } from "../interfaces";
import { apiService } from "./apiService";

const videoService = {
  getById: (id: number): IRes<IPagination<IVideo>> =>
    apiService.get(urls.video.byId(id)),
};

export { videoService };
