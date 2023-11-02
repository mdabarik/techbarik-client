import { NavLink } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { useEffect, useState } from "react";
import useQuestions from "../../hooks/useQuestions";
import SingleProblem from "./SingleProblem";

const CodingProblems = () => {

    const query = useQuery();
    const [curr, setCurr] = useState('blind-75');
    useEffect(() => {
        setCurr(query.get('name') ? query.get('name') : 'blind-75');
    }, [query])

    const questions = useQuestions(`http://localhost:5555/${curr}`);

    console.log('questions:', curr, questions);

    return (
        <div>
            <div className="flex flex-col items-center justify-center my-5">
                <div className="tabs">
                    <NavLink to="/coding-problems?name=blind-75" className={`tab tab-lifted ${curr == 'blind-75' ? 'tab-active text-[blue] underline' : ''}`}>Blind 75</NavLink>
                    <NavLink to="/coding-problems?name=coding-interview-pattern" className={`tab tab-lifted ${curr == 'coding-interview-pattern' ? 'tab-active text-[blue] underline' : ''}`}>Grokking Coding Pattern</NavLink>
                </div>
                All Problems: {questions.length}
                <div className="bg-[#dddddd] text-dark">
                    <div className="overflow-x-auto">
                        <table className="table table-lg">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            Status
                                        </label>
                                    </th>
                                    <th>Problem</th>
                                    <th>Difficulty</th>
                                    <th>Code</th>
                                    <th>Video Solution</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/* row 1 */}
                                {
                                    questions.map(problem => <SingleProblem key={problem._id} problem={problem}></SingleProblem>)
                                }
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CodingProblems;