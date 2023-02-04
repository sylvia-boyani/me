import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function Services() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="UI/UX designer"
            desc="I design the website liasing with the client to get the best designs as needed by the client."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web dev"
            desc="After designing I start building the website. Highly perfomant and responsive application."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Open Source Contributions"
            desc="I am also trying to venture more into open source to learn more. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}