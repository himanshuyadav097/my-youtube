import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContanor from "./components/MainContanor";
import WatchPage from "./components/watchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContanor />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <Head />
          {/* <Body /> */}
          <RouterProvider router={appRouter}> </RouterProvider>
        </div>
      </Provider>
    </>
  );
}

export default App;
