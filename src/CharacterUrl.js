import React from 'react'

const CharacterUrl = ({itemUrl}) => {
    return (
        <div meta="content-security-policy" className="single-url">
            <a href={itemUrl.url} className="mylinks" rel="noreferrer" target="_blank">{itemUrl.type}s</a>
        </div>
    )
}

export default CharacterUrl
