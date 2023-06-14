import "./Cards.scss"
import Card2 from '../components/Card/Card';
import { useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
const Card = () => {
    const { allProducts } = useSelector((state) => state.counter)
    return (
        <>
            <section className='cards'>
                <div className="container">
                    <div className="row">
                        
                        {
                            allProducts.length ? 
                            allProducts.map(item => {
                                return <Card2 data={item} key={item} />
                            }) : <div className="text-center d-flex saxnsajxn">
                                    <Loading color={"#000"} />
                                </div>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Card;