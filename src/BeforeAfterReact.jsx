import React, { Component } from "react";
import "./BeforeAfterReact.css";

class BeforeAfter extends Component {
  constructor(props) {
    super(props);
    this.seperatorRef = React.createRef();
    this.wrapRef = React.createRef();
    this.diffImgRef = React.createRef();
    this.resize = React.createRef();

    this.state = {
      imgLoaded: false,
      isDown: false,
      offset: [0, 0],
      supportsTouch: "ontouchstart" in window || navigator.msMaxTouchPoints,
      minWidth: 0
    };

    this.dragStart = this.dragStart.bind(this);
    this.moveDrag = this.moveDrag.bind(this);
    this.down = this.down.bind(this);
    this.setToLoaded = this.setToLoaded.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const matches = document.querySelectorAll(".before-after-wrap img");
    const minWidth = Math.min(matches[0].naturalWidth, matches[1].naturalWidth);
    if (prevState.minWidth < minWidth) {
      const wrap = this.wrapRef.current;
      wrap.style.width = minWidth + "px";
      this.diffImgRef.current.style.width = minWidth + "px";
      this.setState({ minWidth });
    }
  }
  componentDidMount() {
    const { supportsTouch } = this.state;
    this.seperatorRef.current.addEventListener(
      supportsTouch ? "touchstart" : "mousedown",
      this.dragStart,
      false
    );
    document.addEventListener(
      supportsTouch ? "touchend" : "mouseup",
      this.down,
      false
    );
    document.addEventListener(
      supportsTouch ? "touchmove" : "mousemove",
      this.moveDrag,
      false
    );
  }
  componentWillUnmount() {
    const { supportsTouch } = this.state;
    this.seperatorRef.current.removeEventListener(
      supportsTouch ? "touchstart" : "mousedown",
      this.dragStart
    );
    document.removeEventListener(
      supportsTouch ? "touchend" : "mouseup",
      this.down
    );
    document.removeEventListener(
      supportsTouch ? "touchmove" : "mousemove",
      this.moveDrag
    );
  }

  down() {
    this.setState({ isDown: false });
  }
  dragStart(e) {
    const seperator = this.seperatorRef.current;
    this.setState({
      isDown: true,
      offset: [
        seperator.offsetLeft -
        (this.state.supportsTouch ? e.changedTouches[0].pageX : e.clientX),
        seperator.offsetTop -
        (this.state.supportsTouch ? e.changedTouches[0].pageY : e.clientY)
      ]
    });
  }
  moveDrag(e) {
    e.preventDefault();
    const { isDown, supportsTouch } = this.state;
    if (!isDown) return;

    const YPos = supportsTouch ? e.changedTouches[0].pageY : e.clientY;
    const xPos = supportsTouch ? e.changedTouches[0].pageX : e.clientX;

    if (this.props.vertical) {
      this.handleVertical(YPos);
    } else {
      this.handleHorizontal(xPos);
    }
  }

  handleVertical(YPos) {
    const { offset, minWidth } = this.state;
    const isOutOfRangeY = YPos + offset[1] > minWidth || YPos + offset[1] < 0;
    if (isOutOfRangeY) return;
    this.seperatorRef.current.style.top = YPos + offset[1] + "px";
    this.resize.current.style.height = YPos + offset[1] + "px";
  }

  handleHorizontal(xPos) {
    const { offset, minWidth } = this.state;
    const isOutOfRangeX = xPos + offset[0] > minWidth || xPos + offset[0] < 0;
    if (isOutOfRangeX) return;
    this.seperatorRef.current.style.left = xPos + offset[0] + "px";
    this.resize.current.style.width = xPos + offset[0] + "px";
  }

  setToLoaded() {
    this.setState({ imgLoaded: true });
  }

  render() {
    const {
      firstImgSrc,
      secondImgSrc,
      containerClass,
      cursor,
      seperatorImg
    } = this.props;
    return (
      <div
        ref={this.wrapRef}
        className={`before-after-wrap ${containerClass ? containerClass : ""}`}
      >
        <img onLoad={this.setToLoaded} src={firstImgSrc} alt="left" />

        <div
          className={`resize ${
            this.props.vertical ? "vertical" : "horizontal"
            }`}
          ref={this.resize}
        >
          <img
            onLoad={this.setToLoaded}
            ref={this.diffImgRef}
            src={secondImgSrc}
            alt="right"
          />
        </div>
        <div
          ref={this.seperatorRef}
          style={{ cursor: cursor }}
          className={`before-after-seperator ${
            this.props.vertical ? "vertical" : "horizontal"
            }`}
        >
          <img
            className={`before-after-seperator-img ${
              this.props.vertical ? "vertical" : "horizontal"
              }`}
            src={seperatorImg}
          />
        </div>
      </div>
    );
  }
}
BeforeAfter.defaultProps = {
  firstImgSrc: "https://upload.wikimedia.org/wikipedia/commons/2/21/Gallet_clamshell_600x600_7.jpg",
  secondImgSrc:"https://upload.wikimedia.org/wikipedia/commons/6/6a/Gallet_clamshell_600x600_1.jpg",
  seperatorImg:"https://cdn.pixabay.com/photo/2016/09/05/10/51/app-1646220_960_720.png"
};

export default BeforeAfter;
