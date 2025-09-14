import pic from "./assets/image.jpg"
import "./index.css"

function Card() {
    return(
<div className="card">
    <img className="image-one" src ={pic} alt="image-dp"></img>
    <h1>Bro code</h1>
    <p> hello this is my yt channel and i post videos everyday</p>

</div>
    );

}

export default Card