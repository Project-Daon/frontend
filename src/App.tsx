import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

function App() {
  const MainPage = lazy(() => import("./pages/main/index.tsx"))
  const LoginPage = lazy(() => import("./pages/login/index.tsx"))
  const EditPage = lazy(() => import("./pages/edit/index.tsx"))
  return (
    <Suspense fallback={<div>로딩중입니다.</div>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
