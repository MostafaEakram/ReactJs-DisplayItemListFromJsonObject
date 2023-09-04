import React from 'react'
import './StyleSheets/MyCardStyle.css'

function MycardLayout({props})
{
    
  
    return (
<div className='Card_Box'>


            <div id={'MyCard_' + props.ContactId} className="Card_content">
                <img alt="" src={'./src/Components/Icon/'+props.ImageFileName} className="Card_Person_image" ></img>
                <span className="Card_ContentName">{props.ContactName}</span>
                <span className="Card_ContentRole" >{props.RoleName}</span>
                <div className="Card_contactarea" >
                        <p className='Card_contactareablock'>
                           <div><img alt="" src='./src/Components/Icon/Address_16x16.png' className="Card_small_icon" ></img>{props.ContactAddress}</div>
                        </p>                      
                        <p className='Card_contactareablock'>
                           <div><img alt="" src='./src/Components/Icon/email_16x16.png' className="Card_small_icon" ></img>{props.ContactEmail}</div>
                        </p>                      
                        <p className='Card_contactareablock'>
                           <div><img alt="" src='./src/Components/Icon/phone_16x16.png' className="Card_small_icon" ></img>{props.ContactHomePhone}</div>
                        </p>                      

                   
                </div>
            </div>
        </div>
       
            )
}



export default MycardLayout