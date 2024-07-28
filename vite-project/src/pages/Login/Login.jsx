import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/Logo.png'
import Google_icon from '../../assets/Google.png'

const Login = () => {

    const[signState, setSignState] = useState("Masuk");
    

    return (
        <div className='login'>
            <div className='container'>
               <div className='login-form'>
                  <img src={logo} className='login-logo' alt="" />
                  <h1>{signState}</h1>
                  {signState==="Masuk"?
                    <p>Selamat datang kembali!</p>:<p>Selamat datang!</p>
                  }
                  
                </div>
                <form action="">
                   <p>Username</p>
                   <input type="text" placeholder='Masukkan username' />
                   <p>Kata Sandi</p>
                   <input type="password" placeholder='Masukkan kata sandi'/>
                   {signState==="Daftar"? 
                    <>
                       <p>Konfirmasi Kata Sandi</p>
                       <input type="password" placeholder='Masukkan kata sandi'/>
                    </>: <></>}
                     
                   <div className='daftar-lupa-sandi'>
                      {signState==="Masuk"?
                      <>
                        <span>Belum punya akun? <a onClick={()=>{setSignState("Daftar")}} href="#">Daftar</a></span>
                        <a href="#">Lupa kata sandi?</a>
                      </>:<span>Sudah punya akun? <a onClick={()=>{setSignState("Masuk")}} href="#">Masuk</a></span>
                    }
                       
                    </div>
                    <button className='tombol-masuk'>
                        <span>{signState}</span>
                    </button>
                    <h6>Atau</h6>
                    
                    <button className='btn-google'>
                        {signState==="Masuk"?
                        <>
                          <img src={Google_icon} alt="" />
                          <span>Masuk dengan Google</span>
                        </>:<><img src={Google_icon} alt="" />
                        <span>Daftar dengan Google</span>
                        </>
                        
                    }
                        
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
