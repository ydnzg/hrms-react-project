import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import JobseekerService from '../services/JobseekerService'

export default function Jobseeker() {
    const [jobseekers, setJobseeker] = useState([])

    useEffect(() => {
        let jobseekersService = new JobseekerService()
        jobseekersService.getJobseekers().then(result => setJobseeker(result.data))},[])

    return (
        <div>
            <Table celled inverted selectable color="blue">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Birth Date</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    
                    {
                        jobseekers.map(jobseeker => (
                            <Table.Row key={jobseeker.userId}>
                                <Table.Cell>{jobseeker.firstName}</Table.Cell>
                                <Table.Cell>{jobseeker.lastName}</Table.Cell>
                                <Table.Cell>{jobseeker.birthDate}</Table.Cell>
                                <Table.Cell>{jobseeker.email}</Table.Cell>   
                            </Table.Row>
                        ))
                    }
                    
                </Table.Body>
            </Table>
        </div>
    )
}