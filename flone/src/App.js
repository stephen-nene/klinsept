import PropTypes from "prop-types";
import React, { Suspense, lazy,useEffect,useState } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { connect, useSelector } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import Search from "./pages/Search";
import Payment from "./pages/other/Payment";
import { isAuthenticated } from "./helpers/backendFectch";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Product = lazy(() => import("./pages/Product"));

const Blogs = lazy(() => import("./pages/Blogs"));
const Blog = lazy(() => import("./pages/Blog"));

const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));
const NotFound = lazy(() => import("./pages/other/NotFound"));
// auth
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));

const App = () => {
  const [userData, setUserData] = useState(null);

  const currencyData = useSelector(
    (state) => state.currencyData.selectedCurrency
  );

  useEffect(() => {
    // Flag to track if the component is still mounted
    let isMounted = true;

    const fetchAuthData = async () => {
      try {
        const res = await isAuthenticated();
        // console.log(res)
        if (res?.status === 200 && isMounted ) {
          setUserData(res.data);
          // toast.success(`Logged in as ${res?.data?.first_name}`);
        }
      } catch (error) {
        // Handle any errors if necessary
        console.error('Error fetching auth data:', error);
      }
    };

    if (userData === null) {
      fetchAuthData();
    }

    return () => {
      isMounted = false;
    };
  }, [userData]); // Run this effect when userData changes


  return (
    <ToastProvider placement="bottom-left ">
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
                <Route path={"/blog/:id"} element={<Blog />} />
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
                <Route
                  path="/payment/:orderId"
                  element={<Payment currency={currencyData} />}
                />
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
  userData: PropTypes.object,
};

const mapStateToProps = (state) => ({
  authData: state.app.authData, // Mapping the Redux state to component props
});

// Connecting the component to Redux
export default connect(mapStateToProps)(App);
