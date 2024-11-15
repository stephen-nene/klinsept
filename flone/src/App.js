import PropTypes from "prop-types";
import React, {  Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import Search from "./pages/Search";

// home pages
const Home = lazy(() => import("./pages/Home"));

// shop pages
const Products = lazy(() => import("./pages/Products"));

// product pages
const Product = lazy(() => import("./pages/Product"));

// blog pages
const Blogs = lazy(() => import("./pages/Blogs"));

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));
const Payment = lazy(()=> import("./pages/other/Payment"))
const NotFound = lazy(() => import("./pages/other/NotFound"));

// auth
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));

const App = (props) => {


  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Routes>
                <Route path={"/"} element={<Home />} />
                {/* Shop pages */}
                <Route path={"/products"} element={<Products />} />
                {/* Shop product pages */}
                <Route path={"/product/:id"} element={<Product />} />

                {/* Blog pages */}
                <Route path={"/blogs"} element={<Blogs />} />

                {/* auth */}
                <Route path={"/register"} element={<Register />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/reset/:otp"} element={<ResetPassword />} />
                <Route path={"/forgot"} element={<ForgotPassword />} />

                {/* Other pages */}
                <Route path={"/about"} element={<About />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/my-account"} element={<MyAccount />} />
                <Route path={"/cart"} element={<Cart />} />
                <Route path={"/wishlist"} element={<Wishlist />} />
                <Route path={"/compare"} element={<Compare />} />
                <Route path={"/checkout"} element={<Checkout />} />
                <Route path='/payment' element={<Payment/>}/>
                <Route path="/search/:searchParams" element={<Search />} />
                <Route path={"*"} element={<NotFound />} />
              </Routes>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(App);
