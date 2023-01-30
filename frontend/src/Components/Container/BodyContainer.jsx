import Container from "./Container";

export default function BodyContainer(props) {
    return (
        <Container
            className={`mt-[18vh]${props.className ? ' ' + props.className: ''}`}
        >
            {props.children}
        </Container>
    );
}