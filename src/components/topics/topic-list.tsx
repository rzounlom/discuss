import { Chip } from "@nextui-org/react";
import { FC } from "react";
import Link from "next/link";
import { Topic } from "@prisma/client";
import { db } from "@/db";
import paths from "@/paths";

interface TopicListProps {}

const TopicList: FC<TopicListProps> = async ({}) => {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic: Topic) => (
    <div key={topic.id}>
      <Link href={paths.topicShow(topic.slug)}>
        <Chip color="warning" variant="shadow">
          {topic.slug}
        </Chip>
      </Link>
    </div>
  ));

  return <div className="flex gap-2 flex-wrap mt-2">{renderedTopics}</div>;
};

export default TopicList;
