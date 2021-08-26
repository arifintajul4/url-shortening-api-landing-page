const defaultClass = "text-md font-bold px-5 py-1";

const primary = (props) => {
    return (
        <button
            type={props?.type}
            className={`${defaultClass} ${props?.className} text-white rounded-3xl bg-green hover:bg-green-light`}
        >
            {props.children}
        </button>
    );
};

const secondary = (props) => {
    return (
        <button
            type={props?.type}
            className={`${defaultClass} ${props?.className} text-gray-500 hover:text-gray-900 rounded-3xl`}
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
            className={`${defaultClass} ${props?.className} text-white rounded h-10 bg-green disabled:cursor-not-allowed hover:bg-green-light disabled:opacity-80`}
        >
            {props.children}
        </button>
    );
};

export { primary, secondary, alternatif };
