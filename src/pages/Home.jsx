import { useRef } from "react"

function Home(){
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleClick(e){
       e.preventDefault();

       const user = {
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
      .catch(err =>{
        console.log(err);
      })
    }

  return (
    <div className="container mt-4">
        <a className="fw-bold fs-4 text-center text-decoration-none" href="/login">Login</a>
        <h1 className="text-center pb-5">Welcome</h1>
        <form  className="w-50 mx-auto">
            <div className="mb-3">
             <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
             <input type="email" className="form-control" id="email" aria-describedby="email" ref={emailRef}></input>
             <div id="email" className="form-text">We ll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" ref={passwordRef} />
            </div>
            <button onClick={handleClick} type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
        
    </div>
  )
}

export default Home