import "./Cards.scss"
import Card2 from '../components/Card/Card';
import { useSelector } from "react-redux";
const Card = () => {
    const { allProducts } = useSelector((state) => state.counter)
    console.log('allProducts :', allProducts);

    return (
        <>
            <section className='cards'>
                <div className="container">
                    <div className="row">
                        {
                            allProducts.map(item => {
                                return <Card2 data={item} key={item} />
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    );
};

export default Card;