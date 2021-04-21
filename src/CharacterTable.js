import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from './Spinner'

const CharacterTable = ({items,isLoading}) => {
    return ( 
        isLoading ? <Spinner /> :
        <div>
        <section className="contents">
            {
                items.map(item =>(
                    <CharacterItem key={item.id} item={item} />
                ))
            }
        </section>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <h5>Data provided by Marvel. © 2014 Marvel</h5>
        <br></br>
        </div>
        
    )
}

export default CharacterTable
