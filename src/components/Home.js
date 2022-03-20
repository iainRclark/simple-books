import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from './Pagination';
import Search from './Search';
import Books from './Books';

const Home = () => {
    //NOTE: term words seperated by +
    const [term, setTerm] = useState();
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState();
    const [docs, setDocs] = useState();

    const [numFound, setNumFound] = useState();
    const [start, setStart] = useState();

    useEffect(() => {
        // getBooksTest();
        getBooks();
    }, [term, page])

    const getBooks = async() => {
        if (!term) 
            return;

        var response = await axios.get(`https://openlibrary.org/search.json?q=${term}&page=${page}`)

        if (response?.data) {
            const { numFound, docs } = response.data
            setPages(Math.floor(numFound / 100) + 1)
            setDocs(docs);

            // console.log(data)
        }
    }

    const getBooksTest = async() => {
        const response = await fetch('books-data.json',{
            headers: {
                'content-type': 'application/json',
                'accept': 'application-json'
            }
        })

        if (response) {
            var data = await response.json();
            const { numFound, docs } = data
            setPages(Math.floor(numFound / 100) + 1)
            setDocs(docs);
        }
    }

    const changePage = (p) => {
        if (page != p)
            setPage(p)
    }

    const search = (term) => {
        setTerm(term.replace(' ', '+'))
    }

    return (
        <div className='bg-gradient-to-b from-sky-500 to-sky-200'>
            <Search handleSearch={search}></Search>

            {/* <input type='button' value='change pages' onClick={()=> {setPages(pages + 1); console.log(pages)}}/>  */}

            <div className='container mx-auto overflow-y-scroll' style={{height: 'calc(100vh - 164px)'}}>

                {/* <div className='center p-8'>
                    No books found
                </div> */}

                <Books docs={docs}></Books>

            </div>

            <Pagination pages={pages} page={page} handlePage={changePage}></Pagination>
        </div>

    )
}

export default Home