import React from 'react'

const Books = (props) => {
    const { docs } = props;

 

  return (
    docs ? docs.map((val, i) => {
        var link = 'no-image.jpg';
        if (val.cover_edition_key) {
            link = 'https://covers.openlibrary.org/b/olid/' + val.cover_edition_key + '-M.jpg';
        }

        return (
            <div key={i} className="m-5 rounded-xl bg-slate-800 text-white flex">
                <div className='w-56 shrink-0'>
                    <img className='object-scale-down w-56' src={link} onError={(e) => {
                        e.src="no-image.jpg";}}>
                    </img>
                </div>

                <div className='p-1'>
                    <div className='pt-5 pl-2 text-lg font-bold text-left'>{val.title}</div>
                    <div className='flex flex-wrap pt-2 pb-2'>
                    {
                        val?.author_name?.map(name => {
                            return (
                                <div className='bg-blue-600 text-white rounded-lg p-1 m-1 hover:invert transition ease-in-out cursor-pointer'>{name}</div>
                            )
                        })
                    }
                    </div>
                    <div className='flex flex-wrap pt-2 pb-2 '>
                    {
                        val?.subject?.map(sub => {
                            return (
                                <div className='bg-teal-600 text-white rounded-lg p-1 m-1 hover:invert transition ease-in-out cursor-pointer'>{sub}</div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>

            // https://covers.openlibrary.org/b/olid/OL31906290M-M.jpg
        )
    }) : 
    <div className='center p-8'>
        No books found
    </div>
  )
}

export default Books