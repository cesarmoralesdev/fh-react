import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "../search/ui/SearchControls"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useEffect, useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { useQuery } from "@tanstack/react-query"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"


export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all');

  // useEffect(() => {
  //   getHeroesByPageAction().then()
  // }, []);

  const { data } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5,
  })

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron title="Superhero Universe" description="Discover, explore, and manage your favorite superheroes and villains" />

        {/* Breadcrumbs */}
        <CustomBreadcrumbs currentPage="Super heroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Controls */}
        {/* Advanced Filters */}
        <SearchControls />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={() => setActiveTab('favorites')}>
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setActiveTab('villains')}>
              Villains (2)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <h1>Todos los personajes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            <h1>Favoritos!!!</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            <h1>Heroes!!!</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            <h1>Villanos!!!</h1>
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  )
}
