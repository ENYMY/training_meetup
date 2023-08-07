import React, { useContext } from "react";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import FavoriteContext from "../../store/favorites-context";
const MainNavigation = (props) => {
  const favoriteContext = useContext(FavoriteContext);
  return (
    <div className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>
              My Favorite
              <span className={classes.badge}>
                {favoriteContext.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
