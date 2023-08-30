import React from 'react';

type HeaderProps = {
  organizationName: string;
  repositoryName: string;
};

export default function Header({
  organizationName,
  repositoryName,
}: HeaderProps): React.ReactElement {
  return (
    <h1>
      {organizationName} / {repositoryName}
    </h1>
  );
}
