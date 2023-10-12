import { useState } from 'react';
import { useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Scroll from './components/scroll/scroll.component';
import './App.css';

const App = () => {
  
  const [searchField, setSearchField] = useState('');
  const [title, setTitle] = useState('Monster Rolodex');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  console.log('rendered')
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      setMonsters(users);
    })    
  }, [])
    
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])



  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value; 
    setTitle(searchFieldString);
  }

  
  return (
    <div className="App">
      <h1 className='app-title'>{ title }</h1>
      <Scroll>
        <SearchBox 
          className='search-box'
          placeholder='search monsters' 
          onChangeHandler={ onSearchChange } 
        />
        <br />
        <SearchBox 
          className='search-box'
          placeholder='change title' 
          onChangeHandler={ onTitleChange } 
        />
        <CardList monsters={filteredMonsters} />
      </Scroll>
     </div>
  )
}


export default App;
