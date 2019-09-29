import React from 'react';
import logo from './logo.svg';
import './App.css';
// const RestaurantList = props => (
//     <div>
//     <div className = "bg-success rounded score">{props.score}</div>
//     <img src={props.avatar_url} className="card-img-top  img" alt="..."></img>
//     <div className="card-body">
//      <h5 className="card-title">{props.login}</h5>
//      <div className = "w-50">
//        <p className="card-text">UserId = {props.id}</p>     
//      </div> 
//      <a href={props.html_url} className="btn btn-primary">Click To More Details</a>
//    </div>
//    <hr></hr>
//   </div>
// );

export default class Restaurant extends React.Component {
    constructor () {   
        super();
        this.state = {
            RestaurantDetails: [
                {
                    name: "Kabab Non-veg",
                    Rating: 3,
                    img: "https://secure.i.telegraph.co.uk/multimedia/archive/02999/restaurant_2999753b.jpg",
                    payment: "cards-online",
                    min: "50 Rs",
                    description: "Non-veg, Chicken, Halal."
                },

                {
                    name: "Kishore full-veg",
                    Rating: 4,
                    img: "https://images.financialexpress.com/2017/11/gst-food.jpg",
                    payment: "cards-online",
                    min: "100 Rs",
                    description: "Veg, Tawa-Roti, Desi-Ghee."
                },

                {
                    name: "Al-hayat",
                    Rating: 2,
                    payment: "cards-online",
                    img: "https://trade-x.ro/wp-content/uploads/2019/02/10405138-l.jpg",
                    min: "250 Rs",
                    description: "Chinees, Burger, Maxicon."
                },

                {
                    name: "Shui-Sha",
                    Rating: 4,
                    payment: "cards-online",
                    img: "https://france-surgery.com/wp-content/uploads/2015/07/restaurant-food-01.jpg",
                    min: "450 Rs",
                    description: "Non-veg, Japaness, Continental."
                },

                {
                    name: "HajiLal Non-veg",
                    Rating: 3,
                    payment: "cards-online",
                    img: "https://digtoknow.com/wp-content/uploads/2015/12/dheemi-aanch-ahmedabad-restaurant.jpg",
                    min: "100 Rs",
                    description: "Non-veg, Veg, Halal."
                },

                {
                    name: "Brew Continetal",
                    Rating: 4,
                    payment: "cards-online",
                    img: "https://secureservercdn.net/198.71.233.44/5hb.975.myftpupload.com/wp-content/uploads/2019/08/mexican-food-restaurant-near-me-lunch-dinner-breakfast-1024x520.jpg",
                    min: "200 Rs",
                    description: "Non-veg, Chicken, Continetal."
                },

                {
                    name: "South-Taste Resturant",
                    Rating: 3,
                    payment: "cards-online",
                    img: "https://content1.jdmagicbox.com/comp/belgaum/h3/9999px831.x831.190109153934.l4h3/catalogue/ocean-grill-family-fine-dine-multicuisine-sea-food-restaurant-club-road--belgaum-restaurants-1fr4ok3hxi.jpg?interpolation=lanczos-none&output-format=jpg&resize=1024:370&crop=1024:370px;*,*",
                    min: "50 Rs",
                    description: "Non-veg, Chicken, South-Indian."
                },

                {
                    name: "Kapoor Punjabi Tadka",
                    Rating: 2,
                    payment: "cards-online",
                    img: "https://b.zmtcdn.com/data/pictures/chains/2/18617982/1e990f587d64f6448ea799660d914f0f_featured_v2.jpg",
                    min: "200 Rs",
                    description: "Non-veg, Chicken, Tandoori."
                },

                {
                    name: "Desi Biryani Corner",
                    Rating: 1,
                    payment: "cards-online",
                    img: "https://content.jdmagicbox.com/comp/delhi/q4/011pxx11.xx11.110517102854.b6q4/catalogue/delhi-darbar-biryani-point-uttam-nagar-delhi-biryani-restaurants-4ktqz8ypuv.jpg",
                    min: "50 Rs",
                    description: "Non-veg, Chicken, Veg-Biryani."
                },

                {
                    name: "Hotel Spicy",
                    Rating: 1,
                    payment: "cards-online",
                    min: "100 Rs",
                    img: "https://ca-times.brightspotcdn.com/dims4/default/10c0251/2147483647/strip/true/crop/1440x960+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fca-times.brightspotcdn.com%2F27%2F03%2Fbf451529e1bd3792bc6892418180%2Ffast-food-adobestock-jpg-20190703",
                    description: "Non-veg, Chicken, Halal, Veg, Paneer, Spicy."
                },
            ]
            
            
        }
        

        }
        render () {
            return (
                <div>
                    <div className = " d-flex justify-content-around m-5">
                    <button className = "btn btn-success text-white">4 Star Restaurant</button>
                    <button className = "btn btn-success text-white">3 Star Restaurant</button>
                    <button className = "btn btn-success text-white">2 Star Restaurant</button>
                    <button className = "btn btn-success text-white">1 Star Restaurant</button>
                    </div>
                <div className = "row m-auto p-5 w-75">
                    
                    {
                        this.state.RestaurantDetails.map((item) => {
                             return (
                                 <div>
                                     <div className="card" style = {{"width": "6rem;"}}>
                                         <img style={{width: "300px", height: "200px"}} className="img-fluid" src={item.img} class="card-img-top" alt="..."></img>
                                         <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.description}<p className='card-text text-danger'>Min-Order : {item.min}</p><p className='card-text'>Payment Accept : {item.payment}</p></p>
                                            
                                            <a href="#" class="btn btn-primary">*{item.Rating}</a>
                                         </div>
                                    </div>                            
                                 </div>    
                             );
                        })
                       
                    }

                </div>
            </div>   
            );
        }
}       
