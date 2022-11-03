import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  padding: 0 16px;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary.text};
  border-radius: 4px;
  transition: background 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.gray[100]};
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `}
`;
