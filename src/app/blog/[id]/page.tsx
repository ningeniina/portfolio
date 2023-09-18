import { Metadata } from "next";
import { getDetail } from "@/app/libs/client";
import Headline from "@/app/_component/element/HeadLine";
import Button from "@/app/_component/element/Button";
import blog from "@/app/_component/blog/blog.module.css";
import styles from "@/app/_component/element/default.module.css";

type Props = {
  params: {
    id: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getDetail(params.id);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
    },
  };
}

export default async function Home({ params }: Props) {
  const data = await getDetail(params.id);
  return (
    <section className={styles.page}>
      <div className={styles.wrapper}>
        <Headline text="Blog" subText="ブログ" />
        <article className={blog.article}>
          <h1 className={blog.blogTitle}>{data.title}</h1>
          <div
            className={blog.body}
            dangerouslySetInnerHTML={{
              __html: data.body,
            }}
          />
        </article>
        <Button href="/blog" text="ブログ一覧" />
      </div>
    </section>
  );
}
