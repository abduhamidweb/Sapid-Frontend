import "./card.scss";
import { useState, useRef, useEffect } from "react";
const YourComponent = ({ id }) => {
    const aRef = useRef(null);

    useEffect(() => {
        if (aRef.current) {
            aRef.current.setAttribute('class', 'w-100');
            aRef.current.setAttribute('id', id);
        }
    }, [id]);

    return <input ref={aRef} />;
};
const Card2 = ({ id }) => {
    let a = document.createElement('input');
    a.setAttribute('class', "w-100");
    a.setAttribute('id', id);
    const isCardFooter = useRef()
    function handlerInput(id) {
        isCardFooter.current.innerHTML = '';
        let isDivTeg = document.createElement('div')

        let isInputTeg = document.createElement('input')
        isInputTeg.value = 1;
        let isButtonTegPlus = document.createElement('button')
        let isButtonTegMinus = document.createElement('button')
        isInputTeg.setAttribute('id', id);
        isInputTeg.setAttribute('class', 'w-100 form-control');
        isButtonTegPlus.setAttribute('class', 'w-25 bg-info');
        isButtonTegPlus.innerHTML = '+'
        isButtonTegMinus.setAttribute('class', 'w-25 bg-info');
        isButtonTegMinus.innerHTML = '-'
        isDivTeg.appendChild(isButtonTegPlus)
        isDivTeg.appendChild(isInputTeg)
        isDivTeg.appendChild(isButtonTegMinus)
        isCardFooter.current.append(isDivTeg);
    }
    return (
        <>
            <div className="col-lg-3 col-md-6 co-sm-12 mx-auto my-3 px-4">
                <div className="card">
                    <div className="discount discount_top">-10%</div>
                    <div className="image-wrapper">
                        <img src="https://via.placeholder.com/200x200" alt="product image" />
                    </div>
                    <div className="header__body">
                        <div className="title">Product title</div>
                        <div className="description">Product description</div>
                    </div>
                    <div className="header__footer" ref={isCardFooter}>
                        <div className="price ">
                            <h6>$50132 sum</h6>
                            <span className="discount">$61320</span>
                        </div>
                        <div className="btn_wrpaper">
                            <button className="button" id={id} onClick={(e) => handlerInput(e.target.getAttribute("id"))}>Buy now</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Card2;