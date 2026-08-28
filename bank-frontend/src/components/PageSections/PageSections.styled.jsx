import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding-bottom: 64px;
`;

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  padding: 96px 24px 72px;
  background: linear-gradient(135deg, var(--accent-bg), transparent 70%);
  border-bottom: 1px solid var(--border);
`;

export const HeroEyebrow = styled.span`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--accent);
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: 48px;
  max-width: 720px;
  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

export const HeroSubtitle = styled.p`
  max-width: 560px;
  font-size: 18px;
  line-height: 155%;
  color: var(--text);
`;

export const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  text-align: center;
`;

export const SectionSubtitle = styled.p`
  max-width: 640px;
  margin: -12px auto 0;
  text-align: center;
  color: var(--text);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 28px 24px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg);
  text-align: left;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: var(--shadow);
    transform: translateY(-2px);
  }
`;

export const CardIcon = styled.div`
  font-size: 28px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: var(--text-h);
`;

export const CardText = styled.p`
  margin: 0;
  font-size: 15px;
  color: var(--text);
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;

  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-h);
  }

  input,
  textarea {
    font: inherit;
    padding: 10px 12px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text-h);
    resize: vertical;

    &:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 1px;
      border-color: var(--accent);
    }
  }

  button {
    margin-top: 8px;
    padding: 11px 16px;
    border: none;
    border-radius: 6px;
    background: var(--accent);
    color: #fff;
    font-weight: 600;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;
