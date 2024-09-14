import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import movieNightBg from '../assets/movienight.jpg';
import ticketBg from '../assets/ticket-bg.jpg';
import blueBg from '../assets/blue.jpg';
import freewillyPoster from '../assets/freewilly.jpg';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const HeroImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${movieNightBg});
  background-size: cover;
  background-position: center;
  position: relative;
  margin: 0;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    filter: blur(5px);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #333;
  z-index: 1;
  background-image: url(${ticketBg});
  background-size: cover;
  width: 300px; // Approximately 2 inches on most screens
  height: 150px; // Adjust as needed
  padding: 20px 30px;
  font-family: 'Playfair Display', serif;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  // Create clipped circular corners
  clip-path: polygon(
    0% 15px, 15px 0%, calc(100% - 15px) 0%, 100% 15px,
    100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0% calc(100% - 15px)
  );

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 2px dashed #333;
    pointer-events: none;
    clip-path: polygon(
      0% 5px, 5px 0%, calc(100% - 5px) 0%, 100% 5px,
      100% calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 0% calc(100% - 5px)
    );
  }
`;

const TicketContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const AdmitOne = styled.span`
  font-size: 0.8rem;
  margin-bottom: 5px;
  font-weight: bold;
`;

const EventTitle = styled.span`
  font-size: 1.8rem; // Increased from 1.5rem
  font-weight: bold; // Added bold
  margin-bottom: 5px;
`;

const EventSubtitle = styled.span`
  font-size: 0.8rem;
`;

const Tagline = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 0 0 #c7b299;
  font-family: 'Playfair Display', serif;
`;

const CTAButton = styled(Link)`
  background-color: #c7b299;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  border: 3px solid #b09c7f;
  position: relative;
  overflow: hidden;
  font-family: 'Playfair Display', serif;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: all 0.5s;
  }

  &:hover:before {
    left: 100%;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(199, 178, 153, 0.4);
  }
`;

const MenuWrapper = styled.nav`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 15px; // Reduced gap between menu items
`;

const MenuItem = styled(Link)`
  color: black;
  text-decoration: none;
  font-family: 'Caveat', cursive;
  font-size: 1rem; // Reduced font size
  background-image: url(${blueBg});
  background-size: cover;
  background-position: center;
  padding: 3px 12px; // Reduced padding
  border-radius: 3px; // Reduced border-radius
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); // Reduced shadow

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 10%;
    width: 80%;
    height: 1px;
    background: black;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    filter: brightness(1.1);
    &::after {
      transform: scaleX(1);
    }
  }
`;

const DownArrow = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  animation: ${bounce} 2s infinite;

  &::after {
    content: '';
    width: 15px;
    height: 15px;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(45deg) translate(-3px, -3px);
  }
`;

const HomeContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  // Remove or comment out the following line:
  // scroll-snap-type: y mandatory;
`;

const HeroSection = styled.section`
  height: 100vh;
  // Remove or comment out the following line if it exists:
  // scroll-snap-align: start;
  position: relative;
`;

const WhiteSection = styled.section`
  background-color: white;
  padding: 50px 20px;
  box-sizing: border-box;
  position: relative;
  // Remove or comment out the following line if it exists:
  // scroll-snap-align: start;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    height: 100px;
    background-color: white;
    border-top-left-radius: 50% 100%;
    border-top-right-radius: 50% 100%;
  }
`;

const MissionStatement = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto 50px;
  line-height: 1.4;
`;

const EventSection = styled.section`
  background-color: #f8f8f8;
  padding: 50px 20px;
  font-family: 'Playfair Display', serif;
`;

const EventContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 40px;
`;

const EventInfo = styled.div`
  flex: 1;
`;

const FilmTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const EventDetails = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #555;
`;

const FilmInfo = styled.div`
  flex: 2;
  display: flex;
  gap: 20px;
`;

const FilmPoster = styled.img`
  width: 200px;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FilmSynopsis = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

function Home() {
  const scrollToWhiteSection = () => {
    const whiteSection = document.querySelector('.white-section');
    if (whiteSection) {
      window.scrollTo({
        top: whiteSection.offsetTop - 50, // Subtracting 50px to account for any potential fixed headers
        behavior: 'smooth'
      });
    }
  };

  return (
    <HomeContainer>
      <HeroSection>
        <HeroImage>
          <MenuWrapper>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/events">Events</MenuItem>
            <MenuItem to="/contact">Contact</MenuItem>
          </MenuWrapper>
          <HeroText>
            <TicketContent>
              <AdmitOne>ADMIT ONE</AdmitOne>
              <EventTitle>Dine 'n' Doc</EventTitle>
              <EventSubtitle>A Night of Food & Film</EventSubtitle>
            </TicketContent>
          </HeroText>
          <DownArrow onClick={scrollToWhiteSection} />
        </HeroImage>
      </HeroSection>
      <WhiteSection className="white-section">
        <MissionStatement>
          Bringing people together through the power of food and film, 
          creating meaningful conversations and unforgettable experiences 
          in living rooms across the Bay Area.
        </MissionStatement>
        <EventSection>
          <EventContainer>
            <EventInfo>
              <FilmTitle>Next Event</FilmTitle>
              <EventDetails>Date: June 15, 2023</EventDetails>
              <EventDetails>Time: 7:00 PM</EventDetails>
              <EventDetails>Location: 123 Main St, San Francisco, CA 94122</EventDetails>
            </EventInfo>
            <FilmInfo>
              <FilmPoster src={freewillyPoster} alt="Film Poster" />
              <div>
                <FilmTitle>Free Willy</FilmTitle>
                <FilmSynopsis>
                  "Free Willy" is a heartwarming family drama about a young boy who befriends a captive orca named Willy. As their bond grows, the boy becomes determined to return Willy to his natural habitat. This touching story explores themes of friendship, freedom, and environmental responsibility.
                </FilmSynopsis>
              </div>
            </FilmInfo>
          </EventContainer>
        </EventSection>
      </WhiteSection>
    </HomeContainer>
  );
}

export default Home;