export default function Progress(props) {
    return (
        <svg
            className={`animate-spin-slow m-0 overflow-hidden inline ${props.className}`}
            viewBox="0 0 24 24"
            fill="none">
            <circle
                className="animate-spin-inner"
                stroke="currentColor"
                cx="12"
                cy="12"
                r="10"
                fill="none"
                strokeWidth="2"
            ></circle>
        </svg>
    );
}
