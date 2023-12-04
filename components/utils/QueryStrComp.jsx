import { View, Text } from 'react-native'
import React from 'react'
import queryString from 'query-string'

const QueryStrComp = () => {
    console.log(queryString.parse('foo[]=1&foo[]=2&foo[]=3', {arrayFormat: 'bracket'}))
    console.log(queryString.parse('foo[0]=1&foo[1]=2&foo[3]=3', {arrayFormat: 'index'}))
  return (
    <View>
      <Text>QueryStrComp</Text>
    </View>
  )
}

export default QueryStrComp;