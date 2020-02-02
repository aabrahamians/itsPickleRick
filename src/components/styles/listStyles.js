import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 30%;
  min-height: calc(100vh / 5);
  padding: 0px 0px 5px 5px;
  border: 1px solid #333;
  p {
    margin: 0px;
  }
  .tags {
    align-self: flex-end;
    background: #333;
    color: white;
    padding: 10px;
    border-radius: 0 0 0 40%;
    font-size: 1.5vw;
  }
  .content {
    align-self: flex-start;
    font-size: calc(1.8vw + 10px);
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
`;

export { ItemContainer, ListContainer };
