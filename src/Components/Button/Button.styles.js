import styled from "styled-components";

const defaultStyles = ({ theme, color }) => {
  return `
    border: 3px solid ${theme.colors[color]};
    background-color: ${theme.colors[color]};
    color: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.1);

    &:active {
      // filter: brightness(140%);
      box-shadow: 0 4px 12px rgba(0,0,0,0.5), 0 3px 6px rgba(0,0,0,0.1);
    }

    &:before {
      content: "";
      z-index: -1;
      border-radius: 8px;
      background-color: ${theme.colors[color]};
      box-shadow: inset 0 0 0 3px white;
      transition: all 0.25s ease 0s;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      opacity: 0%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:not([disabled])&:hover {
      &:before {
        opacity: 100%;
      }
    }
  `;
};

const outlineStyles = ({ theme, color }) => {
  return `
    background-color: transparent;
    color: ${theme.colors[color]};
    border: 3px solid ${theme.colors[color]};

    &:after {
      content: "";
      z-index: -1;
      border-radius: 8px;
      background-color: ${theme.colors[color]};
      box-shadow: inset 0 0 0 3px white;
      transition: all 0.25s ease 0s;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      opacity: 0%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:not([disabled])&:hover {
      color: white;

      &:after {
        opacity: 100%;
      }
    }
  `;
};

const ghostStyles = ({ theme, color }) => {
  return `
    background-color: transparent;
    color: ${theme.colors[color]};
    border: 3px solid transparent;

    &:hover {
      transition: all 0.25s ease 0s;
      border: 3px solid ${theme.colors[color]}
    }
  `;
};

export const Button = styled.button`
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: ${({ full }) => (full ? "100%" : "fit-content")};

  ${({ variant, ...props }) => {
    switch (variant) {
      case "outline":
        return outlineStyles(props);
        break;
      case "ghost":
        return ghostStyles(props);
        break;
      default:
        return defaultStyles(props);
        break;
    }
  }}

  /* margin: ${({ theme, margin }) =>
    margin ? theme.spacing[margin] : "none"}; */
  padding: ${({ theme, size }) =>
    size ? theme.spacing[size] : theme.spacing.md};
  isolation: isolate;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 4px;

  &[disabled] {
    filter: grayscale();
    opacity: 60%;
    cursor: not-allowed;
  }

  /* &:before {
    position: absolute;
    top: 50%;
    left: 0;
    transition: all 0.25s ease 0s;
    content: "";
    background-color: white;
    height: calc(100% - 8px);
    width: calc(100% - 8px);
    transform-origin: center center;
    transform: translateX(4px) translateY(-50%) scaleY(0%);
    z-index: 3;
  }

  &:after {
    content: "";
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border: 2px white solid;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0%;
    transform: translateX(-50%) translateY(-50%);
  }

  &:not([disabled])&:hover {
    &:before {
      mix-blend-mode: difference;
      isolation: isolate;
      transform-origin: center center;
      transform: translateX(4px) translateY(-50%) scaleY(100%);
    }
  }

  &:not([disabled])&:active {
    &:after {
      opacity: 100%
    }
  } */
`;
