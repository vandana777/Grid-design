import './App.css';

import classes from "./grid-design.module.css"
import React, { Component } from 'react';
function App() {
  return (
    <div className="App">
      <div className={classes.container}>
   <div class="header"> 
      <a class="Navbar" id="logo" href=""> Edyoda</a> 
      <a class="Navbar" id="dropdown" href=""> Explore  
      Categories</a>
    <select class="Navbar" id="dropdown-select">
      <option class="dropdown-icon">Artificial      
        Intelligent</option>
      <option class="dropdown-icon">Cloud Computing</option>
      <option class="dropdown-icon"> DevOps</option>
      <option class="dropdown-icon">Mobile Application 
       Development</option>
      <option class="dropdown-icon">Technology and    
        tools</option>
      <option class="dropdown-icon">Get a Job In tech 
        Company</option>
      <option class="dropdown-icon">Others</option> 
     </select>
      <div>
        <a id="stories" href=""> <i>Stories</i></a>
      </div>
   </div>
  <div> 
    <h3 class="category">Trending Posts </h3> 
  </div>
  <div> 
    <img id="filter" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII=" alt="filter-logo" height="30px" width="30px"/>
<span class="filter-category">Filter By Category</span>
 
  </div>
  <div class="btn-active"> 
    <button class="btn"> All</button>
    <button class="btn"> Artificial Intelligent</button>
    <button class="btn">Cloud Computing</button>
    <button class="btn">DevOps</button>
    <button class="btn">Mobile Application Development</button>
    <button class="btn">Get a Job In tech Company</button>
    <button class="btn">Others</button>
  </div>
  
  <div class="img-container">
  <div class="item">
     <div class="image-section"> <img src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png" class="image"> 
        </div>
    <div class="description"> 
      <h5 class="title">Introduction  to a machine learning online course </h5>
      <h6 class="aut-date"> <i class="aut-name"> Edyoda  </i> | 24 August 2019</h6>
      <p class="aut-para">  We have had inside Artificial Intelligence well. one of its subfeild is machine learning and its introduction will help you get fair idea of what is this machine learning. </p> 
    </div>
 </div>
   <div class="item">
     <div class="image-section"> <img src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png" class="image"> 
        </div>
    <div class="description"> 
      <h5 ckass="title">LAMP Stack Versus Mean Stack........... </h5>
      <h6 class="aut-date"> <i class="aut-name"> Edyoda  </i> | 24 August 2019</h6>
      <p class="aut-para"> In Today is dymanic world developing arapid application with a smooth user interface that can adapt to specific features the business requirement many organiation. </p> 
    </div>
     </div>
  <div class="item">
     <div class="image-section"> <img src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png" class="image"> 
        </div>
    <div class="description"> 
      <h5 ckass="title">Impact of clould computing in various industries </h5>
      <h6 class="aut-date"> <i class="aut-name"> Edyoda  </i> | 24 july 2019</h6>
      <p class="aut-para">Cloud Computing  has been rapidly gaining place in the world of information technology. It has been observed that 90% of globle enterprises are using cloud.  </p> 
     </div>
     </div>
  </div>
 <div class="item">
     <div class="image-section"> <img src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png" class="image"> 
        </div>
    <div class="description"> 
      <h5 ckass="title">Challenge of Machine Learning................</h5>
      <h6 class="aut-date"> <i class="aut-name"> Edyoda  </i> | 24 August 2019</h6>
      <p class="aut-para"> Machine Learning is a subset of artificial intelligence. which is an important part of computer science. the revolution of big data promises to transmitter way we work live on. </p> 
    </div>
 </div>
   <div class="item">
     <div class="image-section"> <img src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png" class="image"> 
        </div>
    <div class="description"> 
      <h5 ckass="title">Breaking the myths around cyber security....... </h5>
      <h6 class="aut-date"> <i class="aut-name"> Edyoda  </i> | 26 August 2019</h6>
      <p class="aut-para"> Cyber security plays an important roles in the process of goods business models. but even cyber security programs built with good intentions can fall short in front advanced cyber attacking. </p> 
    </div>
     </div>
  <div class="item">
     <div class="image-section"> <img src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png" class="image"> 
        </div>
    <div class="description"> 
      <h5 ckass="title">Importance of data backups.................. </h5>
      <h6 class="aut-date"> <i class="aut-name"> Edyoda  </i> | 26 August 2019</h6>
      <p class="aut-para">A business must always introspects the areas where they lack in order to bring about a positive change in the work environmen. one of the main precautions or a contiguincy plan this.  </p> 
    </div>
    </div>
  <div class="item">
     <div class="image-section"> <img src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png" class="image"> 
        </div>
    <div class="description"> 
      <h5 ckass="title"> What is Web Scraping Scraping Scraping Scraping...................? </h5>
      <h6 class="aut-date"> <i class="aut-name"> Zac Clancy  </i> | 24 Semp 2019</h6>
      <p class="aut-para"> Simply keep web scraping is one of the tool developers use to gather and analyze information from one internet. some websites platform offers application programming interface. </p> 
    </div>
 </div>
   <div class="item">
     <div class="image-section"> <img src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png" class="image"> 
        </div>
    <div class="description"> 
      <h5 ckass="title">What is income share Agreement Agreement Agreement ? </h5>
      <h6 class="aut-date"> <i class="aut-name"> Edyoda  </i> | 14 Oct 2019</h6>
      <p class="aut-para"> The term income share agreement has around for a long times since 1955 to be percise. suprised it. it was first introduced by mutton friedman an american economist. </p> 
    </div>
     </div>
  <div class="item">
     <div class="image-section"> <img src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png" class="image"> 
        </div>
    <div class="description"> 
      <h5 ckass="title">Practical machine learning with python and koros </h5>
      <h6 class="aut-date"> <i class="aut-name"> Daniel Pyrothon  </i> | 16 Oct 2019</h6>
      <p class="aut-para">Machine learning is a feild of artificial intelligence. that uses statical techniques to givea statical computer systens to ability to learn e.g progressively imprive performance on a specific. </p> 
    
    </div>  
  </div>
</div>
<footer class="footer"> 

</footer>
      
    </div>
  );
}

export default App;
