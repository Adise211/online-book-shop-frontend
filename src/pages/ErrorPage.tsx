import { useRouteError } from "react-router-dom";

/**
 * ErrorPage component to handle errors in the application.
 * It uses the `useRouteError` hook from react-router-dom to access the error object.
 * Displays a generic error message along with the specific error message if available.
 */

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  const errorMessage = () => {
    let msg = "Unknown Status";
    if (error instanceof Error && "statusText" in error) {
      msg = (error.statusText || error.message) as string;
    }
    return msg;
  };

  return (
    <>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{errorMessage()}</i>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
