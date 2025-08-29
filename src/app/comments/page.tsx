import CommentsCard from "@/components/CommentsCard";

export default async function Page() {
    const res = await fetch("https://dummyjson.com/comments");
    const data = await res.json(); 
    return (
        <>
            <CommentsCard title="Comments" data={data?.comments} />
        </>
    );
};
