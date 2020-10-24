import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../common/PageTitle";
import ContractDetail from "../Contracts/ContractDetail";
import PayListDetail from "./PayListDetail";

const PayDetail = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Detalle de pagos" subtitle="En este apartado se podran observar todos los abonos realizados en el contrato" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="3">
        <ContractDetail />
      </Col>
      <Col lg="9">
        <PayListDetail /> 
      </Col>
    </Row>
  </Container>
);

export default PayDetail;
