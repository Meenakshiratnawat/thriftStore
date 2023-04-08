import React, { useState, useEffect } from "react";
import Base from "./Base";
import "../styles.css";
import { API } from "../backend";
import Card from "./card";
import CategoryCard from "./catergoryCard";
import { getProducts, getCategories } from "./helper/coreapicalls";
import HomeCarousel from "./caraousel";

const Home = () => {
  console.log("API IS", API);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const [categories, setCategories] = useState([]);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };
  const loadAllCategory = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
    loadAllCategory();
  }, []);

  return (
    <Base title="ADEX EXPORTERS">
      <HomeCarousel />
      <div className="container my-5">
        {/* <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h2>About us</h2>
            </div>
            <div
              className="text-center mb-5 about-us"
              style={{ fontFamily: "Arial" }}
            >
              <h1>
                Since 1960, we "Alluring Design Exporters", is a leading
                Manufacturer, Wholesaler and Exporter of marble Sculptures,
                Temples and Other handicraft items. We are unique mix of talent
                and meticulousness in the quest for excellence. We are sculpting
                the finest grade of marble idols with detail that will hold you
                spellbound with their mesmerising beauty, representing a true
                reflection of craftsmanship, Indian values and culture.
              </h1>
            </div>
          </div>
        </div> */}

        <h2 className="text-center text-white mb-5">Categories</h2>
        <div className="row justify-content-center">
          {categories.map((category, index) => {
            return (
              <div key={index} className="col-6 mb-4">
                <CategoryCard category={category} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h2>About us</h2>
          </div>
          <div
            className="text-center mb-5 about-us"
            style={{ fontFamily: "Arial" }}
          >
            <h1>
              Since 1960, we "Alluring Design Exporters", is a leading
              Manufacturer, Wholesaler and Exporter of marble Sculptures,
              Temples and Other handicraft items. We are unique mix of talent
              and meticulousness in the quest for excellence. We are sculpting
              the finest grade of marble idols with detail that will hold you
              spellbound with their mesmerising beauty, representing a true
              reflection of craftsmanship, Indian values and culture.
            </h1>
          </div>
        </div>
      </div>

      {/* </div>
      </div> */}
    </Base>
  );
};

export default Home;
