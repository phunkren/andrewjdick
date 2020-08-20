import React from 'react';
import styled from 'styled-components';
import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { Text } from '../components/Text';
import { Hero } from '../components/Hero';
import { Header } from '../components/Header';
import { Theme } from '../components/Theme';
import { Footer } from '../components/Footer';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { convertPxToRem } from '../utils/unitConversion';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 76px;
  margin-right: auto;
  margin-bottom: var(--spacing-massive);
  margin-left: auto;
  padding: 0;

  width: 100%;

  ${MEDIA.tablet`
    max-width: ${convertPxToRem(BREAKPOINTS.tablet)};
    margin-left: auto;
    margin-right: auto;
  `}

  ${MEDIA.tablet`
    padding: 0 var(--spacing-huge);
  `}
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  width: 100%;

  ${MEDIA.tablet`
    background: linear-gradient(
      90deg,
      var(--color-white) 0%,
      var(--color-gray-200) 50%,
      var(--color-white) 100%
    );
  `}
`;

const Input = styled.input`
  width: 100%;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: var(--color-gray-400);
  border-left-color: transparent;
  border-style: solid;
  border-width: 1px;
  padding: 0;

  ::-webkit-input-placeholder,
  ::placeholder {
    color: rgba(0, 0, 0, 0.33);
  }
`;

const Label = styled.label`
  &:hover {
    span {
      color: var(--color-blue-400);
      transition: color 0.2s ease-out;
    }
  }
`;

const TextArea = styled.textarea`
  display: block;
  min-width: 100%;
  max-width: 100%;
  border: 1px solid var(--color-gray-400);
  border-radius: 4px;
`;

const Button = styled.button`
  padding: var(--spacing-small) var(--spacing-large);
  background-color: var(--color-blue-600);
  color: rgba(255, 255, 255, 0.9);
  border: 0;
  min-width: 150px;
  border-radius: 4px;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: var(--color-blue-400);
  }

  &:active {
    background-color: var(--color-orange-400);
  }

  ${MEDIA.tablet`
    align-self: flex-start;
    padding: var(--spacing-tiny) var(--spacing-large);
  `}
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  padding: var(--spacing-massive) var(--spacing-medium);
  width: 100%;

  ${MEDIA.tablet`
    margin-bottom: var(--spacing-massive);
    padding: var(--spacing-massive);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .18);
  `}
`;

export default function Contact() {
  return (
    <Layout>
      <SEO path="/contact" title="Contact" description="Get in touch with me" />
      <Theme theme="dark">
        <Header />
      </Theme>
      <Wrapper>
        <Hero />
        <Main>
          <Text
            as="h1"
            size="4xl"
            id="contact"
            css="color: white; margin-bottom: var(--spacing-large);"
          >
            Contact
          </Text>
          <Form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <Label hidden>
              <Text>Don’t fill this out:</Text>
              <Input name="form-contact" value="contact" />
            </Label>

            <Label hidden>
              <Text>Don’t fill this out:</Text>
              <Input name="bot-field" />
            </Label>

            <Label css="margin-bottom: var(--spacing-huge);">
              <Text
                size="xs"
                css="display: block; margin-bottom: var(--spacing-tiny);"
              >
                From
              </Text>
              <Input
                required
                type="email"
                name="contact-email"
                placeholder="your@email.com"
              />
            </Label>

            <Label css="margin-bottom: var(--spacing-huge);">
              <Text
                size="xs"
                css="display: block; margin-bottom: var(--spacing-tiny);"
              >
                Subject
              </Text>
              <Input
                required
                type="text"
                name="contact-subject"
                placeholder="Let's get in touch"
              />
            </Label>

            <Label css="margin-bottom: var(--spacing-massive);">
              <Text
                size="xs"
                css="display: block; margin-bottom: var(--spacing-medium);"
              >
                Message
              </Text>
              <TextArea required name="contact-body" rows="6" minlength="20" />
            </Label>

            <Button type="submit">Send</Button>
          </Form>
        </Main>
        <Footer />
      </Wrapper>
    </Layout>
  );
}
