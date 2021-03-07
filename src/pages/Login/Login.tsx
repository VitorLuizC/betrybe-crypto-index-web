import React from "react";
import styled from "styled-components";
import PublicLayout from "../../components/global/PublicLayout/PublicLayout";
import DigitialCurrencyIllustration from "../../components/illustrations/DigitalCurrencyIllustration";
import COLORS_PALLETE from "../../constants/COLORS_PALLETE";
import LoginForm from "./components/LoginForm/LoginForm";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const IllustrationWrapper = styled.div`
  display: none;
  padding: 15px 25px;

  @media (min-width: 768px) {
    display: block;
    width: 60%;
  }
`;

const FormLoginWrapper = styled.section`
  padding: 15px 25px;
  margin: 10px;
  background-color: ${COLORS_PALLETE.brighter ?? ""};
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 5px;
  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const Login = () => {
  return (
    <PublicLayout>
      <Container>
        <IllustrationWrapper>
          <DigitialCurrencyIllustration
            width="100%"
            height="100%"
            fill={COLORS_PALLETE.primary}
          />
        </IllustrationWrapper>
        <FormLoginWrapper>
          <LoginForm onSubmit={console.log} />
        </FormLoginWrapper>
      </Container>
    </PublicLayout>
  );
};

export default Login;
