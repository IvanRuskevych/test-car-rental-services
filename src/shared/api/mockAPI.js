import axios from 'axios';

// axios.defaults.baseURL = 'https://64c3d78a67cfdca3b6605b11.mockapi.io/';
axios.defaults.baseURL = 'https://65073c393a38daf4803f4a0d.mockapi.io/';

export const getCarsAPI = async (page) => {
  return await axios
    .get('cars', {
      params: {
        page,
        limit: 8,
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (err) {
      console.log(err);
    });
};

export const getAllCarsAPI = async () => {
  return await axios
    .get('cars', {})
    .then(function (response) {
      return response.data;
    })
    .catch(function (err) {
      console.log(err);
    });
};

export const getFavouriteCarsAPI = async () => {
  return await axios
    .get('cars', {
      params: {
        favourite: true,
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (err) {
      console.log(err);
    });
};

export const setCarFavouriteAPI = async (car) => {
  const { id, favourite } = car;

  return await axios
    .put('cars/' + id, {
      ...car,
      favourite: !favourite,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (err) {
      console.log('mock fave Error', err);
    });
};
