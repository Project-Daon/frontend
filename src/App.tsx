import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import MissionPage from "./pages/mission/index.tsx"

function App() {
  const MainPage = lazy(() => import("./pages/main/index.tsx"))
  const LoginPage = lazy(() => import("./pages/login/index.tsx"))
  const LoginEmailPage = lazy(() => import("./pages/login/email/index.tsx"))
  const RegisterPage = lazy(() => import("./pages/register/index.tsx"))
  const EditPage = lazy(() => import("./pages/edit/index.tsx"))

  const DiaryPage = lazy(() => import("./pages/diarys/index.tsx"))
  const DiaryViewPage = lazy(() => import("./pages/diarys/view/index.tsx"))
  const DiaryWritingPage = lazy(() => import("./pages/diarys/writing/index.tsx"))
  return (
    <Suspense fallback={<div>로딩중입니다.</div>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/email" element={<LoginEmailPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/diarys" element={<DiaryPage />} />
        <Route path="/diarys/view" element={<DiaryViewPage />} />
        <Route path="/diarys/writing" element={<DiaryWritingPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/*" element={<div>준비중인 페이지입니다!</div>} />
      </Routes>
    </Suspense>
  )
}

export default App
