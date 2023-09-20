import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectIsLoading } from '../redux/selectors';
import { getCars, setCatalogCarFavourite } from '../redux/operations';

import Loader from '../components/Loader/Loader';
import CarsList from '../components/CarsList/CarsList';
import Modal from '../components/Modal/Modal';
import Card from '../components/Card/Card';
import ButtonLoadMore from '../components/Buttons/ButtonLoadMore';

const CatalogPage = () => {
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  const [isFaveChange, setisFaveChange] = useState(null);
  const [car, setCar] = useState({});
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (isFaveChange) {
      dispatch(
        setCatalogCarFavourite({
          car: isFaveChange,
          page,
        })
      );
      setisFaveChange(null);
    }
  }, [dispatch, isFaveChange, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleOpenModal = (car) => {
    setShowModal(true);
    setCar(car);
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCar({});
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      {cars && (
        <CarsList cars={cars} openModal={handleOpenModal} favouriteChange={setisFaveChange} />
      )}

      {<ButtonLoadMore onClick={handleLoadMore} />}

      {showModal && (
        <Modal shown={showModal} closeModal={handleCloseModal}>
          <Card car={car} onClose={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
};

export default CatalogPage;
