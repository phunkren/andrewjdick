import React, { useState } from 'react';
import { animated } from 'react-spring/renderprops';
import styled, { css } from 'styled-components';
import { navigate } from '@reach/router';
import { SEO } from '../components/SEO';
import { Text } from '../components/Text';
import { TickIcon } from '../components/icons';
import { Link } from '../components/Link';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { convertPxToRem } from '../utils/unitConversion';
import { encode } from '../utils/encode';
import { FadeIn, FadeThrough } from '../components/Animation';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: ${convertPxToRem(BREAKPOINTS.tablet)};
  width: 100%;
  margin-top: 76px;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
  padding: 0 var(--spacing-medium);

  ${MEDIA.tablet`
    margin-right: auto;
    margin-bottom: var(--spacing-massive);
    margin-left: auto;
    padding: 0 var(--spacing-huge);
  `}
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;

  /* remove rounded corners on Safari */
  border-radius: 0;
  -webkit-appearance: none;
`;

const TextArea = styled.textarea`
  display: block;
  min-width: 100%;
  max-width: 100%;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: var(--spacing-small) var(--spacing-large);
  background-color: var(--color-blue-700);
  color: rgba(255, 255, 255, 0.9);
  border: 0;
  min-width: 150px;
  width: 100%;
  border-radius: 4px;
  transition: background-color 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background-color: var(--color-blue-600);
  }

  &:active {
    background-color: var(--color-orange-400);
  }

  ${MEDIA.tablet`
    align-self: flex-start;
    padding: var(--spacing-tiny) var(--spacing-large);
    width: fit-content;
  `}
`;

const Form = styled(animated.form)(
  ({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: var(--spacing-massive) var(--spacing-medium);
    background-color: ${theme.overlay10};
    border-radius: 4px;
    margin-bottom: var(--spacing-large);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);

    ${MEDIA.tablet`
      flex: 0 1 auto;
      margin-bottom: var(--spacing-massive);
      padding: var(--spacing-massive);
    `}
  `,
);

const StyledLink = styled(Link)(
  ({ theme }) => css`
    display: block;
    color: ${theme.linkColor};

    ${MEDIA.tablet`
    display: inline-block;
  `}
  `,
);

const Title = styled(Text)`
  color: white;
  margin-bottom: var(--spacing-large);

  ${MEDIA.tablet`
    opacity: 0;
    pointer-events: none;
  `}
`;

export default function Contact({ location }) {
  const [state, setState] = useState({});
  const { success } = location.state || {};

  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => {
        navigate(form.getAttribute('action'), {
          state: { success: true },
          replace: true,
        });
      })
      .catch(error => alert(error));
  }

  if (location?.search?.includes('success') && !success) {
    navigate('/contact', {
      replace: true,
    });
  }

  return (
    <>
      <SEO
        path="?success=true"
        title="Contact"
        description="Get in touch with me"
      />
      <Wrapper>
        <Main>
          <FadeIn>
            {styles => (
              <animated.div style={styles}>
                <Title as="h1" size="4xl" id="contact">
                  Contact
                </Title>
              </animated.div>
            )}
          </FadeIn>
          <FadeThrough>
            {styles => (
              <Form
                name="contact"
                method="POST"
                action="/contact?success=true"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                style={styles}
              >
                {success ? (
                  <FadeIn>
                    {styles => (
                      <animated.div style={styles}>
                        <div css="display: flex; align-items: center; margin-bottom: var(--spacing-huge);">
                          <TickIcon
                            width="3rem"
                            height="3rem"
                            css="color: var(--color-green-400); margin-right: var(--spacing-medium);"
                          />
                          <Text size="xxxl" as="h2">
                            Thanks!
                          </Text>
                        </div>
                        <Text as="p" css="margin-bottom: var(--spacing-huge);">
                          Your message was submitted successfully. I&apos;ll be
                          in touch.
                        </Text>
                        <Text as="p" css="margin-bottom: var(--spacing-small);">
                          Forget to ask something?
                        </Text>
                        <StyledLink
                          to="/contact"
                          state={{ success: false }}
                          replace
                          getProps={() => {}}
                        >
                          Submit another message
                        </StyledLink>
                      </animated.div>
                    )}
                  </FadeIn>
                ) : (
                  <FadeIn>
                    {styles => (
                      <animated.div style={styles}>
                        <label htmlFor="form-name" hidden>
                          <Text>Netlify requires this:</Text>
                          <Input
                            id="form-name"
                            name="form-name"
                            value="contact"
                            readOnly
                          />
                        </label>

                        <label htmlFor="bot-field" hidden>
                          <Text>Don’t fill this out:</Text>
                          <Input id="bot-field" name="bot-field" />
                        </label>

                        <label
                          htmlFor="email"
                          css="display: block; margin-bottom: var(--spacing-huge);"
                        >
                          <Text
                            size="xs"
                            css="display: block; margin-bottom: var(--spacing-tiny);"
                          >
                            From
                          </Text>
                          <Input
                            id="email"
                            type="email"
                            name="contact-email"
                            placeholder="your@email.com"
                            onChange={handleChange}
                            required
                          />
                        </label>

                        <label
                          htmlFor="subject"
                          css="display: block; margin-bottom: var(--spacing-huge);"
                        >
                          <Text
                            size="xs"
                            css="display: block; margin-bottom: var(--spacing-tiny);"
                          >
                            Subject
                          </Text>
                          <Input
                            id="subject"
                            name="contact-subject"
                            placeholder="Let's get in touch"
                            onChange={handleChange}
                            required
                          />
                        </label>

                        <label
                          htmlFor="message"
                          css="display: block; margin-bottom: var(--spacing-massive);"
                        >
                          <Text
                            size="xs"
                            css="display: block; margin-bottom: var(--spacing-medium);"
                          >
                            Message
                          </Text>
                          <TextArea
                            id="message"
                            name="contact-message"
                            rows="6"
                            minlength="20"
                            onChange={handleChange}
                            required
                          />
                        </label>

                        <Button type="submit">Send</Button>
                      </animated.div>
                    )}
                  </FadeIn>
                )}
              </Form>
            )}
          </FadeThrough>
        </Main>
      </Wrapper>
    </>
  );
}
