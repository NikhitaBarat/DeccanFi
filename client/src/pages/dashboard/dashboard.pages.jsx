import React from 'react'
import { Sidebar } from '../../components';
import { Outlet } from 'react-router-dom'
import './dashboard.styles.css';

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Dashboard