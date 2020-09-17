export const updateID = (id) => {
  return {
    type: "UPDATEID",
    id,
  };
};

export const loaded = (vendors) => {
  return {
    type: "LOADED",
    vendors,
  };
};

export const handleToggleID = (vendorID) => {
  return {
    type: "TOGGLEID",
    vendorID,
  };
};

export const submit = ({ name, lat, lon, priciness, rating, imgUrl, bio }) => {
  return {
    type: "ADD_VENDOR",
    name,
    lat,
    lon,
    priciness,
    rating,
    imgUrl,
    bio,
  };
};
