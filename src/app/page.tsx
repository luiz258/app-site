import { AboutComponent } from "./components/about-section";
import { ContactComponent } from "./components/contact-section";
import { HeaderComponent } from "./components/header/index";
import { MainComponent } from "./components/main-section/index";
import { TechComponent } from "./components/tech-section";



export default function Home() {
  return (
    <div>
     <HeaderComponent/>
      <MainComponent />
      <TechComponent />
      <AboutComponent />
      <ContactComponent />
    </div>
  );
}
