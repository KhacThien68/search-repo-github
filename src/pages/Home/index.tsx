import { Input, Pagination, PaginationProps } from 'antd'
import React, { useEffect, useState } from 'react'
import { getRepositories } from './store/thunk'
import useDebounce from '../../helpers/useDebounce'
import classes from './index.module.scss'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changePage, changePageSize, selectData, selectPage, selectPageSize, selectTotalRecords } from './store/slice'
import { UserList } from './userList'

export default function HomePage() {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState('')

  // useSelector
  const totalRecords = useAppSelector(selectTotalRecords)
  const usersData = useAppSelector(selectData)
  const page = useAppSelector(selectPage)
  const pageSize = useAppSelector(selectPageSize)

  console.log(usersData)

  const onChangePagination: PaginationProps['onChange'] = (
    current,
    newPageSize,
  ) => {
    if(current !== page) {
      dispatch(changePage(current))
    }
    if (newPageSize !== pageSize) {
      dispatch(changePageSize(newPageSize))
    }
  }

  const handleSearch = (searchCharacters: string) => {
    if (searchCharacters) {
      dispatch(
        getRepositories({
          q: searchCharacters,
          page: 1,
          per_page: 10,
        }),
      )
    } 
  }

  const debouncedSearch = useDebounce(search, 1000)

  useEffect(() => {
    if (debouncedSearch) {
      handleSearch(debouncedSearch)
      dispatch(changePage(1))
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch])

  return (
    <div className={classes.homePage}>
      <div className={classes.searchHeader}>
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
      <div>Tìm kiếm kết quả cho: {debouncedSearch}</div>
      <div>Số kết quả tìm kiếm được: {totalRecords}</div>
      <UserList value={usersData} />
      <Pagination
        showSizeChanger
        onChange={onChangePagination}
        total={totalRecords}
        pageSize={pageSize}
        defaultCurrent={1}
        hideOnSinglePage
        current={page}
      />
    </div>
  )
}
