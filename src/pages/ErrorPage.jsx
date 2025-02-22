import { useRouteError } from "react-router-dom";
import Header from "@components/Header.jsx";
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <Header />
      <div id='errorPage' className='container'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}
