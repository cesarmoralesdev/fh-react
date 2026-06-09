import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";

const SearchPage = () => {
  return (
    <>
      <CustomJumbotron title="Busqueda de Superhero" description="Discover, explore, and manage your favorite superheroes and villains" />
      <HeroStats />
    </>
  )
}
export default SearchPage;