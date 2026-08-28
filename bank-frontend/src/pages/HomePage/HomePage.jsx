import { HomePageWrapper } from './HomePage.styled';
import {
  PageWrapper,
  Hero,
  HeroEyebrow,
  HeroTitle,
  HeroSubtitle,
  CTAButton,
  Section,
  SectionTitle,
  SectionSubtitle,
  Grid,
  Card,
  CardIcon,
  CardTitle,
  CardText,
} from '../../components/PageSections/PageSections.styled';

const HomePage = () => (
  <HomePageWrapper>
    <PageWrapper>
      <Hero>
        <HeroEyebrow>Modern Banking</HeroEyebrow>
        <HeroTitle>Banking that moves as fast as you do</HeroTitle>
        <HeroSubtitle>
          Manage accounts, send payments, and track your balance in real time —
          all from one secure dashboard.
        </HeroSubtitle>
        <CTAButton to="/register">Open an Account</CTAButton>
      </Hero>

      <Section>
        <SectionTitle>Why bank with us</SectionTitle>
        <SectionSubtitle>
          Everything you need to manage your money, backed by bank-grade security.
        </SectionSubtitle>
        <Grid>
          <Card>
            <CardIcon>🔒</CardIcon>
            <CardTitle>Secure by Design</CardTitle>
            <CardText>
              Your data and funds are protected with industry-standard encryption
              and authentication.
            </CardText>
          </Card>
          <Card>
            <CardIcon>⚡</CardIcon>
            <CardTitle>Instant Transfers</CardTitle>
            <CardText>
              Move money between accounts and pay others in seconds, not days.
            </CardText>
          </Card>
          <Card>
            <CardIcon>📊</CardIcon>
            <CardTitle>Real-Time Insights</CardTitle>
            <CardText>
              Track balances and account activity as it happens from any device.
            </CardText>
          </Card>
        </Grid>
      </Section>
    </PageWrapper>
  </HomePageWrapper>
);

export default HomePage;
