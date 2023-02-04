import { useState } from 'react'
import './faqs.css'
import Data from './data'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'


const AccordionSection = styled.div``;

const Container = styled.div``;

const wrap = styled.div`
// background: #7a7a7a;
// color: white;
// display: flex;
// justify-content: space-between;
// akign-items: center;
// cursor: pointer;

// h1{
//   padding: 2rem;
//   font-size: 2rem;
 }`

const Dropdown = styled.div`
background: #7a7a7a;
width: 100%;
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

p{
  font-size; 2rem;
}`;


const Accordion = () => {
  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if (clicked === index) {
      //if clicked question already active, then close it
      return setClicked(null)
    }
    setClicked(index)
  }
  return (
    <IconContext.Provider value={{
      color: '#662843',
      size: '25px'
    }}>
      <AccordionSection>
        <h1>FAQs</h1>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </wrap>
                
                 {clicked === index ? (
                  <Dropdown>
                     <p className='dp'>{item.answer}</p>
                  </Dropdown>
                 ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  )
}


export default Accordion;