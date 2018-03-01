import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const UL = styled.ul.attrs({ className: "list" }) `
  padding: 0;
  padding-top: 5px;
`

export const LI = styled.li.attrs({ className: "list" }) `
  padding: 5px 0;
  list-style: none;
  line-height: 1em;
`

export const HR = styled.hr`
  width: 75%;
  border: 0; 
  height: 2px; 
  background-image: -webkit-linear-gradient(left, #f0f0f0, #336699, #f0f0f0);
  background-image: -moz-linear-gradient(left, #f0f0f0, #336699, #f0f0f0);
  background-image: -ms-linear-gradient(left, #f0f0f0, #336699, #f0f0f0);
  background-image: -o-linear-gradient(left, #f0f0f0, #336699, #f0f0f0); 
`;
