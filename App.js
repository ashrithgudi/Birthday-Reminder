import {useState} from "react"
import {data} from "./Birthdaydata";
function App(){
  const[people,setPeople]=useState(data)
  const removePerson=(id)=>
  {
    let newperson=people.filter((person)=>person.id!==id)
    setPeople(newperson)
  }
  return(
    <>
    <h3 style={{backhgroundColor:"aquablue",color:"blue",fontFamily:"cursive",fontSize:"40px"}}>
      You have {people.length} BIRTHDAY reminder notifications
    </h3>
    {people.map((person) => {const{id,name,image}=person
    return(
      <div className="container">
        <div className="sample">
          <img src={image} alt={name}/>
          <h3>{name}</h3>
        </div>
      <div>
        <button className="btn" onClick={() => removePerson(id)}>Dismiss</button>
      </div>
      </div>
    )
  })}
    </>
  )
}
export default App