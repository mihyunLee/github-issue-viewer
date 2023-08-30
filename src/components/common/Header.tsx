import React from 'react';
import styled from 'styled-components';

type HeaderProps = {
  organizationName: string;
  repositoryName: string;
};

export default function Header({
  organizationName,
  repositoryName,
}: HeaderProps): React.ReactElement {
  return (
    <Title>
      {organizationName} / {repositoryName}
    </Title>
  );
}

const Title = styled.h1`
  color: var(--blue);
  font-size: 32px;
  text-align: center;
`;
