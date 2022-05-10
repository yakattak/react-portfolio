import React from 'react';
import resume from "../../assets/resume/resume.pdf";



function Resume() {
    return(
     //   
        <div>
         <a href={resume} target="_blank">Download PDF Resume</a>
        <embed src={resume} width="100%" height="1000px%"></embed>
        </div>
        



    )
}

export default Resume;


