import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const Container = styled.section`
  flex-wrap: wrap;
  height: 100%;
`;

const PublicLayout = ({ children }: Props) => {
  return <Container className="container">{children}</Container>;
};

export default PublicLayout;
