
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";
import Typewriter from 'typewriter-effect';
import './App.css'

function App(){
  const demo=()=>{
    Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
  }
  return(
    <>
    <div className='body'>
      <div className='logo'>
        <div className='logo1'>
          <div className='circ'>
            <div className='a'></div>
          </div>
          <div className='your'>YOUR LOGO</div>
        </div>
        <div className='logo2'>
          <ul className='list'>
            
            <li className='a1'><FaHome  style={{marginTop:""}}/> Home</li>
            <li className='a1'><FaUser /> About us</li>
            <li className='a1'> <FaBriefcase /> Work</li>
            <li className='a1'>
              <FaInfoCircle /> Info</li>
            <li className='a1' style={{color:"blue"}}> <FaEnvelope /> Contact us</li>
          </ul>
        </div>
      </div>
      <div className='inner'>
        <div className='left'>
          {/*  */}
<div className="ine">
 <Typewriter
  options={{
    strings: [" <h1 className='text'> Creative <br />  Process</h1>"],
    autoStart: true,
    
    loop: true,
  }}
/>
</div>
<div className="outerone">
   <p className='text1'>Lorem ipsum dolor sit amet    reprehenderit accusantium! Vero asperiores magnam adipisci nemo similique , magni blanditiis?
           </p>
           <button onClick={demo}  className='btn'>MORE INFO</button>
</div>
         
         
        </div>
        <div className='right'>
          <img src="logo.png" width={700} height={630} alt="" />
        </div>
      </div>
    </div>
    
    </>
  )
}
export default App;