import React from 'react';
import {TouchableOpacity } from 'react-native';
import OpenFolderIcon from './Components/OpenFolderIcon';
import styles from './styles'


const OpenFolderButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <OpenFolderIcon size={26}/>
    </TouchableOpacity>
  )
};

export default OpenFolderButton;
