import styled from  'styled-components'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  div {
    display: flex;
  }

  .info {
    gap: 1rem;
  }

  p.select {
    cursor: pointer;
    width: 150px;
    padding: 1rem;
    text-align: center;

    &.active {
      background: #f71963;
      color: white;
    }
  }
`

export {
  Header
}