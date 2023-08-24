const Extra = ({children}) => {
    return (
        // <section id="final" className="flex flex-col bg-[#263850] mt-10 rounded-md p-4 border border-white" >
        <section id="final" className="flex flex-col bg-[#263850] mt-10 rounded-md p-4 border border-white" >
            <div className="flex flex-row items-center bg-slate-800 rounded-md  p-2">
                <span className="mr-4">📚</span>
                <h1 id="final" className="font-lulo text-white text-2xl">Material Extra:</h1>
            </div>
            <div className="text-white">{children}</div>
        </section>
    );
}

export default Extra;