import React from "react";
import { Social } from "./Social";
import { Navigation } from "./Navigation";
import { CONTACT_DETAILS } from "../../constants";
import { Header, Container, Section, Name, Info } from "./styles";

export class Home extends React.Component {
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
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    const { clientHeight, clientWidth } = this.myRef.current;
    this.setState({ clientWidth, clientHeight });
  }

  render() {
    const { clientX, clientY, clientWidth, clientHeight } = this.state;
    const { name, position, location } = CONTACT_DETAILS;

    return (
      <Container
        ref={this.myRef}
        clientX={clientX}
        clientY={clientY}
        clientWidth={clientWidth}
        clientHeight={clientHeight}
        onMouseMove={this._onMouseMove.bind(this)}
      >
        <Header>
          <Navigation />
          <Social />
        </Header>

        <Section>
          <Name>{name}</Name>
          <Info>{position} @ Fathom</Info>
          <Info>{location}</Info>
        </Section>

        <footer>Twitter</footer>
      </Container>
    );
  }
}
