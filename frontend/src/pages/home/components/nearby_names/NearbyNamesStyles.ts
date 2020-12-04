import styled from 'styled-components';
export const NearbyNamesContainer = styled.div`
    padding-top: 10px;
    font-size: 12px;
    height: 20px;
    & > *:not(:first-child) {
        margin-left: 40px;
        cursor: pointer;
    }
`;