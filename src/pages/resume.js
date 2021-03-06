import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import {
  Layout,
  Container,
  MarkdownRenderer,
  Button,
  Icon
} from "../components";

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SideContainer = styled(Container)`
  background: ${({ theme }) => theme.color.grey};
  flex: 1;
  /* background: ${({ theme }) => theme.color.primaryLight}; */
  /* color: ${({ theme }) => theme.color.main}; */
`;

const SectionHeader = styled.h2`
  color: ${({ theme, dark }) =>
    dark ? theme.color.background : theme.color.primary};
  padding-bottom: 0.25rem;
  border-bottom: 0.25rem solid
    ${({ theme, dark }) =>
      dark ? theme.color.background : theme.color.primary};
`;

const TechGrid = styled.ul`
  margin-left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  li {
    display: block;
    margin-bottom: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 0.5rem;
  }
`;

const MetaHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  margin-bottom: 0.5rem;
`;

const MetaItemContainer = styled.div`
  * {
    display: block;
    margin: 0;
    text-align: ${({ position }) => position};

    &:nth-child(2) {
      font-size: 16px;
    }
  }
  h3 {
    color: inherit;
    font-size: inherit;
    line-height: inherit;
  }
`;

const IntroHeading = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    height: fit-content;
    padding: 0.5rem 0.5rem;
  }
`;

const IntroContent = ({ name, title, bio }) => {
  const [devTitle] = title.toUpperCase().split(" AND ");
  return (
    <div>
      <IntroHeading>
        <h1>{name}</h1>
        <Button
          small
          outline
          onClick={() => {
            window.print();
          }}
        >
          <Icon name="file-download" />
        </Button>
      </IntroHeading>
      <p>
        <strong>{devTitle}</strong>
      </p>
      <MarkdownRenderer source={bio} />
    </div>
  );
};

const TechCategory = ({ title, data }) => {
  const heading = title !== "design" ? `${title}s` : title;
  return (
    <div>
      <strong>{heading.toUpperCase()}</strong>
      <TechGrid>
        {data.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </TechGrid>
    </div>
  );
};

const SectionContent = ({
  title,
  subTitle,
  location,
  started,
  finished,
  markdown
}) => (
  <div>
    <MetaHeaderContainer>
      <MetaItemContainer position="left">
        <h3>{title}</h3>
        <span>{subTitle}</span>
      </MetaItemContainer>
      <MetaItemContainer position="right">
        <span>{location}</span>
        <span>
          {started}
          {finished && ` - ${finished}`}
        </span>
      </MetaItemContainer>
    </MetaHeaderContainer>
    <MarkdownRenderer source={markdown} />
  </div>
);

const ResumePage = ({ data, location }) => {
  const {
    name,
    tagLine,
    emailAddress,
    phone,
    shortBio
  } = data.contentfulAuthor;
  const projects = data.allContentfulProject.nodes;
  const { education, employment } = data.allContentfulResume.nodes.reduce(
    (p, c) => {
      p[c.type].push(c);
      return p;
    },
    {
      education: [],
      employment: []
    }
  );
  const techByCategory = data.allContentfulTech.nodes
    .sort((a, b) => (a.competence === null) - (b.competence === null))
    .reduce(
      (acc, tech) => ({
        ...acc,
        [tech.category]: [...acc[tech.category], tech.name]
      }),
      {
        language: ["JavaScript", "Bash"],
        framework: [],
        platform: [],
        tool: ["Git"],
        design: []
      }
    );

  return (
    <Layout white page={location.pathname}>
      <PageContainer className="cv-pdf">
        <SideContainer>
          <>
            <IntroContent
              name={name}
              title={tagLine}
              bio={shortBio.childMarkdownRemark.rawMarkdownBody}
            />
            <SectionHeader>Skills</SectionHeader>
            {Object.keys(techByCategory).map(key => (
              <TechCategory key={key} title={key} data={techByCategory[key]} />
            ))}
            <SectionHeader>Personal Details</SectionHeader>
            <p>
              {emailAddress}
              <br />
              {phone}
              <br />
              www.vishpatel.com
              <br />
            </p>
          </>
        </SideContainer>
        <Container>
          <>
            <SectionHeader>Education</SectionHeader>
            {education.map(item => (
              <SectionContent
                key={item.title}
                title={item.title}
                subTitle={item.subTitle}
                location={item.location}
                started={item.started}
                finished={item.finished}
                markdown={item.description?.childMarkdownRemark.rawMarkdownBody}
              />
            ))}
          </>
          <>
            <SectionHeader>Employment</SectionHeader>
            {employment.map(item => (
              <SectionContent
                key={item.title}
                title={item.title}
                subTitle={item.subTitle}
                location={item.location}
                started={item.started}
                finished={item.finished}
                markdown={item.description?.childMarkdownRemark.rawMarkdownBody}
              />
            ))}
          </>
          <>
            <SectionHeader>Projects</SectionHeader>
            {projects.map(item => (
              <SectionContent
                key={item.name}
                title={item.name}
                subTitle={"Tech Stack: ".concat(item.techStack.join(", "))}
                started={item.started}
                finished={item.finished}
                markdown={item.description?.childMarkdownRemark.rawMarkdownBody}
              />
            ))}
          </>
        </Container>
      </PageContainer>
    </Layout>
  );
};

export default ResumePage;

export const query = graphql`
  {
    contentfulAuthor(name: { eq: "Vish Patel" }) {
      name
      tagLine
      emailAddress
      phone
      shortBio {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
    allContentfulResume {
      nodes {
        title
        type
        subTitle
        location
        started(formatString: "MMM YYYY")
        finished(formatString: "MMM YYYY")
        description {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
    }
    allContentfulProject(sort: { fields: started, order: DESC }) {
      nodes {
        name
        techStack
        started(formatString: "MMM YYYY")
        description {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
    }
    allContentfulTech(sort: { fields: competence, order: DESC }) {
      nodes {
        name
        category
        competence
      }
    }
  }
`;
