import React, { Component } from 'react'

export class Newsitem extends Component {
       render() {
              let { title, description, imageurl, newsurl, date, author,source } = this.props;
              return (
                     <>
                            <div className="my-3">

                                   <div className="card" >
                                        <div style={{display:'flex',position:'absolute',justifyContent:'flex-end',right:'0'}}>
                                        <span class="   badge rounded-pill bg-danger" >
                                                 {!source?'unknown':source}
                                                 
                                          </span>
                                          </div> 
                                          <img src={!imageurl ? "https://static.toiimg.com/thumb/msid-86896024,width-1070,height-580,imgsize-11894,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : imageurl} className="card-img-top" alt="..." style={{ width: '100%', height: 'min-content' }} />
                                          <div className="card-body">
                                                 <h5 className="card-title">{title} ...</h5>
                                                 <p className="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toDateString()}</small></p>
                                                 <p className="card-text">{description}</p>
                                                 <a href={newsurl} className="btn btn-sm btn-dark" target='_blank' rel="noreferrer">Read More</a>
                                          </div>
                                   </div>


                            </div>
                     </>
              )
       }
}

export default Newsitem;
