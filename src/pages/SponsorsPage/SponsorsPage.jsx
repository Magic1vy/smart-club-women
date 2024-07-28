import React from 'react';
import Sponsors from '../../entities/Sponsors/Sponsors';
import Collaborations from '../../entities/Collaborations/ui/Collaborations';
import ContactFormSponsors from '../../features/ContactFormSponsors/ContactFormSponsors';
import Footer from '../../widgets/Footer/ui/Footer';
import BackButton from '../../features/BackButton/BackButton';
import ReviewsSponsor from '../../entities/ReviewsSponsor/ui/ReviewsSponsor';

const SponsorsPage = () => {
  return (
    <>
    <BackButton />
      <>
          <Sponsors />
          <Collaborations />
          <ReviewsSponsor/>
          <ContactFormSponsors  />
      </>
      <Footer />
    </>
  )
}

export default SponsorsPage