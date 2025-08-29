import RecipesCard from "@/components/RecipesCard";

export default async function Recipes() {
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json()
    return (
        <>
            <RecipesCard title="Recipes" data={data?.recipes} />
        </>
    );
};
