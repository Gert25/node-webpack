/**
 * Normal div component that displays a string
 * @param text {string} [text = 'Hallo World'] - The text that should be displayed in the text
 * @param  color {string} [color = 'red'] - specify color for DOM element
 * @return  {Object} return a Dom Element
 */

export default ( text = 'Hallo World', color ='red') => {
      let element  =  document.createElement('div')
      
      element.innerHTML = text
      element.style.color = color

      return element
}