import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import EditBook from './page/EditBook'
import DeleteBook from './page/DeleteBook'
import CreateBook from './page/CreateBook'
import Home from './page/Home'
import ShowBook from './page/ShowBook'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App