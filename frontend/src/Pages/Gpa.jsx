import { useState } from "react";
import BodyContainer from "../Components/Container/BodyContainer";
import SectionPane from "../Components/SectionPane";
import Section from "./Section";
import CalcSection from "./CalcSection";

const Gpa = () => {
    const [page, setPage] = useState(1);

    const [data, setData] = useState({
        regulation_id: null,
        degree_id: null,
        department_id: null,
        semester_id: null,
    });

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
                    payload: data,
                };
                title = "Degree";
                storeOn = "degree_id";
                setBack = true;
                break;
            case 3:
                apiObj = {
                    method: "post",
                    url: "departments/",
                    payload: data,
                };
                title = "Department";
                storeOn = "department_id";
                setBack = true;
                break;
            case 4:
                apiObj = {
                    method: "post",
                    url: "semesters/",
                    payload: data,
                };
                title = "Semester";
                storeOn = "semester_id";
                setBack = true;
                break;
            case 5:
                apiObj = {
                    method: "post",
                    url: "subjects/",
                    payload: data,
                };

                title = "Grade Points";
                setBack = true;
                break;
            default:
                return console.log("Reached end of page switch");
        }

        return (
            <Section
                api={apiObj}
                title={"Select " + title}
                action={title.toLowerCase()}
                storeOn={storeOn}
                updateData={storeOn && updateData}
                goBack={setBack && goBack}
                finalPage={CalcSection}
            />
        );
    }

    return (
        <BodyContainer>
            <h1 className="text-center text-xl font-semibold my-2">
                GPA
            </h1>
            <SectionPane>{conditionalRender()}</SectionPane>
        </BodyContainer>
    );
};

export default Gpa;
