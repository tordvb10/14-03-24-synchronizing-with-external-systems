import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LayoutRoot } from "./pages/LayoutRoot"
import { LandingPage } from "./pages/LandingPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LayoutRoot />}>
          <Route index element={<LandingPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
