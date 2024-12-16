import { useCallback, useEffect, useState } from 'react'
import { UserItem } from './types';

import './App.css'
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
        console.log(response.data);
        setData(() => response.data)
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
    <div className='app'>
      <SearchPanel setFilter={setFilter} />
      <div className='table__wrapper'>
        {data && data.length > 0 ?
          <table className='user__table'>
            <UsersHeader data={data} sortData={sortData} sortType={sortType} />
            <UsersList data={data} setChosenItem={setChosenItem} searchFilter={searchFilter} />
          </table>
          :
          <div>Loading...</div>
        }
      </div>
      {activeItem ? <ChosenRow item={activeItem} /> : <div> Chose Row</div>}
    </div>
  )
}

export default App
