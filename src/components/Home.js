import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import ticketBg from '../assets/ticket-bg.jpg'; // Correct import path

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f8f4e3;
  background-image: radial-gradient(#e5e5e5 1px, transparent 1px),
    radial-gradient(#e5e5e5 1px, #f8f4e3 1px);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
  padding: 2rem;
`;

const HeroImage = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url('https://source.unsplash.com/random/1200x800?documentary');
  background-size: cover;
  background-position: center;
  margin-bottom: 2rem;
  position: relative;
  border: 15px solid white;

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
  color: white;
  font-size: 2rem;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background-image: url(${ticketBg});
  background-size: cover;
  padding: 20px 40px;
  border-radius: 30px;
  font-family: 'Playfair Display', serif;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &::before {
    content: '';
    width: 100%;
    height: 30px;
    background-color: #c7b299;
    border-radius: 15px 15px 0 0;
  }

  &::after {
    content: '';
    width: 100%;
    height: 30px;
    background-color: #c7b299;
    border-radius: 0 0 15px 15px;
  }
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

function Home() {
  return (
    <HomeWrapper>
      <HeroImage>
        <HeroText>Welcome to Dine 'n' Doc</HeroText>
      </HeroImage>
      <Tagline>
        Good vibes, good food, and good conversation. Join us for a night of pizza, 
        thought-provoking documentaries, and meaningful discussions in living rooms across the Bay Area.
      </Tagline>
      <CTAButton to="/next-event">Join Our Next Event</CTAButton>
    </HomeWrapper>
  );
}

export default Home;