import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs, type Breadcrumb } from "@/components/custom/CustomBreadcrumbs";
import { useLocation } from "react-router";

const SearchPage = () => {
  const getBreadcrumbs = (): Breadcrumb[] => {
    const { pathname } = useLocation();
    // const pathname = '/heroes/1/edit';
    //    /search
    //    /heroes/1
    //    /heroes/1/edit
    const pathData = pathname.slice(1);
    const arrayPath: string[] = pathData.split('/');
    if (arrayPath.length === 1) return [];
    return arrayPath.map((item, index) => {
      const url = `/${arrayPath.slice(0, index + 1).join('/')}`;
      return {
        label: item,
        to: url
      };
    });
  }
  return (
    <>
      <CustomJumbotron title="Busqueda de Superhero" description="Discover, explore, and manage your favorite superheroes and villains" />
      <CustomBreadcrumbs
        currentPage="Buscador de heroes"
        breadcrumb={getBreadcrumbs()}
      />
      <HeroStats />
      <SearchControls />
    </>
  )
}
export default SearchPage;