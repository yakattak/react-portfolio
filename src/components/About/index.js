import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5 " >
      <h1 id="about">Who am I?</h1>
      <div className="my-2 about-section">
      <img src={coverImage} className="my-2 image" style={{ width: "20%" }} alt="cover" />
      </div>
      <div>
        
        Hey there! Thanks for visiting my Portfolio! My name is Steve Calebrese and I am proud to have recently earned my Certificate of Completion from the Columbia Engineering Full Stack Web Development Boot Camp.

My other educational achievements include a B.S. and M.S in Materials Science and Engineering from RPI in Troy, NY, as well as my M.A. in Education from Union Graduate College in Schenectady, NY. From 2015-2021 my full-time job was a physics and engineering teacher at Hoosick Falls High School in Hoosick Falls, NY. 
Currently I am a Lead Metallic Materials Engineer with GE Aviation in Lynn, MA, however, I am very eager to begin a career in software engineering or back-end web development.
<br></br>
<br></br>
I have always found great joy in finding different ways to solve problems, hence my love for physics and engineering. When I discovered the infinite possibilities for 
problem solving and finding creative solutions in programming and web development I became immediately drawn in. As I worked on applications, both individually and with collaborators in my boot camp, I frequently
found myself unable to step away, completely immersed in what I was doing, and enjoying every minute of discovery.

<br></br>
<br></br>

While I am satisfied with my crurent career, I am currently seeking to love what I do. For that reason I am seeking employment in software and/or web development. While 
I search for a role that speaks to me I am continuing my education by learning AWS, further delving into Python, joining software and web development communities, and looking for others
to collaborate with on a new project.


     
      </div>
    </section>
  )
}

export default About