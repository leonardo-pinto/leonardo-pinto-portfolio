import React from 'react';
import Footer from '../../components/Footer';
import { SectionContainer, Title, Subtitle } from './StyledComponents';

function NotFound() {
  return (
    <>
      <SectionContainer column>
        <Title>
          404: Page Not Found
        </Title>
        <Subtitle>
          The page you&apos;re looking for doesn&apos;t exists
        </Subtitle>
      </SectionContainer>
      <Footer />
    </>
  );
}

export default NotFound;
