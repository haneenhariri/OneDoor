import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes.tsx'
import "./utils/i18n.ts";
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <LoadingSpinner/>
    <RouterProvider router={router} />
  </>,
)
