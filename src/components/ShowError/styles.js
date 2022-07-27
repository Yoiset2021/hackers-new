import styled from 'styled-components';

export const ErrorMessage = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.625rem;
    background: white;
    margin-top: 3rem;
`;

export const ErrorText = styled.span`
    font-size: 1.5rem;
    color: red;
    line-height: 1.8rem;
    font-family: Roboto-Medium;
`;
