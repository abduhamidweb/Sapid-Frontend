import "./card.scss";
import { useState, useRef, useEffect, useContext } from "react";
import URL from '../../API/API'
import context from "../../Context/Context";
import API from "../../API/API";

const Card2 = ({ data: { title, _id, description, img, price, discount } }) => {
    const { totolPrice, setTotolPrice, totalArray, setTotalArray } = useContext(context);
    const [inputValue, setInputValue] = useState(0);
    const [buy, setBuy] = useState(false);

  async  function handlerInput2(id, productPrice, status) {
        const obj = {};
        if (status) {
            obj.product = id;
            obj.count = inputValue + 1;
            obj.price = productPrice;
            obj.food = await API.API.getDataById(id);
            setTotalArray([...totalArray,  obj]);
        } else {
            obj.product = id;
            obj.count = inputValue - 1;
            obj.price = productPrice;
            obj.food = await API.API.getDataById(id);
            subtractLargestCount(totalArray, obj);
        }
        function subtractLargestCount(array, obj) {
            let counts = {};
            array.forEach(item => {
                const countKey = item.count.toString();
                counts[countKey] = (counts[countKey] || 0) + 1;
            });
            let maxCount = Math.max(...Object.keys(counts));
            let modifiedArray = array.slice();
            modifiedArray = modifiedArray.map(item => {
                if (item.product == obj.product) {
                    if (item.count === maxCount) {
                        return {
                            ...item,
                            count: item.count - 1
                        };
                    }
                }
                return item;
            });
            setTotalArray([...modifiedArray]);
        }
    }
    function handlerInput(id) {
        setBuy(true);
    }
    // if (inputValue == 0) {
    //     setBuy(false);
    // }
    return (
        <>
            <div className="col-lg-3 col-md-6 co-sm-12 mx-auto my-3 px-4">
                <div className="card">
                    <div className="discount discount_top">-{discount}%</div>
                    <div className="image-wrapper">
                        <img src={URL.BASE_URL + '/foodIMG/' + img} alt="product image" />
                    </div>
                    <div className="header__body">
                        <div className="title">{title}</div>
                        <div className="description">{description}</div>
                    </div>
                    {
                        buy == false ? <div className="header__footer">
                            <div className="price ">
                                <h6>${price} sum</h6>
                                <span className="discount">${price}</span>
                            </div>
                            <div className="btn_wrpaper">
                                <button className="button" id={_id} onClick={(e) => {
                                    handlerInput(e.target.getAttribute("id"))
                                    setInputValue((prevValue) => prevValue + 1)
                                    handlerInput2(e.target.getAttribute("id"), price, true)
                                }}>Buy now</button>
                            </div>
                        </div> : null
                    }
                    {
                        buy ? <div className="form-control mt-3">
                            <button className="bg-warning" id={_id} onClick={(e) => {
                                setInputValue((prevValue) => inputValue > 1 ? prevValue - 1 : null);
                                inputValue > 0 ? handlerInput2(e.target.getAttribute("id"), price, false) : null
                                inputValue == 1 ? setBuy(false) : null
                            }
                            }>-</button>
                            <input type="text" className="" value={inputValue} disabled />
                            <button className="bg-info" id={_id} onClick={(e) => {
                                setInputValue((prevValue) => prevValue + 1)
                                handlerInput2(e.target.getAttribute("id"), price, true)
                            }}>+</button>
                        </div> : null
                    }
                </div>
            </div>

        </>
    );
};

export default Card2;