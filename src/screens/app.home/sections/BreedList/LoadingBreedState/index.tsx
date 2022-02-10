/**
 * Module Dependencies
 */
import Spinner from 'react-bootstrap/Spinner';

/**
 * Loading State. Displayed when the app is fetching the list of breeds.
 *
 * @parent BreedList
 *
 */
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
