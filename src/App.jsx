import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Plans from './pages/Plans'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Home />
			<About />
			<Gallery />
			<Plans />
			<Contact />
			<NotFound />
		</BrowserRouter>
	)
}

export default App
