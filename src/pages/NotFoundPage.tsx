import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export default function NotFoundPage() {
  return (
    <Container>
      <ErrorTitle>
        <ErrorCode>404</ErrorCode> 요청하신 페이지를 찾을 수 없습니다.
      </ErrorTitle>
      <RedirectLink to='/'>메인 화면으로 이동하기</RedirectLink>
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;

const ErrorTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 36px;
`;

const ErrorCode = styled.span`
  font-size: 64px;
  margin-bottom: 12px;
`;

const RedirectLink = styled(Link)`
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 24px;
  background-color: var(--blue);
  color: inherit;

  &:hover {
    background-color: rgba(51, 102, 255, 0.8);
  }
`;
