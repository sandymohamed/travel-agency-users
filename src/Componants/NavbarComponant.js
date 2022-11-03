import React from "react"
import { Link } from "react-router-dom"

function NavbarComponant(){






    return(
        <>
       <div className="Container">
    <div class="row">
    <div class="col">
     <h1>Traveasy</h1>
    </div>
    <div class="col-md-auto">
    <button type="button" class="btn btn-primary"><Link className="text-white" to="/Registration">Registration</Link></button>
    </div>
    <div class="col col-lg-2">
    <button type="button" class="btn btn-primary"><Link className="text-white" to="/Login">Log in</Link></button> 
    </div>
     </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/Home">Logo</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-item nav-link active" to="/Accomodation">Accomodation </Link>
      <Link class="nav-item nav-link" to="/Transportation">Transportation</Link>
      <Link class="nav-item nav-link" to="/TourGuiding">Tour Guiding</Link>
      <Link class="nav-item nav-link "to="/Exploration">Exploration</Link>
    </div>
  </div>
</nav>




<div>
<h1>Find your next stay</h1>
<h5>Search deals on hotels, homes, and much more...</h5>


</div>

</div>






   
        
        
        
        
        
        
        
        </>
    )
}

export default NavbarComponant