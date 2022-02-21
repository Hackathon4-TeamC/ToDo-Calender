/* eslint-disable */
import { AxiosInstance } from 'axios'
import mockServer from 'axios-mock-server'
import mock0 from './user/list'

export default (client?: AxiosInstance) => mockServer([
  {
    path: '/user/list',
    methods: mock0
  }
], client, '')
