import React from "react";
import './CSS/header.css';
import code from './Images/code.jpg';
import code1 from './Images/code1.png';
const App=()=>{
  return(
      <>
      <header>
        <div className = "container container-flex">
            <div class="header">
            <a href class="logo"><img src = {code1} alt="logo" height = "50"></img></a>
             <div class="header-right">
              <a class="active" href="#top">About Me</a>
               <a href="#brazo">Why I wanna work at SOVTECH</a>
                <a href="#expect">What to expect of me</a>
  </div>
 </div>
        </div>

      </header>
      <body>
      
      <section class="about" id="about">
           <div class="row">
           <div class="large-8 large-centered column">
                   <div class="title">
           <h1>WHO AM I ?</h1>
                       <span>...</span>
                       <p>Mbonisi Mkhize a BSc Computer Science and Information Technology graduate, a motivated young I.T professional with acquired knowledge from University I’ve been exposed to most spheres of IT from modules that were Data Structures, Computer Systems, Advanced Systems Analysis and Design, Systems Implementation, Object-Oriented Programming, Advanced Programming, Artificial Intelligence, Network and Databases, Internet Technologies from development side I’ve been engaged in projects, which required one to use Visual Studio as IDE and implement system solutions according to a business’s needs. I’m motivated by customer satisfaction and driving overall operational improvements. Eager to contribute to team success through problem-solving, attention to detail and excellent organizational skills<br/>Person who is passionate about programming and believes in solving problems with technological solutions as I enjoy solving problems</p>
            </div> 
            </div>
            </div>
            
            <div class="large-4 hide-for-medium-only hide-for-small-only column start"> 
                   <div class="imageholder">
                       <img src={code} alt="Green Path Way" title="My Passion"></img>
                       <div class="text"><div><span>I love programming</span></div></div>
                   </div>
               </div>
               <div class="large-6 medium-6 column"> 
                   <article>
                       <div class="smallTitle">
                            <h2 id = "brazo">WHY I WANT TO WORK AT SOVTECH</h2>
                            <span>...</span>
                       </div>
                       <p>
                       I see this opportunity as a way to contribute to an exciting and forward-thinking company, and I feel with the skills I possess. I would be proud to work for a company with such an excellent track record and a strong example of leadership in the industry
                           <br/><br/>
                           I would love to be a part of this innovative team and use my skills to continue the groundbreaking work you are doing here,as the the leading software development company in Africa. This organization is internationally known for the technology products you create, and my experience in technology and developing new products has me intrigued by this position
                       </p>
                       <a href="#top" class="cta">Back to the top</a>
                   </article>

                   <div class="large-6 medium-6 column"> 
                   <article>
                       <div class="smallTitle">
                            <h2 id = "expect">What to expect of me</h2>
                            <span>...</span>
                       </div>
                       <p>
                           I currently possess several skills and I constantly want to expand my knowledge in the technology sphere, I am proficient in Java and Python but am willing to learn any other language to meet the companys needs, just as I have just learned React.js in 2 days
                           <br/><br/>
                           ● Project Planning and Management
● Java (Software Testing and Automation) Intermediate
● Java (Data Structures, OOP)
● Python (Selenium)
● Web development, Systems Development- C#, ASP.net
● Cybersecurity
● Networking and Databases (SQL, Server Configuration)
● Good verbal and written communication skills
● Microsoft Excel
● Microsoft365(Power Automate, Lists, PowerBI, PowerApps) 
                       </p>
                   </article>
               </div>
               </div>
               </section>
      </body>

      </> 
  )

}
export default App;