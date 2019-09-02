import React, { Component } from "react";
import "./BeforeAfter.css";
import before from "./assets/before.png";
import after from "./assets/after.png";

class BeforeAfter extends Component {
  constructor(props) {
    super(props);
    this.seperatorRef = React.createRef();
    this.wrapRef = React.createRef();
    this.diffImgRef = React.createRef();

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
      this.dragStart,
      false
    );
    document.removeEventListener(
      supportsTouch ? "touchend" : "mouseup",
      this.down,
      false
    );
    document.removeEventListener(
      supportsTouch ? "touchmove" : "mousemove",
      this.moveDrag,
      false
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
        (this.state.supportsTouch ? e.changedTouches[0].pageX : e.clientX)
      ]
    });
  }
  moveDrag(e) {
    const { offset, isDown, minWidth } = this.state;
    let xPos = this.state.supportsTouch ? e.changedTouches[0].pageX : e.clientX;
    e.preventDefault();
    if (isDown) {
      if (xPos + offset[0] > minWidth || xPos + offset[0] < 0) return;
      this.seperatorRef.current.style.transform = "translateX(" + (xPos + offset[0]) + "px)";
      this.diffImgRef.current.style.clipPath =
        "inset(0 0 0 " + (xPos + offset[0]) + "px)";
    }
  }

  setToLoaded() {
    this.setState({ imgLoaded: true });
  }

  render() {
    const { firstImgSrc, secondImgSrc, containerClass, cursor } = this.props;
    return (
      <div
        ref={this.wrapRef}
        className={`before-after-wrap ${containerClass ? containerClass : ""}`}
      >
        <img onLoad={this.setToLoaded} src={firstImgSrc} alt="left" />
        <img
          onLoad={this.setToLoaded}
          ref={this.diffImgRef}
          style={{ clipPath: "inset(0 0 0 50%)" }}
          src={secondImgSrc}
          alt="right"
        />
        <div
          ref={this.seperatorRef}
          style={{ cursor: cursor }}
          className="before-after-seperator"
        />
      </div>
    );
  }
}
BeforeAfter.defaultProps = {
  firstImgSrc: before,
  secondImgSrc: after
};

export default BeforeAfter;