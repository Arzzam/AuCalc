import React from "react";
import { useState } from "react";
import Container from "../Components/Container/Container";
import NumInput from "../Components/NumInput";
import SectionPane from "../Components/SectionPane";


export default function Cgpa(props) {

    const [scores, setScores] = useState(
        Object.fromEntries(
            Array.from({ length: 8 }, (_, i) => ([`semester-${i + 1}`, 0]))
        )
    )

    const [result, setResult] = useState();

    function handleSubmit(event) {
        let total = 0.0, count = 0.0;

        Object.keys(scores).map((key) => {
            if (scores[key]) {
                total += scores[key];
                count++;
            }
            return null;
        })

        let result = (total / count) || 0

        setResult(result.toFixed(2))

        event.preventDefault();
    }

    function updateScore(id, value) {
        setScores((prev) => ({
            ...prev, [id]: value
        }))
        // console.log(scores);
    }

    function renderFields() {
        return Object.keys(scores).map((key, index) => (
            <div
                key={key}
                className='flex flex-wrap items-center justify-around'
            >
                <label
                    htmlFor={key}
                >
                    Semester - {index + 1}
                </label>
                <NumInput
                    min='0'
                    max='10'
                    step='0.01'
                    className="my-1"
                    defaultValue={scores[key]}
                    id={key}
                    onChange={updateScore}
                />
            </div>
        ))
    }

    return (
        <Container>
            <h1 className="text-center text-xl my-2">
                CGPA
            </h1>
            <SectionPane>
                <div
                    className="mt-5"
                >
                    <form
                        onSubmit={handleSubmit}
                    >
                        {renderFields()}
                        <button
                            className="h-10 px-3 m-4 font-medium text-white bg-black rounded-md"
                            type="submit"
                        >
                            Calculate
                        </button>
                    </form>
                </div>
                {result && <h1>Your CGPA: {result}</h1>}
            </SectionPane>
        </Container>
    );
};
