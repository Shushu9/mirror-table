import { useCallback, useEffect, useState } from 'react'
import datas from './data.json';
import { ISort, UserItem } from './types';

import './App.css'
import UsersList from './components/users-list/users-list';
import UsersHeader from './components/users-header/users-header';
import ChosenRow from './components/chosen-row/chosen-row';
import SearchPanel from './components/search-panel/search-panel';


function App() {
  const [data, setData] = useState<null | UserItem[]>(null)
  const [activeItem, setActiveItem] = useState<null | UserItem>(null)
  const [searchFilter, setSearchFilter] = useState<string>("")
  // const [sortType, setSortType] = useState<ISort>({ name: 'По названию ↑', sort: '-title' });


  useEffect(() => {
    if (!data) {
      setData(() => datas)
      // console.log(datas)
    }
  }, [data])

  const sortData = useCallback((header: string) => {
    if (data) {
      const newdata = [...data].sort((a, b) => (a[header] > b[header] ? 1 : -1));
      setdata(() => newdata);
    }
  }, [data])

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
            <UsersHeader data={data} sortData={sortData} />
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
