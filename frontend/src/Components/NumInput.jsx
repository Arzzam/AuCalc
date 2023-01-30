import Input from "./Input";

export default function NumInput(props) {

    function handleBlur(event) {
        let min = parseFloat(props.min), max = parseFloat(props.max);

        if (event.target.value) {
            let value = parseFloat(event.target.value)
    
            if (value < min) {
                value = min;
            }
            else if (value > max) {
                value = max;
            }

            event.target.value = value;   
        }
        else {
            event.target.value = min;
        }
        props.onChange(event.target.id, parseFloat(event.target.value));
    }

    return (
        <Input
            type='number'
            min={props.min}
            max={props.max}
            step={props.step}
            className={props.className}
            id={props.id}
            onBlur={handleBlur}
            defaultValue={props.defaultValue}
        />
    );
}