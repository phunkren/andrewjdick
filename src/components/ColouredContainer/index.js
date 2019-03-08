import React, { Component } from "react";
import { Container } from "./styles";

export class ColouredContainer extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();

    this.state = {
      clientX: 0,
      clientY: 0,
      clientWidth: 0,
      clientHeight: 0
    };
  }

  _onMouseMove({ clientX, clientY }) {
    this.setState({ clientX, clientY });
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.updateDimensions());
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.updateDimensions());
  }

  updateDimensions() {
    const { clientHeight, clientWidth } = this.myRef.current;
    this.setState({ clientWidth, clientHeight });
  }

  render() {
    const { children } = this.props;
    const { clientX, clientY, clientWidth, clientHeight } = this.state;

    return (
      <Container
        ref={this.myRef}
        clientX={clientX}
        clientY={clientY}
        clientWidth={clientWidth}
        clientHeight={clientHeight}
        onMouseMove={this._onMouseMove.bind(this)}
      >
        {children}
      </Container>
    );
  }
}
