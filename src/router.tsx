import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainLayout } from "./layout";
import {
  MoviePage,
  MoviesPage,
  NotFoundPage,
  PopularMoviesPage,
  SearchPage,
  TopRatedPages,
  UpcomingMoviesPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"movies"} />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "movie/:id",
        element: <MoviePage />,
      },
      {
        path: "movie/:id/:type",
        element: <MoviePage />,
      },
      {
        path: "movies/popular",
        element: <PopularMoviesPage />,
      },
      {
        path: "movies/upcoming",
        element: <UpcomingMoviesPage />,
      },
      {
        path: "topRated",
        element: <TopRatedPages />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export { router };
