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
