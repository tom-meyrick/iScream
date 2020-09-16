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
