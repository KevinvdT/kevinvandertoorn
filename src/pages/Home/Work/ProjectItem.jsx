import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';

// Styled components for ProjectItem - Card Layout
const ProjectCard = styled.div`
  background: white;
  border-radius: 23px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 375px;
  margin: 0 auto;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  flex-shrink: 0;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CategoryLabel = styled.span`
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const ProjectTitle = styled(SectionTitle)`
  font-family: 'Inter','Arial',sans-serif;
  font-size: 1.0625rem;
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled(SectionText)`
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const TechTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: #f0f0f0;
  color: #333;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const LearnMoreLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  margin-top: auto;
  
  &:hover {
    text-decoration: underline;
  }
`;

// ProjectItem component with new card-based structure
const ProjectItem = ({ imageSrc, category, title, description, tags = [], learnMoreLink, color }) => (
  <ProjectCard>
    <ProjectImage src={imageSrc} alt={title} />
    <ProjectContent>
      <CategoryLabel>{category}</CategoryLabel>
      <ProjectTitle as="h3" color={color}>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      {tags.length > 0 && (
        <TechTags>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TechTags>
      )}
      <LearnMoreLink href={learnMoreLink}>Learn More ›</LearnMoreLink>
    </ProjectContent>
  </ProjectCard>
);

export default ProjectItem;
