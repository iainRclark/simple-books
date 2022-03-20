import React from 'react'
import { DebounceInput } from 'react-debounce-input';

const Search = (props) => {
    const { handleSearch } = props;

  return (
    <div className='bg-blue-300 w-full bg-gradient-to-b from-sky-700 to-sky-500 text-white caret-pink-500 focus:bg-violedotnet t-700'>
        <DebounceInput
            className='p-1 min-w-[30%] w-64 rounded-xl m-1 text-black'
            name='search'
            minLength={3}
            debounceTimeout={400}
            type='text'
            placeholder='search...'
            onChange={(e) => {handleSearch(e.target.value)}}/>
    </div>
  )
}

export default Search