import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-5.svg'
import ReactJS from '../../images/react.png'
import NestJS from '../../images/nestjs.png'
import Kube from '../../images/kubernetes.png'
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Skills</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={ReactJS} />
          <ServicesH2>Front-End</ServicesH2>
          <ServicesP>
          Including React, Angular, NextJS, TailwindCSS and Styled-components.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={NestJS} />
          <ServicesH2>Back-End</ServicesH2>
          <ServicesP>
          Including NestJS, GraphQL, TypeORM, MongoDB, MSSQL and MariaDB.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Kube} />
          <ServicesH2>Infrastructure</ServicesH2>
          <ServicesP>
          Including Kubernetes, Docker, GCP, Argo CI/CD, Firebase and Azure.
          </ServicesP>
        </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
