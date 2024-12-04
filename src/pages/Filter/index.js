import { useState } from "react";

export default function Filter() {
  
  const [location, setLocation] = useState("");
  const [hotelName, setHotelName] = useState(""); 
 
  const [filters, setFilters] = useState({
    pool: false,
    seaView: false,
    petFriendly: false,
  });

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.checked,
    });
  };

  const handleHotelNameChange = (e) => {
    setHotelName(e.target.value);
  };

  return (
    <div className="w-full max-w-lg mx-auto my-8 p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-10">Filtrele</h2>

      <div className="mb-10 ">
        <label htmlFor="location" className="block text-sm font-medium mb-2">
          Konum
        </label>
        <select
          id="location"
          value={location}
          onChange={handleLocationChange}
          className="w-40 p-2 border rounded-md text-gray-900"
        >
          <option value="">Şehir veya Bölge Seçin</option>
          <option value="istanbul">İstanbul</option>
          <option value="ankara">Ankara</option>
          <option value="izmir">İzmir</option>
          <option value="antalya">Antalya</option>
        </select>
      </div>

     
      <h3 className="text-lg font-semibold mb-3">Özellik Filtreleri</h3>

     
      <div className="mb-10 space-y-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="pool"
            name="pool"
            checked={filters.pool}
            onChange={handleFilterChange}
            className="mr-2"
          />
          <label htmlFor="pool" className="text-sm">Havuzlu Otel</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="seaView"
            name="seaView"
            checked={filters.seaView}
            onChange={handleFilterChange}
            className="mr-2"
          />
          <label htmlFor="seaView" className="text-sm">Deniz Manzaralı</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="petFriendly"
            name="petFriendly"
            checked={filters.petFriendly}
            onChange={handleFilterChange}
            className="mr-2"
          />
          <label htmlFor="petFriendly" className="text-sm">Sahil Kenarı</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="petFriendly"
            name="petFriendly"
            checked={filters.petFriendly}
            onChange={handleFilterChange}
            className="mr-2"
          />
          <label htmlFor="petFriendly" className="text-sm">Orman İçerisinde</label>
        </div>
      </div>

     
      <div className="">
        <button className="w-40 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Filtrele
        </button>
      </div>
    </div>
  );
}
