import {
  PageWrapper,
  Hero,
  HeroEyebrow,
  HeroTitle,
  HeroSubtitle,
  Section,
  SectionTitle,
  SectionSubtitle,
  Grid,
  Card,
  CardIcon,
  CardTitle,
  CardText,
} from '../../components/PageSections/PageSections.styled';

const AboutPage = () => (
  <PageWrapper>
    <Hero>
      <HeroEyebrow>About Us</HeroEyebrow>
      <HeroTitle>Built on trust, driven by technology</HeroTitle>
      <HeroSubtitle>
        We&apos;re a digital-first bank on a mission to make managing money
        simple, transparent, and secure for everyone.
      </HeroSubtitle>
    </Hero>

    <Section>
      <SectionTitle>Our Values</SectionTitle>
      <SectionSubtitle>
        The principles that guide every product decision we make.
      </SectionSubtitle>
      <Grid>
        <Card>
          <CardIcon>🤝</CardIcon>
          <CardTitle>Transparency</CardTitle>
          <CardText>
            No hidden fees, no fine print — just straightforward banking.
          </CardText>
        </Card>
        <Card>
          <CardIcon>🛡️</CardIcon>
          <CardTitle>Security First</CardTitle>
          <CardText>
            Every feature is built with your safety and privacy as the priority.
          </CardText>
        </Card>
        <Card>
          <CardIcon>🌱</CardIcon>
          <CardTitle>Continuous Growth</CardTitle>
          <CardText>
            We keep improving our platform based on real customer feedback.
          </CardText>
        </Card>
      </Grid>
    </Section>
  </PageWrapper>
);

export default AboutPage;
