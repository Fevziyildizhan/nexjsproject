import { useState } from "react";

export default function Listing() {
  const listings = [
    {
      title: "Lüks Villa",
      price: "₺5.000.000",
      location: "Antalya",
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      description: "Mükemmel deniz manzarasına sahip, geniş ve modern bir villa.",
    },
    {
      title: "Şehir Dairesi",
      price: "₺1.200.000",
      location: "İstanbul",
      imageUrl: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Merkezi konumda, tüm olanaklara yakın, lüks bir daire.",
    },
    {
      title: "Şehir Dairesi",
      price: "₺1.200.000",
      location: "İstanbul",
      imageUrl: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Merkezi konumda, tüm olanaklara yakın, lüks bir daire.",
    },
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((listing, index) => (
        <div
          key={index}
          className="relative border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <img
            src={listing?.imageUrl}
            alt={listing?.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-semibold ">{listing?.title}</h3>
            <p className="mt-2">{listing?.description}</p>
          </div>
          <div className="p-4 bg-white">
            <h3 className="text-lg font-semibold text-gray-700 ">{listing?.title}</h3>
            <p className="text-gray-600">{listing?.location}</p>
            <p className="text-xl font-bold text-gray-700">{listing?.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
