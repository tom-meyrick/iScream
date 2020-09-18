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

export const formSubmit = () => {
  return {
    type: "FORM_SUBMIT",
  };
};

export const handleToggleID = (vendorID) => {
  return {
    type: "TOGGLEID",
    vendorID,
  };
};

export const submit = ({
  name,
  lat,
  lon,
  priciness,
  rating,
  imgUrl,
  bio,
  icecreams,
}) => {
  return {
    type: "ADD_VENDOR",
    name,
    lat,
    lon,
    priciness,
    rating,
    imgUrl,
    bio,
    icecreams,
  };
};
