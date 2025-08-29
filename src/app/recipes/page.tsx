import RecipesCard from "@/components/RecipesCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipes",
  description: "All food recipes",
};


export default async function Recipes() {
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json()
    return (
        <>
            <RecipesCard title="Recipes" data={data?.recipes} />
        </>
    );
};
