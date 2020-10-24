import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { Link } from "react-router-dom";




export class ContractList extends Component {
    render() {
        return (
            <Col>
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <Row>
                            <Col lg="8">
                                <h6 className="m-0">Lista de Contratos</h6>
                            </Col>
                            <Col lg="4">
                                <Link to="/contractsform">
                                    <button class="btn btn-accent float-right">Nuevo Contrato</button>
                                </Link>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <table className="table mb-0">
                            <thead className="bg-light">
                                <tr>
                                    <th scope="col" className="border-0">#</th>
                                    <th scope="col" className="border-0">Nombre</th>
                                    <th scope="col" className="border-0">Ciclo</th>
                                    <th scope="col" className="border-0">Direccion</th>
                                    <th scope="col" className="border-0">Telefono</th>
                                    <th scope="col" className="border-0">Cantidad </th>
                                    <th scope="col" className="border-0">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Maria Palomares</td>
                                    <td>Mayo 2018 - Diciembre 2020</td>
                                    <td>Russian Federation</td>
                                    <td>107-0339</td>
                                    <td>$90,000.00</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </Col >
        )
    }
}


export default ContractList;