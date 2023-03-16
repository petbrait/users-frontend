import { ViewWrapper } from "@/styles/components";
import Logo from "@/components/Logo";
import ServicesSlider from "@/components/ServicesSlider";
import ProfileBadge from "@/components/ProfileBadge";
import LostPets from "@/pages/losts-pets";
import Chat from "@/components/Chat";

const Index = () => {
  return (
    <div>
      <ViewWrapper>
        <Logo />
        <ServicesSlider />
        {/* <Chat /> */}
        <LostPets />
      </ViewWrapper>
      <ProfileBadge />
    </div>
  );
};

export default Index;
