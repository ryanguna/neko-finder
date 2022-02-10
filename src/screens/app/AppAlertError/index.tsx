/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import globalSelector from '@store/global/globalSelector';
import { resetGlobalError } from '@store/global/globalSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import Alert from 'react-bootstrap/Alert';

function AppAlertError() {
  const dispatch = useAppDispatch();
  const hasError = useAppSelector(globalSelector.getGlobalError);
  const errorMessage = useAppSelector(globalSelector.getGlobalErrorMessage);

  function resetError() {
    dispatch(resetGlobalError());
  }

  return (
    <>
      {hasError ? (
        <Alert variant="danger" onClose={resetError} dismissible={true}>
          <Alert.Heading>Oh snwap! Youm got an error!</Alert.Heading>
          <p>{errorMessage}</p>
        </Alert>
      ) : (
        ''
      )}
    </>
  );
}

export default AppAlertError;
