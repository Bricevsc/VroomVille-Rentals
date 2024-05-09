import SloganSection from "./SloganSection";

const Header = () => {
  return (
    <div>
      <div
        className="bg-cover bg-bottom bg-no-repeat h-[70vh] p-3"
        style={{ backgroundImage: "url('/images/backgroundImage.webp')" }}
      >
        {/* <ReasearchBar/> */}
      </div>
      <SloganSection />
    </div>
  );
};

export default Header;
