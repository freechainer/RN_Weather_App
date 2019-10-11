import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const WeatherGroup = {
    0: {
        icon: 'weather-sunny',
        colors: ['#f5af19', '#f12711'],
    },
    2: {
        icon: 'weather-lingtnig',
        colors: ['#ffe11c', '#919191'],
    },
    3: {
        icon: 'weather-rainy',
        colors: ['#FFFFFF', '#6DD5FA', '#2980B9']
    },
    5: {
        icon: 'weather-pouring',
        colors: ['#00c6fb','#005bea']
    },
    6: {
        icon: 'weather-snowy',
        colors: ['#7DE2FC', '#B9B6E5'],
    },
    7: {
        icon: 'weather-fog',
        colors: ['#BDC3C7', '#2C3E50'],
    },
    8: {
        icon: 'weather-cloudy',
        colors: ['#D7D2CC', '#304352'],
    },
}

const Forecast = ({data}) => {
    // 받아온 데이터를 100으로 나눠 코드를 설정합니다. ex) 코드가 702번일 경우 id는 7, 809번일 경우 id는 8
    const id = Math.floor(data.weather[0].id/100);

    // id가 800번이면 WeatherGroup의 Sunny 데이터를, 800번이 아니라면 id번째의 데이터를 받아서 Weather에 넣는다. 80x번대는 구름, 800번대는 맑음을 의미하지만 둘 다 100으로 나눴을 경우 8이 나오기 때문에 구분함.
    const Weather = (id==800 ? WeatherGroup[0] : WeatherGroup[id]);

    return (
        <LinearGradient colors={Weather.colors} style={styles.container}>
            <MaterialCommunityIcons name={Weather.icon} size={100} style={styles.icon}/>
            <Text style={styles.bigText}>
                {data.weather[0].main}
            </Text>
            <Text style={styles.mainText}>
                {data.weather[0].description}
            </Text>
            <Text style={styles.bigText}>
                {Math.floor(data.main.temp-273.15)}℃
            </Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: width,
        alignItems: "center",
        justifyContent: "center",
    },
    bigText: {
        fontSize: 50,
        textAlign: "center",
        fontWeight: '600',
        margin: 10,
    },
    mainText: {
        fontSize: 35,
        textAlign: "center",
    },
});

export default Forecast;