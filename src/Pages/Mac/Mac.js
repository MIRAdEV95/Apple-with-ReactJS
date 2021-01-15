import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Mac() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/mac")
      .then((res) => res.json())
      .then((products) => {
        setProducts(() => products.products);
      });
  }, []);
  console.log(products);
  let order = 1;
  return (
    <div>
      <section className="second-highlight-wrapper">
        <div className="container"> <br /><br />
          <div className="new-alert">New</div>

          <div className="title-wrapper bold black">MacBook Air</div>

          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>

          <div className="price-wrapper grey">From $999.</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </div>
  );
}
export default Mac;
