import React from 'react'
import four0four from '../assets/img/404png.png'
import '../assets/css/NoMatch.css'
import loading from '../assets/img/loading.gif'

export const NoMatch = () =>(
    <div className="backGround">
        <img  className="notfound" src={loading} alt="error-page" responsive/>
        <p>Page not found!</p>
    </div>
)

export default NoMatch