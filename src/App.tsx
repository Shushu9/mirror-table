import { useCallback, useEffect, useState } from 'react'
import { UserItem } from './types';
import styled from 'styled-components';
import datas from './data.json';

import UsersList from './components/users-list/users-list';
import UsersHeader from './components/users-header/users-header';
import ChosenRow from './components/chosen-row/chosen-row';
import SearchPanel from './components/search-panel/search-panel';
import axios, { AxiosResponse } from 'axios';
import sortRowsData from './utils/sort-rows-data';


function App() {
  const [data, setData] = useState<null | UserItem[]>(null)
  const [activeItem, setActiveItem] = useState<null | UserItem>(null)
  const [searchFilter, setSearchFilter] = useState<string>("")
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    axios.get<UserItem[]>('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
      .then((response: AxiosResponse) => {
        setData(() => response.data)
      }).catch(function () {
        setData(() => datas)       // добавил статические данные, что бы можно было посмотреть приложение на vercel
      });
  }, []);


  const sortData = useCallback((header: string) => {
    if (data) {
      setData(() => sortRowsData(header, data, sortType));
    }

    if (sortType !== header) {
      setSortType(() => header)
    } else {
      setSortType(() => '-' + header)
    }

  }, [data, sortType])

  const setChosenItem = useCallback((item: UserItem) => {
    setActiveItem(() => item)
  }, [])

  const setFilter = useCallback((word: string) => {
    setSearchFilter(() => word)
  }, [])


  return (
    <AppWrap>
      <SearchPanel setFilter={setFilter} />
      <TableWrapper>
        {data && data.length > 0 ?
          <UserTable>
            <UsersHeader data={data} sortData={sortData} sortType={sortType} />
            <UsersList data={data} setChosenItem={setChosenItem} searchFilter={searchFilter} />
          </UserTable>
          :
          <div>Loading...</div>
        }
      </TableWrapper>
      {activeItem ? <ChosenRow item={activeItem} /> : <h2> Chose Row</h2>}
    </AppWrap>
  )
}

export default App


const AppWrap = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const UserTable = styled.table`
  width: 100 %;
  border-collapse: collapse;
`;

const TableWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;