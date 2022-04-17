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
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./config/redux/store";

function App() {
  return (
    <>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/dashboard"
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
              <Topbar />
              <div className="container">
                <Sidebar /> <UserList />
              </div>
            </>
          }
        />
        <Route
          path="/user/:userId"
          element={
            <>
              <Topbar />
              <div className="container">
                <Sidebar /> <User />
              </div>
            </>
          }
        />
        <Route
          path="/newUser"
          element={
            <>
              <Topbar /> 
              <div className="container">
                <Sidebar /> <NewUser />
              </div>    
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Topbar /> 
              <div className="container">
                <Sidebar /> <ProductList />
              </div>
              
            </>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <>
              <Topbar /> 
              <div className="container">
                <Sidebar /> <Product />
              </div>
              
            </>
          }
        />
        <Route
          path="/newproduct"
          element={
            <>
              <Topbar />
              <div className="container">
                <Sidebar /> <NewProduct />
              </div>
            </>
          }
        />
        {/* </div> */}
      </Routes>
    </Router>
        </PersistGate>
      </Provider>
    </>
    
  );
}

export default App;
