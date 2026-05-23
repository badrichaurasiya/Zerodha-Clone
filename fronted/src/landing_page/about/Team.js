import React from 'react';
function Team() {
    return (
        <div className='container'>
            <div className='row p-3 mt-5  border-top'>
               <h1 className=' text-center '>
                  People
                </h1>
            </div>  
             <div
                  className='row p-3   text-muted '
                  style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                    
                <div className='col-6 p-5 text-center'>
                  <img
                        src="images/nithinKamath.jpg"
                       style={{borderRadius:"100%" , width:"50%"}}                 
                  />  
                  <h4 className='mt-5'>Nithin Kamath</h4>
                  <h6>Founder, CEO</h6>
                </div>
                <div className='col-6 p-3'>
                  <p> Nithin bootsrapped and founded Zerodha in 2010 to overcome the hurdles he faced during long stint as a trader.
                      Today,Zerodha has change the landscape of the India brokinr industry.
                      </p>
                   <p>   He is a member of SEBI Secondary market Advisory commitee(SMAC) and the market Data Advisory commitee(MDAC).
                      </p>
                    <p>  Playing basketball is his zen.
                       </p>
                    <p> Connect on <a href="" style={{textDecoration:"none" }}>Homepage</a>  / <a href="" style={{textDecoration:"none" }}>tradingQnA</a>  / <a href="" style={{textDecoration:"none" }}>Twittr</a> 
                        </p> 
                </div>
            </div>    
        </div>
      );
}

export default Team;