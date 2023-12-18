
import React from "react";
import pages from "./Description";
import Title from "./Cards";

const Resultat =() =>{

return(
<>
<div style={{display:'flex'}}>
{pages.map((pages) =>(
     <Title  key={pages}  pages={pages} />

     ))}
</div> 
</>

);



}
export default Resultat ;