import styled from "styled-components/native";

export const Container = styled.View`
flex:1;
justify-content: center;
align-items: center;

background-color: 'gray.600';
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({theme})=>({
    color: 'green.700'
}))``;