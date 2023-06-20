import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Modal from "./components/Modal"
import Results, { loader as resultsLoader } from "./pages/Results";


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Main />} />
    <Route path="photos/:query" element={<Results />} loader={resultsLoader}>
      {/* <Route path=":id" element={<Modal />} /> */}
    </Route>
  </Route>
))

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
