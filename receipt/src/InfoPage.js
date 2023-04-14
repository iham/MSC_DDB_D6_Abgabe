
/**
 * Description 
 * @date 4/13/2023 - 8:20:27 PM
 * @author Markus Hilbert (Functional Component)
 * @author Eric Langer (Content)
 * @description Info-Page
 * @param {*} props
 * @returns {*}
 */
const InfoPage = (props) => {
    return (
        <>
            <header>
                <hgroup>
                    <h1>Information</h1>
                    <h4 className="mb-5">MSC DDB D6</h4>
                </hgroup>
            </header>
            <p className="lead">
                This project was developed by Group International
            </p>
            <div className="row">
                <div className="col-md-6">
                    <table className="table table-bordered rounded table-dark">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Group International</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hannes Brottrager</td>
                            </tr>
                            <tr>
                                <td>Markus Hilbert</td>
                            </tr>
                            <tr>
                                <td>Eric Langer</td>
                            </tr>
                            <tr>
                                <td>Felix Ossmann</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default InfoPage;