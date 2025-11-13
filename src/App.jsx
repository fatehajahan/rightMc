import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./components/Home";
import LearnMore from "./components/LearnMore";
import MoreOffer from "./components/MoreOffer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop /> 
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/learn-more-about-us" element={<LearnMore />} />
      <Route path="/more-offer" element={<MoreOffer />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
