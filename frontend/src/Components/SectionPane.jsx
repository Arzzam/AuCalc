// Todo: HeadlessUi transition for SectionPane.

export default function SectionPane(props) {
    return (
        <div className={`relative xs:w-fit xs:min-w-[24rem] xs:mx-auto mx-2 p-4 bg-gray-400/20 rounded-[1rem] text-center shadow-lg${props.className ? ' ' + props.className: '' }`}>
            {props.children}
        </div>
    );
}
