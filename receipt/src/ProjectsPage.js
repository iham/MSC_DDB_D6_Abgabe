import { useOutletContext } from "react-router-dom";

const Projects = (props) => {
    const [projectTypes] = useOutletContext();
    return (
        <>
            <header>
                <hgroup>
                    <h1>Projects</h1>
                    <h4 className="mb-5">MSC DDB D6</h4>
                </hgroup>
            </header>
            <p className="lead">
                A List of the Projects you can assign Receipts to:
            </p>
            {projectTypes && 
                <ul className="list-group col-md-6">
                    {projectTypes.map((item, key) => {
                        return <li key={'project_type_key_'+key}
                            className={`list-group-item ${!item.active ? 'list-group-item-danger' : 'list-group-item-success'}`}>{item.name} ({!item.active ? 'Inactive' : 'Active'})</li>
                    })}
                </ul>
            }

        </>
    );
};

export default Projects