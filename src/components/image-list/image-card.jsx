import React from 'react';

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0
    }

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
    window.addEventListener('resize', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight === null ? 0 : this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 1) + 10;

    this.setState({ spans });
  }

  render() {
    const { urls, alt_description } = this.props.image;

    return (
      <img ref={this.imageRef} src={urls.regular} style={{ gridRowEnd: `span ${this.state.spans}` }} alt={alt_description} />
    );
  }
}
