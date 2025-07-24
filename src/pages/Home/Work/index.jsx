import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Trans, useTranslation } from 'react-i18next'; // Import Trans component
import { PageContainer, Container } from '../../../components/layout/Container';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import ProjectItem from './ProjectItem';
import imgAh from './img/ah.svg';
import imgSaysimple from './img/saysimple.svg';
import imgDelfthyperloop from './img/delfthyperloop.png';
import downArrow from './downarrow.svg';

const ProjectItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 42px;
  margin-top: 4rem;
  margin-bottom: 8.125rem;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SeeMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  transition: margin-top 0.5s ease-in-out;
  margin-top: ${({ showMore }) => (showMore ? '1rem' : '0')};
`;

const SeeMoreButton = styled.button`
  font-size: 1rem;
  font-weight: 600;
  background: none;
  color: ${({ theme }) => theme.colors.light.primary};
  border: none;
  padding: 0 1rem;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const ArrowIcon = styled.img`
  margin-right: 0.5rem;
  transition: transform 0.3s;
  ${({ showMore }) => showMore && 'transform: rotate(180deg);'}
`;

const ShowMoreWrapper = styled.div`
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  overflow: hidden;
  max-height: ${({ showMore }) => (showMore ? '1000px' : '0')};
  opacity: ${({ showMore }) => (showMore ? '1' : '0')};
`;

const Work = () => {
  const { t } = useTranslation(); // Hook to get translation function
  const [showMore, setShowMore] = useState(false);

  const handleSeeMore = () => {
    setShowMore(!showMore);
  };

  return (


    <Container noPaddingBottom>
      <SectionTitle>{t('work.title')}</SectionTitle>
      <SectionText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</SectionText>


      <ProjectItemsWrapper>
        <ProjectItem
          imageSrc={imgDelfthyperloop}
          category="Delft Hyperloop"
          title="Vehicle Control Interface"
          description="Control interface for real-time vehicle management and safety checks, ensuring smooth and safe operations during tests and the competition."
          tags={['React', 'Django', 'Python']}
          learnMoreLink="#"
          color='#20cc8a'
        />

        <ProjectItem
          imageSrc={imgAh}
          category="Albert Heijn"
          title="Digital Signage Software"
          description="Created a versatile signage software for Albert Heijn's staff room display, showcasing current time, photo slideshows, announcements, and more for enhanced internal communication."
          tags={['JavaScript', 'HTML', 'CSS']}
          learnMoreLink="#"
          color='#52c2df'
        />

        <ProjectItem
          imageSrc={imgSaysimple}
          category="Saysimple"
          title="Interactive Web Elements"
          description="Created interactive elements for Saysimple's website, including a pricing calculator and customizable chat widget generator to enhance website functionality and client engagement."
          tags={['React', 'JavaScript', 'CSS']}
          learnMoreLink="#"
          color='#aa88fd'
        />



      </ProjectItemsWrapper>
    </Container>
  );
};

export default Work;
