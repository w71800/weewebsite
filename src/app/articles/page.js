import ArticleCard from "@/components/ArticleCard"
import LoadmoreButton from "@/components/LoadmoreButton"
import '@/styles/articles.sass'
import { articlesLoader } from "@/utils/utils"

export default function Articles() {
  return (
    <div id="articles">
      <div className="container">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        {/* <LoadmoreButton onClick={ articlesLoader } /> */}
      </div>
    </div>
  )
}