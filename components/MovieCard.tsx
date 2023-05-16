interface MovieCardProps {
  title: string;
  overview: string;
  posterPath: string;
}

export const MovieCard = ({ title, overview, posterPath }: MovieCardProps) => {
  const imageUrl = posterPath
    ? `http://image.tmdb.org/t/p/w500${posterPath}`
    : "/no-image-available.png";

  return (
    <div className="bg-white rounded shadow p-4">
      <img className="w-full h-64 rounded mb-4" src={imageUrl} alt="" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-500">
        {overview.length > 150 ? `${overview.substring(0, 150)}...` : overview}
      </p>
    </div>
  );
};

/* このコードは、映画の情報を表示するためのコンポーネント MovieCard を定義しています。MovieCard コンポーネントは、タイトル、
概要、ポスター画像のパスなどのプロパティを受け取り、それらの情報を使用してカードを描画します。
ポスター画像のパスが与えられた場合、カードにその画像を表示し、そうでない場合は代替の画像を表示します。
また、概要の文字数が150を超える場合は、最初の150文字と ... を表示します。 */
