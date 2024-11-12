import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

function App() {
  const LoginPage = lazy(() => import("./pages/login/index.tsx"))

  return (
    <Suspense fallback={<div>로딩중입니다.</div>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
