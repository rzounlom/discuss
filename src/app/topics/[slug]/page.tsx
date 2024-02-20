import { FC } from "react";
import PostCreateform from "@/components/posts/post-create-form";

interface TopicsShowPageProps {
  params: {
    slug: string;
  };
}

const TopicsShowPage: FC<TopicsShowPageProps> = ({ params }) => {
  const { slug } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
      </div>
      <div>
        <PostCreateform slug={slug} />
      </div>
    </div>
  );
};

export default TopicsShowPage;
