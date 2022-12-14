import { AuthGoogleProvider } from "./contexts/authGoogle"
import { AppRoutes } from "./routes/routes"
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import { Fragment } from "react"
import { PrivateRoutes } from "./routes"

export const App = () => {
  return (
    <AuthGoogleProvider>
      <Fragment>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/home" element={<PrivateRoutes />}>
              <Route path="/home" element={<Home />}></Route>
            </Route>
          </Routes>
        </Router>
      </Fragment>
    </AuthGoogleProvider>
  )
}