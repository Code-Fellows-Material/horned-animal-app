# Project Notes

- Strict Mode was causing react to render the component twice causing the new array to fill up twice. Looks like this can be avoided wit stateful components. 
  - Resource: https://stackoverflow.com/questions/61532410/why-my-render-method-is-react-called-twice