import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

//Imort the root reducers
import rootReducer from './reducers/index'

import comments from './data/comments'
import comments from './data/posts'

// Create object for for the default data

const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store)

export default store