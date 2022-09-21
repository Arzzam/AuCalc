export default function Input(props) {
    return (
        <input
            {...props}
            className={`px-2 py-1.5 w-fit border border-solid border-slate-300 rounded disabled:opacity-80 ${props.className}`}
        />
    );
}
