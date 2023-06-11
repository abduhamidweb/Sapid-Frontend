import { useSelector } from 'react-redux'
import './App.css'
import Category from './Layout/Category/Category'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'
import Card from './Ui/Card'
import Sidebar from './Ui/Sidebar/Sidebar'
import Dostafka from './Ui/dostafka'
import Hero from './components/Hero/Hero'
// import Data from './data/Data'
// import { Counter } from './features/counter/Counter'
function App() {
  const { isSaved } = useSelector((state) => state.counter)


  return (
    <>
      {/* <Counter /> */}
      {/* <Data/> */}
      {isSaved ? <Sidebar /> : ""}
      <Header />
      <Hero />
      <Category />
      <Card />
      <Dostafka />
      <Footer />
    </>
  )
}

export default App
