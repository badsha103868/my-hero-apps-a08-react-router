import React from 'react';

const TopApp = ({appData}) => {
  // console.log(appData)

  const {image, title,downloads, ratingAvg}= appData
   
  return (
    <div className="card bg-base-100 w-full shadow-sm p-4  h-full flex flex-col">
  <figure >
    <img className="w-full h-48 object-cover rounded"
      src={image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {title}
    </h2>
   
     
  </div>
</div>
  );
};

export default TopApp;