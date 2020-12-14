import React, { Component } from "react";

export class ContractList extends Component {

    
    constructor(props) {
        super(props);
       
    }
    GetDateFormat = (date) => {
        const datetime = date ? new Date(date) : new Date();
        return Intl.DateTimeFormat("es-ES", ).format(new Date(datetime));
        
        // long format
        // return Intl.DateTimeFormat("es-ES", {
        //     year: "numeric",
        //     month: "long",
        //     day: "2-digit"
        // }).format(new Date(datetime));
    }
    renderTableData = () => {
       return this.props.contracts.map((contract, index) => {
            const { Id, Name, Acres, Amount, Location, StartDate, EndDate } = contract
            return (

                < tr key={Id} >
                    <td>{Id}</td>
                    <td>{Name}</td>
                    <td>{this.GetDateFormat(StartDate) + " a " + this.GetDateFormat(EndDate)}</td>
                    <td>{Amount}</td>
                    <td>{Amount}</td>
                    <td>{Location}</td>
                </tr >
            )
        });
    }


    render() {
        return (<tbody>{this.renderTableData()}</tbody>)
    }
}

export default ContractList