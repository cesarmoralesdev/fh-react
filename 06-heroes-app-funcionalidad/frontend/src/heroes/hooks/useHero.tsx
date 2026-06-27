import { useQuery } from "@tanstack/react-query";
import { getHero } from "../actions/get-hero.action";

export const useHero = (idSlug: string) => {
    return useQuery({
        queryKey: ['hero-selected'],
        queryFn: () => getHero(idSlug),
        retry: false,
    });
}
