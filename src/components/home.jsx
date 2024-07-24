import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minus, plus } from "../actions";
import { useNavigate } from "react-router-dom";
import Img1 from "../assets/bag.jfif";
import Img2 from "../assets/mobile.jfif";
import Img3 from "../assets/laptop.jfif";

const Home = () => {
  const no = useSelector((state) => state.changeNo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = [
    {
      id: 1,
      name: "Bag",
      price: 200,
      quantity: 1,
      imgUrl: Img1,
    },
    {
      id: 2,
      name: "mobile",
      price: 1000,
      quantity: 1,
      imgUrl: Img2,
    },
    {
      id: 3,
      name: "laptop",
      price: 600,
      quantity: 1,
      imgUrl: Img3,
    },
  ];
  return (
    <div>
      {cartItems.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <img src={item.imgUrl} alt="" width={100} height={100} />
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
