import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

const SearchPage = () => {
  return (
    <>
      <CustomJumbotron title="Busqueda de Superhero" description="Discover, explore, and manage your favorite superheroes and villains" />
      <HeroStats />
      <SearchControls />
    </>
  )
}
export default SearchPage;