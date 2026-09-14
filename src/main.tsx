import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@/src/App.tsx'
import Home from '@/pages/Home.tsx'
import Shells from '@/pages/Shells.tsx'
import Sams from '@/pages/Sams'
import Aams from '@/pages/Aams'
import Arms from '@/pages/Arms'
import Agms from '@/pages/Agms'
import Bombs from '@/pages/Bombs'
import TankBelts from '@/pages/TankBelts'
import Rockets from '@/pages/Rockets'
import '@/styles/globals.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/ammo/shells', element: <Shells /> },
      { path: '/ammo/sams', element: <Sams /> },
      { path: '/ammo/aams', element: <Aams /> },
      { path: '/ammo/arms', element: <Arms /> },
      { path: '/ammo/agms', element: <Agms /> },
      { path: '/ammo/bombs', element: <Bombs /> },
      { path: '/ammo/tank-belts', element: <TankBelts /> },
      { path: '/ammo/rockets', element: <Rockets /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
