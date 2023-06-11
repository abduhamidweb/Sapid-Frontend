import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import API from '../API/API';
import { setAllProducts } from '../features/counter/counterSlice';
const Data = () => {
    // const { allProducts } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await API.API.getData()
                dispatch(setAllProducts(data))

            } catch (error) {
                console.error(error); // Xatolarni konsolega chiqarish
            }
        };

        fetchData(); // fetchData funksiyasini chaqirish

        // [] deps massivida bo'sh o'rin yaratish, shu bilan birga useEffect funktsiyasini faqat bir martta ishga tushirish
    }, [setAllProducts]);
    return (
        <>
            
        </>
    );
};

export default Data;