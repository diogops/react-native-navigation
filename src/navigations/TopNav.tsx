import { View, Text, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Active from '../pages/Active';
import Pending from '../pages/Pending';
import Cancelled from '../pages/Cancelled';
import Constants from 'expo-constants';
import { bold } from '../utils/fonts'
import { useState } from 'react';

const TopNavigator = createMaterialTopTabNavigator();
const _pages = [
    { name: 'SISTEMA DE REFRIGERAÇÃO  (G)', component: Active },
    { name: 'CONTADORES  (G)', component: Pending },
    { name: 'MOTOR DO VENTILADOR  (G)', component: Cancelled },
    { name: 'INSPEÇÃO (G)', component: Active },
    { name: 'TEMPERATURA - COMPRESSOR (G)', component: Active },
    { name: 'PRESSÃO - COMPRESSOR  (G)', component: Active },
    { name: 'MOTOR PRINCIPAL (G)', component: Active },
    { name: 'ÓLEO -  (G)', component: Active },
    { name: 'CUBÍCULO ELÉTRICO  (G)', component: Active },
    { name: 'OUTROS (G)', component: Active },
]
{/* <TopNavigator.Screen name='SISTEMA DE REFRIGERAÇÃO  (G)' component={Active} />
<TopNavigator.Screen name='CONTADORES  (G)' component={Active} />
<TopNavigator.Screen name='MOTOR DO VENTILADOR  (G)' component={Active} />
<TopNavigator.Screen name='INSPEÇÃO (G)' component={Active} />
<TopNavigator.Screen name='TEMPERATURA - COMPRESSOR (G)' component={Active} />
<TopNavigator.Screen name='PRESSÃO - COMPRESSOR  (G)' component={Active} />
<TopNavigator.Screen name='MOTOR PRINCIPAL (G)' component={Active} />
<TopNavigator.Screen name='ÓLEO -  (G)' component={Active} />
<TopNavigator.Screen name='CUBÍCULO ELÉTRICO  (G)' component={Active} />
<TopNavigator.Screen name='OUTROS (G)' component={Active} /> */}
export default function TopNav(props) {
    // const [pages, setPages] = useState(props?.pages)
    const [pages, setPages] = useState(_pages)

    if (!pages) return <View></View>

    return (
        <>
            <TopNavigator.Navigator
                screenOptions={{
                    tabBarStyle: [styles.container,],
                    tabBarIndicatorStyle: styles.indicator,
                    // tabBarItemStyle: [styles.item, { marginHorizontal: 10 }],
                    tabBarLabelStyle: styles.label,
                    // tabBarActiveTintColor: '#082591',
                    tabBarActiveTintColor: '#6E0606',
                    tabBarIndicatorContainerStyle: { margin: 2 },
                    tabBarInactiveTintColor: '#ABAAAA',
                    tabBarPressOpacity: 0.5,
                    // tabBarIndicatorContainerStyle: { margin: 5 },
                    // tabBarContentContainerStyle: { margin: 5 },
                    tabBarScrollEnabled: true,
                    tabBarPressColor: 'transparent',
                    tabBarGap: 1,
                }}>
                {pages.map((page, index) => {
                    return (
                        <TopNavigator.Screen
                            key={index}
                            name={page.name}
                            component={page.component}

                        // options={{
                        //     tabBarLabel: ({ focused }) => (
                        //         <Text style={{ ...styles.label, ...bold }}>{page.name}</Text>
                        //     )
                        // }}
                        />
                    )
                })}
            </TopNavigator.Navigator>
        </>
    )
}




const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#FFC107',
        width: '100%',
        alignSelf: 'center',
        // margin: 10
    },
    indicator: {
        backgroundColor: '#FFB007',
        position: 'absolute',
        zIndex: -1,
        bottom: '15%',
        height: '70%',
        borderRadius: 8,
    },
    item: {
        // paddingHorizontal: 10
    },
    label: {
        // ...bold,
        fontWeight: 'bold',
    }
})