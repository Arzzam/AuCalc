// Todo: HeadlessUi transition for SectionPane.

export default function SectionPane(props) {
    return (
        <div className={`relative sm:w-fit sm:min-w-[25rem] transition-w ease-linear duration-300 mx-auto p-4 bg-gray-400/20 rounded-[1rem] shadow-lg${props.className ? ' ' + props.className: '' }`}>
            {props.children}
        </div>
    );
}
