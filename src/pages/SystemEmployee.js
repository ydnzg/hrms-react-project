import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import SystemEmployeeService from "../services/SystemEmployeeService"


export default function SystemEmployee() {
    const [personnels, setSystemEmployee] = useState([])
    useEffect(() => {
        let personnelService = new SystemEmployeeService()
        personnelService.getSystemEmployees().then(result => setSystemEmployee(result.data.data))},[])
    
    return (
    <div>
            <Table celled inverted selectable color="green">
            <Table.Header >
            <Table.Row>
                <Table.Cell> Ad</Table.Cell>
                <Table.Cell>Soyad</Table.Cell>
                <Table.Cell>Email Adresi</Table.Cell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
            {
                personnels.map(personnel =>
                (
                    <Table.Row key={personnel.userId}>
                        <Table.Cell>{personnel.firstName}</Table.Cell>
                        <Table.Cell>{personnel.lastName}</Table.Cell>
                        <Table.Cell>{personnel.email}</Table.Cell>
                    </Table.Row>
                ))
            }
            </Table.Body>

        </Table>
    </div>
    )
}