import Navbar from "../../components/Navbar/Navbar";
import Hero from '../../components/Hero/Hero';
import AboutImg from '../../images/pexels-david-selbert-8797307.jpg';
import './Prices.scss';
import React, { useEffect, useState } from "react";
import { PricesList } from "./PricesList";
import Programe from "../../components/Programe/Programe";
import Footer from "../../components/Footer/Footer";

const Prices = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);

  const filters = ["bioenergie", "biorezonanta", "masaje", "remodelare"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilter === selectedCategory) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(selectedCategory);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilter]);

  const filterItems = () => {
    if (selectedFilter) {
      const tempItems = PricesList.filter((item) => item.category === selectedFilter);
      setFilteredItems(tempItems);
    } else {
      setFilteredItems([...PricesList]);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <Hero
        cName="hero hero-mid"
        heroImg={AboutImg}
        title="Preturi"
      />
      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${selectedFilter === category ? "active" : ""}`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items-container">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <p>{item.name}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
      <Programe></Programe>
      <Footer></Footer>
    </div>
  );
}

export default Prices;


  


