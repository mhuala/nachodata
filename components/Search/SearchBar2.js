const SearchBar2 = ({ handleOnSearch, handleOnFilter, search, filter }) => {
    return (
        <form class="flex flex-col md:flex-row gap-3">
            <div class="flex">
                <input
                    type="text"
                    id="table-search"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for items"
                    value={search}
                    onChange={handleOnSearch}
                ></input>
                <button
                    type="submit"
                    class="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
                    onClick={handleOnSearch}
                >
                    Search
                </button>
            </div>
            <select
                id="pricingType"
                placeholder="Filtrar..."
                name="pricingType"
                class="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                onChange={handleOnFilter}
                value={filter}
                multiple
            >
                <option value="All">All</option>
                <option value="Freemium">Freemium</option>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
            </select>
        </form>
    );
};

export default SearchBar2;
