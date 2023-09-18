import { client } from "@/app/libs/client";
import Headline from "@/app/_component/element/HeadLine";
import BlogCard from "@/app/_component/blog/Card";
import styles from "@/app/_component/element/default.module.css";
import blog from "@/app/_component/blog/blog.module.css";

async function getContents() {
  const response = await client.get({
    customRequestInit: {
      cache: "force-cache",
    },
    endpoint: "blog",
  });

  return response.contents;
}

export const metadata = {
  title: "ブログ",
  description: "microCMSからデータを取得したブログです。",
};

export default async function Home() {
  const contents = await getContents();
  console.log(contents);
  return (
    <section className={styles.page}>
      <div className={styles.wrapper}>
        <Headline text="Blog" subText="ブログ" />
        <ul className={blog.list}>
          {contents.map((contents: any, n: number) => {
            return (
              <li key={n}>
                <BlogCard
                  number={contents.number}
                  title={contents.title}
                  id={contents.id}
                ></BlogCard>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
