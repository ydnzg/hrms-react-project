import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import ResumeEducationService from '../services/ResumeEducationService'

export default function ResumeEducation() {
    const [resumeEducations, setResumeEducation] = useState([])

    useEffect(() => {
        let resumeEducationService = new ResumeEducationService()
        resumeEducationService.getResumeEducations().then(result => setResumeEducation(result.data.data))},[])

    return (
        <div>
            <Table celled inverted selectable color="blue">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Okul İsmi</Table.HeaderCell>
                        <Table.HeaderCell>Bölüm İsmi</Table.HeaderCell>
                        <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Mezuniyet Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    
                    {
                        resumeEducations.map(resumeEducation => (
                            <Table.Row key={resumeEducation.id}>
                                <Table.Cell>{resumeEducation.schoolName}</Table.Cell>
                                <Table.Cell>{resumeEducation.department}</Table.Cell>
                                <Table.Cell>{resumeEducation.startedDate}</Table.Cell>
                                <Table.Cell>{resumeEducation.endedDate}</Table.Cell>   
                            </Table.Row>
                        ))
                    }
                    
                </Table.Body>
            </Table>
        </div>
    )
}