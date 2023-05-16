import Head from "next/head";
import MovieSearch from "../components/MovieSearch";
export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Movie Database</title>
        <meta name="description" content="A simple movie database for users" />
      </Head>
      <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold md:text-8xl text-white">
          Movie Database
        </h1>
        <MovieSearch />
      </main>
    </div>
  );
}
/*
これはNext.jsで作成されたアプリケーションのホームページを定義しています。
このコードは、ページタイトル、メタタグ、背景色、ページの中央に配置されたMovieSearchコンポーネントを含む、
1つのdiv要素を返します。MovieSearchコンポーネントは、映画の検索機能を提供するために使用されます。メタデータには、
ページのタイトルと説明が含まれています。*/
