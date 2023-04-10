import { useRouteError } from "react-router-dom";

const ErrorPage = (props) => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops</h1>
            <p>Ein Fehler ist aufgetreten!</p>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    );
};

export default ErrorPage;