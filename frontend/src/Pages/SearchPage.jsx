import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setListings } from "../redux/slice/listingSlice";
import ListingCard from "../components/ListingCard";

const SearchPage = () => {
  const { search } = useParams();
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings.listings || []);
  //console.log(listings)

  // Fetch listings based on the search query
  const getSearchListings = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/listing/search/${search}`,
        { method: "GET" }
      );
      if (!response.ok) throw new Error("Failed to fetch listings");
      const data = await response.json();
      dispatch(setListings({ listings: data }));
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  useEffect(() => {
    if (search) {
      getSearchListings();
    }
  }, [search]);

  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-bold text-slate-700 my-10 mx-[100px] sm:mx-12">
        Search results for: {search}
      </h1>
      <div className="px-24 pb-28 flex justify-center flex-wrap gap-6">
        {listings.length > 0 ? (
          listings.map(
            ({
              _id,
              creator,
              listingPhotoPaths,
              city,
              state,
              country,
              category,
              type,
              price,
              booking = false,
            }) => (
              <ListingCard
                key={_id}
                listingId={_id}
                creator={creator}
                listingPhotoPaths={listingPhotoPaths}
                city={city}
                state={state}
                country={country}
                category={category}
                type={type}
                price={price}
                booking={booking}
              />
            )
          )
        ) : (
          <p className="text-center text-gray-500">No listings found.</p>
        )}
      </div>
    </>
  );
};

export default SearchPage;
