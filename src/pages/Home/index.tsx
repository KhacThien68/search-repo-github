import { Input, Pagination, PaginationProps } from 'antd'
import React, { useEffect, useState } from 'react'
import { getUsers } from './store/thunk'
import useDebounce from '../../helpers/useDebounce'
import classes from './index.module.scss'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  changePage,
  changePageSize,
  changeSearchCharacters,
  selectData,
  selectPage,
  selectPageSize,
  selectSearchCharacters,
  selectTotalRecords,
} from './store/slice'
import { UserList } from './userList'
import { changeActiveMenu } from '../../app/slice'
import LogoIcon from '../../assets/logo/logoIcon.png'

export default function HomePage() {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState('')

  // useSelector
  const searchCharacters = useAppSelector(selectSearchCharacters)
  const totalRecords = useAppSelector(selectTotalRecords)
  const usersData = useAppSelector(selectData)
  const page = useAppSelector(selectPage)
  const pageSize = useAppSelector(selectPageSize)

  const onChangePagination: PaginationProps['onChange'] = (
    current,
    newPageSize,
  ) => {
    if (current !== page) {
      dispatch(changePage(current))
    }
    if (newPageSize !== pageSize) {
      dispatch(changePageSize(newPageSize))
    }
  }

  useEffect(() => {
    dispatch(changeActiveMenu(1))
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (searchCharacters) {
      dispatch(
        getUsers({
          q: searchCharacters,
          page: page,
          per_page: pageSize,
        }),
      )
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize, searchCharacters])

  const debouncedSearch = useDebounce(search, 1000)

  useEffect(() => {
    dispatch(changeSearchCharacters(debouncedSearch))
    dispatch(changePage(1))
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch])

  return (
    <div className={classes.homePage}>
      <div className={classes.searchHeader}>
        <div className={classes.iconContainer}>
          <img src={LogoIcon} alt="github icon" className="github-icon" />
        </div>
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
      {searchCharacters && (
        <>
          <div>Tìm kiếm kết quả cho: {searchCharacters}</div>
          <div>Số kết quả tìm kiếm được: {totalRecords}</div>
        </>
      )}
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
