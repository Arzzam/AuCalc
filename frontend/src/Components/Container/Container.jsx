const Container = (props) => {
    return (
        <div
            className="container mx-auto mb-24"
        >
            {props.children}
        </div>
    );
};

export default Container;

export const H1 = (props) => {
    return <h1 className="text-5xl p-5 text-center font-lora">{props.children}</h1>;
};
