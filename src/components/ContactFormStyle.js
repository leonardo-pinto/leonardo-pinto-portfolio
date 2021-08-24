import styled from 'styled-components';

export const Form = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  width: 50%;

  @media only screen and (max-width: 768px) {
    align-items: center;
    padding: 0;
    width: 100%;
  }
`;

export const FormInput = styled.input`
  border: 1px solid #ced4da;
  border-radius: .25rem;
  margin-bottom: 1em;
  padding: 0.75em;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  width: 90%;
`;

export const FormTextArea = styled.textarea`
  border: 1px solid #ced4da;
  border-radius: .25rem;
  height: 8em;
  margin-bottom: 1em;
  padding: 0.75em;
  resize: none;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  width: 90%;
`;

export const SendButton = styled.button`
  border: 1px solid #ced4da;
  border-radius: .25rem;
  padding: 0.5em;
`;
