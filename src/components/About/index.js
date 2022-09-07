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
        
        You've done it. You've found the end of the internet and this is your prize...HI! My name is Steve and I like to have a lot irons in the fire. I'm a husband, coach, frisbeer, property manager, teacher, engineer, and (apparently)- developer!

I've earned my B.S. and M.S in Materials Science and Engineering from RPI in Troy, NY, as well as my M.A.T in Education from Union Graduate College in Schenectady, NY. From 2015-2021 my full-time job was a physics and engineering teacher at Hoosick Falls High School in Hoosick Falls, NY. As much as I love teaching, I recently decided to take my career in a new direction and enrolled in Full-Stack "bootcamp" through Columbia University. Simulataneously, I have accepted a new position as a Lead Materials Engineer with GE Aviation in Lynn, MA.
My wife and I are extremely excited for our new adventure and the infinite possibilities my courswork and new career will afford it. Please be sure to check back here frequently for updates!

I hope you enjoy!
      
      </div>
    </section>
  )
}

export default About