import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Ad() {
  return (
    <Link to='https://www.wanted.co.kr/' target='_blank' rel='noopener noreferrer'>
      <AdImage
        src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100'
        alt='광고 이미지'
      />
    </Link>
  );
}

const AdImage = styled.img`
  position: relative;
  width: 100%;
  height: 90px;
  background-color: var(--white);
  object-fit: contain;
  padding: 20px;
  border-bottom: 1px solid var(--gray500);
`;
