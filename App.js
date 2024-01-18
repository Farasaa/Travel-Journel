import React from "react"
import NavBar from "./components/nav"
import Journal from "./components/journal"
import data from "./data"

export default function App(){
    const JournalHtml = data.map((item) => {
        return(<Journal 
        item={item}
        />  )
    })
    
    return(
    <div>
      <NavBar />
      {JournalHtml}
    </div>
    )
}