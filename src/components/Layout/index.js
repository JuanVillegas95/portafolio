import React from 'react'
import './index.scss'
import { Sidebar } from '../Sidebar'
import { Outlet } from 'react-router-dom'
import layoutMonke2 from '../../assets/images/layout-monke2.png'

export const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
        <img
          className="imgs hanged-monke"
          src={layoutMonke2}
          alt="bananaOpen"
        />
      </div>
    </div>
  )
}
