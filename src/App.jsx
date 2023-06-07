import './App.css'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'
import Hero from './components/Hero/Hero'
import { Counter } from './features/counter/Counter'

function App() {
  return (
    <>
      <Counter />
      <Header />
      <Hero/>
      <Footer />
    </>
  )
}

export default App
