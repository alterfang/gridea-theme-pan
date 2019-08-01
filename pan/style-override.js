const generateOverride = (params = {}) => {
  let result = ''

  
  if (params.indeximg && params.indeximg !== '') {
    result += `
   header {background-image:url(${params.indeximg});}
    
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