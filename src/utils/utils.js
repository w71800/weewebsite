export const isAtoZ = (char) => {
  const regex = /^[A-Za-z]$/
  return regex.test(char)
}

export const truncateContent = (content, num = 150) => {
  const words = []
  let engStock = ''
  content.split('')
    .forEach( char => {
      if(isAtoZ(char)) {
        engStock += char
      } else {
        if(engStock.length !== 0) {
          words.push(engStock)
          engStock = ''
        }
        words.push(char)
      }
  })
  words.push(engStock)
  return `${words.slice(0, num).join('')} ...`
}

function createArticlesLoader() {
  let nextPage = 0
  return function() {
    // 去取得遠端資料後
    nextPage += 1
    console.log(nextPage);
  }
}
export const articlesLoader = createArticlesLoader()


function keywordIsExist(article, input) {
  let { title, tags } = article
  return title.includes(input) || tags.some( tag => tag.includes(input) )
}
export const articleFilter = (source, input) => {
  let result = []

  result = source.filter( article => keywordIsExist(article, input) )
  return result
}