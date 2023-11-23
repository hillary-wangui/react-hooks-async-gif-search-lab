function GifSearch({handlesubmit, handlechange,gifsearch}) {
    return(
        <form onSubmit={handlesubmit}>
            <label htmlFor="gifName">Search for the Gif</label>
            <input 
            type="text"
            id="gifName"
            value={gifsearch}
            onChange={handlechange}
            />
            <button type="submit">Find Gif</button>
        </form>
    )
}

export default GifSearch