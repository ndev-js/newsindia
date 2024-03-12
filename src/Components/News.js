import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
       static defaultProps = {
              country: 'in',
              pageSize: 8,
              category: 'general',
       }
       PropTypes = {
              country: PropTypes.string,
              pageSize: PropTypes.number,
              category: PropTypes.string,

       }
       capitalizeFirstLetter = (string) => {
              return string.charAt(0).toUpperCase() + string.slice(1);
       }

       constructor(props) {
              super(props);
            
              this.state = {
                     articles: [],
                     loading: false,
                     page: 1,
                     totalResults: 0,

              }
              document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;


       }

       async updateNews() {
              this.props.setProgress(20)
              const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
              this.setState({ loading: true })
              let data = await fetch(url);
              this.props.setProgress(40)
              let passdata = await data.json();
              this.props.setProgress(70)
              this.setState({ articles: passdata.articles, totalResults: passdata.totalResults, loading: false })
              this.props.setProgress(100)
       }
      
       async componentDidMount() {
              this.updateNews();
       }
       handleprevious = async () => {

              this.setState({ page: this.state.page - 1 })
              this.updateNews();
       }

       handlenext = async () => {


              this.setState({ page: this.page + 1 })
              this.updateNews();
       }
       fetchMoreData = async () => {
              this.setState({ page: this.state.page + 1 })
              const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=710b8a72b4e84f0190ff4b541a5e3e02&page=${this.state.page}&pageSize=${this.props.pageSize}`;
              
              let data = await fetch(url);
              let passdata = await data.json();
              this.setState({ articles: this.state.articles.concat(passdata.articles),
                                     totalResults: passdata.totalResults,
                                       })
       }

       render() {
              return (
                     <>
                            
                                   <h2 className="text-center my-3" style={{ color: 'white' }}> News-Monkey Top-Headlines on {this.capitalizeFirstLetter(this.props.category)}</h2>
                                  {this.state.loading && <Spinner/>}
                                   <InfiniteScroll
                                          dataLength={this.state.articles.length}
                                          next={this.fetchMoreData}
                                          hasMore={this.state.articles.length !== this.state.totalResults}
                                          loader={<Spinner />}>
                                        <div className='container'>
                                        <div className="row">
                                                 {this.state.articles.map((element) => {
                                                        return (<div className="col-md-4" key={element.url}>
                                                               <Newsitem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
                                                        </div>)
                                                 })}




                                          </div>

                                        </div>
                                   </InfiniteScroll>

                                   {/*for the next and previous button*/}
                                   {/*!this.state.loading && <div className="container d-flex justify-content-between">
                                                 <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevious}>&laquo; Previous</button>
                                                 <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenext}>Next &raquo;</button>

                                          </div>*/}
                            

                     </>
              )
       }
}

export default News;
