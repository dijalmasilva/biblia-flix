'use client'

import SearchBook from "@/components/search-book/search-book";
import {useEffect, useState} from "react";
import {getBooksByName} from "@/helpers/bible-helper/bible-helper";
import {BookType} from "@/models/book";
import SearchInput from "@/components/search-input/search-input";
import SafeArea from "@/components/safe-area/safe-area";

const Search = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [books, setBooks] = useState<BookType[]>([])
  const [recentBooks, setRecentBooks] = useState<BookType[]>([])

  useEffect(() => {
    if (localStorage) {
      const searchStorage = localStorage.getItem('recent-books')
      if (!searchStorage) return

      const recentBooks = JSON.parse(searchStorage) as BookType[]
      setRecentBooks(recentBooks.reverse())
    }
  }, []);

  useEffect(() => {
    if (searchText.length >= 2) {
      setBooks(getBooksByName(searchText.trim()).sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }))
      return
    }

    if (!searchText.length) {
      setBooks([])
    }
  }, [searchText]);

  const onChangeSearch = (value: string) => {
    setSearchText(value)
  }

  return (
    <SafeArea>
      <div className="flex-col mb-8">
        <SearchInput onChange={onChangeSearch} value={searchText} placeholder="Digite o nome do livro"/>
        {
          books.length === 0 && searchText.length < 2 &&
          (
            (
              <div className="mt-6 flex flex-col gap-4">
                {
                  recentBooks.length === 0 &&
                  (
                    <>
                      <h1 className="ml-4 text-2xl font-bold">Sugestões</h1>
                      <div className="flex flex-col gap-1">
                        <SearchBook slug="gn" title="Gênesis"/>
                        <SearchBook slug="dn" title="Daniel"/>
                        <SearchBook slug="mt" title="Mateus"/>
                        <SearchBook slug="atos" title="Atos"/>
                        <SearchBook slug="ap" title="Apocalipse"/>
                      </div>
                    </>
                  )
                }
                {
                  recentBooks.length > 0 && (
                    <>
                      <h1 className="ml-4 text-2xl font-bold">Buscas recente</h1>
                      <div className="flex flex-col gap-1">
                        {
                          recentBooks.map(book => {
                            return (
                              <SearchBook key={book.abbrev} slug={book.abbrev} title={book.name}/>
                            )
                          })
                        }
                      </div>
                    </>
                  )
                }
              </div>
            )
          )
        }
        {
          books.length > 0 &&
          (
            <div className="mt-6 flex flex-col gap-4">
              <h1 className="ml-4 text-2xl font-bold">Encontrados</h1>
              <div className="flex flex-col gap-1">
                {
                  books.map(book => {
                    return (
                      <SearchBook key={book.abbrev} slug={book.abbrev} title={book.name}/>
                    )
                  })
                }
              </div>
            </div>
          )
        }
        {
          books.length === 0 && searchText.length > 2 &&
          (
            <div className="mt-6 flex flex-col gap-4">
              <h1 className="ml-4 text-2xl font-bold">Nenhum livro encontrado</h1>
            </div>
          )
        }
      </div>
    </SafeArea>
  )
}

export default Search