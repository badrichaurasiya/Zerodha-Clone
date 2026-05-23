import React from 'react';
function LeftSection({imageURL,ProductName,ProductDesription,tryDemo,learnMore,googlePlay,appStore}) {
    return (  
       <div className='container mt-5'>
            <div className='row'>
                <div  className='col-6 '>
                    <img src={imageURL}/>
                </div>
                <div  className='col-6  mt-5'>
                    <h1>{ProductName}</h1>
                    <p>{ProductDesription}</p>
                    <div>
                          <a href={tryDemo}>Try Demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                          <a href={learnMore} style={{marginLeft:"50px"}}>
                          Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                          </a>
                    </div>
                    <div className='mt-3'>
                          <a href={googlePlay}><img src="images/googlePlayBadge.svg"/></a>
                          <a href={appStore}><img
                           src="images/appStoreBadge.svg"
                           style={{marginLeft:"50px"}}/>
                           </a>
                    </div>

                </div>

            </div>
       </div>
    );
}

export default LeftSection;