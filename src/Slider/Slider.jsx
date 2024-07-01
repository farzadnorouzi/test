import SimpleImageSlider from "react-simple-image-slider"
import "./Slider.css";


const images=[
    {url:"https://dl1.mrtarh.com/XRJZ-WKDB/preview.jpg"},
    {url:"https://www.technolife.ir/wp-content/uploads/2022/03/games-news-buyer-s-guide-best-games-console.jpg"},
    {url:"https://dl.psd-eps.com/uploads/2020/05/25-662.jpg"},
    {url:"https://cdn.tarhbama.com/1400/BigImage/2021/9/23/12/%D8%AA%D8%B5%D9%88%DB%8C%D8%B1%20%D8%A8%D8%A7%20%DA%A9%DB%8C%D9%81%DB%8C%D8%AA%20%D8%A7%D9%86%D9%88%D8%A7%D8%B9%20%D9%84%D9%88%D8%A7%D8%B2%D9%85%20%D8%AE%D8%A7%D9%86%DA%AF%DB%8C%20%D9%86%D9%82%D8%B1%D9%87%20%D8%A7%DB%8C-small-1000-logo.png"}
]

function Slider() {

    return(
        <div className="Slider">
            <SimpleImageSlider
            height={400}
            width={1030}
            images={images}
            autoPlay={true}
            showNavs={true}
            slideDuration={3}
        
           
               />
            
        </div>


    )
    
}

export default Slider