import React, {FC} from 'react'
import {Text, View } from 'react-native';
import styles from './styles'
import * as types from './types'


const Header: FC<types.Props> = (props): JSX.Element | null => {
  return (
    <View style={styles.container}>

        {/* Title */}
        <Text style={styles.title}>
          {props.title}
        </Text> 

        {/* Description */}
        <Text style={styles.description}>
          {props.description}
        </Text>
        
    </View>
  )
}


export default Header