import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

`;

export const Brand = styled.div`
  grid-area: brand;
  
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
`;

export const Search = styled.div`
  grid-area: search;
  background: violet;
`;

export const Content = styled.div`
  grid-area: content;
  background: blue;
`;

export const NewNote = styled.button`
  grid-area: newnote;
  background: yellow;
`;
