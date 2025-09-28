import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes.tsx'
import "./utils/i18n.ts";
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
