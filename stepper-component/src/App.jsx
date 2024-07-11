import { useState } from 'react'
import './App.css'

function App() {

  const [step, setStep] = useState(1);

  const handleClick = () => {
    if (step === 5) return;
    setStep(prev => prev+1);
  }
  
  return (
    <div className='flex flex-col items-center p-4 gap-8'>

      <h1 className='text-center font-bold text-3xl'>Checkout</h1> 

      {/* stepper component */}
      <div className="relative flex justify-center w-full">

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
            <div className="flex flex-col items-center">
                <span className={`rounded-full px-2 ${step === 1 ? 'bg-blue-400' : 'bg-gray-400'} ${step > 1 && 'bg-green-400'}`}>1</span>
                <p>Customer Info</p>
            </div> 
            <div className="flex flex-col items-center">
                <span className={`rounded-full px-2 ${step === 2 ? "bg-blue-400" :"bg-gray-400"} ${step > 2 && 'bg-green-400'}`}>2</span>
                <p>Shipping Info</p>
            </div> 
            <div className="flex flex-col items-center">
                <span className={`rounded-full px-2 ${step === 3 ? "bg-blue-400" :"bg-gray-400"} ${step > 3 && 'bg-green-400'}`}>3</span>
                <p>Payment</p>
            </div> 
            <div className="flex flex-col items-center">
                <span className={`rounded-full px-2 ${step === 4 ? "bg-blue-400" :"bg-gray-400"} ${step > 4 && 'bg-green-400'}`}>4</span>
                <p>Delievered</p>
            </div> 
        </div>

          <div className="bar p-1 bg-gray-400 w-[95%] relative">
            <div className={`filler bg-green-400 absolute top-0 left-0 p-1`} style={{width: (step-1)*25+'%'}}></div>
          </div>
      </div>

      <h2 className='font-bold'>Enter your Shipping address</h2>

      <button onClick={handleClick} className='bg-gray-400 p-2 rounded-lg'>Next</button>

    </div>
  )
}

export default App
