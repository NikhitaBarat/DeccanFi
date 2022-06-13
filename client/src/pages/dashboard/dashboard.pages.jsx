import React from 'react'
import { Sidebar,Overview } from '../../components'
import './dashboard.styles.css';

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Sidebar />
        <Overview />
    </div>
  )
}

export default Dashboard