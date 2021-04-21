import React,{useState} from 'react'

const Search = ({search}) => {

    const [text,setText]=useState('')

    const onSearch = (query) =>{
        setText(query)
        search(query)
    }

    return (
        <section className="search">
            <form>
                <input type="text" className="form-control"
                placeholder="Find your Hero"
                onChange={(e)=>onSearch(e.target.value)}
                value={text}
                autoFocus >
                </input>
            </form>
        </section>
    )
}

export default Search
