import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PublicLayout from "../../components/global/PublicLayout/PublicLayout";

import Button from "react-bootstrap/Button";
import UpdateCurrencyForm from "./components/UpdateCurrencyForm/UpdateCurrencyForm";

const Container = styled.div`
  display: flex;
  place-content: center;
  height: 100%;
  flex-wrap: wrap;
`;

const UpdateCurrency = () => {
  return (
    <PublicLayout>
      <Container>
        <div className="row w-100 mb-5">
          <Link to="/currencies">
            <Button>Voltar</Button>
          </Link>
        </div>
        <div className="row w-100">
          <UpdateCurrencyForm
            currentCurrencies={{
              BRL: 123.45,
              USD: 456.78,
              EUR: 789.9,
            }}
            onSubmit={(values) => console.log(values)}
          />
        </div>
      </Container>
    </PublicLayout>
  );
};

export default UpdateCurrency;
