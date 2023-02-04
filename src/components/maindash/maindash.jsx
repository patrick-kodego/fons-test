import React from 'react'
import './maindash.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'

const maindash = () => {
  return (
    <div className='MainDash'>
        <h1>Dashboard</h1>
        <Cards />
        <h2>Recent Orders</h2>
        <Table />
    </div>
  )
}

export default maindash