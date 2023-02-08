import React from "react";
import "../App.css";

function Home(props) {
  return (
    <div>
      <div className="cart">
        <img src="/cart.png" height="50px" alt="" />{" "}
      </div>
      <h1>Home components</h1>
      <div>
        <img src="/aa.jpg" height="100px" alt="" />
      </div>
      <div>
        <span>I-Phone</span>
        <br />
        <span>Price:</span>
      </div>
      <div>
        <button
          onClick={() =>
            props.addToCartHandler({ price: 1000, name: "iphone" })
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Home;
