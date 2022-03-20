import React, { useEffect, useState } from 'react'

const Pagination = (props) => {
    const { pages, handlePage, page } = props;

    useEffect(() => {
        console.log('pagination pages:' + pages)
    }, [pages])

    const renderPages = (() => {
        let content = [];
        for (let i = 1; i < pages; i++) {
          content.push(
          <li 
            key={i} 
            className={`inline p-1 m-1 hover:invert rounded-md text-white cursor-pointer select-none ${i == page ? 'bg-slate-700 ' : 'bg-slate-500 '} `}
            onClick={() => {handlePage(i)}}>
            {i}
          </li>);
        }
        return content;
    })

  return (
    <ul className='p-4'>
      {renderPages(pages)}
    </ul>
  )
}

export default Pagination