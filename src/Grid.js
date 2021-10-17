import classes from "./grid.module.css"
import React, { Component } from "react";
import './App.css';
function App() {
    return (
        <div className="App">
            <header>
                <nav className={classes.topbar}>
                    <div className={classes.logoWrapper}>
                        <div>
                            <a className={classes.edyodaLogo} href=""> Edyoda</a>
                        </div>
                        <div>
                            <a className={classes.edyodaStory} href=""> <i>Stories</i></a>
                        </div>
                    </div>
                    <div>
                        <a className={classes.dropDownText} href=" "> Explore
                            Categories</a>
                        <select className={classes.dropDown} >
                            <option className={classes.dropdownIcon}>Artificial
                                Intelligent</option>
                            <option className={classes.dropdownIcon}>Cloud Computing</option>
                            <option className={classes.dropdownIcon}> DevOps</option>
                            <option className={classes.dropdownIcon}>Mobile Application
                                Development</option>
                            <option className={classes.dropdownIcon}>Technology and tools</option>
                            <option className={classes.dropdownIcon}>Get a Job In tech
                                Company</option>
                            <option className={classes.dropdownIcon}>Others</option>
                        </select>
                    </div>
                    <div><p className={classes.edyodaQuote}>EdYoda is free learning and knowledge
                        sharing platform for techies</p></div>
                    <div>
                        <button className={classes.websiteButton}> Go To Website</button></div>

                </nav>
                <button className={classes.btn}>Artificial Intelligent</button>
            </header>
            <h4>hiii</h4>
            <div>
                <div className={classes.buttonMenu}>
                    <button className={classes.btn}>All</button>
                    <button className={classes.btn} onClick ="#art">Artificial Intelligent</button>
                    <button className={classes.btn}>Cloud Computing</button>
                    <button className={classes.btn}>DevOps</button>
                    <button className={classes.btn}>Mobile Application Development</button>
                    <button className={classes.btn}>Get a Job In tech Company</button>
                    <button className={classes.btn}>Others</button>
                </div>
            </div>

            <div className={classes.imgContainer}>
                <div className={classes.item}>
                  <div class="imgSection">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png" className={classes.image}/>
                    </div>
                    <div className ={classes.description}>
                    <h5 className={classes.title}>Introduction  to a machine learning online course </h5>
                    <h6 className ={classes.autDate}> <i className ="autName"> Edyoda  </i> | 24 August 2019</h6>
                    <p className ={classes.autPara}>  We have had inside Artificial Intelligence well. one of its subfeild is machine learning and its introduction will help you get fair idea of what is this machine learning.</p>
                    </div>
                </div>
                <div className={classes.item}>
                   <div class="imgSection">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png" className={classes.image}/>
                    </div>  
                    <div className ={classes.description}>
                    <h5 className={classes.title}>LAMP Stack Versus Mean Stack........... </h5>
                    <h6 className ={classes.autDate}> <i className ="autName"> Edyoda  </i> | 24 August 2019</h6>
                    <p className ={classes.autPara}>  In Today is dymanic world developing arapid application with a smooth user interface that can adapt to specific features the business requirement many organiation.</p>
                    </div>
                </div>
                <div className={classes.item}>
                    <div class="imgSection">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png" className={classes.image}/>
                     </div>
                    <div className ={classes.description}>
                    <h5 className={classes.title}>Impact of clould computing in various industries </h5>
                    <h6 className ={classes.autDate}> <i className ="autName"> Edyoda  </i> | 24 August 2019</h6>
                    <p className ={classes.autPara}>  Cloud Computing  has been rapidly gaining place in the world of information technology. It has been observed that 90% of globle enterprises are using cloud.</p>
                    </div>
                </div>
            </div>

            <div className={classes.imgContainer} id="art">
                <div className={classes.item}>
                  <div class="imgSection">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png" className={classes.image}/>
                    </div>
                    <div className ={classes.description}>
                    <h5 className={classes.title}>Challenge of Machine Learning................ </h5>
                    <h6 className ={classes.autDate}> <i className ="autName"> Edyoda  </i> | 20 January 2015</h6>
                    <p className ={classes.autPara}>  Machine Learning is a subset of artificial intelligence. which is an important part of computer science. the revolution of big data promises to transmitter way we work live on. </p>
                    </div>
                </div>
                <div className={classes.item}>
                   <div class="imgSection">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png" className={classes.image}/>
                    </div>  
                    <div className ={classes.description}>
                    <h5 className={classes.title}>Breaking the myths around cyber security....... </h5>
                    <h6 className ={classes.autDate}> <i className ="autName"> Edyoda  </i> | 14 July 2018</h6>
                    <p className ={classes.autPara}>  Cyber security plays an important roles in the process of goods business models. but even cyber security programs built with good intentions can fall short in front advanced cyber attacking.</p>
                    </div>
                </div>
                <div className={classes.item}>
                    <div class="imgSection">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png" className={classes.image}/>
                     </div>
                    <div className ={classes.description}>
                    <h5 className={classes.title}>Importance of data backups.................. </h5>
                    <h6 className ={classes.autDate}> <i className ="autName"> Edyoda  </i> | 20 August 2017</h6>
                    <p className ={classes.autPara}>  A business must always introspects the areas where they lack in order to bring about a positive change in the work environmen. one of the main precautions or a contiguincy plan this.</p>
                    </div>
                </div>
            </div>
            


        </div>
    );
}

export default App;
