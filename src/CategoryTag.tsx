import styled from 'styled-components'

interface CategoryProps {
  category: string;
  className?: string
}

const categoryColors: {[key: string]: string} = {
  wow: '#009AE4',
  la: '#a5794a'
}

const categoryText: {[key: string]: string} = {
  wow: 'WoW',
  la: 'LA'
}

const Category = styled.span<{category: string}>`
  font-size: 14px;
  background-color: ${props => categoryColors[props.category]};
  font-weight: bold;
  border-radius: 5px;
  padding: 5px;
`

function CategoryTag (props: CategoryProps) {
  return (
    <Category {...props}>{categoryText[props.category]}</Category>
  )
}

export default CategoryTag
