import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import Forecast from './Forecast';

const API_KEY = '059c37c5fa437a2c575d5b9ea2938d86'; // 사이트에서 발급받은 KEY를 상수로 정의한다.

export default class WeatherProject extends React.Component {

    state ={
        isLoaded: false,
        forecast: null,
    } // 컴포넌트의 로딩이 완료되면
    
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            position => {
                // console.log(position);
                // 위도와 경도 값을 넘깁니다.
                this._getWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                this.setState({ error:error })
            }
        )
    }
    
    _getWeather = (lat, lon) => {
        // API 호출 코드 작성
        fetch(`https://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then(Response => Response.json())
        .then(json => {
            // console.log(json)
            this.setState({
                forecast: json,
                isLoaded: true
            })
        })
    }

    render(){
        // Forecast 컴포넌트를 담을 공간
        content=null;
        isLoaded = this.state.isLoaded;

        //만약 받아온 데이터가 null이 아니라면
        if(this.state.forecast != null){
            //Forecast 컴포넌트에 받아온 데이터를 props로 주고 content라는 변수에 담아줘
            content = (                                          
                <Forecast data={this.state.forecast} />
            )
        }
        
        return (
            <View style={styles.container}>
                {
                    isLoaded ? content : <ActivityIndicator color="#0000ff" />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})