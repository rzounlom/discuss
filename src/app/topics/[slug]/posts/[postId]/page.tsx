import CommentCreateForm from "@/components/comments/comment-create-form";
import CommentList from "@/components/comments/comment-list";
import { FC } from "react";
import Link from "next/link";
import PostShow from "@/components/posts/post-show";
import { fetchCommentByPostId } from "@/db/queries/comments";
import paths from "@/paths";
interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

const PostShowPage: FC<PostShowPageProps> = ({ params }) => {
  const { slug, postId } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"<"}Back to {slug}
      </Link>
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
};

export default PostShowPage;
