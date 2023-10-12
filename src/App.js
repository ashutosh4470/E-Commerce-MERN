import "./App.css";
import Layout from "./components/Layout";
import Productdetail from "./pages/Productdetail";
import Productlist from "./pages/Productlist";
import Registration from "./pages/Registration";
import ForgetPass from "./pages/ForgetPass";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";
import Tmp from './pages/Tmp'
import ResetPassword from "./pages/ResetPassword";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  

    return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route  index element={<Home/>} />
            <Route path="/Categories" element={<Home />} />
            <Route path="/product" element={<Productlist />} />
            <Route path="/product/:id" element={<Productdetail />} />
       
            
            <Route path="/register" element={< Registration/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/forget" element={<ForgetPass />}/>
            <Route path="/reset" element={<ResetPassword />}/>


            <Route path="/cart" element={<CartPage />}/>
            <Route path="/temp" element={<Tmp />}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


