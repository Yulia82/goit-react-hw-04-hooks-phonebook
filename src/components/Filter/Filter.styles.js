import styled from "@emotion/styled";

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;

  width: 200px;
  margin-bottom: 20px;

  font-weight: bold;
  font-size: 14px;
`;

export const FilterInput = styled.input`
  border-radius: 6px;
  height: 24px;
  border-color: var(--second-color);

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
    border-color: var(--main-color);
  }
`;
