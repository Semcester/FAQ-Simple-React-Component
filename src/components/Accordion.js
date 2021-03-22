import React,{useState} from 'react';
import {Data} from './Faq';
import {IconContext} from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'


const Accordion = () =>{
    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if (clicked == index) {
            return setClicked(null)
        }

        setClicked(index)
    }
    return (
        <IconContext.Provider value={{color:'#00FB9', size :'25px'}}>
            <div className="AccourdionSection">
                <div className="container">
                  {Data.map((item,index)=>{
                      return(
                          <>
                          <div onClick={()=> toggle(index)} key={index} className="warp">
                            <h4>{item.question}</h4>
                            <span>{clicked === index ? <FiMinus/>: <FiPlus/>}</span>
                          </div>
                          {clicked === index ? <div className="answer"><p>{item.answer}</p></div> : null}
                          </>
                      )
                  })}
                </div>
            </div>
        </IconContext.Provider>
    )
    
};

export default Accordion;