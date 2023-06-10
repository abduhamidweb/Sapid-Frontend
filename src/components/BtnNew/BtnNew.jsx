import "./style.scss"
const BtnNew = ({ text }) => {
    return (
        <button className="btnNew">
            <i className="bi bi-basket-fill"></i>
            <span>{text}</span>
        </button>
    );
};

export default BtnNew;
