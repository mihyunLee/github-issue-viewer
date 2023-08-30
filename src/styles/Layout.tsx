import { styled } from 'styled-components';

export const Layout = styled.section`
  background-color: var(--gray700);
  width: 90%;
  margin: 30px auto 0 auto;
  padding: 20px;
  border-radius: 20px;

  pre {
    background-color: var(--gray500);
    border-radius: 20px;
    padding: 20px;

    code {
      font-family: D2Coding, 'D2 coding', monospace;
      font-size: 14px;
      line-height: 1.6em;
    }
  }

  code {
    background: rgba(135, 131, 120, 0.15);
    color: #eb5757;
    border-radius: 3px;
    padding: 0.3em 0.4em;
  }
`;
