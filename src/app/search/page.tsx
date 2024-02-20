import { FC } from "react";
import PostList from "@/components/posts/post-list";
import { fethPostsBySearchTerm } from "@/db/queries/posts";
import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

const SearchPage: FC<SearchPageProps> = async ({ searchParams }) => {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  return (
    <div>
      <PostList fetchData={() => fethPostsBySearchTerm(term)} />
    </div>
  );
};

export default SearchPage;
