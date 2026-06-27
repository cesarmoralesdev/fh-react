import type { Hero } from "./hero.interface";

export interface SummarInformationResponse {
    totalHeroes: number;
    strongestHero: Hero;
    smartestHero: Hero;
    heroCount: number;
    villainCount: number;
}
