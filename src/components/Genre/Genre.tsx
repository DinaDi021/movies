import React, { FC, useEffect } from "react";

import { useAppDispatch } from "../../hooks";
import { genreActions } from "../../redux";

const Genre: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(genreActions.getGenre());
  }, [dispatch]);

  return <></>;
};

export { Genre };
