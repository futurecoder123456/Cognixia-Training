import { CardGrid, InfoCard, PageFrame, PageIntro } from '../shared/PageStyles.styled'

const values = [
  ['01', 'Clarity', 'Banking should make your next decision easier, not add to the noise.'],
  ['02', 'Trust', 'We build useful products with transparent terms and thoughtful security.'],
  ['03', 'Momentum', 'Small, confident steps add up to a stronger financial future.'],
]

const AboutPage = () => (
  <PageFrame>
    <PageIntro>
      <p className="eyebrow">About Cognixia</p>
      <h1>Banking with a longer view.</h1>
      <p className="lead">We pair human guidance with quietly powerful tools to help you make progress with your money.</p>
    </PageIntro>
    <CardGrid>
      {values.map(([index, title, description]) => (
        <InfoCard key={index}>
          <span className="card-index">{index}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </InfoCard>
      ))}
    </CardGrid>
  </PageFrame>
)

export default AboutPage