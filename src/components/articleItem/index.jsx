export default function ArticleItem({ title, text, tags, image, alt }) {
  return (
    <div className="p-5 bg-gray-100 dark:bg-gray-200 sm:rounded-xl sm:shadow-xl flex flex-col items-center gap-3">
      <h3 className="font-bold">{title}</h3>
      <div>
        {text}
      </div>
      <div className="flex gap-1 left-0 w-full">
        {tags.map(tag => <span key={tag} className="font-bold">#{tag}</span>)}
      </div>
    </div>
  )
}
