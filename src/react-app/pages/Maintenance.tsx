import MediaHero from "../components/MediaHero";
import tsLogo from "../assets/media/amk-logo-vertical-ko.svg";
import WaveGradientBackground from "../components/WaveGradientBackground";



export default function Maintenance() {

  return (
    <>
      {/* Hero */}
      <MediaHero
        textColor="#fff"
        className="coming-soon-hero" 
        overlayContent={
          <><div className="p-4 d-flex flex-column align-items-center">
            <img
              src={tsLogo}
              className="logo image-fluid"
              alt="AMK Logo"
            />
            <p
              className="text-uppercase mt-4 text-center"
              style={{ letterSpacing: "0.15em", maxWidth: "600px" }}
            >
              Site is undergoing maintenance. Please check back later!
            </p>
            </div>
          </>
        }
          background={<WaveGradientBackground />}
      />
    </>
  );
}
