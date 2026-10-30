import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import Services from './components/Services'
import { Error } from './components/Error'
import WelcomeMsg from './components/WelcomeMsg'
import Template from './components/Template'

const App = () => {
  const router = createBrowserRouter([
   {
    path:"/",
    element: <Template/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/welcome/:username",
        element:<WelcomeMsg/>
      },
      {
        path:"/*",
        element:<Error/>
      }
    ]
   }


    

  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
