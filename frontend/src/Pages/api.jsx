import axios from "axios";

export function fetchData(props) {

    // Input Data Format:
    //     {
    //         method: <http-method>,
    //         url: <api-path>,
    //         data: <payload-data> [Optional],
    //         onSuccess: <callback>,  // Called on fetching data.
    //         onError: <callback>,  // Called on error.
    //         onFinal: <callback>,  // Called in finally block.
    //     }

    let config = {
        method: props.method,
        url: 'api/' + props.url,
        data: props.data || {},
    }

    axios(config)
        .then((response) => {
            props.onSuccess(response);
        })
        .catch((err) => {
            props.onError(err);
        })
        .finally(() => {
            props.onFinal();
        })
}