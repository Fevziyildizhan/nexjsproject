import { useState } from "react";
import ReactSlider from 'react-slider';
import Picker from "./Picker"
import PricePicker from "./PricePicker"
import Filter from "./Filter";
import Listing from "./Listings";

export default function Home() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  return (
   <div>
     <Picker/>
     <PricePicker/>
     <Filter/>
     <Listing/>
   </div>
  );
}
