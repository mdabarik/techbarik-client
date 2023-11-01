
const SingleProblem = ({problem}) => {

    const {title, difficulty, status, url} = problem;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" checked={status=="Accepted"?'checked':''} />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <h3 className="font-bold">{title}</h3>
                </div>
            </td>
            <td>
                {difficulty}
            </td>
            <td>
                Java
            </td>
            <th>
                Video
            </th>
        </tr>
    );
};

export default SingleProblem;