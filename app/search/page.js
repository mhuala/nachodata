"use client";
import { useState } from "react";
import { FilterIcon } from "@/public/icons/icons";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import NotFound from "@/components/Posts/NotFound";
import PostCard from "@/components/Search/PostCard";
import SearchBar from "@/components/Search/SearchBar";

const options = [
    { value: "mongodb", label: "Mongo DB" },
    { value: "react", label: "React JS" },
    { value: "python", label: "Python" },
    { value: "chatgpt", label: "ChatGPT" },
];

// UTILIZAR LINE-CLAMP para truncar texto

const SearchPage = ({ params }) => {
    const posts = params.newProp;

    const filterByTagList = (obj_list, tag_list) => {
        let filteredPosts = [];
        obj_list.map((obj) => {
            tag_list.some((tag) => {
                if (obj.tags.includes(tag.value)) {
                    filteredPosts.push(obj);
                }
            });
        });
        return filteredPosts;
    };

    const uniqueElements = (arr) =>
        arr.filter((value, index, self) => {
            return self.indexOf(value) == index;
        });

    const filteredPosts = () => {
        // Si no hay nada ingresado en el input de busqueda
        if (search.length === 0) {
            // Si existen filtros creados
            if (filterList.length > 0) {
                let postsFilteredByTag = uniqueElements(
                    filterByTagList(posts, filterList)
                );
                let postsSlice = postsFilteredByTag.slice(
                    currentPage,
                    currentPage + 6
                );
                return postsSlice.sort((a, b) => {
                    return a.id - b.id;
                });
                // Si no existen filtros
            } else {
                let postsSlice = posts.slice(currentPage, currentPage + 6);
                return postsSlice.sort((a, b) => {
                    return a.id - b.id;
                });
            }
        } else {
            // Si hay algo ingresado en el input de busqueda
            let postsFilteredBySearch = posts.filter((post) =>
                post.description.includes(search)
            );
            if (postsFilteredBySearch.length === 0) {
                return [];
            }
            if (filterList.length !== 0) {
                let postsFilteredByTag = uniqueElements(
                    filterByTagList(posts, filterList)
                );
                let postsSlice = postsFilteredByTag.slice(
                    currentPage,
                    currentPage + 6
                );
                return postsSlice.sort((a, b) => {
                    return a.id - b.id;
                });
            }

            let filteredSlice = postsFilteredBySearch.slice(
                currentPage,
                currentPage + 6
            );
            return filteredSlice.sort((a, b) => {
                return a.id - b.id;
            });
        }
    };

    const nextPage = () => {
        if (
            posts.filter((post) => post.description.includes(search)).length > 6
        ) {
            setCurrentPage(currentPage + 6);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 6);
    };

    const onSearchChange = ({ target }) => {
        setCurrentPage(0);
        setSearch(target.value);
    };

    const handleOnFilter = (filterList) => {
        setCurrentPage(0);
        setFilter(filterList);
    };

    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState("");
    const [filterList, setFilter] = useState([]);

    const animatedComponents = makeAnimated();

    return (
        <div className="flex flex-col mt-10 mx-auto items-center min-h-screen">
            <div className="w-5/6 rounded-lg bg-gray-700 flex flex-col p-8 gap-6">
                <div className="flex flex-col items-center mx-auto gap-4">
                    <h2 className="text-white font-bold text-4xl">
                        {" "}
                        Realiza tu busqueda de contenido
                    </h2>
                    <span className="text-white px-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Itaque quae amet quaerat doloremque maiores in
                        labore consequatur, recusandae expedita, eos obcaecati
                        illum, eius doloribus? Voluptatibus nostrum odit minima
                        commodi autem!
                    </span>
                </div>
                <SearchBar onSearchChange={onSearchChange} search={search} />
                <div className="w-full lg:w-4/5 lg:divide-x-2  flex flex-col lg:flex-row lg:items-center gap-4 px-2 ">
                    <span className="text-white font-semibold flex flex-row gap-3">
                        <FilterIcon /> Filters
                    </span>

                    <div className="px-4 ">
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            onChange={handleOnFilter}
                            value={filterList}
                            isMulti
                            options={options}
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12 px-16 py-16 w-11/12">
                {filteredPosts().length >= 1 ? (
                    filteredPosts().map((post) => {
                        return (
                            <PostCard
                                title={post.title}
                                description={post.description}
                                author={post.author}
                                bannerURL={post.bannerURL}
                                slug={post.slug}
                                tags={post.tags}
                                date={post.date}
                                key={post.id}
                            />
                        );
                    })
                ) : (
                    <NotFound />
                )}
            </div>
            <div className="flex flex-row mx-auto mb-8">
                <button
                    type="button"
                    onClick={prevPage}
                    className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
                >
                    <div className="flex flex-row align-middle">
                        <svg
                            className="w-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <p className="ml-2">Anterior</p>
                    </div>
                </button>
                <button
                    type="button"
                    onClick={nextPage}
                    className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3"
                >
                    <div className="flex flex-row align-middle">
                        <span className="mr-2">Siguiente</span>
                        <svg
                            className="w-5 ml-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SearchPage;
