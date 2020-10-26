import React, { Component } from "react";
import {
    Card,
    CardHeader,
    Container,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    FormTextarea,
    Button,
    CardBody,
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "shards-react";

import { Link } from "react-router-dom";
import PageTitle from "../common/PageTitle";
import RangeDatePicker from "../common/RangeDatePicker";
import axios from 'axios'

class ContractForm extends Component {

    state = {
        id: 0,
        name: "",
        acres: "",
        amount: "",
        location: "",
        startDate: undefined,
        endDate: undefined,
        phone: "",
        description: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    StartDateChange = (e) => {
        this.setState({ ['startDate']: e });
    }

    EndDateChange = (e) => {
        this.setState({ ['endDate']: e });
    }

    SaveContract = () => {
        axios.post('/Contract/SaveContract', this.state).then(res => {
            alert('se guardo con exito: ' + res);
        }).catch(error => {
            console.error('error: ' + error);
        })
    }

    render() {
        return (<Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle title="Contratos" subtitle="En este apartado se realiza el Alta, Baja y Edicion los contratos de siembra" md="12" className="ml-sm-auto mr-sm-auto"></PageTitle>
            </Row>
            <Row>
                <Col>
                    <Card small className="mb-4">
                        <CardHeader className="border-bottom">
                            <Row>
                                <Col lg="8">
                                    <h6 className="m-0">Nuevo Contrato</h6>
                                </Col>
                                <Col lg="4">
                                    <Link to="/contracts">
                                        <button className="btn btn-accent float-right"><i className="material-icons mr-1">keyboard_backspace</i> Regresar</button>
                                    </Link>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <ListGroup flush>
                                <ListGroupItem className="p-3">
                                    <Row>
                                        <Col>
                                            <Form>
                                                <Row form>
                                                    <Col md="4" className="form-group">
                                                        <label htmlFor="nameContract">Nombre del Rentador</label>
                                                        <FormInput
                                                            id="nameContract"
                                                            placeholder=""
                                                            name="name"
                                                            onChange={this.handleChange}
                                                            value={this.state.name}
                                                        />
                                                    </Col>
                                                    <Col md="4" className="form-group">
                                                        <label htmlFor="hectareas">No. Hectáreas</label>
                                                        <FormInput
                                                            id="acres"
                                                            name="acres"
                                                            placeholder=""
                                                            onChange={this.handleChange}
                                                            value={this.state.acres}
                                                        />
                                                    </Col>
                                                    <Col md="4" className="form-group">
                                                        <label htmlFor="amount">Cantidad</label>
                                                        <InputGroup className="mb-3">
                                                            <InputGroupAddon type="prepend">
                                                                <InputGroupText>$</InputGroupText>
                                                            </InputGroupAddon>
                                                            <FormInput onChange={this.handleChange} id="amount" name="amount" value={this.state.amount} />
                                                            <InputGroupAddon type="append">
                                                                <InputGroupText>.00</InputGroupText>
                                                            </InputGroupAddon>
                                                        </InputGroup>
                                                    </Col>
                                                </Row>
                                                <Row form>
                                                    <Col md="4" className="form-group">
                                                        <label htmlFor="location">Ubicación</label>
                                                        <FormInput
                                                            type="text"
                                                            id="location"
                                                            placeholder=""
                                                            name="location"
                                                            onChange={this.handleChange}
                                                            value={this.state.location}
                                                        />
                                                    </Col>
                                                    <Col md="4" className="form-group">
                                                        <label htmlFor="address">Ciclo</label>
                                                        <RangeDatePicker
                                                            startDate={this.state.startDate}
                                                            endDate={this.state.endDate}
                                                            StartDateChange={this.StartDateChange}
                                                            EndDateChange={this.EndDateChange}
                                                        />
                                                    </Col>
                                                    <Col md="4" className="form-group">
                                                        <label htmlFor="phone">Teléfono</label>
                                                        <FormInput
                                                            id="phone"
                                                            placeholder=""
                                                            name="phone"
                                                            onChange={this.handleChange}
                                                            value={this.state.phone}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row form>
                                                    <Col md="12" className="form-group">
                                                        <label htmlFor="feDescription">Descripción</label>
                                                        <FormTextarea placeholder="" name="description" id="description" rows="5" defaultValue={this.state.description} onChange={this.handleChange} />
                                                    </Col>
                                                </Row>
                                                {/* <Link to="/contracts"> */}
                                                <Button theme="accent" onClick={this.SaveContract}>Guardar Contrato</Button>
                                                {/* </Link> */}
                                            </Form>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        </CardBody>

                    </Card>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default ContractForm;