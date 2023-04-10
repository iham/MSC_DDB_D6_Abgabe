import { useOutletContext } from "react-router-dom";

const Projects = (props) => {
    const [projectTypes] = useOutletContext();
    return (
        <>
            <h1>Projects</h1>
            <p>
                A List of the Projects you can assign Receipts to:
            </p>
            {projectTypes && 
                <ul className="list-group">
                    {projectTypes.map((item, key) => {
                        return <li key={'project_type_key_'+key}
                            className={`list-group-item ${!item.active ? 'disabled' : ''}`}>{item.name} ({!item.active ? 'Inactive' : 'Active'})</li>
                    })}
                </ul>
            }

        </>
    );
};

export default Projects