import { BrowserRouter as Router, Route, Routes, Link } from 'react-router';
import "./App.css"
import Home from './home'
import Original from './original'
import Favorito from './favoritos'
import Informativa from './informativa'
import Usuario from './usuario'
import Producto from './producto';


function App() {
  return (
    <>
        

      <Router>

        <nav className='c-menu'>
            <Link to={"/"}>Home</Link>
            <Link to={"/favoritos"}>Favoritos</Link>
            <Link to={"/original"}>Original</Link>
            <Link to={"/informativa"}>Informativa</Link>
            <Link to={"/usuario"}>Usuario</Link>
        </nav>

        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='/favoritos' element={<Favorito />}/>
          <Route path='/original' element={<Original />}/>
          <Route path='/informativa' element={<Informativa />}/>
          <Route path='/usuario' element={<Usuario />}/>
          <Route path='/producto/:id' element={<Producto />}/>

        </Routes>

      </Router>
    </>
  )
}

export default App; 