import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody, Progress } from "shards-react";
import { Link } from "react-router-dom";

export class PaysList extends Component {
    render() {
        return (
            <Col>
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <Row>
                            <Col lg="12">
                                <h6 className="m-0">Resumen de abonos</h6>
                            </Col>
                            {/* <Col lg="4">
                                <Link to="/contractsform">
                                    <button class="btn btn-accent float-right">Nuevo Contrato</button>
                                </Link>
                            </Col> */}
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <table className="table mb-0">
                            <thead className="bg-light">
                                <tr>
                                    <th scope="col" className="border-0">#</th>
                                    <th scope="col" className="border-0">Contrato</th>
                                    <th scope="col" className="border-0">Ciclo</th>
                                    <th scope="col" className="border-0">Cantidad</th>
                                    <th scope="col" className="border-0">Por Pagar</th>
                                    <th scope="col" className="border-0">Progreso </th>
                                    <th scope="col" className="border-0">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Maria Palomares</td>
                                    <td>Mayo 2018 - Diciembre 2020</td>
                                    <td>$90,000.00</td>
                                    <td>$50,000.00</td>
                                    <td><Progress theme="success" style={{ height: "5px" }} className="mb-3" value={40}/></td>
                                    <td>
                                    <Link to="/payDetail">
                                        <button class="btn btn-accent"><i class="material-icons">attach_money</i>Detalle</button>
                                    </Link>       
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </Col >
        )
    }
}


export default PaysList;