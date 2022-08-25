import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

function Faq() {
  return (
    <> <div className="fluid-container p-5"> 
    <div className='row'><h2><span className="thin">Frequently Asked 
</span><span className='primarycolor thin'> Questions </span></h2>
    </div>
    <div className='row p-5'>
        <div className='col-2'><img src='./question.png' width={400} height={400} alt="img"/>
            </div><div className='col-10 lgscreen'>
            <Accordion>
  <Accordion.Item eventKey="0" className='m-2 rounded clr'> 
    <Accordion.Header className='m-2 rounded clr'>What’s the difference between a Public Sale and Private Sale?

</Accordion.Header>
    <Accordion.Body>
    Yes, now consult a lwyer on video or phone call anytime of your convenience.

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" className='m-2 rounded clr'>
    <Accordion.Header className='m-3 rounded clr'>Which sale should I commit to? Can I do both?

</Accordion.Header>
    <Accordion.Body className='m-2 rounded clr'>
    Yes, definately. A Senior Lawyer will discuss your document with you and help you understand it.

    </Accordion.Body>
  </Accordion.Item><Accordion.Item eventKey="3" className='m-2 rounded clr'>
    <Accordion.Header className='m-2 rounded clr'>How much is the participation fee?

</Accordion.Header>
    <Accordion.Body className='m-2 rounded clr'>
    Yes, it is instant consultation. Call now. You can choose video or Phone call. You can also call anytime within once you book your appointment.
    </Accordion.Body>
  </Accordion.Item><Accordion.Item eventKey="4" className='m-2 rounded clr'>
    <Accordion.Header className='m-2 rounded clr'>Where does the participation fee go?</Accordion.Header>
    <Accordion.Body className='m-2 rounded clr'>
    All types of queries pertaining to the law can be asked.
    </Accordion.Body>
  </Accordion.Item><Accordion.Item eventKey="5" className='m-2 rounded clr'>
    <Accordion.Header className='m-2 rounded clr'>How can I get an achievement for participating in the IFO?</Accordion.Header>
    <Accordion.Body className='m-2 rounded clr'>
    All types of queries pertaining to the law can be asked.
    </Accordion.Body>
  </Accordion.Item>
</Accordion> 
           </div></div></div>

</>  )
}

export default Faq