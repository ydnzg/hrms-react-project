import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import PositionService from '../services/PositionService'

export default function Position() {
    const [positions, setPosition] = useState([])

    useEffect(() => {
    let positionService = new PositionService()
    positionService.getPositions().then(result => setPosition(result.data.data))},[])
    return (
        <div>
             <Table celled inverted selectable color="blue">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Pozisyon Numarası </Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        positions.map(position => (
                            <Table.Row key={position.id}>
                                <Table.Cell>{position.id}</Table.Cell>
                                <Table.Cell>{position.name}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>
        </div>

    )
}