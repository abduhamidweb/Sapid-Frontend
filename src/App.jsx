import { useSelector } from 'react-redux'
import './App.css'
import Category from './Layout/Category/Category'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'
import Card from './Ui/Card'
import Sidebar from './Ui/Sidebar/Sidebar'
import Dostafka from './Ui/dostafka'
import Hero from './components/Hero/Hero'
import Data from './data/Data'
import context from './Context/Context'
import { useEffect, useState } from 'react'
import { Counter } from './features/counter/Counter'
function App() {
  const { isSaved } = useSelector((state) => state.counter);
  const [selectData, setSelectData] = useState({});
  const [totalArray, setTotalArray] = useState([]);
  const [totolPrice, setTotolPrice] = useState(0);

  const calculateTotal = (data) => {
    const countMap = new Map();

    for (let i = 0; i < data.length; i++) {
      const { product, count } = data[i];
      if (countMap.has(product)) {
        const currentCount = countMap.get(product);
        countMap.set(product, Math.max(currentCount, count));
      } else {
        countMap.set(product, count);
      }
    }

    const total = [];
    countMap.forEach((count, product) => {
      const price = Math.floor(data.find(item => item.product === product).price);
      total.push({
        product,
        count,
        price
      });
    });

    return total;
  };

  let totalArr = calculateTotal(totalArray)
  const [totalSum, setTotalSum] = useState(0);

  const calculateTotalSum = (data) => {
    let sum = 0;

    for (let i = 0; i < data.length; i++) {
      const { count, price } = data[i];
      const subtotal = count * price;
      sum += subtotal;
    }

    return sum;
  };

  // `data` o'zgarishdi
  useEffect(() => {
    const sum = calculateTotalSum(totalArr);
    setTotalSum(sum);
  }, [totalArr]);
  // const calculateTotalSum = (data) => {
  //   let totalSum = 0;

  //   for (let i = 0; i < data.length; i++) {
  //     const { count, price } = data[i];
  //     const subtotal = count * price;
  //     totalSum += subtotal;
  //   }
  //   return totalSum;
  // };
  // const totalSum = calculateTotalSum(totalArr);
  return (
    <>
      <context.Provider value={{ selectData, setSelectData, setTotolPrice, totolPrice, totalArray, setTotalArray, totalSum }}>
        {/* <Counter /> */}
        <Data />
        {isSaved ? <Sidebar /> : ""}
        <Header />
        <Hero />
        <Category />
        <Card />

        <Dostafka />
        <Footer />
      </context.Provider>
    </>
  )
}

export default App
