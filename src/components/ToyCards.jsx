import React from "react";
import { Link } from "react-router";

const ToyCards = ({ toys }) => {
  return (
    <div className="w-11/12 mx-auto py-3">
      {/* <h2>Toys ({toys.length})</h2> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {toys.map((toy) => (
          <div key={toy.toyId} className="p-4 space-y-2 rounded shadow">
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="w-full h-50 object-cover rounded"
            />
            <h3 className="font-bold text-2xl mt-2">{toy.toyName}</h3>
            <div className="flex justify-between ">
              <p>Rating: {toy.rating}</p>
              <p className="text-lg font-semibold">${toy.price}</p>
            </div>
            <p>AvailableQuantity: {toy.availableQuantity}</p>
            <p className="text-sm text-gray-600 text-justify">
              {" "}
              <span className=" font-bold">Product_Description: </span>
              {toy.description.length > 110
                ? toy.description.slice(0, 110) + "..."
                : toy.description}
              <Link
                to={""}
                className="text-primary cursor-pointer hover:underline font-semibold ml-1"
              >
                Read More
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyCards;
