import styled from "styled-components";
import { MEDIA } from "../../styles/media";

export const Preview = styled.div`
  display: flex;
  flex-flow: column;

  ${MEDIA.desktop`
    flex-flow: row;
  `}
`;

export const PreviewImage = styled.div`
  flex: 1;
  margin-right: 0;
  margin-bottom: 2em;

  ${MEDIA.desktop`
    flex: 0 1 25%;
    margin-right: 2em
    margin-bottom: 0;
  `}
`;

export const PreviewContent = styled.div`
  flex: 1;

  & > * + * {
    margin-top: 0.5em;
  }
`;
