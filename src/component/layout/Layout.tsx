import "./index.css";
import TopBar from "../topbar/TopBar";
import Header from "../header/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const navigation = useNavigate();
  useEffect(()=>{
    if(location.pathname === '/'){
      navigation('/trang-chu')
    }
  },[location.pathname])

  return (
    <>
      {/* topbar */}
      <TopBar />
      <Header/>
      <Outlet/>
    </>
  );
};

export default Layout;
