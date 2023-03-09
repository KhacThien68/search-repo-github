import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PUBLIC_ROUTERS } from '.'
import Spinner from '../components/Spinner'

const RenderRoute = () => {
  return (
    <Routes>
      {PUBLIC_ROUTERS.map((route, ps) => (
        <Route
          path={route.path}
          element={
            <Suspense fallback={<Spinner />}>
              <route.element />
            </Suspense>
          }
          key={ps}
        />
      ))}
    </Routes>
  )
}

export default RenderRoute
