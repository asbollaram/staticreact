import React,{useState} from 'react';
import './Contactus.css';

const Contactus = () => {
  const [data,setData] = useState({
    firstName:'',
    lastName:'',
    Email:'',
    Tmessage:'',
  })
const {firstName,lastName,Email,Tmessage} = data;
const changeHandler = e =>{
  setData({...data, [e.target.name]:e.target.value});
}
const submitHandler = e =>{
  e.preventDefault();
  if(firstName.length<=5){
    alert("First Name must be 5 letters");
  }else if(lastName.length<=5){
    alert("Secound Name must be 5 letters");
  }else if(Tmessage!=="" || Tmessage.length<=5){
    alert("Please enter fill text area at least 5 letters");
  }else{
    alert("Login Success");
  }
  console.log(data)
}
  return (
    <div className='container_contactus'> 
      <div className='content_details'>
          <h1>Contact Us</h1>
      </div>
    <div className='loginContainer'>

    <h1>Contact Us</h1>      
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies urna non elementum vehicula. Cras vel tincidunt libero, ut varius ipsum. Vestibulum a viverra dui. Nullam non turpis vel nisl convallis fringilla nec ut sapien.</span>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies urna non elementum vehicula. Cras vel tincidunt libero, ut varius ipsum. Vestibulum a viverra dui.</span>
        <form className='formLogn' onSubmit={submitHandler}>
          <section className='name_box'>
            <label>First Name</label><br/>
              <input type='text' placeholder='First Name' name='firstName' value={firstName} onChange={changeHandler}/>
                {firstName.length<=5?<span style={{"color":"red"}}>Please enter min 5 letters</span>:null}
               </section> 
             <section className='name_box'>
                <label>Last Name</label>
                <input type='text' placeholder='Last Name' name='lastName' value={lastName} onChange={changeHandler} />
              {lastName.length<=5?<span style={{"color":"red"}}>Please enter last name min 5 letters</span>:null}
           </section>
          <label>Email</label>
          <input type="email" placeholder='Email' name='Email'  value={Email} onChange={changeHandler} />
          <label>Message</label>
          <textarea  maxLength='500' type="textarea" tabIndex={0} placeholder='Message' onChange={changeHandler}>  </textarea>
         
          <button type="submit" className='buttons'>Send</button>
          
          
          </form>
    </div>
  </div>
  )
}

export default Contactus