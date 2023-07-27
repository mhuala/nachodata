"use client";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

const animatedComponents = makeAnimated();

const SearchBar2 = ({ handleOnSearch, handleOnFilter, search, filterList }) => {
    return (
        <div className="flex flex-row">
            <form class="flex flex-col md:flex-row gap-3">
                <div class="flex">
                    <input
                        type="text"
                        id="table-search"
                        className="w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for items"
                        value={search}
                        onChange={handleOnSearch}
                    ></input>
                    <button
                        type="submit"
                        class="bg-sky-500 ml-4 p-2 rounded-xl text-white rounded-r px-2 md:px-3 py-0 md:py-1"
                        onClick={handleOnSearch}
                    >
                        Search
                    </button>
                </div>
            </form>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                onChange={handleOnFilter}
                value={options}
                isMulti
                options={options}
            />
            {/* <select
                id="pricingType"
                placeholder="Filtrar..."
                name="pricingType"
                class="w-64 h-24 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                onChange={handleOnFilter}
                value={filterList}
                multiple
            >
                <option value="All">All</option>
                <option value="Freemium">Freemium</option>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
            </select> */}
        </div>
    );
};

export default SearchBar2;
