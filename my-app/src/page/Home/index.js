import Image from './components/ImageCarousel'
import Countdown from './countdown/Countdown'
import SearchBar from './searchBar/SearchBar'
import  Data from './searchBar/Data.json'
import AdvertisingWall from './advertisingWall/AdvertisingWall'
import './index.css'



const Home=()=>{
return<div className="myDiv">


    <div className="search"><SearchBar placeholder2="Search..." data={Data}/></div>
    <div className="carousel"><Image/></div>
    <div className="reciprocal"><Countdown Timestamp={1643673600000000}/></div>

    {/* <AdvertisingWall/> */}

</div>}
export default Home