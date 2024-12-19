import './App.css'
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {
  const validateInput=(tag)=>{
      const{name,value}=tag//destructure
    if(value==""){
      if(name=='principle')
      {
        setAmt("")
      }
      else if(name=='rate')
      {
        setRate("")
      }
      else{
        setYear("")
      }

    }
    else{
      if(!!value.match(/^[0-9]*.?[0-9]+$/))
        {
           if(name=='principle')
           {
            setAmt(value)
            setIsInvalidPriciple(false)
           }
           else if(name=='rate')
           {
            setRate(value)
            setIsInvalidRate(false)
           }
           else{
            setYear(value)
            setIsInvalidYear(false)
           }
        }
        else{
          if(name=='principle')
          {
            setIsInvalidPriciple(true)
          }
          else if(name=='rate')
          {
            setIsInvalidRate(true)
          }
          else{
            setIsInvalidYear(true)
          }
        }
        
    }
   
     

} 
   
      
  
  const handleCalculate = (e) => {
    e.preventDefault()
    console.log("button clicked");
    if(amt && rate && year)
    {
      setInterest(amt*rate*year/100)
      
      
    }
    else{
      alert("enter the field completely")
    }

  }
  const handleReset=()=>{
    setAmt("");         
  setRate("");         
  setYear("");
    setInterest(0)
    setIsInvalidPriciple(false)
    setIsInvalidRate(false)
    setIsInvalidYear(false)
  }
  const[amt,setAmt]= useState("")
  const[rate,setRate]=useState("")
  const[year,setYear]=useState("")
  console.log(amt);
  console.log(rate);
  console.log(year);
  const[isInvalidPrinciple,setIsInvalidPriciple]=useState(false)
  const[isInvalidRate,setIsInvalidRate]=useState(false)
  const[isInvalidYear,setIsInvalidYear]=useState(false)
  const[interest,setInterest]=useState("0")


  
  



  return (
    <>
      <div style={{ minHeight: "100vh" }} className='d-flex align-items-center justify-content-center  w-100 bg-dark'>
        <div style={{ height: "600px" }} className='w-50 bg-light text-center pt-4'>
          <h1>Simple Interest Calculator</h1>

          <h4>Calculate Your Simple Interest Easily</h4>
          <div id="yDiv" style={{ height: "150px", width: '80%' }} className=' bg-warning mt-3 text-center d-block align-items-center justify-content-center '>
            <h2 className="intrstHead pt-4"> ₹ {interest}</h2>
            <h3 className="intrstHead">Total Simple Interest</h3>
            <br></br>
            <form className='mt-5'>
             
             <TextField name='principle' onChange={(e)=>validateInput(e.target)} value={amt} className='w-100 mb-3' id="amount" label="Amount" variant="outlined" /><br></br>
              { isInvalidPrinciple &&
              <div className='text-danger fw-bold '>invalid data</div>
            }
              <TextField name='rate' onChange={(e)=>validateInput(e.target)} value={rate} className='w-100 mb-3' id="interest" label="Interest" variant="outlined" /><br></br>
              { isInvalidRate&&
              <div className='text-danger fw-bold '>invalid Intersest amount  </div>
          }
              <TextField name='period' onChange={(e)=>validateInput(e.target)} value={year} className='w-100 mb-3' id="yr" label="Year" variant="outlined" /><br></br>
              { isInvalidYear &&
              <div className='text-danger fw-bold '>invalid year   </div>
           }
              <Stack direction="row" spacing={2}>
                <Button disabled={isInvalidPrinciple||isInvalidRate||isInvalidYear} onClick={(e) => handleCalculate(e)} type='submit' className='w-100 bg-dark p-3' variant="contained">Calculate</Button>
                <Button onClick={handleReset} className='w-100 p-3' variant="outlined">reset</Button>
              </Stack>

            </form>

          </div><br></br>

        </div>
      </div>

    </>
  )
}


export default App