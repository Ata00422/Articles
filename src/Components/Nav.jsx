import React, { useContext } from 'react'
import MyContext from '../ContextApi/MyContext'
import logo from "../img/logo.png"

export default function Nav() {
  const { setSource, setKeyWord } = useContext(MyContext)
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="navbar-brand">
            <img className='img-fluid' style={{height:"60px"}} src={logo} alt="" />
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder='Search By Keyword' aria-label="Search" onBlur={(e) => setKeyWord(e.target.value)} />
              <input class="form-control me-2" type="search" placeholder='Filter By Source' aria-label="Search" onBlur={(e) => setSource(e.target.value)} />
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
