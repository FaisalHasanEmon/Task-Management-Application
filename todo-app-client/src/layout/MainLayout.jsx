import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const tabs = (
    <>
      <li
        role="tab"
        className={`tab ${location.pathname === "/to-do" ? "tab-active" : ""}`}
      >
        <NavLink to="to-do">To-Do</NavLink>
      </li>
      <li
        role="tab"
        className={`tab ${
          location.pathname === "/in-progress" ? "tab-active" : ""
        }`}
      >
        <NavLink to="in-progress">In Progress</NavLink>
      </li>
      <li
        role="tab"
        className={`tab ${location.pathname === "/done" ? "tab-active" : ""}`}
      >
        <NavLink to="done">Done</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-117px)]">
          <div className="mt-5">
            <ul role="tablist" className="tabs tabs-lift">
              {tabs}
            </ul>
          </div>
          <div className="">
            <Outlet></Outlet>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
