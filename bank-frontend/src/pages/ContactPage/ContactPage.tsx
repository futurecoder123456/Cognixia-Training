import { PageFrame, PageIntro, SplitSection } from '../shared/PageStyles.styled'

const ContactPage = () => (
  <PageFrame>
    <PageIntro>
      <p className="eyebrow">We are here</p>
      <h1>Let&apos;s talk money, clearly.</h1>
      <p className="lead">Questions are part of the process. Our team is ready to help you find a useful answer.</p>
    </PageIntro>
    <SplitSection>
      <div>
        <h2>Start a conversation</h2>
        <p>Reach us Monday through Friday, 8:00 am to 6:00 pm.</p>
      </div>
      <div>
        <p><strong>hello@cognixiabank.com</strong></p>
        <p><strong>+1 (800) 555-0142</strong></p>
        <p>242 Meridian Avenue<br />New York, NY 10013</p>
      </div>
    </SplitSection>
  </PageFrame>
)

export default ContactPage