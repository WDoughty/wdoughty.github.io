import React from "react";
import {StyledDiv, ResumeH1, StyledParagraph, StyledResumeHeader, StyledPHeader, ResumeTD} from "../../styles/styles";


const Resume = () =>{

    return(
        <StyledDiv>
            <ResumeH1>William Doughty</ResumeH1>
            <StyledResumeHeader> About Me </StyledResumeHeader>
                <StyledParagraph style={{textAlign:"center"}}> I'm following my passion of designing software solutions to real life problems  </StyledParagraph>
            <StyledResumeHeader>Experience</StyledResumeHeader>
                <StyledPHeader>Associate Application Developer Intern | IBM</StyledPHeader>
                    <StyledParagraph> I worked as a full stack application developer with IBM. While there I worked in an agile team to design and develop micro-servives.   </StyledParagraph>
                <StyledPHeader>Data Center Technician | TEKsystems | Microsoft </StyledPHeader>
                    <StyledParagraph>I worked as a Data center Technician through TEKsystems at a Microsoft location.
                        I worked in a team to run and label copper and fiber optic cables as well as installing hardware components into server racks.
                    </StyledParagraph>
                <StyledPHeader>Administrative Assistant | Gannett</StyledPHeader>
                    <StyledParagraph>I worked as an Administrative Assistant with Gannet between May 2015 and Decemeber 2017. I entered shipping information into 
                        an Microsoft Access Database, completed paperwork and weekly reports for shipments, and compiled data for daily reports. I also operated warehouse machinery
                        such as forklifts and powered pallet jacks.
                    </StyledParagraph>
            <StyledResumeHeader>Military</StyledResumeHeader>
            
            
                <StyledPHeader>Corporal | United States Marine Corps</StyledPHeader>
                    <StyledParagraph>I served as a Musician (MOS 5524) in the United States Marine Corps from 2010 to 2014. I was stationed in New Orleans, LA with the 4th Marine Division. 
                    </StyledParagraph>

            <StyledResumeHeader>Education</StyledResumeHeader>
                <StyledPHeader>Pursing Bachelor of Arts in Computer Science | Iowa State University | Fall 2016 - Fall 2021</StyledPHeader>
                <StyledPHeader>Associate of Arts in Liberal Arts | Des Moines Area Community College | Spring 2015 - Summer 2016</StyledPHeader>
            <StyledResumeHeader>Skills and Programming Languages</StyledResumeHeader>
                <table style={{borderSpacing:'1em'}}>
                    <tr>
                        <ResumeTD>Machine Learning</ResumeTD>
                        <ResumeTD>Amazon Web Services</ResumeTD>
                        <ResumeTD>Git</ResumeTD>
                        <ResumeTD>Docker</ResumeTD>
                        <ResumeTD>Android</ResumeTD>
                        <ResumeTD>MongoDB</ResumeTD>
                    </tr>
                    <tr >
                        <ResumeTD>TensorFlow</ResumeTD>
                        <ResumeTD>Google Cloud Platform</ResumeTD>
                        <ResumeTD>gRPC</ResumeTD>
                        <ResumeTD>Java</ResumeTD>
                        <ResumeTD>Python</ResumeTD>
                        <ResumeTD>C/C++</ResumeTD>
                    </tr>
                    <tr>
                        <ResumeTD>SQL</ResumeTD>
                        <ResumeTD>Javascript</ResumeTD>
                        <ResumeTD>Typescript</ResumeTD>
                        <ResumeTD>React</ResumeTD>
                        <ResumeTD>Node.js</ResumeTD>
                        <ResumeTD>Golang</ResumeTD>
                    </tr>
                </table>
            
                
            <StyledResumeHeader>Projects</StyledResumeHeader>
                <StyledPHeader>Bluesky Airlines</StyledPHeader>
                    <StyledParagraph> Designed a full stack web application made with React, typescript, Mode.js, GraphQL, gRPC, Golang, and MongoDB. The web app would query flights and airports,
                    create and delete flight and airports and create schedules.
                    </StyledParagraph>
                <StyledPHeader>Genetic Algorithm Optimzation for Machine Learning</StyledPHeader>
                    <StyledParagraph>Implemented a genetic algorithm that would create and train convolutional neural networks for optimized models.</StyledParagraph>



            
                
            
            
            


        </StyledDiv>



    )


}

export default Resume;