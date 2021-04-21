import React from 'react'
import CharacterUrl from './CharacterUrl'

const CharacterItem = ({item}) => {
    return (
        <div className='full-card'>
        <div className='content'>
            <div className='content-inner'>
                <div className='content-front'>
                <img src={item.thumbnail.path + '/portrait_xlarge.jpg'} alt='' />
                </div>
                <div className='content-back'>
                    <h1>{item.name}</h1>
                    <div>{item.description}</div>
                    
                </div>
            </div>

        </div>
        <div className='content-url'>
                {
                        item.urls.map(itemUrl =>(
                            <CharacterUrl key={itemUrl.type} itemUrl={itemUrl} />
                        ))
                }
            </div>
        </div>
    )
}

export default CharacterItem
