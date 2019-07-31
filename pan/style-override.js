const generateOverride = (params = {}) => {
  let result = ''

  
  if (params.indeximg && params.indeximg !== '') {
    result += `
   header {background-image:url(${params.indeximg});}
    
    `
  }

  


  console.log('result', result)

  return result
}

module.exports = generateOverride