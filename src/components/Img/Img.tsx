import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const Wrapper = styled.div<{ $disabled?: boolean }>`
  display: inline-block;
  background-color: ${({ $disabled }) => ($disabled ? '#cccccc' : 'transparent')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  width: 100%;
  max-width: 300px;

  img {
    width: 100%;
    display: block;
    opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  }
`;

export const Img: React.FC<ImgProps> = ({ src, alt, disabled = false }) => {
  return (
    <Wrapper $disabled={disabled}>
      <img src={src} alt={alt} />
    </Wrapper>
  );
};
