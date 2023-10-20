import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppLocation, useToggle } from "../../hooks";
import { genreActions, moviesActions, searchMoviesActions } from "../../redux";
import styles from "./Header.module.css";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useAppLocation();
  const handleMoviesClick = () => {
    dispatch(genreActions.clearGenre());
    dispatch(moviesActions.clearSort());
    dispatch(searchMoviesActions.clearSearchMovies());
  };

  const { value, change } = useToggle(true);

  const linksClassName = value ? styles.links : styles.linksMobile;
  const containerClassName = value ? styles.container : styles.containerMobile;

  const menuButtonIcon = value ? (
    <MenuIcon className={styles.menuIcon} />
  ) : (
    <CloseIcon className={styles.closeIcon} />
  );

  const handleLinkClick = () => {
    handleMoviesClick();
    if (containerClassName === styles.containerMobile) {
      change();
    }
  };

  return (
    <div className={containerClassName}>
      <button className={styles.menuButton} onClick={change}>
        {menuButtonIcon}
      </button>
      <div className={linksClassName}>
        <Link
          className={styles.link}
          style={{
            color:
              pathname === "/movies" ? "var(--dark)" : "var(--basic-white)",
          }}
          to="/movies"
          onClick={handleLinkClick}
        >
          Movies
        </Link>
        <Link
          className={styles.link}
          style={{
            color:
              pathname === "/topRated" ? "var(--dark)" : "var(--basic-white)",
          }}
          to="/topRated"
          onClick={handleLinkClick}
        >
          TopRated
        </Link>
        {linksClassName === styles.linksMobile && (
          <>
            <Link
              className={styles.link}
              style={{
                color:
                  pathname === "/movies/popular"
                    ? "var(--dark)"
                    : "var(--basic-white)",
              }}
              to="/movies/popular"
              onClick={handleLinkClick}
            >
              Popular
            </Link>
            <Link
              className={styles.link}
              style={{
                color:
                  pathname === "/movies/upcoming"
                    ? "var(--dark)"
                    : "var(--basic-white)",
              }}
              to="/movies/upcoming"
              onClick={handleLinkClick}
            >
              Released soon
            </Link>
          </>
        )}
        <Link
          className={styles.link}
          style={{
            color:
              pathname === "/search" ? "var(--dark)" : "var(--basic-white)",
          }}
          to="/search"
          onClick={handleLinkClick}
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export { Header };
