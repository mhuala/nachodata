"use client"
import PostCard from "@/components/Search/PostCard";
import SearchBar from "@/components/Search/SearchBar";

import { useState } from "react";

const SearchPage = ({params}) => {
    
    const posts = params.newProp
    
    const filteredPosts = () =>{
        if (search.length === 0){
            // Si no hay nada ingresado en el input de busqueda
            let postsSlice = posts.slice(currentPage,currentPage+6)
            return postsSlice.sort((a,b) => {return(a.id - b.id)}) 
        } else {
        // Si hay algo ingresado en el input de busqueda
            let filtered = posts.filter((post) => post.description.includes(search))
            if(filtered.length===0){
                return []
            }
            let filteredSlice = filtered.slice(currentPage,currentPage+6)
        return filteredSlice.sort((a,b) => {return(a.id - b.id)}) }
    }

    const nextPage = () => {
        if ( posts.filter((post) => post.description.includes(search)).length > 6){
        setCurrentPage(currentPage+6)}
    }

    const prevPage = () => {
        if(currentPage>0)
            setCurrentPage(currentPage-6)
    }

    const onSearchChange = ({target}) => {
        setCurrentPage(0)
        setSearch(target.value)
    }

    // https://www.youtube.com/watch?v=ZoayCCDHFiI
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState("")

    return (
        <div className="flex flex-col mt-10 justify-center items-center mx-auto min-h-screen">
            <SearchBar onSearchChange={onSearchChange} search={search}/>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 px-12 py-16 w-full">
                { filteredPosts().length>=1 ?
                                        filteredPosts().map((post) => { 
                                            return (<PostCard 
                                                   title ={post.title}
                                                   description={post.description}
                                                   author={post.author}
                                                   bannerURL={post.bannerURL}
                                                   slug={post.slug}
                                                   tags={post.tags}
                                                   date={post.date}
                                                   key={post.id}
                                                   />)}) : (<h1 className="text-white text-2xl">NO EXISTE</h1>)
                }
            </div>
            <div className="flex flex-row mx-auto mb-8">
                <button type="button" onClick={prevPage} className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
                <div className="flex flex-row align-middle">
                    <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                    </svg>
                    <p className="ml-2">Anterior</p>
                </div>
                </button>
                <button type="button" onClick={nextPage} className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3">
                <div className="flex flex-row align-middle">
                    <span className="mr-2">Siguiente</span>
                    <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </div>
                </button>
            </div>
        </div>
    );
}

export default SearchPage;