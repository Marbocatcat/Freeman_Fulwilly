import React, { Component } from 'react';
import { Header } from './common/Header';

class ShowCase extends Component {
  constructor(props) {
    super(props);
      this.state = {
        showImage: false,
    }
  }

  renderImage = () => {
    if (this.state.showImage) {
      return (
        <div onMouseLeave={this.handleLeave}></div>
      )
    }
    return (
      <img style={style.imageStyle} src="../assets/images/photo.jpg" alt=""
        onMouseEnter={this.handleClick}
        />
    )
  }

  handleLeave = () => {
    this.setState({ showImage: false})
  }

  handleClick = () => {
    this.setState({ showImage: true })
  }

  render() {
    return (
      <Header backgroundColor='#f9f7f2'>
          <ul style={style.listStyle}>
            <li>
              <div style={style.divStyle}>
                {this.renderImage()}
              </div>
            </li>
          </ul>
      </Header>
    )
  }
}

const style = {
  listStyle: {
    listStyle: 'none',
    padding: 0,
  },
  imageStyle: {
    height: '550px',
    width: '700px',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
  },
  divStyle: {
    border: '.5em solid #333',
  }

}

export default ShowCase;
