import axios from "axios";
import { useEffect, useState } from "react";

const useQuestions = (url) => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        axios.get(url)
        .then(res => {
            setQuestions(res.data);
        })
    },[url])
    return questions;
};

export default useQuestions;