import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavouriteCars, selectIsLoading } from '../redux/selectors';
import { getFavouriteCars, setCarFavourite } from '../redux/operations';

import Loader from '../components/Loader/Loader';
import CarsList from '../components/CarsList/CarsList';
import Modal from '../components/Modal/Modal';
import Card from '../components/Card/Card';

function FavoritesPage() {
  const carsFavourite = useSelector(selectFavouriteCars);
  const isLoading = useSelector(selectIsLoading);

  const [car, setCar] = useState({});
  const [isFaveChange, setisFaveChange] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavouriteCars());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFaveChange) {
      dispatch(
        setCarFavourite({
          car: isFaveChange,
        })
      );
      setisFaveChange(null);
    }
  }, [dispatch, isFaveChange]);

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
    <>
      <div className="container">
        <div className="section">
          {carsFavourite && (
            <CarsList
              cars={carsFavourite}
              openModal={handleOpenModal}
              favouriteChange={setisFaveChange}
            />
          )}

          {showModal && (
            <Modal shown={showModal} closeModal={handleCloseModal}>
              <Card car={car} onClose={handleCloseModal} />
            </Modal>
          )}
        </div>
      </div>
    </>
  );
}

export default FavoritesPage;
