function Progress() {
    return (
        <svg className="animate-spin-slow h-32 w-32 m-0 text-red-600 overflow-hidden inline" viewBox="0 0 24 24" fill="none">
            <circle className="animate-spin-inner" stroke="currentColor" cx="12" cy="12" r="10" fill="none" stroke-width="3"></circle>
        </svg>
    );
}

export default Progress;