const Container = (props) => {
    return (
        <div className="lg:container mx-auto px-6 py-6 ">{props.children}</div>
    );
};

export default Container;

export const Head1 = (props) => {
    return <h1 className="text-5xl p-5 text-center font-lora">{props.children}</h1>;
};
