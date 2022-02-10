/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import Alert from 'react-bootstrap/Alert';

import globalSelector from '@store/global/globalSelector';
import { resetGlobalError } from '@store/global/globalSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';

/**
 * Global app alert error message. Currently triggered by saga error handlers
 */
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
