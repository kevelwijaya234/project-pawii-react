
import { createBrowserRouter } from 'react-router'
import PublicLayout from '../layouts/PublicLayouts'

const router = createBrowserRouter([
  {
    path: '/',
    Component: PublicLayout,
    children: [
      {
        index: true,
        lazy: async () => {
          const module = await import('../pages/Home.jsx')
          return { Component: module.default }
        },
      },
      {
        path: 'about',
        lazy: async () => {
          const module = await import('../pages/About.jsx')
          return { Component: module.default }
        },
      },
    ],
  },
])

export default router
