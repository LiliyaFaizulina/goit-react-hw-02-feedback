import styled from 'styled-components';

export const Container = styled.section`
    margin: 0 auto;
    padding: 30px 60px;
    width: 600px;
    text-align: center;
    background-color: ${p=>p.theme.bgColors.main};
`;

export const Heading = styled.h2`
    margin-top: 0;
    margin-bottom: 30px;
    font-family: 'Roboto, sans-serif';
    font-size: 36px;
    line-height: 1.4;
    letter-spacing: 0.03em;
    color: ${p => p.theme.colors.heading};
`;
