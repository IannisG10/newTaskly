import React from "react";
import { styled } from "styled-components";

const Loader: React.FC = ()=> {
    return(
        <StyledWrapper>
            <div className="loader"></div>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
  .loader {
    border: 3px solid #B0B9A8;
    border-left-color: transparent;
    border-radius: 50%;
    margin: 5px
  }

  .loader {
    border: 3px solid #B0B9A8;
    border-left-color: transparent;
    width: 26px;
    height: 26px;
  }

  .loader {
    border: 3px solid #B0B9A8;
    border-left-color: transparent;
    width: 26px;
    height: 26px;
    animation: spin89345 1s linear infinite;
  }

  @keyframes spin89345 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }`;

export default Loader