import { useState } from "react";
import Container, { Head1 } from "../Components/Container/Container";
import Section from "./Section";

const Gpa2 = () => {

    const [page, setPage] = useState(1);

    const [data, setData] = useState({
        regulation_id: null,
        degree_id: null,
        department_id: null,
        semester_id: null
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
            payload: {}
        };

        let title, storeOn, setBack;

        switch (page) {
            case 1:
                apiObj = {
                    method: 'get',
                    url: 'regulations/',
                }
                title = 'Regulation'
                storeOn = 'regulation_id'
                break;
            case 2:
                apiObj = {
                    method: 'post',
                    url: 'degrees/',
                    payload: {
                        regulation_id: data.regulation_id
                    }
                }
                title = 'Degree'
                storeOn = 'degree_id'
                setBack = true;
                break;
            case 3:
                apiObj = {
                    method: 'post',
                    url: 'departments/',
                    payload: {
                        degree_id: data.degree_id
                    }
                }
                title = 'Department'
                storeOn = 'department_id'
                setBack = true;
                break;
            case 4:
                apiObj = {
                    method: 'post',
                    url: 'semesters/',
                    payload: {
                        department_id: data.department_id
                    }
                }
                title = 'Semester'
                storeOn = 'semester_id'
                setBack = true;
                break;
            case 5:
                apiObj = {
                    method: 'post',
                    url: 'subjects/',
                    payload: {
                        department_id: data.department_id,
                        semester_id: data.semester_id
                    }
                }

                title = 'Calculation'
                setBack = true;
                break;
            default:
                return console.log('Reached end of page switch');
        }

        return (
            <Section
                api={apiObj}
                title={title}
                storeOn={storeOn}
                updateData={storeOn && updateData}
                goBack={setBack && goBack}
            />
        )
    }

    return (
        <Container>
            <div className=" flex-1 justify-self-center text-center">
                <Head1>GPA</Head1>
                {conditionalRender()}
            </div>
        </Container>
    );
}

export default Gpa2;