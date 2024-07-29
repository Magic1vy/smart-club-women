import React from 'react';
import About from '../../entities/About/About';
import MissionVision from '../../entities/MissionVission/MissionVision';
import Founder from '../../entities/Founder/Founder';
import Members from '../../entities/Members/Members';
import SponsorsLine from '../../entities/SponsorsLine/ui/SponsorsLine';
import Header from '../../widgets/Header/Header';
import Hero from '../../entities/Hero/Hero';
import ContactForm from '../../features/ContactForm/ContactForm';
import Footer from '../../widgets/Footer/ui/Footer';
import ScrollToTopButton from '../../features/ScrollToTop/ScrollToTop';
import VideoEmbed from '../../entities/VideoEmbed/VideoEmbed';
import Services from '../../entities/Services/ui/Services';
import ReviewsMembers from '../../entities/ReviesMembers/ui/ReviewMembers';

const MainPage = () => {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <Hero />
      <About />
      <MissionVision />
      <Founder />
      <Members />
      <Services />
      <ReviewsMembers />
      <VideoEmbed />
      <SponsorsLine />
      <ContactForm />
      <Footer />
    </>
  )
}

export default MainPage