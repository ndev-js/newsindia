import React, { Component } from 'react';
import loading from '../loading.gif';
import './main.css';
export class Spinner extends Component {
       render() {
              return (
                     <>
                     <div className="text-center  my-4" >
                     <img src={loading} alt="loading" className="load  my-3" />
                     </div>
                            
                     </>
              )
       }
}

export default Spinner;
