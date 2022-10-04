export default function Input(props) {
    return (
        <input
            {...props}
            className={`px-2 py-1.5 outline-none w-fit bg-inherit border border-solid border-slate-300 focus:border-slate-500 hover:border-slate-500 rounded disabled:opacity-80 ${props.className}`}
        />
    );
}
