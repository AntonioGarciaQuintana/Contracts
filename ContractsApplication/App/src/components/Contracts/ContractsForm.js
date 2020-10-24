import React from "react";
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
import ReactQuill from "react-quill";

const ContractForm = () => (
    <Container fluid className="main-content-container px-4">
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
                                    <button class="btn btn-accent float-right"><i class="material-icons mr-1">keyboard_backspace</i> Regresar</button>
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
                                                        onChange={() => { }}
                                                    />
                                                </Col>
                                                <Col md="4" className="form-group">
                                                    <label htmlFor="hectareas">No. Hectáreas</label>
                                                    <FormInput
                                                        id="hectareas"
                                                        placeholder=""
                                                        onChange={() => { }}
                                                    />
                                                </Col>
                                                <Col md="4" className="form-group">
                                                    <label htmlFor="amount">Cantidad</label>
                                                    <InputGroup className="mb-3">
                                                        <InputGroupAddon type="prepend">
                                                            <InputGroupText>$</InputGroupText>
                                                        </InputGroupAddon>
                                                        <FormInput onChange={() => { }} />
                                                        <InputGroupAddon type="append">
                                                            <InputGroupText>.00</InputGroupText>
                                                        </InputGroupAddon>
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md="4" className="form-group">
                                                    <label htmlFor="address">Ubicación</label>
                                                    <FormInput
                                                        type="text"
                                                        id="address"
                                                        placeholder=""
                                                        onChange={() => { }}
                                                    />
                                                </Col>
                                                <Col md="4" className="form-group">
                                                    <label htmlFor="address">Ciclo</label>
                                                    <RangeDatePicker />
                                                </Col>
                                                <Col md="4" className="form-group">
                                                    <label htmlFor="phone">Teléfono</label>
                                                    <FormInput
                                                        id="phone"
                                                        placeholder=""
                                                        onChange={() => { }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md="12" className="form-group">
                                                    <label htmlFor="feDescription">Descripción</label>
                                                    <ReactQuill className="add-new-post__editor mb-1" />
                                                </Col>
                                            </Row>
                                            <Link to="/contracts">
                                                <Button theme="accent">Guardar Contrato</Button>
                                            </Link>
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

export default ContractForm;