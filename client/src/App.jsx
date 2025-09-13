import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./components/LayOut";
import Home from "./pages/Home";

import Cart from "./pages/Cart";
import Product from "./pages/Product";

import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

import Airpode from "./pages/Airpode";
import Tv from "./pages/Tv";
import Mobile from "./pages/Mobile";
import Clothes from "./pages/Clothes";
import Mouse from "./pages/Mouse";
import Trimmers from "./pages/Trimmers";
import Earphones from "./pages/Earphones";
import Speaker from "./pages/Speaker";
import About from "./components/About";
import Camera from "./pages/Camera";
import Refrigerator from "./pages/Refrigerator";
import Watch from "./pages/Watch";
import WishList from "./pages/WishList";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import SignIn from "./pages/SignIn";
import PrivateUser from "./components/PrivateUser";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayOut />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route element={<PrivateUser />}></Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/camera" element={<Camera />} />
            <Route path="/refrigerator" element={<Refrigerator />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="product" element={<Product />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/airpode" element={<Airpode />} />
            <Route path="/earphones" element={<Earphones />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mouse" element={<Mouse />} />
            <Route path="/trimmers" element={<Trimmers />} />
            <Route path="/earphone" element={<Earphones />} />
            <Route path="/speaker" element={<Speaker />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />

            <Route path="/sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
