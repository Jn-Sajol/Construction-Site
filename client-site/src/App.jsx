import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivetRoute";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route element={<PrivateRoute />}>
    <Route path='/profile' element={<Profile />} />
  </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App