import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import useDebounce from '../../helpers/useDebounce'

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [totalResult, setTotalResult] = useState(0)
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)

  const handleSearch = (searchCharacters: string) => {
    if (searchCharacters) {
      // if (searchCharacters) {
      //   fetch(
      //     `https://api.github.com/search/users?q=${searchCharacters}&page=1`,
      //     {
      //       method: 'GET',
      //     },
      //   )
      //     .then((response) => response.json())
      //     .then((data) => {
      //       if (data.total_count !== undefined) {
      //         setTotalResult(data.total_count)
      //         return setUsers((pre) => [...pre, ...data.items])
      //       }
      //     })
      //     .catch((error) => console.log(error))
      // }
    } else {
      // return []
    }
  }

  const debouncedSearch = useDebounce(search, 1000)

  useEffect(() => {
    if (debouncedSearch) {
      setPage(1)
      if (search) {
        setUsers([])
        handleSearch(debouncedSearch)
      }
    } else {
      setTotalResult(0)
      setUsers([])
    }
  }, [debouncedSearch, search])

  useEffect(() => {
    if (search) {
      // fetch(`https://api.github.com/search/users?q=${search}&page=${page}`, {
      //   method: 'GET',
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     if (page === 1) {
      //       return setUsers(data.items)
      //     } else if (data.items) {
      //       return setUsers((prev) => [...prev, ...data.items])
      //     } else {
      //       setUsers(users)
      //     }
      //   })
      //   .catch((error) => console.error(error))
    } else {
      // setTotalResult(0)
      // setUsers([])
    }
  }, [page, search])
  return (
    <div className="home-page">
      <div className="search-header">
        <div className="github-icon_container">Khắc Thiện</div>
        <h1>Khắc Thiện</h1>
        <Input
          value={search}
          placeholder="Search for username..."
          allowClear
          style={{
            width: '80%',
            maxWidth: '768px',
            height: '48px',
            fontSize: '20px',
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>Tìm kiếm kết quả cho: {search}</div>
      <div>Số kết quả tìm kiếm được: {totalResult}</div>

      {/* <InfiniteScroll
        dataLength={users.length} //This is important field to render the next data
        next={() => setPage((pre) => pre + 1)}
        hasMore={users.length < totalResult}
      >
        <UserList value={users} />
      </InfiniteScroll> */}
    </div>
  )
}
