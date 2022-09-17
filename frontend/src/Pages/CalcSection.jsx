import { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "./api";

function CalcSection(props) {

    const [response, setResponse] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData({
            method: 'post',
            url: 'subjects/',
            data: {
                department_id: props.data.department_id,
                semester_id: props.data.semester_id
            },
            onSuccess: (response) => {
                setResponse(response.data);
            },
            onError: (err) => {
                setError(err);
            },
            onFinal: () => {
                setLoading(false);
            }
        })
    }, [props.data])

    return (
        <div>
            <h1>Calc Section</h1>
            
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            
            {
                !error && response &&
                <p>{JSON.stringify(response)}</p>
            }
        </div>
    );
}

export default CalcSection;