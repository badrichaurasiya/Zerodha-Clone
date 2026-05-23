import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
            <div className=' p-5 ' id="supportWrapper">
               <h4>Support Portal</h4>
               <a href="">Track tickets</a>
            </div>  
                   <div className='row p-3 m-5'>
                        <div className='col-6 p-5 '>
                            <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                            <input className='fs-4 p-3' placeholder='Eg.how do I active F&O'/>
                            <br/>
                            <a  className='m-1' href=""> Track account opening </a>
                            <a   className='m-1'href=""> Track segment activation </a>
                            <a  className='m-1'  href=""> Intraday margins </a>
                            <a  className='m-1' href="">Kite user manual </a>
                        </div>
                        <div className='col-6 p-5 '>
                            <h1 className='fs-3 '>Featured</h1>
                            <ol>
                                <li className=' m-3' > 
                                    <a href=""> Current Takeovers and Delisting - January 2024</a>
                                </li>
                                <li className=' m-3' >
                                    <a href=""> Latest Intraday leverages - MIS & CO</a>
                                </li>
                            </ol>
                            
                        </div>
                   </div>
         </section>  
     );
}

export default Hero;
