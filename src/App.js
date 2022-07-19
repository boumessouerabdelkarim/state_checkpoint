import React,{ useState } from 'react'
import"./App.css"


function App() {
  const [person] = useState({
    fullName: "abdelkarim boumessouer",
    bio: "je suis un ingenieur en informatique",
    imgSrc:'/Myphoto.jpg',
    profession: "Software Engineer, Buisness man",

  })
  const [show, setshow] = useState(false)
  return (
    <div>
          <button onClick={()=>setshow(!show)}>click to show</button>
{show?<div className="card">
      <div className="img-container">
      <img src={person.imgSrc} alt="Meee!"></img> 
        
      </div>
      <div className="content">
        <h1 >{person.fullName}</h1>
        <h3>{person.profession}</h3>
        <p>{person.bio}</p>
      </div>
    </div>:null}
  
    </div>
  )
}

export default App