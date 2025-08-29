import CommentsCard from "@/components/CommentsCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comments",
  description: "All comments",
};


export default async function Page() {
    const res = await fetch("https://dummyjson.com/comments");
    const data = await res.json(); 
    return (
        <>
            <CommentsCard title="Comments" data={data?.comments} />
        </>
    );
};
