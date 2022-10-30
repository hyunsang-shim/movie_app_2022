import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
    return (
        <div>
            <h2> I Like { name } </h2>
            <h4> {rating} / 5.0 </h4>
            <img src={picture} alt={name}/>
            </div>
        );
}


const foodILike = [
    {
        id:1,
        name: 'KimChi',
        image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
        rating: 5.0,
    },
    {
        id:2,
        name: 'SamGyoepSal',
        image: 'https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
        rating: 4.9,
    },
    {
        id:3,
        name: 'BiBimBap',
        image: 'https://w.namu.la/s/badf1dd27e96a7dd6dab88aec593c4b372bf44ad5967df2df512c4c36c475b65c85ba76fb1b550e293e33911fe1315f1cb384eadf28f4dc9a8fd3065244811621d65ba17734ed2b2c5069a2231e4323ea1310508ef6b58f698f527ce057418e0',
        rating: 4.3,
    },
    {
        id:4,
        name: 'DonGgaSu',
        image: 'https://w.namu.la/s/05876ba153ccefcc901768e02f6d6da1e40920e5f9264e11e72f1c0ba7af0ae23ea0f7d2676ee5680d1ac133716d091a45d07919e9f523d1d619732f7b83974262ef9d4e73a2220e77166dfa460434570f8c29ce3f3e754040ad857745221f2046e4f6cd05db5dbeda18da564448de42',
        rating: 3.4,
    },
    {
        id:5,
        name: 'KimBap',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Gimbap_%28pixabay%29.jpg',
        rating: 3.0,
    },
];

Food.propTypes ={
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

function App() {
    return (
        <div> 
            {foodILike.map(dish =>(
                <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
                ))}
        </div>
        );
}



export default App;
