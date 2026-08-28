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

const ServicesPage = () => (
  <PageWrapper>
    <Hero>
      <HeroEyebrow>Services</HeroEyebrow>
      <HeroTitle>Banking products built around you</HeroTitle>
      <HeroSubtitle>
        From everyday spending to long-term savings, explore the accounts and
        tools designed to fit your life.
      </HeroSubtitle>
    </Hero>

    <Section>
      <SectionTitle>What we offer</SectionTitle>
      <SectionSubtitle>
        Pick the accounts and services that match your financial goals.
      </SectionSubtitle>
      <Grid>
        <Card>
          <CardIcon>💳</CardIcon>
          <CardTitle>Checking Accounts</CardTitle>
          <CardText>
            Fee-free everyday accounts with instant transfers and a debit card.
          </CardText>
        </Card>
        <Card>
          <CardIcon>💰</CardIcon>
          <CardTitle>Savings Accounts</CardTitle>
          <CardText>
            Competitive interest rates to help your balance grow over time.
          </CardText>
        </Card>
        <Card>
          <CardIcon>📈</CardIcon>
          <CardTitle>Investment Tools</CardTitle>
          <CardText>
            Track and grow your portfolio alongside your everyday banking.
          </CardText>
        </Card>
        <Card>
          <CardIcon>🏦</CardIcon>
          <CardTitle>Business Accounts</CardTitle>
          <CardText>
            Simple tools to manage payroll, invoicing, and business expenses.
          </CardText>
        </Card>
        <Card>
          <CardIcon>🔁</CardIcon>
          <CardTitle>Recurring Payments</CardTitle>
          <CardText>
            Automate bills and transfers so you never miss a due date.
          </CardText>
        </Card>
        <Card>
          <CardIcon>📱</CardIcon>
          <CardTitle>Mobile Banking</CardTitle>
          <CardText>
            Full account access from any device, anywhere, anytime.
          </CardText>
        </Card>
      </Grid>
    </Section>
  </PageWrapper>
);

export default ServicesPage;
