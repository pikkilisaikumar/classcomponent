import React from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Pagination from '../Pagination'

import {BiLeftArrowCircle, BiRightArrowCircle} from 'react-icons/bi'

import './index.css'

class Redux extends React.Component {
  state = {
    Pagedata: [],
    perpage: [],
    count: 1,
    isLoading: true,
    activeElement: 1,
  }

  componentDidMount() {
    this.getBlogs()
  }

  leftArrowClicked = () => {
    const {count} = this.state
    if (count > 1) {
      this.setState({count: count - 1, activeElement: count - 1}, this.getBlogs)
    }
    //  else {
    //   this.setState({count: 10, activeElement: 10}, this.getBlogs)
    // }
  }

  rightArrowClicked = () => {
    const {count} = this.state
    console.log(count)
    if (count < 10) {
      this.setState({count: count + 1, activeElement: count + 1}, this.getBlogs)
    }
    //  else {
    //   this.setState({count: 1, activeElement: 1}, this.getBlogs)
    // }
  }

  numberClickedData = id => {
    this.setState({count: id, activeElement: id}, this.getBlogs)
  }

  getBlogs = async () => {
    const {count} = this.state
    this.setState({isLoading: true})
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(apiUrl)
    const data = await response.json()
    this.setState({
      Pagedata: data,
      perpage: data.slice((count - 1) * 10, count * 10),
      isLoading: false,
    })
  }

  render() {
    const {perpage, isLoading, activeElement} = this.state
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
      <div>
        <img
          src="https://res.cloudinary.com/dvh9yiuxd/image/upload/v1642562107/WhatsApp_Image_2021-12-30_at_10.21.38_AM_zhrnmb.jpg"
          alt="saikumar"
          className="saikumarimage-one"
        />
        <h3>My-Pagination Project</h3>
        {isLoading ? (
          <div className="loading-container-one" data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="perpage-get-data">
            {perpage.map(each => (
              <p key={each.id}>{each.title}</p>
            ))}
          </div>
        )}
        <div className="container-one-arrow">
          <button
            type="button"
            className="button-one"
            onClick={this.leftArrowClicked}
          >
            <BiLeftArrowCircle className="left-arrow" />
          </button>
          <div>
            {number.map(eachone => (
              <Pagination
                key={eachone}
                eachone={eachone}
                numberClickedData={this.numberClickedData}
                isActive={activeElement === eachone}
              />
            ))}
          </div>
          <button
            type="button"
            className="button-one"
            onClick={this.rightArrowClicked}
          >
            <BiRightArrowCircle className="left-arrow" />
          </button>
        </div>
      </div>
    )
  }
}

export default Redux
