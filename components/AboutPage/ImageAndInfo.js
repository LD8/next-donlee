import styled from 'styled-components'

export default function ImageAndInfo() {
  return (
    <SImageAndInfoSection id='SImageAndInfoSection'>
      <div className='my-portrait'>
        <img src='/portrait.png' alt='my portrait' />
      </div>
      <div className='my-info'>
        <h2>Peiwen Li</h2>
        <h4>Full-stack Developer</h4>
        <p>
          Passionate in developing software that brings joy and peace to our
          lives
        </p>
      </div>
    </SImageAndInfoSection>
  )
}

const SImageAndInfoSection = styled.section`
  width: 100%;
  margin: 3rem auto 3rem auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .my-portrait {
    display: flex;
    justify-content: center;
    width: 40%;
    @media only screen and (max-width: 800px) {
      width: 100%;
    }
    img {
      width: 50%;
      height: 50%;
      max-width: 200px;
      border-radius: 20%;
      box-shadow: 3px 3px 0 rgba(10, 5, 30, 0.8);
      background-image: linear-gradient(
        45deg,
        rgba(230, 210, 200, 1),
        rgba(200, 220, 220, 0.8)
      );
      filter: contrast(1.9);
    }
  }

  .my-info {
    width: 60%;
    text-align: left;
    color: var(--title);
    text-shadow: 3px 3px 0 rgba(10, 5, 30, 0.8);
    font-weight: 400;
    h2 {
      text-transform: uppercase;
      margin-bottom: 5px;
      font-size: calc(2vmin + 25px);
    }
    h4,
    p {
      margin: 0 0 20px 5px;
    }
    p {
      margin-bottom: 0;
    }
    @media only screen and (max-width: 800px) {
      width: calc(100vw - 8px);
      text-align: center;
      h2 {
        margin: 20px 0 5px 0;
      }
      h4,
      p {
        margin: 0 10px 10px;
      }
    }
  }
`
