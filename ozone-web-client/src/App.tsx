import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact, Error, Home, SignIn, SignUp } from "./page";
const MyApp = () => {
  return (
    <div className="bg-primary [&_*]:transition-transform [&_*]:ease-linear [&_*]:duration-200 multibackground">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <MyApp />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/auth",
        element: (
          <div>
            <Outlet />
          </div>
        ),
        children: [
          { path: "sign-in", element: <SignIn /> },
          { path: "sign-up", element: <SignUp /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className="App text-slate-800 max-w-[1500px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
