import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Details from './pages/Details'

import NavBar from './components/NavBar'

function RoutesApp () {
    return(
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/favorites" element={ <Favorites/> } />
                <Route path="/about" element={ <About/> } />
                <Route path="/details/:id" element={ <Details/> } />
                <Route path="*" element={ <NotFound/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp