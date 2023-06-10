import './App.css'
import Category from './Layout/Category/Category'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'
import Card from './Ui/Card'
import Dostafka from './Ui/dostafka'
import Hero from './components/Hero/Hero'
import { Counter } from './features/counter/Counter'
function App() {
  return (
    <>
      {/* <Counter /> */}
      <Header />
      <Hero />
      <Category />
      <Card />
      <Dostafka/>
      <Footer />
    </>
  )
}

export default App
