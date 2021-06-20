import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import CompanyService from "../services/CompanyService";

export default function Company() {
  const [companies, setCompany] = useState([]);
  useEffect(() => {
    let companyService = new CompanyService();
    companyService.getCompanies().then((result) => setCompany(result.data.data))},[])

  return (
    <div>
      <Table celled inverted selectable color="green">
        <Table.Header>
          <Table.Row>
            <Table.Cell> Firma İsmi</Table.Cell>
            <Table.Cell>Web Adresi</Table.Cell>
            <Table.Cell>Telefon</Table.Cell>
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
           
           companies.map(company =>(
            <Table.Row key={company.userId}>
              <Table.Cell>{company.companyName}</Table.Cell>
              <Table.Cell>{company.webAdress}</Table.Cell>
              <Table.Cell>{company.phoneNumber}</Table.Cell>
              
            </Table.Row>
          ))
          }
        </Table.Body>
      </Table>
    </div>
  );
}
