import React from 'react'
import MainLayout from '../layouts/MainLayout'
import MyBttton from '../MyButton.jsx'

const Home = () => {
  return (
    <MainLayout>
         <div className="container mt-4 p-5 bg-info text-white rounded">
      <h1>Example</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, incidunt.</p>
      </div>
     <MyBttton text="Edit" color="success"/>
     <MyBttton text="Success" color="primary"/>
     <MyBttton text="Cancel" color="danger"/>
    </MainLayout>
  )
}

export default Home