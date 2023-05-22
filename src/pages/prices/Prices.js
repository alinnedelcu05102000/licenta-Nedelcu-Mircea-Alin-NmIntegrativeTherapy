import Navbar from "../../components/Navbar/Navbar"
import Hero from '../../components/Hero/Hero'
import AboutImg from '../../images/pexels-david-selbert-8797307.jpg';
import './Prices.scss';
import React, { useEffect, useState } from "react";
import { PricesList } from "./PricesList";
import Programe from "../../components/Programe/Programe";
import Footer from "../../components/Footer/Footer";

 const Prices=()=> {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(PricesList);
  
    let filters = ["bioenergie", "biorezonanta", "masaje", "remodelare"];
  
    const handleFilterButtonClick = (selectedCategory) => {
      if (selectedFilters.includes(selectedCategory)) {
        let filters = selectedFilters.filter((el) => el !== selectedCategory);
        setSelectedFilters(filters);
      } else {
        setSelectedFilters([...selectedFilters, selectedCategory]);
      }
    };
  
    useEffect(() => {
      filterItems();
    }, [selectedFilters]);
  
    const filterItems = () => {
      if (selectedFilters.length > 0) {
        let tempItems = selectedFilters.map((selectedCategory) => {
          let temp = PricesList.filter((item) => item.category === selectedCategory);
          return temp;
        });
        setFilteredItems(tempItems.flat());
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
              className={`button ${
                selectedFilters?.includes(category) ? "active" : ""
              }`}
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


  export default Prices
  


