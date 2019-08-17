const generateOverride = (params = {}) => {
  let result = ''

  
  if (params.indeximg && params.indeximg !== '') {
    result += `
    header {background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${params.indeximg});}
    
    `
  }

  if (typeof params.valine !== 'undefined' && !params.valine) {
    result += `
    .valine {
        display: none;
      }
    `
  }


  console.log('result', result)

  return result
}

module.exports = generateOverride