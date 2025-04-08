import React from "react"
import "./index.scss"
import { Sidebar } from "../Sidebar"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div className="app">
      <Sidebar />
      <Outlet />
    </div>
  )
}
