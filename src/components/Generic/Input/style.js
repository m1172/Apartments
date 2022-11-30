import styled from "styled-components";

const getType = (type) => {
  switch (type) {
    case "primary":
      return {
        background: "#0061DF",
        color: "#FFFFFF",
        border: "none",
      };
    case "secondary":
      return {
        border: "1px solid #E6E9EC",
        color: "#0D263B",
      };
    default:
      return {
        border: "1px solid #E6E9EC",
        color: "#FFFFFF",
      };
  }
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

const Container = styled.input`
  display: flex;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "44px"};
  padding-left: ${({ pl }) => pl || "15px"};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};

  border-radius: 2px;
  border: 1px solid #e6e9ec;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  /* ${({ type }) => getType(type)}; */
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(-50%, -50%);
`;
export { Wrapper, Container, Icon };
