import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./Routes/Login";
import { Principal_Dashboard } from "./Routes/Principal_Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/:roleDashboard" element={<Principal_Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
