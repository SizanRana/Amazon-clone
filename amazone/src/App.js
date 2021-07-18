import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase/firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in....
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //user is logged out.......
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
    });

    return () => {
      // Any cleanup operations go in here.....
      unsubscribe();
    }
  },[])

  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
  {/*React router*/}
      {/* Home page*/}
      {/* Chechout page*/}
      {/* Login page*/}
}

export default App;
