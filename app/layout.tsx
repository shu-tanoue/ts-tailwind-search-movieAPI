import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Movie Database",
  keywords: ["movie", "database"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
/*このコードは、Reactアプリケーションのルートレイアウトを定義しています。ルートレイアウトは、アプリケーション全体の共通部分を定義し、
全てのページで共有されるコンポーネントです。
metadataオブジェクトは、アプリケーションのメタデータ（タイトル、説明、キーワードなど）を定義しています。
Poppinsコンポーネントは、Google Fontsからフォントをダウンロードし、スタイルを設定するために使用されます。
RootLayoutコンポーネントは、poppinsフォントのスタイルを設定し、childrenプロパティで渡されたコンポーネントを包含するHTMLを返します。
<html>と<body>タグを含むことで、アプリケーション全体のHTML構造を定義しています。 */
