import { useRouteError } from "react-router-dom";

const ErrorPage = (props) => {
    const error = useRouteError();
    return (
        <>
            <h1>Oops</h1>
            <p>Ein Fehler ist aufgetreten!</p>
            <p>
                {error.statusText || error.message}
            </p>
        </>
    );
};

export default ErrorPage;