import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Stuff from "./pages/Stuff";
import Contact from "./pages/Contact";

 const App=()=> {
    return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/stuff" element={<Stuff />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
</BrowserRouter> 
      );
}
export default App;