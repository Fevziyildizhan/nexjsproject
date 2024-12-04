import { useState } from "react";
import ReactSlider from 'react-slider';

export default function PricePicker() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-4">Fiyat Aralığı</h3>

     
      <ReactSlider
        min={0}
        max={1000}
        step={10}
        value={[minPrice, maxPrice]}
        onChange={([min, max]) => {
          setMinPrice(min);
          setMaxPrice(max);
        }}
        className="w-full h-2 bg-gray-300 rounded-full"
        thumbClassName="w-6 h-6 bg-blue-500 rounded-full shadow-md"
        renderTrack={(props, state) => (
          <div
            {...props}
            className="h-2 bg-gray-300 rounded-full"
          />
        )}
      />

     
      <div className="mt-4 flex justify-between text-lg font-medium text-gray-700">
        <span>Min: ${minPrice}</span>
        <span>Max: ${maxPrice}</span>
      </div>
    </div>
  );
}
