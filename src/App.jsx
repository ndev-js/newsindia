
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';




import{Routes,Route}from 'react-router-dom'




import React, { Component } from 'react'

export class App extends Component {
  apikey='710b8a72b4e84f0190ff4b541a5e3e02';
/*process.env.REACT_NEWS_APP_API;*/
   state ={
          progress:0
   }

   setProgress = (progress)=>{
         this.setState({progress:progress})
   }


       render() {
              return (
                     <>
                         
                  <Navbar/>  
                  <LoadingBar color="#f11946" 
                    shadow={true} 
                    progress={this.state.progress}
                    
                  />
                    <Routes>
                    <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apikey}pageSize={6} key="general" country='in' category="general"/>}>General </Route>
                     <Route  path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey}key="business" pageSize={6} country='in' category="business"/>}>Business</Route> 
                      <Route  path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey}key="entertainment" pageSize={6} country='in' category="entertainment"/>}>Entertainment</Route>
                      <Route  path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey}pageSize={6} key="general" country='in' category="general"/>}>General </Route>                     
                      <Route  path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey}pageSize={6} key="health" country='in' category="health"/>}>Health  </Route>                   
                      <Route  path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey}pageSize={6} key="science" country='in' category="science"/>}>Science </Route>                   
                      <Route  path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey}pageSize={6}  key="sports"country='in' category="sports"/>}>Sports   </Route>         
                      <Route  path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey}pageSize={6} key="technology" country='in' category="technology"/>}>Technology</Route>
                     </Routes>
                     
                  
                      
                     </>
              )
       }
}

export default App

