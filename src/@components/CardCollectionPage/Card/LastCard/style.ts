import styled from "styled-components";

export const St = {
  Card: styled.section`
    margin-bottom: 1.6rem;
  `,

  ContentTitle: styled.h1`
    padding: 2.4rem 1.6rem 0;

    ${({ theme }) => theme.newFonts.h1};
    color: ${({ theme }) => theme.newColors.gray900};
  `,

  Content: styled.p`
    padding: 0 1.6rem 2.4rem;

    ${({ theme }) => theme.newFonts.h2};
    color: ${({ theme }) => theme.newColors.gray900};
  `,
};
