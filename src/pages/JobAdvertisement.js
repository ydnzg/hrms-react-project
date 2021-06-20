import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import JobAdvertisementService from "../services/JobAdvertisementService";

export default function JobAdvertisement() {
  const [jobAdvertisements, setJobAdvertisement] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getJobAdvertisements().then((result) => setJobAdvertisement(result.data.data))},[])

  return (
    <div>
      <Table celled inverted selectable color="green">
        <Table.Header>
          <Table.Row>
            <Table.Cell>Pozisyon Detayı</Table.Cell>
            <Table.Cell>Son Başvuru Tarihi</Table.Cell>
            <Table.Cell>İlan Yayın Tarihi</Table.Cell>
            {/* <Table.Cell>Firma İsmi</Table.Cell>
            <Table.Cell>Pozisyon</Table.Cell>
            <Table.Cell>Şehir</Table.Cell> */}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
           
           jobAdvertisements.map(jobAdvertisement =>(
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
              <Table.Cell>{jobAdvertisement.deadlineDate}</Table.Cell>
              <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
              {/* <Table.Cell>{jobAdvertisement.company}</Table.Cell>
              <Table.Cell>{jobAdvertisement.position}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city}</Table.Cell> */}
              
            </Table.Row>
          ))
          }
        </Table.Body>
      </Table>
    </div>
  );
}
