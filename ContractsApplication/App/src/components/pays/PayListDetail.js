import React from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
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
    CardBody
} from "shards-react";

const PayListDetail = ({ title }) => (
    <Card small className="mb-4">
        <CardHeader className="border-bottom">
            <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody>
            <table className="table mb-0">
                <thead className="bg-light">
                    <tr>
                        <th scope="col" className="border-0"># abono</th>
                        <th scope="col" className="border-0">Cantidad</th>
                        <th scope="col" className="border-0">Fecha</th>
                        <th scope="col" className="border-0">No. de cheque</th>
                        <th scope="col" className="border-0">Concepto</th>
                        <th scope="col" className="border-0">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>$50,000.00</td>          
                        <td>11/10/2020</td>
                        <td>5236</td>
                        <td>Cumpleaños de la una hija</td>
                        <td>
                            <button class="btn btn-accent"><i class="material-icons">delete</i>Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </CardBody>
    </Card>
);

PayListDetail.propTypes = {
    /**
     * The component's title.
     */
    title: PropTypes.string
};

PayListDetail.defaultProps = {
    title: "Listado de abonos realizados al contrato"
};

export default PayListDetail;
