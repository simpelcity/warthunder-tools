import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@/src/App.tsx'
import Home from '@/pages/Home.tsx'
import Shells from '@/pages/Shells.tsx'
import Sams from '@/pages/Sams'
import Aams from '@/pages/Aams'
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
