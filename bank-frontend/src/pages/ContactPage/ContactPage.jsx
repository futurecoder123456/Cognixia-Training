import { useState } from 'react';
import {
  PageWrapper,
  Hero,
  HeroEyebrow,
  HeroTitle,
  HeroSubtitle,
  Section,
  SectionTitle,
  SectionSubtitle,
  ContactForm,
} from '../../components/PageSections/PageSections.styled';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      <Hero>
        <HeroEyebrow>Contact</HeroEyebrow>
        <HeroTitle>We&apos;re here to help</HeroTitle>
        <HeroSubtitle>
          Have a question about your account or our services? Send us a
          message and our team will get back to you.
        </HeroSubtitle>
      </Hero>

      <Section>
        <SectionTitle>Send us a message</SectionTitle>
        <SectionSubtitle>
          Fill out the form below and we&apos;ll respond within one business day.
        </SectionSubtitle>

        {submitted ? (
          <p className="success-message" style={{ textAlign: 'center' }}>
            Thanks for reaching out! We&apos;ll be in touch soon.
          </p>
        ) : (
          <ContactForm onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>

            <label htmlFor="email">
              Email
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>

            <label htmlFor="message">
              Message
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </label>

            <button type="submit">Send Message</button>
          </ContactForm>
        )}
      </Section>
    </PageWrapper>
  );
};

export default ContactPage;
