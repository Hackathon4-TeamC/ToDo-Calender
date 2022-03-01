/* eslint-disable */
import { AxiosInstance } from 'axios'
import mockServer from 'axios-mock-server'
import mock0 from './users/register'
import mock1 from './users/login'
import mock2 from './users/list'

export default (client?: AxiosInstance) => mockServer([
  {
    path: '/users/register',
    methods: mock0
  },
  {
    path: '/users/login',
    methods: mock1
  },
  {
    path: '/users/list',
    methods: mock2
  }
], client, '')
