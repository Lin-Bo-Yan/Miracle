import './ImageCarousel.css'
import{Images} from './CarouseData.js'
import{useState} from 'react'
//import IconBack from '@material-ui/icons/ArrowBackIos'
//import IconForward from '@material-ui/icons/ArrowForwardIos'

const ImageCarousel=()=>{


    const [currImg, setCurrImg] = useState(0)
    return<div>

        <div className="carouseImag" style={{backgroundImage:`url(${Images[currImg].URL})`}}>
         <div className="left" 
         onClick={()=>{
            currImg>0 && setCurrImg(currImg-1)}
             }></div>

         <div className="center"></div>
         <div className="right" 
         onClick={()=>{
            currImg <Images.length-1 && setCurrImg(currImg+1)
            console.log(Images.length);
            console.log(currImg);
             }}>

             </div>
         
        </div>
    </div>
    
    }
    export default ImageCarousel