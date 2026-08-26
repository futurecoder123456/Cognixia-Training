import styled from 'styled-components'

export const PageFrame = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  padding: 76px 32px 92px;
  text-align: left;

  @media (max-width: 640px) {
    padding: 52px 24px 68px;
  }
`

export const PageIntro = styled.div`
  max-width: 700px;
  margin-bottom: 52px;

  h1 {
    margin: 10px 0 16px;
  }

  .lead {
    max-width: 600px;
    font-size: 1.15rem;
    line-height: 1.6;
  }
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const InfoCard = styled.article`
  min-height: 170px;
  padding: 24px;
  background: #fffdf8;
  border: 1px solid #dfe4dc;
  border-radius: 8px;

  .card-index {
    color: #c75b3d;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.1em;
  }

  h2 {
    margin: 20px 0 10px;
    font-size: 1.35rem;
  }
`

export const SplitSection = styled.section`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 64px;
  align-items: start;
  padding-top: 8px;

  h2 {
    margin: 0 0 12px;
    font-size: 1.5rem;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`