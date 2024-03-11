
import "bootstrap/dist/css/bootstrap.css"
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

function Card({data}){
  console.log(data)
  return(
    
        <div className="col">

          <h4 className="heading">{data.name}</h4>

          <h1 className="price">${data.price}/month</h1>
          <br/>
      
          {data.features.map((feature,index)=>{
            return <p className="feature" key={index}>
              {
              feature.enabled ? <span className="benefits"><TiTick/><b> {feature.name}</b></span> : <span className="noBenefits"><ImCross size={8}/>  {feature.name}</span>
              }
            </p>
          })}
          <br/>
        
          <button className="button">BUTTON</button>
        </div>

     
    
  )
}
export default Card