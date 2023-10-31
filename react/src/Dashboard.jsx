import { useState } from "react";

function Dashboard() {
  return (
    <>
    <div className="row">
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="mb-4 card1">
          <div className="p-3 card-body ">
            <div className="d-flex flex-row-reverse justify-content-between ">
              <div>
                <div className="text-center shadow icon icon-shape border-radius-md bg-gradient-success">
                  <i
                    className="text-lg opacity-10 ni ni-money-coins"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="">
                <div className="numbers ">
                  <p className="mb-0 text-sm text-capitalize font-weight-bold">
                    Today's Money
                  </p>
                  <h5 className="mb-0 font-weight-bolder">
                    $53,000
                    <span className="text-sm font-weight-bolder text-success">
                     
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="mb-4 card2">
          <div className="p-3 card-body">
            <div className="d-flex flex-row-reverse justify-content-between">
              <div>
                <div className="text-center shadow icon icon-shape border-radius-md bg-gradient-success">
                  <i
                    className="text-lg opacity-10 ni ni-money-coins"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="">
                <div className="numbers">
                  <p className="mb-0 text-sm text-capitalize font-weight-bold">
                    Today's Money
                  </p>
                  <h5 className="mb-0 font-weight-bolder">
                    $53,000
                    <span className="text-sm font-weight-bolder text-success">
                   
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="mb-4 card3">
          <div className="p-3 card-body">
            <div className="d-flex flex-row-reverse justify-content-between">
              <div>
                <div className="text-center shadow icon icon-shape border-radius-md bg-gradient-success">
                  <i
                    className="text-lg opacity-10 ni ni-money-coins"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="">
                <div className="numbers">
                  <p className="mb-0 text-sm text-capitalize font-weight-bold">
                    Today's Money
                  </p>
                  <h5 className="mb-0 font-weight-bolder">
                    $53,000
                    <span className="text-sm font-weight-bolder text-success">
                    
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="mb-4 card4">
          <div className="p-3 card-body">
            <div className="d-flex flex-row-reverse justify-content-between">
              <div>
                <div className="text-center shadow icon icon-shape border-radius-md bg-gradient-success">
                  <i
                    className="text-lg opacity-10 ni ni-money-coins"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="">
                <div className="numbers">
                  <p className="mb-0 text-sm text-capitalize font-weight-bold">
                    Today's Money
                  </p>
                  <h5 className="mb-0 font-weight-bolder">
                    $53,000
                    <span className="text-sm font-weight-bolder text-success">
                      
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="row">
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="mb-4 card">
          <div className="p-3 card-body">
            <div className="d-flex flex-row-reverse justify-content-between">
              <div>
                <div className="text-center shadow icon icon-shape border-radius-md bg-gradient-success">
                  <i
                    className="text-lg opacity-10 ni ni-money-coins"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="">
                <div className="numbers">
                  <p className="mb-0 text-sm text-capitalize font-weight-bold">
                    Today's Money
                  </p>
                  <h5 className="mb-0 font-weight-bolder">
                    $53,000
                    <span className="text-sm font-weight-bolder text-success">
                     
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="mb-4 card">
          <div className="p-3 card-body">
            <div className="d-flex flex-row-reverse justify-content-between">
              <div>
                <div className="text-center shadow icon icon-shape border-radius-md bg-gradient-success">
                  <i
                    className="text-lg opacity-10 ni ni-money-coins"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="">
                <div className="numbers">
                  <p className="mb-0 text-sm text-capitalize font-weight-bold">
                    Today's Money
                  </p>
                  <h5 className="mb-0 font-weight-bolder">
                    $53,000
                    <span className="text-sm font-weight-bolder text-success">
                   
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="mb-4 card">
          <div className="p-3 card-body">
            <div className="d-flex flex-row-reverse justify-content-between">
              <div>
                <div className="text-center shadow icon icon-shape border-radius-md bg-gradient-success">
                  <i
                    className="text-lg opacity-10 ni ni-money-coins"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="">
                <div className="numbers">
                  <p className="mb-0 text-sm text-capitalize font-weight-bold">
                    Today's Money
                  </p>
                  <h5 className="mb-0 font-weight-bolder">
                    $53,000
                    <span className="text-sm font-weight-bolder text-success">
                    
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="mb-4 card">
          <div className="p-3 card-body">
            <div className="d-flex flex-row-reverse justify-content-between">
              <div>
                <div className="text-center shadow icon icon-shape border-radius-md bg-gradient-success">
                  <i
                    className="text-lg opacity-10 ni ni-money-coins"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="">
                <div className="numbers">
                  <p className="mb-0 text-sm text-capitalize font-weight-bold">
                    Today's Money
                  </p>
                  <h5 className="mb-0 font-weight-bolder">
                    $53,000
                    <span className="text-sm font-weight-bolder text-success">
                      
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <div className="row col-md-12">
      <div className="col-md-6">
    <table className="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
<div className="col-md-6">
<form className="row g-3">
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
      <option>...</option>
    </select>
  </div>
  <div className="col-md-4">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  {/* <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
  <div className="col-12 text-center">
    <button type="submit" className="btn btn-primary btn-block">Submit</button>
  </div>
</form>
</div>
</div>
    </>
    
  );
}

export default Dashboard;
