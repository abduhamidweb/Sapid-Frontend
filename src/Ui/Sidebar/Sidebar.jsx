
import { useContext, useEffect, useState } from "react";
import context from "../../Context/Context";
import "./sidebar.scss"
import URL from '../../API/API'
import { useDispatch } from "react-redux";
import { isSavedment } from "../../features/counter/counterSlice";
const Sidebar = () => {
    const { filteredData } = useContext(context);
    const dispatch = useDispatch()
    function handlerToggle() {
        dispatch(isSavedment());
    }
    const handleBuy = () => {
        alert("tez orada sizga yetkazib boramiz");
    };

    return (
        <><section
            className='sidebar text-center'>
            <button className="btn btn-danger mt-3" onClick={handlerToggle}>close sidebar</button>
            {
                filteredData.length ? filteredData.map(item => {
                    let card = item.food[0]
                    return <>
                        <div className="sidebar-card card w-75 border border-2">
                            <div className="d-flex imgandcard">
                                <img width={80} height={80} src={URL.BASE_URL + '/foodIMG/' + card.img} alt={card.title} className="sidebar-card__image" />
                                <h3 className="sidebar-card__title fs-4">{card.title}</h3>
                            </div>
                            <p className="sidebar-card__count  mt-2">Count: {item.count}</p>
                            <button className="sidebar-card__button btn btn-info " onClick={handleBuy}>
                                Buy
                            </button>
                        </div>
                    </>
                }) : ""
            }
        </section>
        </>
    );
};

export default Sidebar;