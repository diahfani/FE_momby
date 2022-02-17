import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/loginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        {/* <Topbar /> */}
        {/* <div className="container"> */}

        <Route
          exact
          path="/"
          element={
            <>
              <Topbar />
              <div className="container">
                <Sidebar /> <Home />
              </div>
            </>
          }
        />
        <Route
          path="/users"
          element={
            <>
              <Topbar /> <Sidebar /> <UserList />
            </>
          }
        />
        <Route
          path="/user/:userId"
          element={
            <>
              <Topbar /> <Sidebar /> <User />
            </>
          }
        />
        <Route
          path="/newUser"
          element={
            <>
              <Topbar /> <Sidebar />
              <NewUser />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Topbar /> <Sidebar />
              <ProductList />
            </>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <>
              <Topbar /> <Sidebar />
              <Product />
            </>
          }
        />
        <Route
          path="/newproduct"
          element={
            <>
              <Topbar />
              <Sidebar />
              <NewProduct />
            </>
          }
        />
        {/* </div> */}
      </Routes>
    </Router>
  );
}

export default App;
