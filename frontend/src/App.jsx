import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout.jsx";
import { ErrorPage, HomePage, ResponsePage } from "./pages/Pages.js";

// Create routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/response" element={<ResponsePage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

// Render routes
function App() {
  return <RouterProvider router={router} />;
}

export default App;
