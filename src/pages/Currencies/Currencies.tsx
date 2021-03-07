import React, { useCallback, useState } from "react";
import styled from "styled-components";
import PublicLayout from "../../components/global/PublicLayout/PublicLayout";
import FormControl from "react-bootstrap/FormControl";
import COLORS_PALLETE from "../../constants/COLORS_PALLETE";
import { ChangeEvent } from "react";
import CalculatorIllustration from "../../components/illustrations/CalculatorIllustration";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  place-content: center;
  height: 100%;
  flex-wrap: wrap;
`;

const Label = styled.label`
  color: ${COLORS_PALLETE.brighter};
`;

const FormControlWrapper = styled.div``;

const DisplayValue = styled.div`
  padding: 10px;
  background-color: ${COLORS_PALLETE.brighter};
`;

const Currencies = () => {
  const [value, setValue] = useState(0);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newvalue = Number(event.target.value);

      if (Number.isNaN(newvalue)) return;

      if (newvalue > 0) setValue(newvalue);
    },
    [setValue]
  );

  return (
    <PublicLayout>
      <Container>
        <div className="row w-100 mb-5">
          <Link to="/update-currency" className="mx-auto">
            <Button variant="success">Atualizar valor monetário</Button>
          </Link>
        </div>
        <div className="row w-100 mb-3">
          <FormControlWrapper className="col-6 mx-auto">
            <Label htmlFor="btc">BTC</Label>
            <FormControl
              type="number"
              id="btc"
              value={value}
              onChange={handleChange}
              min="0"
              className="text-center"
            />
          </FormControlWrapper>
        </div>

        <div className="row w-100 justify-content-center">
          <div className="col-3 text-center">
            <FormControlWrapper className="w-100">
              <Label htmlFor="btc">USD</Label>
              <DisplayValue>
                {parseFloat(`${value * 10}`).toFixed(2)}
              </DisplayValue>
            </FormControlWrapper>
          </div>
          <div className="col-3 text-center">
            <FormControlWrapper className="w-100">
              <Label htmlFor="btc">EUR</Label>
              <DisplayValue>
                {parseFloat(`${value * 3}`).toFixed(2)}
              </DisplayValue>
            </FormControlWrapper>
          </div>
          <div className="col-3 text-center">
            <FormControlWrapper className="w-100">
              <Label htmlFor="btc">BRL</Label>
              <DisplayValue>
                {parseFloat(`${value * 20}`).toFixed(2)}
              </DisplayValue>
            </FormControlWrapper>
          </div>
          <div className="col-3 text-center">
            <FormControlWrapper className="w-100">
              <Label htmlFor="btc">CAD</Label>
              <DisplayValue>
                {parseFloat(`${value * 4}`).toFixed(2)}
              </DisplayValue>
            </FormControlWrapper>
          </div>
        </div>

        <div className="row w-100 text-center">
          <CalculatorIllustration
            className="mx-auto mt-4"
            width="500px"
            height="100%"
            fill={COLORS_PALLETE.primary}
          />
        </div>
      </Container>
    </PublicLayout>
  );
};

export default Currencies;
