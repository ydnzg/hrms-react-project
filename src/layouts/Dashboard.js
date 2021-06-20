import React from 'react'
import { Grid, Tab } from "semantic-ui-react";
import SystemEmployee from "../pages/SystemEmployee";
import Company from "../pages/Company";
import JobAdvertisement from "../pages/JobAdvertisement";
import Position from "../pages/Position";
import Jobseeker from "../pages/Jobseeker";
import ResumeEducation from "../pages/ResumeEducation";
import ResumeExperience from "../pages/ResumeExperience";
import Categories from "./Categories";



export default function Dashboard() {
    
  const panes=[
    {
      menuItem:"Sistem Personelleri",
      render:() => <Tab.Pane attached={false}><SystemEmployee/></Tab.Pane>
    },
   
    {
      menuItem:"Is Verenler",
      render:() => <Tab.Pane attached={false}><Company/></Tab.Pane>
    },
    {
      menuItem:"Is Ilanlari",
      render:() => <Tab.Pane attached={false}><JobAdvertisement/></Tab.Pane>
    },
    {
      menuItem:"Pozisyonlar",
      render:() => <Tab.Pane attached={false}><Position/></Tab.Pane>
    },
    {
      menuItem:"Is Arayanlar",
      render:() => <Tab.Pane attached={false}><Jobseeker/></Tab.Pane>
    },
   
    {
      menuItem:"Okul Bilgileri",
      render:() => <Tab.Pane attached={false}><ResumeEducation/></Tab.Pane>
    },
    {
      menuItem:"Is Deneyimleri",
      render:() => <Tab.Pane attached={false}><ResumeExperience/></Tab.Pane>
    },
    
  ]
  return (
    <div>
      <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Categories />
                    </Grid.Column>

                    <Grid.Column width={13}>
                      <Tab panes={panes}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
    </div>
  );
         
    
}
