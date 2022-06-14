
import React from 'react'
import { ServicesContainer, ServicesH1,ServicesWrapper, ServicesH2, ServicesCard, ServicesIcon, ServicesP } from './ServicesElement'
import Icon1 from '../../images/svg-3.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-5.svg';

const Services = () => {
  return (
      <ServicesContainer id='services'>
          <ServicesH1>Our Services</ServicesH1>
          <ServicesWrapper>
              <ServicesCard>
                  <ServicesIcon src={Icon1} />
                  <ServicesH2> Reduce Expenses</ServicesH2>
                  <ServicesP>We help reduce your fees and increase overall revenue percentage.</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon2} />
                  <ServicesH2> Virual Offices</ServicesH2>
                  <ServicesP>We made our offices gloabally acessable and managable.</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon3} />
                  <ServicesH2> Premium Benefits</ServicesH2>
                  <ServicesP>Unlock our special membership to get a 5% cashback.</ServicesP>
              </ServicesCard>
          </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services