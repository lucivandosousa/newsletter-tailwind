import articles from "../../../article.json"

import ArticleItem from "../articleItem"

export default function ArticleList() {
  return (
    <div className="mt-5 sm:mt-0 grid gap-5 m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px]">
      {articles.map((article, index) => (
        <ArticleItem
          key={index}
          {...article}
        />
      ))}
    </div>
  )
}
