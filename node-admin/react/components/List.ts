import styled from  'styled-components'

const List = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    display: flex;
    border-bottom: 2px solid #f71963;

    div {
      width: 50%;
    }
    
  }
`

export {
  List
}