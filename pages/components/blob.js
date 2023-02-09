import styled, { keyframes } from "styled-components"

const move = keyframes`
    from {
        transform: rotate(-30deg);
        border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }
    to {
        transform:  rotate(20deg);
        border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
`;

const Blob = styled.div`
    position: absolute;
    width: 100%;
    height: auto;
    padding-top: 100%;
    background: linear-gradient(
        100deg,
        #E96264 70%,
        #E96264 50%
    );

    animation: ${move} 10s infinite alternate;
`;

export default Blob;