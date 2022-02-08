import { Outlet } from 'react-router-dom';
import { NavBar } from '.';

const MainLayaut = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
    );
};

export default MainLayaut;
