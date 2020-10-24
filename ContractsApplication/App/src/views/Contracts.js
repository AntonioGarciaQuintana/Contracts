import React from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import ContractList from "../components/Contracts/ContractsList";

const Contracts = () => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
            <PageTitle title="Contratos" subtitle="En este apartado se realiza el Alta, Baja y Edición de los contratos de siembra" md="12" className="ml-sm-auto mr-sm-auto"></PageTitle>
        </Row>
        <Row>
            <ContractList></ContractList>
        </Row>
    </Container>
);

export default Contracts;