const defaultClass = "text-md font-medium px-5 py-1";

const primary = (props) => {
    return (
        <button
            type={props?.type}
            className={`${defaultClass} ${props?.className} text-white rounded-3xl bg-cyan hover:opacity-50`}
        >
            {props.children}
        </button>
    );
};

const secondary = (props) => {
    return (
        <button
            type={props?.type}
            className={`${defaultClass} ${props?.className} text-gray-sm hover:text-gray-lg rounded-3xl`}
        >
            {props.children}
        </button>
    );
};

const alternatif = (props) => {
    return (
        <button
            type={props?.type}
            disabled={props.disabled}
            onClick={props.onClick}
            className={`${defaultClass} ${props?.className} text-white rounded h-10 bg-cyan disabled:cursor-not-allowed hover:bg-cyan-light disabled:opacity-80`}
        >
            {props.children}
        </button>
    );
};

export { primary, secondary, alternatif };
