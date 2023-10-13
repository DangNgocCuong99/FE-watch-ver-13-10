import { BrowserRouter, Route, Routes } from "react-router-dom";

import LayoutDefault from "../layout";
import { transformRoute } from "./hook";
import Layout from "../component/layout/Layout";
import Home from "../shopViews/home";
import GioiThieu from "../shopViews/gioiThieu";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* //manage */}
        <Route path="/manage" element={<LayoutDefault /> }>
          {transformRoute()}
        </Route>
        {/* // shop */}
        <Route path="/" element={<Layout/>}>
          <Route path="trang-chu" element={<Home/>}/>
          <Route path="gioi-thieu" element={<GioiThieu/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
