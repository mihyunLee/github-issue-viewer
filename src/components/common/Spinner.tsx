import React from 'react';
import SpinnerImage from '../../assets/images/loading.svg';
import styled from 'styled-components';

export default function Spinner() {
  return (
    <SpinnerContainer>
      <img src={SpinnerImage} alt='로딩 이미지' width='30%' />
    </SpinnerContainer>
  );
}

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100vh;
  margin: 0 auto;
`;
