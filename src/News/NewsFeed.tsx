
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate'
import NewsCard from './NewsCard'
import SearchBar from '../SearchBar'
import articlesJSON from '../json/articles.json'
import { Title } from '../styles'
import media from '../media'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  min-height: 1225px;
`

const FlexboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${media.Medium}px) {
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

const StyledSearchBar = styled(SearchBar)`
  display: flex;
  align-items: center;
  @media (max-width: ${media.Medium}px) {
    display: block;
    width: 100%;
  }
`

const Hidden = styled.div`
  width: 250px;
  display: hidden;
`

const StyledNewsCard = styled(NewsCard)`
  margin: 25px 0;
`

const StyledReactPaginate = styled(ReactPaginate)`
  margin-top: auto;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  list-style-type: none;
  padding: 0 5rem;
  li a, li.previous a, li.next a {
    padding: 0.5rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`

interface CardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  imgFile: string | null;
  imgAlt: string | null;
}

function Cards (props :{cards: Array<CardProps>}) {
  return (
    <div>
      {props.cards && props.cards.map(card => (
          <StyledNewsCard key={card.id} {...card} />
      ))}
    </div>
  )
}

function useQuery () {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

const itemsPerPage = 5
function NewsFeed () {
  const [pageNumber, setPageNumber] = useState(0)
  const [input, setInput] = useState('')
  // eslint-disable-next-line no-undef
  const [currentItems, setCurrentItems] = useState(Array<CardProps>)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(itemsPerPage * pageNumber)

  const query = useQuery()
  useEffect(() => {
    const pageQuery = query.get('page')
    let pageNum = 0
    if (pageQuery && typeof parseInt(pageQuery) === 'number') {
      pageNum = parseInt(pageQuery) - 1
    }
    setPageNumber(pageNum)
    setItemOffset(itemsPerPage * pageNumber)
  })

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(articlesJSON.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(articlesJSON.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  const navigate = useNavigate()
  const handlePageClick = (event: any) => {
    navigate(`?page=${event.selected + 1}`)
    const newOffset = (event.selected * itemsPerPage) % articlesJSON.length
    setItemOffset(newOffset)
  }

  return (
    <Container>
      <FlexboxContainer>
        <Hidden/>
        <Title>News</Title>
        <StyledSearchBar handleChange={setInput} value={input} placeholder="Filter articles.."/>
      </FlexboxContainer>
      <Cards cards={currentItems}/>
      <StyledReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        activeClassName="active"
        forcePage={pageNumber}
      />
    </Container>
  )
}

export default NewsFeed
