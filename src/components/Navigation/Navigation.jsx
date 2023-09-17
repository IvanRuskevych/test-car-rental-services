import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <div>
        <NavLink to="/" className={css.link}>
          Car Rental Services
        </NavLink>
      </div>
      <nav>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={css.link}>
          Cataloge
        </NavLink>
        <NavLink to="/favorites" className={css.link}>
          Favorites
        </NavLink>
      </nav>
    </>
  );
}
