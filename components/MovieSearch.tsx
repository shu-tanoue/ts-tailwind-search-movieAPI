"use client";
import { useState } from "react";
import { MovieCard } from "./MovieCard";
import SearchBar from "./SearchBar";
import { searchMovies } from "../app/services/movie.service";

export const MovieSearch = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query: string) => {
    const results = await searchMovies(query);
    setMovies(results);
  };
  /*このコンポーネントは useState フックを使用して movies という状態を保持しています。また、handleSearch 関数は、
   query という引数を受け取り、searchMovies 関数を使ってその検索クエリに基づく映画の検索結果を取得し、results として状態に更新する役割を持ちます。
   searchMovies は、外部 API に対して映画の検索リクエストを送信し、結果を返す関数であると仮定されます。*/
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
/*
このコードは、映画を検索し、検索結果を表示するためのReactコンポーネントを定義しています。
コンポーネントは、映画のタイトル、概要、およびポスター画像を表示するために、他の2つのカスタムReactコンポーネントである
MovieCardとSearchBarを使用しています。また、useStateフックを使用して、検索結果の映画リストを保持し、
ユーザーが検索バーに入力したクエリに応じて結果を更新します。searchMovies関数は、別のモジュールで定義され、The Movie Database APIを
使用して、クエリに基づいて映画を検索し、検索結果を返します。*/
