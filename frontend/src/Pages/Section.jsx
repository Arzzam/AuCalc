import { useEffect, useState } from "react";
import Progress from "../Components/Progress/Progress";
import { fetchData } from "./api";
import CalcSection from "./CalcSection";

function Section(props) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [response, setResponse] = useState();

    useEffect(() => {
        fetchData({
            method: props.api.method,
            url: props.api.url,
            data: props.api.payload,
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
    }, [props.api]);

    function clearState() {
        /* 
        It is important to clear current state before rendering next
        state, to avoid current state rest still there before next state render.   
        */
        setLoading(true);
        setError();
        setResponse();
    }

    function goBack() {
        clearState();
        props.goBack();
    }

    function onButtonClick(event) {
        clearState();
        props.updateData({
            [props.storeOn]: event.target.id
        });
    }

    function renderButtons(data, onClick) {
        return data.map((obj) => {
            return (
                <button
                    className="h-10 px-3 m-4 font-medium rounded-md bg-black text-white"
                    key={obj.id}
                    id={obj.id}
                    onClick={onClick}
                >
                    {obj.data}
                </button>
            );
        })
    }

    return (
        <div>  { /* This could be also React.Fragments. */}
            <h4>Select {props.title}</h4>
            {   /* Back Button */
                props.goBack &&
                <button
                    className="h-10 px-3 m-4 font-medium rounded-md bg-black text-white"
                    onClick={goBack}
                >
                    Back
                </button>
            }
            <div>
                {   /* Loading Animation */
                    loading &&
                    <Progress
                        className="h-10 w-10 text-black"
                    />
                }
                {error && <h1>{error.message}</h1>}

                {   /* Option Buttons */
                    props.storeOn && !error && response &&
                    renderButtons(response, onButtonClick)
                }

                {   /* Calc Page */
                    !props.storeOn && !error && response &&
                    <CalcSection
                        response={response}
                    />
                }
            </div>
        </div>
    );
}

export default Section;
