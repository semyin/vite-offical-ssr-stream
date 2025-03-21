import { createRouter as createTanStackRouter } from '@tanstack/react-router'

// Import your route components
import { rootRoute } from './routes/root.js'
import { indexRoute } from './routes/index.js'
import { aboutRoute } from './routes/about.js'

// Create the route tree using your route definitions
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
])

// Create the router instance
export const createRouter = () => {
  return createTanStackRouter({
    routeTree
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}

// // For SSR, we need to create a new router for each request
// export const createSSRRouter = (url: string) => {

//   const memoryHistory = createMemoryHistory({
//     initialEntries: [url],
//   })
//   return createRouter({
//     routeTree,
//     defaultPreload: false,
//     context: {},
//     // This is the URL from the incoming request
//     basepath: url,
//     history: memoryHistory,
//   })
// }
