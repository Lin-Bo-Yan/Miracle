import './SearchBar.css'



const SearchBar=({placeholder2,data})=>{

return<div className="search">

        <div className="searchInputs">
            <input type="text"placeholder={placeholder2}/>
        </div>
        <div className="dataResult">
         {data.map((key,value)=>{



        // return <div>{key.title}</div>
         })}

        </div>
</div>}
export default SearchBar