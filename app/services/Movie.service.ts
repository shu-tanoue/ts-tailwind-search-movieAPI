import axios from "axios";

const API_KEY = process.env.NEXT_APP_API_KEY;
const API_BASE_URL = process.env.NEXT_APP_API_BASE_URL;

const client = axios.create({
  baseURL: API_BASE_URL,
  params: { api_key: API_KEY },
});

export const searchMovies = async (query: string) => {
  try {
    const response = await client.get("/search/movie", {
      params: { query },
    });

    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.error("Couldn't get the data");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
/*
このコードは、外部の映画データベースAPIに対して検索リクエストを送信し、その結果を返すための関数を定義しています。
APIのURLとAPIキーは、環境変数として定義されており、Axiosライブラリを使用してAPIにアクセスしています。関数の引数には、検索クエリが含まれており、
それに基づいてAPIから返された映画の結果を処理して、その結果を返します。この関数は、検索に失敗した場合は空の配列を返し、コンソールにエラーメッセージを表示します。*/
