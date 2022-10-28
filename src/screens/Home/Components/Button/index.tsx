import React from 'react';
import {Text, TouchableOpacity } from 'react-native';
import CaptureIcon from './CaptureButton/Components/icons/CaptureIcon';
import styles from './styles'

type Props = {
  label: string
};

const Button = (props: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <CaptureIcon size={12}/>
    </TouchableOpacity>
  )
};

export default Button;