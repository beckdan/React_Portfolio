import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Page from './components/Page'
import Footer from './components/Footer'

function App() {
  const [pages] = useState([
    {
      name: 'about'
    },
    {
      name: 'projects'
    },
    {
      name: 'contact'
    }
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div className="App">
    <Header>
      <Nav
        pages = {pages}
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
      >

      </Nav>
    </Header>

    <Page currentPage = {currentPage}></Page>



    <Footer/>


    </div>
  );
}

export default App;
