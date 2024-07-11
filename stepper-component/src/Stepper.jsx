
const Stepper = () => {
  return (
    <div className="relative flex justify-center">

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
            <div className="flex flex-col items-center">
                <span className="rounded-full px-2 bg-gray-400">1</span>
                <p>Customer Info</p>
            </div> 
            <div className="flex flex-col items-center">
                <span className="rounded-full px-2 bg-gray-400">2</span>
                <p>Shipping Info</p>
            </div> 
            <div className="flex flex-col items-center">
                <span className="rounded-full px-2 bg-gray-400">3</span>
                <p>Payment</p>
            </div> 
            <div className="flex flex-col items-center">
                <span className="rounded-full px-2 bg-gray-400">4</span>
                <p>Delievered</p>
            </div> 
        </div>


        <div className="bar h-1 bg-gray-400 w-[95%]"></div>
    </div>
  )
}

export default Stepper
