import { ChangeEvent, FormEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}
/*このコードは、SearchBarコンポーネントにpropsとして渡されるオブジェクトの型を定義しています。
SearchBarPropsという名前のインターフェースを定義し、その中にonSearchプロパティを定義しました。onSearchプロパティは、
引数としてstring型のqueryを取り、何も返さない(void)関数であるということを示しています。つまり、SearchBarコンポーネントは
、onSearch関数を受け取り、ユーザーが検索バーに入力したテキストを引数として、その関数を呼び出すことができます。*/

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  /*
このコードはReactの関数コンポーネントSearchBarを定義しています。
このコンポーネントは、SearchBarPropsというインターフェースを受け取り、onSearchという名前のプロパティが含まれていることを示しています。
onSearchは、文字列型の引数queryを受け取らねばなりません。
このコンポーネントでは、フォーム内のテキスト入力フィールドでqueryの状態を管理しています。テキストが入力された際には、
handleChange関数が呼び出されてqueryの状態を更新します。また、フォームが送信されたときには、handleSubmit関数が呼び出されて、
onSearchコールバック関数を引数queryで呼び出します。つまり、ユーザーがテキストを入力して検索ボタンをクリックすると、onSearchコールバック関数が呼び出され
、検索クエリを処理するために使用されます。*/
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-screen max-w-3xl "
    >
      <input
        type="text"
        className="border border-gray-300 rounded-r py-2 px-4 w-full focus:outline-none focus:border-blue-500"
        value={query}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-red-600 text-white py-2 px-6 rounded-r hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
/*このコードは、検索バーを作成するためのReactコンポーネントです。SearchBarPropsというインターフェースを定義しています。
このインターフェースには、onSearchという関数が含まれています。onSearchは、検索バーでクエリを入力したときに呼び出されます。
SearchBarコンポーネントには、useStateフックを使用して、ユーザーが入力した検索クエリを管理するための状態があります。
ユーザーが入力すると、handleChange関数が呼び出され、setQueryを使用して、クエリを更新します。
フォームが送信されると、handleSubmit関数が呼び出され、onSearch関数が呼び出されます。最後に、フォームは、
検索バーと検索ボタンを含むHTMLフォームを返します。*/
