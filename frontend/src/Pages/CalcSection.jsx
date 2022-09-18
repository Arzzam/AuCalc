import { useEffect, useState, Fragment } from "react";

function CalcSection(props) {

    const [subjects, setSubjects] = useState({});
    const [result, setResult] = useState();

    useEffect(() => {

        let data = {};
        props.response.map((el) => {
            data[el.id] = [el.credits, 10];
            return el;
        });

        setSubjects(data);

    }, [props.response])

    const gradePoints = {
        "O": 10,
        "A+": 9,
        "A": 8,
        "B+": 7,
        "B": 6,
        "RA": 0,
        "SA": 0,
        "W": 0
    };

    function updateGrade(event) {
        let selectedValue = event.target.selectedOptions[0].value;
        let id = event.target.id;

        setSubjects((prev) => {
            prev[id] = [prev[id][0], gradePoints[selectedValue]]
            return prev;
        });

        event.preventDefault();
    }

    function renderSelect(id) {
        return (
            <select id={id} onChange={updateGrade}>
                {Object.keys(gradePoints).map((option, index) => {
                    return (
                        <option
                            key={index}
                            value={option}
                        >
                            {option}
                        </option>
                    );
                })}
            </select>
        );
    }

    function renderFields(data) {
        return data.map((obj) => {
            return (
                <div
                    key={obj.id}
                >
                    <input
                        type='text'
                        name="code"
                        value={obj.code}
                        disabled
                    />
                    <input
                        type='text'
                        name="title"
                        value={obj.title}
                        disabled
                    />
                    {renderSelect(obj.id)}
                </div>
            );
        });
    }

    function handleSubmit(event) {
        
        let earnedCredit = 0, totalCredit = 0;

        for (let id in subjects) {
            if (subjects[id][1]) {
                earnedCredit += subjects[id][0] * subjects[id][1];
                totalCredit += subjects[id][0];
            }
        }

        let result = (earnedCredit / totalCredit) || 0

        setResult((result).toFixed(2));
        event.preventDefault();
    }

    return (
        <Fragment>
            <form
                onSubmit={handleSubmit}
            >
                {renderFields(props.response)}
                <button
                    className="h-10 px-3 m-4 font-medium rounded-md bg-black text-white"
                    type="submit"
                >
                    Calculate
                </button>
            </form>

            {
                result && 
                <h1>Your GPA: {result}</h1>
            }
        </Fragment>
    );
}

export default CalcSection;
