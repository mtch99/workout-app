import React from 'react';
import {TouchableOpacity } from 'react-native';
import CaptureIcon from './Components/icons/CaptureIcon';
import styles from './styles'


const CaptureButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <CaptureIcon size={26}/>
    </TouchableOpacity>
  )
};

export default CaptureButton;
