// import Logo from '../img/Royal.png'
import axios from 'axios';
import { useState } from "react"
import { Button } from "react-bootstrap"

export default function Register(){
    let [name,setName]=useState()
    let [gmail,setGmail]=useState()
    let [pass,setPass]=useState()
    let [amount,setAmount]=useState(0)
    
    function handleSubmit(e){
        e.preventDefault();

        let item={name:name,email:gmail,password:pass,amount:amount}
        axios.post('https://bank-server-hqgb.onrender.com/Create',item)  
    }
    
    return(<>
    <div id='register'>
    <h1>Register</h1>
    <form action="" onSubmit={handleSubmit} >
    <div class="mb-3">
    <label htmlFor="" class="form-label">Name : </label>
    <input type="text" class="form-control" placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div class="mb-3"></div>
    <label htmlFor="" class="form-label">Email : </label>
    <input type="text" class="form-control" placeholder='Enter Your Email' onChange={(e)=>setGmail(e.target.value)} />
    <div class="mb-3"></div>
    <label htmlFor="" class="form-label">Password : </label>
    <input type="password" class="form-control" placeholder='Enter Your Password' onChange={(e)=>setPass(e.target.value)}/>
    <div class="mb-3"></div>
    <label htmlFor="" class="form-label">Amount : </label>
    <input type="number" class="form-control" placeholder='Enter the Amount' onChange={(e)=>setAmount(e.target.value)}/>
    <div class="mb-3"></div>
    <Button type="submit" class="btn btn-primary">SUBMIT</Button>
    </form>
    </div>
    </>)
}