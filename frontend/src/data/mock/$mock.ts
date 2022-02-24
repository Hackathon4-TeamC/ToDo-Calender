/* eslint-disable */
import { AxiosInstance } from 'axios'
import mockServer from 'axios-mock-server'
import mock0 from './users/login'
import mock1 from './users/list'

export default (client?: AxiosInstance) => mockServer([
  {
    path: '/users/login',
    methods: mock0
  },
  {
    path: '/users/list',
    methods: mock1
  }
], client, '')
