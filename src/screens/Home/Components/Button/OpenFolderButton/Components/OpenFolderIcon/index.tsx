import React, {FC} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as types from './types';
import styles from './styles'



const OpenFolderIcon: FC<types.Props> = (props): JSX.Element | null => {
  return (
    <Icon 
        name="folder-open"
        size={props.size}
        style={styles.container}
    />
  )
}


export default OpenFolderIcon;