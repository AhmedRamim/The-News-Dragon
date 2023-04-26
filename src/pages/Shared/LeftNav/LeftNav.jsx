import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, []);


    return (
        <div>
            <h3>All Categories</h3>
            <div className='ps-4 py-3'>
                {
                    categories && categories.map(news => <h4 className='py-2' key={news.id}><Link to={`categories/${news.id}`} className='text-secondary text-decoration-none'>{news.name}</Link></h4>)
                }
            </div>
        </div>
    );
};

export default LeftNav;