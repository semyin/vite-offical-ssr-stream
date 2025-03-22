import { StrictMode } from 'react'
import { renderToPipeableStream, renderToString } from 'react-dom/server'
import { createMemoryHistory, RouterProvider } from '@tanstack/react-router'
// import { StartServer } from '@tanstack/react-start-server'
import { createRouter } from './router'
import { Response, Request } from 'express'
// import { Transform } from 'node:stream'

export async function render(req: Request, res: Response, template: string) {
  // Create a new router instance for each request
  const router = createRouter()

  const memoryHistory = createMemoryHistory({
    initialEntries: [req.originalUrl],
  })

  router.update({
    history: memoryHistory,
  })

  await router.load()

  const html = renderToString(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  ).replace(`<!--$-->`, '').replace(`<!--/$-->`, '')

  console.log(html);
  

  const result = template.replace(`<!--app-html-->`, html)
  console.log(result);
  
  res.set({ 'Content-Type': 'text/html' })
  res.status(200).send(result)

  // let didError = false
  
  // Wait for the router to be ready
  // const stream = renderToPipeableStream(
  //   <StrictMode>
  //     <RouterProvider router={router} />
  //   </StrictMode>,
  //   {
  //     onShellError() {
  //       res.status(500)
  //       res.set({ 'Content-Type': 'text/html' })
  //       res.send('<h1>Something went wrong</h1>')
  //     },
  //     onAllReady() {
  //       // res.status(didError ? 500 : 200)
  //       // res.set({ 'Content-Type': 'text/html' })

  //       // const transformStream = new Transform({
  //       //   transform(chunk, encoding, callback) {
  //       //     res.write(chunk, encoding)
  //       //     callback()
  //       //   },
  //       // })

  //       // const [htmlStart, htmlEnd] = template.split(`<!--app-html-->`)

  //       // res.write(htmlStart)

  //       // transformStream.on('finish', () => {
  //       //   res.end(htmlEnd)
  //       // })

  //       // console.log(htmlStart, htmlEnd);

  //      // 读取template
  //       const [htmlStart, htmlEnd] = template.split(`<!--app-html-->`)
  //       console.log(htmlStart);
  //       console.log('----------------');
  //       console.log(htmlEnd);
        

  //       res.write(htmlStart)
        
  //       stream.pipe(res)
        
  //       res.write(htmlEnd)
  //       res.end()
  //     },
  //     onError(error) {
  //       didError = true
  //       console.error(error)
  //     },
  //   }
  // )
}
