import { useState } from "react";
import Container from "../Components/Container/Container";
import SectionPane from "../Components/SectionPane";
import Section from "./Section";


// Todo: put arrear can't use directly notice.
// start process on /credits.

export default function Cgpa2(props) {
    const [page, setPage] = useState(1);

    const [data, setData] = useState({
        regulation_id: null,
        degree_id: null,
        department_id: null,
        semester_id: null,
    });

    const [credits, setCredits] = useState()

    function updateData(obj) {
        setData({ ...data, ...obj });
        setPage(page + 1);
    }

    function goBack() {
        setPage(page - 1 || 1);
    }

    function conditionalRender() {
        let apiObj = {
            method: null,
            url: null,
            payload: {},
        };

        let title, storeOn, setBack;

        switch (page) {
            case 1:
                apiObj = {
                    method: "get",
                    url: "regulations/",
                };
                title = "Regulation";
                storeOn = "regulation_id";
                break;
            case 2:
                apiObj = {
                    method: "post",
                    url: "degrees/",
                    payload: {
                        regulation_id: data.regulation_id,
                    },
                };
                title = "Degree";
                storeOn = "degree_id";
                setBack = true;
                break;
            case 3:
                apiObj = {
                    method: "post",
                    url: "departments/",
                    payload: {
                        degree_id: data.degree_id,
                    },
                };
                title = "Department";
                storeOn = "department_id";
                setBack = true;
                break;
            case 4:
                
                // apiObj = {
                //     method: "post",
                //     url: "semesters/",
                //     payload: {
                //         department_id: data.department_id,
                //     },
                // };
                // title = "Semester";
                // storeOn = "semester_id";
                // setBack = true;
                break;
            // case 5:
            //     apiObj = {
            //         method: "post",
            //         url: "subjects/",
            //         payload: {
            //             department_id: data.department_id,
            //             semester_id: data.semester_id,
            //         },
            //     };

            //     title = "Grade Points";
            //     setBack = true;
            //     break;
            default:
                return console.log("Reached end of page switch");
        }

        return (
            <Section
                api={apiObj}
                title={title}
                storeOn={storeOn}
                updateData={storeOn && updateData}
                goBack={setBack && goBack}
            />
        );
    }

    return (
        <Container>
            <h1 className="text-center text-xl my-2">
                CGPA
            </h1>
            <SectionPane>
                { // Works when credit data is empty.
                    !credits && conditionalRender()
                }
                { 
                    <h1>Working</h1>
                }
            </SectionPane>
        </Container>
    );
}