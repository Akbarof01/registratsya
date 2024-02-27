import { useRef } from "react"

function Register() {
    const nameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleClick(e){
       e.preventDefault();

       const user = {
        name: nameRef.current.value,
        lastname: lastnameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
       }
       fetch("https://auth-rg69.onrender.com/api/auth/signup",{
        method: "POST",
        headers: {
        'Content-type': 'application/json',
      },
        body: JSON.stringify(user)
      })
       .then(res => res.json())
       .then(data => {
        console.log(data);
       })
       .catch(err => {
        console.log(err);
       })
    }

  return (
<div className="container mt-4">
      <a className="fw-bold fs-4 text-center text-decoration-none " href="/">Home</a>
        <h1 className="text-center">Register</h1>
        <form className="w-50 mx-auto"><div className="mb-3">
             <label  className="form-label">Name</label>
             <input type="name" className="form-control" ref={nameRef}></input>
             <div id="name" className="form-text">your name ?</div>
            </div><div className="mb-3">
             <label className="form-label">Last name?</label>
             <input type="name" className="form-control" ref={lastnameRef}></input>
             <div id="name" className="form-text"> enter your last name?</div>
            </div>
            <div className="mb-3">
             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="email" ref={emailRef}></input>
             <div id="email" className="form-text">We ll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" ref={passwordRef} />
            </div>
            <select className="form-select mb-4">
            <option selected>пол</option>
            <option value="1">мужской</option>
            <option value="2">женский</option>
            <option value="3">и другие</option>
            </select>
            <button onClick={handleClick} type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
        
    </div>
  )
}

export default Register