
import { useState, useEffect, useLayoutEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate'
import NewsCard from './NewsCard'
import SearchBar from '../SearchBar'
import articlesJSON from './articles'
import { Title, ContentBackgroundColor, BackgroundHighlightColor, TextHighlightColor } from '../../styles'
import media from '../../media'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`

const FlexboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${media.Medium}px) {
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

const Hidden = styled.div`
  width: 300px;
  visibility: hidden;
  @media (max-width: ${media.Medium}px) {
    display: none;
  }
`

const StyledTitle = styled(Title)`
`

const StyledForm = styled.form`
  display: flex;
  width: 300px;
  @media (max-width: ${media.Medium}px) {
    width: 100%;
  }
`

const StyledSearchBar = styled(SearchBar)`
  flex: 100%;
`

const StyledButton = styled.button`
  min-width: 80px;
  height: 29px;
  font-size: 16px;
`

const StyledNewsCard = styled(NewsCard)`
  margin: 10px 0;
`

const NoResults = styled.div`
  text-align: center;
`

const StyledReactPaginate = styled(ReactPaginate)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  list-style-type: none;
  padding: 0 5rem;
  font-weight: bold;
  li a, li.previous a, li.next a {
    background-color: ${ContentBackgroundColor};
    padding: 0.5rem 1rem;
    margin: 0 3px;
    border-radius: 10px;
    cursor: pointer;
    &:hover:not(.disabled a) {
      background-color: ${BackgroundHighlightColor};
    }
  }
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: ${BackgroundHighlightColor};
    color: ${TextHighlightColor};
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
  imgFile: string;
  imgAlt: string;
  objectPosition: string;
}

function Cards (props: {cards: Array<CardProps>}) {
  return (
    <div>
      {props.cards && props.cards.map(card => (
          <StyledNewsCard key={card.id} {...card} />
      ))}
    </div>
  )
}

const itemsPerPage = 5
function NewsFeed ({ className } : { className?: string }) {
  const [pageNumber, setPageNumber] = useState(0)
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')
  const [articles, setArticles] = useState<CardProps[]>(articlesJSON)
  const [currentItems, setCurrentItems] = useState<CardProps[]>(articlesJSON.slice(0, itemsPerPage))
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(itemsPerPage * pageNumber)

  const [searchParams, setSearchParams] = useSearchParams()

  // Sets state based on query params
  useLayoutEffect(() => {
    const searchParam = searchParams.get('search')
    searchParam ? setSearch(searchParam) : setSearch('')
    const pageParam = searchParams.get('page')
    let pageNum = 0
    if (pageParam && typeof parseInt(pageParam) === 'number') {
      pageNum = parseInt(pageParam) - 1
    }
    setPageNumber(pageNum)
    setItemOffset(itemsPerPage * pageNumber)
  })

  // Run when search state changes
  useLayoutEffect(() => {
    setArticles(articlesJSON.filter((article) => {
      const searchInput = search.trim().toLowerCase()
      const title = article.title.toLowerCase()
      return title.includes(searchInput) || article.tags.some(tag => tag.includes(searchInput))
    }))
    setInput(search)
  }, [search])

  // Run when articles or page changes
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(articles.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(articles.length / itemsPerPage))
  }, [articles, itemOffset, itemsPerPage])

  const handlePageClick = (event: any) => {
    const searchParams: {[key:string]: string} = (search === '' ? { page: event.selected + 1 } : { search, page: event.selected + 1 })
    setSearchParams(searchParams)
    const newOffset = (event.selected * itemsPerPage) % articlesJSON.length
    setItemOffset(newOffset)
  }

  const handleSearch = () => {
    (input !== '') ? setSearchParams({ search: input }) : setSearchParams({})
  }

  return (
    <Container className={className}>
      <FlexboxContainer>
        <Hidden/>
        <StyledTitle>News</StyledTitle>
        <StyledForm onSubmit={(e) => e.preventDefault()}>
          <StyledSearchBar handleChange={setInput} value={input} placeholder="Search news..."/>
          <StyledButton onClick={handleSearch}>Search</StyledButton>
        </StyledForm>
      </FlexboxContainer>
      {currentItems.length ? <Cards cards={currentItems}/> : <NoResults>No results found.</NoResults>}
      {articles.length > itemsPerPage &&
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
    }
    </Container>
  )
}

export default NewsFeed
