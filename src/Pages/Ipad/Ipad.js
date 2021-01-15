
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Ipad() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/ipad")
      .then((res) => res.json())
      .then((products) => {
        setProducts(() => products.products);
      });
  }, []);

  console.log(products);
  let order = 1;
  return (
    <div>
        <section className="first-highlight-wrapper">
        <div className="container">
          <div className="new-alert"><br /><br />New 
          </div>

          <div className="title-wrapper bold black">iPad Pro</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Order</a>
              </li>
            </ul>
          </div>

          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        </div>
      </section>
      </div>
      );
    }
    export default Ipad;