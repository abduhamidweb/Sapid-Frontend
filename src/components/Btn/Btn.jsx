import React from 'react';
import "./btn.scss";
const Btn = ({txt}) => {
    return (
        <>
            <button className='btn-ok'>{txt }</button>
        </>
    );
};

export default Btn;