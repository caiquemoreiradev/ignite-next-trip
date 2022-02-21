import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentCities } from "../../components/ContinentCities";
import { ContinentInfo } from "../../components/ContinentInfo";
import { Header } from "../../components/Header";

export default function Continent() {
    return (
        <>
            <Header />

            <ContinentBanner />

            <ContinentInfo />

            <ContinentCities />
        </>
    )
}