import { useRef, useState } from "react";

function App() {

  const inputRef = useRef(null);
  
  const [heading,setHeading] = useState('Name');
  const [inputType,setInputType] = useState('text');


  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [DOB,setDOB] = useState('');
  const [password,setPassword] = useState('');

  const [showOutput,setShowOutput] = useState(false);
  
  const handleClick = () => {

    if (heading === 'Name') {
      setName(inputRef.current.value)
      inputRef.current.value = '';
      setInputType('email');
      setHeading('Email');
    } else if (heading === 'Email') {
      setEmail(inputRef.current.value)
      inputRef.current.value = '';
      setInputType('date');
      setHeading('DOB');  
    } else if (heading === 'DOB') {
      setDOB(inputRef.current.value)
      inputRef.current.value = '';
      setInputType('password');
      setHeading('Password');  
    } else if (heading === 'Password') {
      setPassword(inputRef.current.value) 
      setShowOutput(true)
    }
    
  }

  const handleBack = () => {
    if (heading === 'Email') {
      setInputType('text');
      setHeading('Name');
    } else if (heading === 'DOB') {
      setInputType('email');
      setHeading('Email');
    } else if (heading === 'Password') {
      setInputType('date');
      setHeading('DOB');
    }
  }


  return (
    showOutput ? 
    
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh'}}>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>

        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>DOB: {DOB}</p>
        <p>Password: {password}</p>
      
      </div>
    </div> : 

      <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh'}}>
        <form style={{display:'flex', flexDirection:'column', alignItems:'center'}}>

          <button onClick={handleBack} style={heading === 'Name' ? {display:'none'} : {}} className="back">Back</button>
          <h1 className="heading">{heading}</h1>
          <input required ref={inputRef} type={inputType} />
          <button style={{marginTop:'2rem'}} onClick={handleClick}>{heading === 'Password' ? 'Submit' : 'Next'}</button>

        </form>
      </div>
    
  )

}

export default App;
