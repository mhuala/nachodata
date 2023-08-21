const Cite = ({children}) => {
    return (
        <>
            <span className="">
            &quot;
            </span>
            <cite className="">
                {children}
            </cite>
            <span className="">
            &quot;
            </span>
        </>
    );
}

export default Cite;