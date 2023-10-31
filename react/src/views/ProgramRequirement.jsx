import { useState } from 'react'

function ProgramRequirement() {

  return (
    <>
<div className="col-md-12">
<form className="row g-3">
<div className="col-md-6">
    <label for="firstname" className="form-label">First Name</label>
    <input type="text" className="form-control" id="firstname"/>
  </div>
  <div className="col-md-6">
    <label for="ilastname" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lastname"/>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-6">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-6">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  
  <div className="col-md-4">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>test one</option>
      <option>test two</option>
      <option>test three</option>
      <option>test four</option>
      <option>test five</option>

    </select>
  </div>
  <div className="col-md-4">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12 text-center">
    <button type="submit" className="btn btn-primary btn-block">Submit</button>
  </div>
</form>
</div>
    </>
  )
}

export default ProgramRequirement
