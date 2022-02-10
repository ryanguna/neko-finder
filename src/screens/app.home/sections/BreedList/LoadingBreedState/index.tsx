/**
 * Module Dependencies
 */
import '@screens/app.home/sections/BreedList/LoadingBreedState/style.scss';
import Spinner from 'react-bootstrap/Spinner';

function LoadingBreedState() {
  return (
    <>
      <Spinner animation="border" role="status" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
}

export default LoadingBreedState;
