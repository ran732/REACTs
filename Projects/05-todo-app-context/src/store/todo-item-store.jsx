import {createContext} from 'react'

export const todoitemsContext = createContext([{
        todoitems: [],
        addNewItem: () => {},
        DeleteItem: () => {},
      }]);