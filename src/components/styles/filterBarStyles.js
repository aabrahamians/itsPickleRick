import styled from "styled-components";

const FilterButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 10vh;
  margin-bottom: 2vh;
  background: #333;
  color: white;
  align-content: center;
  font-size: 1.5vw;
  div {
    display: flex;
    width: 100%;
    justify-content: center;
    transition: background 0.2s ease-out;
    span {
      align-self: flex-end;
      padding-bottom: 2px;
      svg {
        display: none;
        font-size: 2em;
      }
    }
    &.selected {
      background: white;
      color: black;
      border: 1px solid #333;
      transition: background 0.2s ease-out;

      span {
        align-self: center;
        svg {
          display: inline-block;
          font-size: 2em;
        }
      }
    }
  }
`;
export default FilterButtonContainer;
