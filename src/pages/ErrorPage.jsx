import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    // navigate("/");
    navigate(-1);
  };
  const handleGoHome = () => {
    navigate("/")
  };

  if (error.status === 404) {
    return (
      <section className=" error-section">
        <div id="error-text">
          <figure>
            <img
              src="/images/404.gif"
              alt="404 page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
              . The page you were looking for could not be found
            </p>
            <p className="p-b">... Back to previous page or Home page</p>
          </div>
        </div>
        {/* <NavLink to="/" className="btn">
          Go Back To HomePage
        </NavLink> */}
        <button className="btn" onClick={handleGoBack}>Go Back</button>
        <button className="btn" onClick={handleGoHome}> Back To Home </button>
      </section>
    );
  }
  console.log(error);

  return <h1> The page you are looking does not exist</h1>;
};