import React from 'react';
import Controller from './types'
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import Button from './Components/Button';
import CaptureButton from './Components/Button/CaptureButton';
import OpenFolderButton from './Components/Button/OpenFolderButton';
import Header from './Components/Header';



export default function HomeScreen() {
    return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Header 
              title={Controller.headerTitle}
              description={Controller.headerDescription}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <CaptureButton />
            <OpenFolderButton />
          </View>
        </View>
    )
} 

