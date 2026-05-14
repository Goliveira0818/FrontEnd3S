import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/home/homepage'
import QuemSomospage from './pages/quemsomos/quemsomospage'
import Header from './components/header/header'
import CadastroFrutasPage from './pages/cadastrofrutas/cadastrofrutaspage'
import ProdutosPage from './produtos/produtospage'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>

      <Route path="/" element={<Homepage />} />
      <Route path="/produtos" element={<ProdutosPage />} />
      <Route path="/quemsomos" element={<QuemSomospage />} />
      <Route path="/cadfrutas" element={<CadastroFrutasPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
