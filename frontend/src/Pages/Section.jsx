import { useEffect, useState } from "react";
import Progress from "../Components/Progress/Progress";
import { fetchData } from "./api";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import RefreshIcon from "../Components/RefreshIcon";
import getToken from "../Components/Captcha";

function Section(props) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [response, setResponse] = useState();

    function loadData() {
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
    }

    useEffect(loadData, [props.api]);

    function clearState() {
        /* 
        It is important to clear current state before rendering next
        state, to avoid current state rest still there before next state render.   
        */
        setLoading(true);
        setError();
        setResponse();
    }

    function reloadState() {
        clearState();
        loadData();
    }

    function goBack() {
        clearState();
        props.goBack();
    }

    function onButtonClick(event) {
        clearState();
        getToken(
            props.action,
            (token) => {
                props.updateData({
                    [props.storeOn]: event.target.id,
                    captcha_token: token
                })
            },
            () => {
                setError(true);
                setLoading(false);
            }
        );
    }

    function renderButtons(data, onClick) {
        return data.map((obj) => {
            return (
                <button
                    className="block w-full p-2 my-2 mx-auto text-sm rounded-md bg-black text-white"
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
        <>  { /* This could be also React.Fragments. */}
            {   /* Back Button */
                props.goBack &&
                <button
                    className="absolute left-4 top-4 p-2 rounded-full bg-black text-white"
                    onClick={goBack}
                >
                    <ArrowLeftIcon
                        className="h-5 w-5"
                    />
                </button>
            }
            <h1
                className="text-lg text-center m-1"
            >
                {props.title}
            </h1>
            <div
                className="mt-5 overflow-hidden rounded-lg"
            >
                {   /* Loading Animation */
                    loading &&
                    <div
                        className="h-[20rem] flex items-center justify-center"
                    >
                        <Progress
                            className="h-10 text-black"
                        />
                    </div>
                }

                {   /* Error and Refresh */
                    error &&
                    <div
                        className="h-[20rem] flex flex-col items-center justify-center"
                    >
                        <h1>
                            Oops, Try again...
                        </h1>
                        <button
                            className="block my-2 border border-black border-solid rounded-full p-1"
                            onClick={reloadState}
                        >
                            <RefreshIcon
                                className="h-7"
                            />
                        </button>
                    </div>
                }

                {   /* Option Buttons */
                    props.storeOn && !error && response &&
                    <div
                        className="h-[20rem] overflow-y-auto"
                    >
                        {renderButtons(response, onButtonClick)}
                    </div>
                }
            </div>
            {   /* Calc Page */
                !props.storeOn && !error && response &&
                <div>
                    <props.finalPage
                        response={response}
                    />
                </div>
            }
        </>
    );
}

export default Section;
