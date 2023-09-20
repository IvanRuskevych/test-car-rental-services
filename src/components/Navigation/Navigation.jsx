import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <NavLink to="/" className={css.link}>
        Car Rental Services
      </NavLink>

      <nav>
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
