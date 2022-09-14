import React, { useState } from 'react'
import './Login.css'



export default function Login({data}) {


  console.log(data);


  const [x, setX] = useState(true);

  const login = (e) => {
    e.preventDefault();
    console.log(`value is ----------------- ${x}`);
    setX(true);
  }
  const register = (e) => {
    e.preventDefault();
    setX(false)
  }


  return (
    <div >
    
      <div className='formbox'>
        <div className='buttonbox'>
          <div id='btn'></div>
          <button type='button' className={x ? "togglebtn orange" : "togglebtn"} onClick={login}>LOGIN</button>
          <button type='button' className={x ? "togglebtn" : "togglebtn orange"} onClick={register}>REGISTER</button>
        </div>
        <div className='socialicons'>
          <a href='https://www.facebook.com/'><i class="fa-brands fa-facebook"></i></a>
          <a href='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>
          <a href='https://www.google.com/'><i class="fa-brands fa-google"></i></a>

        </div>
        {
          x ?
            (

              <form id='login' className='inputgroup'>
                <input type="text" placeholder="UserId" className='inputfield' required></input>
                <input type="password" placeholder="Password" className='inputfield' required></input>
                <input type="checkbox" className='checkbox' required />
                <span className='remember'>Remember Me</span>
                <button type='submit' className='submit-btn'>LOGIN</button>


              </form>
            ) : (

              <form id='register' className='inputgroup2'>
                <input type="text" placeholder="UserId" className='inputfield' required></input>
                <input type="password" placeholder="Password" className='inputfield' required></input>
                <input type="email" placeholder="Email-Id" className='inputfield' required></input>
                <input type="checkbox" className='checkbox' required /><span className='remember'>I agree to terms & conditions.</span>
                <button type='submit' className='submit-btn'>REGISTER</button>
              </form>
            )
        }

      </div>
      </div>
    
  )
}
