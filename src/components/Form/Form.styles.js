import styled from "@emotion/styled";

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;

  font-weight: bold;
  font-size: 14px;
`;

export const FormInput = styled.input`
  border-radius: 6px;
  height: 26px;
  border-color: var(--second-color);

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
    border-color: var(--main-color);
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;

  width: 250px;
  padding: 20px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const BtnSubmit = styled.button`
  display: flex;
  align-items: center;
  min-width: 100px;
  padding: 6px 15px;
  margin-top: 10px;
  margin-right: auto;

  border-color: var(--second-color);
  border-radius: 6px;

  &:hover,
  &:focus {
    background-color: var(--second-color);
    color: var(--invers-color);
    cursor: pointer;
  }
`;
