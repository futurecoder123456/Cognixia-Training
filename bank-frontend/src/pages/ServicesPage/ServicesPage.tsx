import { CardGrid, InfoCard, PageFrame, PageIntro } from '../shared/PageStyles.styled'

const services = [
  ['Everyday banking', 'Spend, save, and manage your cash flow with less effort.'],
  ['Growth planning', 'Build a practical plan for the goals that matter most to you.'],
  ['Personal guidance', 'Talk with a real person when a decision deserves more context.'],
]

const ServicesPage = () => (
  <PageFrame>
    <PageIntro>
      <p className="eyebrow">What we offer</p>
      <h1>Tools for where life takes you.</h1>
      <p className="lead">From your first account to your next big milestone, Cognixia keeps the essentials simple and the possibilities open.</p>
    </PageIntro>
    <CardGrid>
      {services.map(([title, description], index) => (
        <InfoCard key={title}>
          <span className="card-index">0{index + 1}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </InfoCard>
      ))}
    </CardGrid>
  </PageFrame>
)

export default ServicesPage