import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Novo from './pages/Novo'
import Erro404 from './pages/Erro404'

export default function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route>
            <Route path='/' index element={<Home />} />
            <Route path='/novo' element={<Novo />} />

          </Route>

          <Route path='*' element={<Erro404 />} />

        </Routes>

      </BrowserRouter>
    </>

  )
}