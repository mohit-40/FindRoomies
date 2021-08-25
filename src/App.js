import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Profile from "./pages/Profile"
import Match from "./pages/Match"
import Favourite from "./pages/Favourite"
import Message from "./pages/Message"
import SignUpWhere from "./pages/SignUpWhere"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-up-where" exact component={SignUpWhere} />
          <Route path="/sign-in" exact component={SignIn} />

          <Route path="/profile" exact component={Profile} />
          <Route path="/match" exact component={Match} />
          <Route path="/favourite" exact component={Favourite} />
          <Route path="/message" exact component={Message} />

        </Switch>
      </Router>
    </>
  )
}

export default App;

