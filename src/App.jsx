import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movies } from "./pages/Movies";
import { AppLayout } from "./components/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        { 
          path: "/movies",
          element: <Movies /> 
        },
      ]
    },
   

  ]);
  // const router = createBrowserRouter(

  //   createRoutesFromElements(
  //     <>
  //     <Route path="/home" element={<Home/>}/>
  //     <Route path="/about" element={<About/>}/>
  //     <Route path="/movies" element={<Movies/>}/>
  //     <Route path="/contact" element={<Contact/>}/>
  //     </>
  //   )
  // );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
