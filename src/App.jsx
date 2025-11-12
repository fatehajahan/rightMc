import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./components/Home";
import LearnMore from "./components/LearnMore";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />  {/* Scrolls to top on route change */}
      <Outlet />      
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/learn-more-about-us" element={<LearnMore />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
