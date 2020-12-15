import React from 'react';

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "false",
      spans: 0,
      height: null
    }

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    const app = this;

    app.imageRef.current.addEventListener('load', this.setSpans);
    window.addEventListener('resize', this.setSpans);
  }

  setSpans = () => {
    const ref = this.imageRef.current;

    if(ref !== null) {
      const height = ref.clientHeight;
      const spans = Math.ceil(height / 10) + 2;

      this.setState({ spans, height });
    }
  }

  selectImage = (image) => () => {
    if(this.props.app.state.images.length === 1) {

      this.props.app.setState({
        images: this.props.app.state.imagesReference
      }, () => {
        this.setSpans();
      });

    }else {
      this.setState({ selected: "true" });
      this.props.app.setState(prevState => ({
        images: prevState.images.filter(img => img.id === image.id)
      }), () => {
        this.setSpans();
      });

    }
  }

  render() {
    const { urls, alt_description } = this.props.image;

    return (
      <div  className={`image-card ${this.state.selected === 'true' ? 'selected' : ""}`}
            style={{ background: `url(${urls.regular})`, backgroundSize: "cover", gridRowEnd: `span ${this.state.spans}` }}
            onClick={this.selectImage(this.props.image)}>
        <div className="tags">
          <p>{alt_description}</p>
        </div>
        <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}
