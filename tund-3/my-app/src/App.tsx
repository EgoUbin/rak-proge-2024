import React from "react"
import ButtonGrid from "./Layout/ButtonGrid"
import { Outlet } from "react-router-dom"
import MyHeader from "./Layout/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyForm from "./Components/Login"
import { Container } from "@mui/material"
import Page3 from "./Components/Page3"
import "./App.css"

function App() {
  return (
    <div style={{ backgroundColor: "#282c24" }}>
      <Container
        maxWidth="lg"
        sx={{ height: "100vh" }}
      >
        <BrowserRouter>
          <MyHeader></MyHeader>
          <Outlet />
          <Routes>
            <Route
              path="/"
              element={<ButtonGrid />}
            />
            <Route
              path="/page2"
              element={<MyForm />}
            />
            <Route
              path="/page3"
              element={<Page3 />}
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  )
}

export default App
