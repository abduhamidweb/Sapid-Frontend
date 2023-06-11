import React, { useState } from 'react';
import CategoryItem from '../../components/CateItem/CategoryItem';
import "./style.scss"
import BtnNew from '../../components/BtnNew/BtnNew';
import { useSelector } from 'react-redux';

const Category = () => {
    const { allProducts } = useSelector((state) => state.counter)
    const categoriesSet = new Set()
    const filteredProducts = allProducts.reduce((acc, product) => {
        if (!categoriesSet.has(product.category)) {
            categoriesSet.add(product.category);
            acc.push(product.category);
        }
        return acc;
    }, []);
    const [activeCategory, setActiveCategory] = useState(0);
    const categories = [...filteredProducts];
    categories.unshift("All Products")
    const handleCategoryClick = (index) => {
        setActiveCategory(index);
    };
    return (
        <>
            <section className='category'>
                <div className="container">
                    <div className="category_wrapper">
                        <div className="row ">
                            <div className="col-lg-10">
                                <ul className='category_list'>

                                    {categories.map((category, index) => (
                                        <CategoryItem
                                            key={index}
                                            category={category}
                                            active={index === activeCategory}
                                            handleClick={() => handleCategoryClick(index)}
                                        />
                                    ))}
                                </ul>
                            </div>
                            <div className="col-lg-2 text-end">
                                <BtnNew text={"2000"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Category;