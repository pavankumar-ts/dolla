import React from 'react';
import Icon1 from '../../Image/svg-1.svg';
import Icon2 from '../../Image/svg-2.svg';
import Icon3 from '../../Image/svg-4.svg';
import { ServicesContainer, ServicesH1, ServicesWapper, ServicesCard,
ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';


const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduces your fee and increase your overall
                     revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>you can access our platform anywehre in the
                     world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benefites</ServicesH2>
                    <ServicesP>Unlock our special Membership card that return 5% 
                     cash back.</ServicesP>
                </ServicesCard>
            </ServicesWapper>
        </ServicesContainer>
    )
}

export default Services;
