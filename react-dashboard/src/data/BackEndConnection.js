const axios = require("axios");

const username = "unfpa_dev";
const password = "vpaD6tzHR9";

export const getData = async (cities, years, variables) => {
  try {
    // fetch data from a url endpoint
    const response = await axios.get("/data/", {
      params: {
        cities: cities.join(),
        years: years.join(),
        variables: variables.join(),
      },
      auth: {
        username: username,
        password: password,
      },
    });
    return await response.data.data;
  } catch (error) {
    console.error(error); // catches both errors
    return [];
  }
};

export const getCities = async () => {
  return ["Bochalema", "Marinilla"];
};

export const getCounties = async () => {
  try {
    // fetch data from a url endpoint
    const response = await axios.get("/counties/", {
      auth: {
        username: username,
        password: password,
      },
    });
    return await response.data.data;
  } catch (error) {
    console.error(error); // catches both errors
    return [];
  }
};

export const getCountyCities = async (county) => {
  try {
    // fetch data from a url endpoint
    const response = await axios.get("/county-cities/", {
      params: {
        counties: county.join(),
      },
      auth: {
        username: username,
        password: password,
      },
    });
    return await response.data.data;
  } catch (error) {
    console.error(error); // catches both errors
    return [];
  }
};

export const getVariables = async () => {
  try {
    // fetch data from a url endpoint
    const response = await axios.get("/variables/", {
      auth: {
        username: username,
        password: password,
      },
    });
    return await response.data.data;
  } catch (error) {
    console.error(error); // catches both errors
    return [];
  }
};

export const getYears = async (variables) => {
  try {
    // fetch data from a url endpoint
    const response = await axios.get("/filter_years/", {
      params: {
        variables: variables.join(),
      },
      auth: {
        username: username,
        password: password,
      },
    });
    return await response.data.data;
  } catch (error) {
    console.error(error); // catches both errors
    return [];
  }
};
