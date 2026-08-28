import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => (
  <div className="app-layout">
    <Header />
    <main className="app-main">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
