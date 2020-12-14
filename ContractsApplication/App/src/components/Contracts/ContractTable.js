import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { Link } from "react-router-dom";
import ContractList from "./ContractList";
import axios from 'axios';
export class ContractTable extends Component {

    state = {
        contracts: [{}]
    };

    constructor(props) {
        super(props);
        this.GetContracts();
    }
    // state = {
    //     contracts: [{
    //         id: 1,
    //         name: "Maria Palomares",
    //         acres: "$90,000.00",
    //         amount: "$90,000.00",
    //         location: "Russian Federation",
    //         startDate: new Date,
    //         endDate: new Date,
    //     }]

    // }

    GetContracts = () => {
        axios.get('/Contract/GetAllContracts').then(response => {
            const ret = JSON.parse(response.data);

            if (ret.Status) {
                this.setState({contracts: ret.Data});
            } else {
                console.error(ret.Message);
            }

        }).catch(error => {
            console.error(error);
        })
    }

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
                                    <button className="btn btn-accent float-right">Nuevo Contrato</button>
                                </Link>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <table className="table mb-0" id='Contracts'>
                            <thead className="bg-light">
                                <tr>
                                    <th scope="col" className="border-0">#</th>
                                    <th scope="col" className="border-0">Nombre</th>
                                    <th scope="col" className="border-0">Ciclo</th>
                                    <th scope="col" className="border-0">No. Hectáreas</th>
                                    <th scope="col" className="border-0">Cantidad </th>
                                    <th scope="col" className="border-0">Direccion</th>
                                    <th scope="col" className="border-0">Acciones</th>
                                </tr>
                            </thead>
                            <ContractList contracts={this.state.contracts} />
                        </table>
                    </CardBody>
                </Card>
            </Col >
        )
    }
}


export default ContractTable;