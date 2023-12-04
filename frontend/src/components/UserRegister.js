import React,{useState} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";



const UserRegister=() => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [email,setEmail]=useState('');
    const [msg,setMsg]=useState('');

    const submitform = async () => {
                
            const userobj = {
                "firstname":firstname,
                "lastname":lastname,
                "email":email
            }
            
    
            try{
                const response = await axios.post(`http://localhost:5000/user`,userobj)
                if(response.status===200)
                {
                    setFirstname('');
                    setLastname('');
                    setEmail('');
                    setMsg('User Successfully Register');
                }
            }
            catch(error){
                setMsg('User Not Register');    
            }
                          
    }

    return <>
    <div className="container">
    <form onSubmit={handleSubmit(submitform)}>
    <div className="row">
    <h3>User Register</h3>
    {msg && (<div className="alert alert-success">
    {msg}
    </div>)}
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">First name</label>
    <input id="firstname" {...register("firstname",{ required: "First Name should not be empty"})} type="text" class="form-control" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
    {errors.firstname?.message && <p>{errors.firstname?.message}</p>}
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Last name</label>
    <input id="lastname" {...register("lastname",{ required: "Last Name should not be empty"})} type="text" class="form-control" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
    {errors.lastname?.message && <p>{errors.lastname?.message}</p>}
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email</label>
    <input id="email" {...register("email",{ required: "Email should not be empty",
    pattern:{
        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
        message:"Invalid Email"
    }})} type="text" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    {errors.email?.message && <p>{errors.email?.message}</p>}
    </div>    
    <div class="mb-3">    
    <button>Submit</button>
    </div>
    </div>
    </form>
    </div>
 </>

}

export default UserRegister;