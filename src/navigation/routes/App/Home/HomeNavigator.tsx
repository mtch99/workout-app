import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


class BottomTabNavigator extends React.Component<{screens: any[]}, {MyState: number}> {
    bottomTabNavigator: React.ReactNode
    

    render(): React.ReactNode{
        const navigator = createBottomTabNavigator()

        return <></>
    }

    private createBottomTabNavigator(): React.ReactNode{
        const bottomTabNavigator = createBottomTabNavigator();
        return bottomTabNavigator;
    }

}

