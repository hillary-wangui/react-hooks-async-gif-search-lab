import React from "react"

function GifList ({gifData}) {

const displayUrl = gifData.map((item, index)  => {
    return(
        <li key={index} style={{marginBottom: "2rem", listStyle: "none"}}>
            <img src={item} alt={index}/>
        </li>
    )
})
    return(
    <div>
      <ul>
        {displayUrl}
      </ul>
    </div>)
}

export default GifList