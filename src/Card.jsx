import couragepic from './assets/courage.jpg'

function Card() {

    return(
        <div className="card" >
         <img  id="image" src={couragepic} alt="luffy"></img>
         <h1>this is courage</h1>
         <p>im courage one of the best protognist in CN channel</p>

        </div>
    );

}

export default Card