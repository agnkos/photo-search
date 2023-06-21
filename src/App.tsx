import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Modal, { loader as photoDetailLoader } from "./components/Modal";
import Layout from "./pages/Layout";
import Results, { loader as resultsLoader } from "./pages/Results";


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<Main />} />
    <Route path="photos/:query" element={<Results />} loader={resultsLoader}>
      <Route path=":id" element={<Modal />} loader={photoDetailLoader} />
    </Route>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
