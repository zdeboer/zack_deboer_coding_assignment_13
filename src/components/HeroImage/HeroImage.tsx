import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroWrapper = styled.div<{ $backgroundImage: string; $disabled?: boolean }>`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 200px;
  background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-color: ${({ $disabled }) => ($disabled ? '#cccccc' : 'transparent')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${({ $disabled }) => ($disabled ? 'rgba(0,0,0,0.3)' : 'transparent')};
  }

  @media (max-width: 600px) {
    height: 150px;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  padding: 1rem;
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  title,
  subtitle,
  backgroundImage,
  disabled = false,
}) => {
  return (
    <HeroWrapper $backgroundImage={backgroundImage} $disabled={disabled}>
      <Content>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </Content>
    </HeroWrapper>
  );
};
