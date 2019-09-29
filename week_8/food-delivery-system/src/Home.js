import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import RecipeReviewCard from './HomeProduct'
// import Body from './bodySection'
// import Footer from './footer'
const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                       
                        <div className="carousel-inner">
                       
                            <div className="carousel-item">
                            <img src="https://i.hungrygowhere.com/business/da/99/12/00/carousel.jpg" className="d-block w-100 mainImg" alt="..."/>
                          
                            </div>
                            <div className="carousel-item active">
                            <img src="https://online.kfc.co.in/Content/OnlineOrderingImages/Menu/Category/Carousel/Supar-Saver-Carousel-banner.jpg" className="d-block w-100 mainImg" alt="..."/>
                           
                            </div>
                            <div className="carousel-item">
                            <img src="https://www.swisschalet.com/images/carousel-images/SC_delivery_offer_1800x600_carousel_JULY_2019_CAA_3.jpg" className="d-block w-100 mainImg" alt="..."/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
            </div>
           <div>
                    
           
           <div className ="row mt-5 ml-5 col-lg-12 align-center">


             <RecipeReviewCard 
             title = 'Quiche'
             resturantName = 'Nan Xiang Xiao Long Bao'
             price = '450 Rs' 
             image = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
             
             description = 'Oriental food is Asian style cooking and Continental food is European style cooking.'
             
             paragraph = '15 min'
            />


             <RecipeReviewCard 
             title = 'Carbonara'
             resturantName = 'Shanghai Dumpling King'
             price = '350 Rs' 
             image = 'http://www.ah-finefood.com/wp-content/uploads/2017/07/tasty-fast-food-recipes-2-735x400.jpg'
             
             description = ' Oriental food is Asian style cooking and Continental food is European style cooking.'
             
             paragraph = '55 min'/>


             <RecipeReviewCard 
             title = 'Wiener Schnitzel'
             resturantName = 'Shu Jiao Fu Zhou Cuisine'
             price = '550 Rs' 
             image = 'http://www.keralapackages.co/wp-content/uploads/2017/02/Sadhya-cuisine-of-kerala-870x480.jpg'
             
             description = ' Oriental food is Asian style cooking and Continental food is European style cooking.'
             
             paragraph = '35 min'/>


             <RecipeReviewCard  
             title = 'Chilly Garlic Wings'
             resturantName = 'Aulis'
             price = '1250 Rs' 
             image = 'http://www.gharanarestaurant.com/wp-content/uploads/2014/02/Indian-Dish.jpeg'
             
             description = ' Oriental food is Asian style cooking and Continental food is European style cooking.'
             
             paragraph = '35 min'/>


             <RecipeReviewCard 
             title = 'Cheese Fondue'
             resturantName = 'Bao Fitzrovia'
             price = '50 Rs' 
             image = 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1556817214000/photosp/f6131d32-15ee-466c-b822-f66d82211f70/stock-photo-food-seafood-pasta-prawns-pastas-delicious-food-seafood-dishes-seafood-pasta-delicious-meal-f6131d32-15ee-466c-b822-f66d82211f70.jpg'
             
             description = ' Oriental food is Asian style cooking and Continental food is European style cooking.'
             
             paragraph = '50 min'/>


             <RecipeReviewCard 
             title = 'Khao Soi'
             resturantName = 'Seabird, Southwark'
             price = '750 Rs' 
             image = 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/10/Idiyappam.jpg'
             
             description = ' Oriental food is Asian style cooking and Continental food is European style cooking.'
             
             paragraph = '30 min'/>


             <RecipeReviewCard  
             title = 'Rosemary Chicken'
             resturantName = 'SUSHISAMBA City'
             price = '200 Rs' 
             image = 'https://www.veganricha.com/wp-content/uploads/2019/05/tofu-paneer-lababdar-veganricha-7818-2-302x453.jpg'
             
             description = ' Oriental food is Asian style cooking and Continental food is European style cooking.'
             
             paragraph = '10 min'/>


             <RecipeReviewCard 
             title = 'Paneer Steak'
             resturantName = 'Nobu'
             price = '1050 Rs' 
             image = 'https://i.ndtvimg.com/i/2015-12/chicken-curry_625x350_41450863625.jpg'
             
             description = ' Oriental food is Asian style cooking and Continental food is European style cooking.'
             
             paragraph = '40 min'/>


             <RecipeReviewCard 
             title = 'Two item garlic naan'
             resturantName = 'Zuma London'
             price = '250 Rs' 
             image = 'https://s3-media2.fl.yelpcdn.com/bphoto/ynj5HBZ4MvYeNzeYBrQcJg/o.jpg'
             
             description = ' Oriental food is Asian style cooking and Continental food is European style cooking.'
             
             paragraph = '20 min'/>

             <RecipeReviewCard 
             title = 'Amritsari Chicken'
             resturantName = 'Sake no Hana'
             price = '450 Rs' 
             image = 'https://sulaindianrestaurant.com/wp-content/uploads/2019/06/Picture1.png'
             
             description = ' Oriental food is Asian style cooking and Continental food is European style cooking.'
             
             paragraph = '30 min'/>


             <RecipeReviewCard 
             title = 'Grilled seabass'
             resturantName = 'Al-Hibabi'
             price = '250 Rs' 
             image = 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1541507230000/photosp/2fc699f8-5d5f-43c0-bd92-76a253eb46db/stock-photo-food-healthy-eating-fine-dining-seafood-cuisine-healthy-food-gourmet-dining-foodie-2fc699f8-5d5f-43c0-bd92-76a253eb46db.jpg'
             
             description = ' Oriental food is Asian style cooking and Continental food is European style cooking.'
             
             paragraph = '20 min'/>


             <RecipeReviewCard 
             title = 'Grilled salmon steak'              
             resturantName = 'Kappa'
             price = '250 Rs' 
             image = 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1549251379000/photosp/e4eed2b7-6ff6-48cb-b551-ee4e5624acc1/stock-photo-healthy-eating-seafood-salmon-healthy-food-dining-healthy-foods-grilled-fish-restaurant-food-grilled-salmon-e4eed2b7-6ff6-48cb-b551-ee4e5624acc1.jpg'
             
             description = ' Oriental food is Asian style cooking and Continental food is European style cooking.'
             
             paragraph = '20 min'/>

           </div>

           </div>
        </div>
    )
}
export default Home;