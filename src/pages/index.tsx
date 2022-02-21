import { Banner } from "../components/Banner";
import { ContinentSlider } from "../components/ContinentsSlide";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      <TravelTypes />

      <ContinentSlider />
    </>
  )
}