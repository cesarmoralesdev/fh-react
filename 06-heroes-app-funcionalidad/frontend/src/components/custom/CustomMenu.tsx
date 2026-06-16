import { Link, useLocation } from "react-router"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu"
import { cn } from "@/lib/utils";

export const CustomMenu = () => {
    const { pathname } = useLocation();
    const isActive = (path: string) => path === pathname;

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(
                            navigationMenuTriggerStyle(),
                            isActive('/') && "bg-slate-200 focus:bg-slate-200 data-[active]:bg-slate-200" // Aseguramos el bg
                        )}>
                        <Link to="/">Inicio</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(
                            navigationMenuTriggerStyle(),
                            isActive('/search') && "bg-slate-200 focus:bg-slate-200 data-[active]:bg-slate-200" // Aseguramos el bg
                        )}>
                        <Link to="/search">Buscar superheroes</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>


    )
}
