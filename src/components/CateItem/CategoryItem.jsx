import "./style.scss"
const CategoryItem = ({ category, active, handleClick }) => {
    return (
        <li className={active ? 'active category_class' : 'category_class'} onClick={handleClick}>
            {category}
        </li>
    );
};

export default CategoryItem;
