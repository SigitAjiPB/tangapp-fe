import { Outlet } from 'react-router-dom';
import LandingPage from '../pages/landingPage';

function Layout() {
    return (
      <div>
        <LandingPage />
        <main>
          <Outlet />
        </main>
      </div>
    );
  }

  export default Layout;