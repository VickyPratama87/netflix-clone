import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img className="w-full h-[400px] object-cover" src="https://cdn.shopify.com/s/files/1/0607/5056/1539/articles/netflix.jpg?v=1669877376" alt="/" />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">MyShows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
