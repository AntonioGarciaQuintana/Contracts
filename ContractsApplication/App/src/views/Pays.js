import React from "react";
import { Container, Row } from "shards-react";

import PaysList from "../components/pays/PaysList";
import PageTitle from "../components/common/PageTitle";


const Pays = () => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
            <PageTitle title="Abonos" subtitle="En este apartado se realiza el Alta, Baja y Edición de los abonos a los contratos de siembra" md="12" className="ml-sm-auto mr-sm-auto"></PageTitle>
        </Row>
        <Row>
            <PaysList></PaysList>
        </Row>
    </Container>
);

export default Pays;