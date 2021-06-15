import React, {Component} from 'react';
import {openPopupWidget} from 'react-calendly';
import {Appbar} from 'react-native-paper';
import {Linking} from 'react-native';
import {
  View,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  ToastAndroid,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  Image,
  Alert,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const showToastHistory = () => {
      ToastAndroid.show('Health History Pressed ', ToastAndroid.SHORT);
    };
    const showToastDiet = () => {
      ToastAndroid.show('Diet Plan Pressed ', ToastAndroid.SHORT);
    };
    return (
      <SafeAreaView>
        {/* App Bar  */}
        <Appbar.Header style={styles.header}>
          <Appbar.Action
            icon="menu"
            onPress={() => Alert.alert('Menu Button pressed')}
          />
          <Appbar.Action
            icon="dots-vertical"
            onPress={() => Alert.alert('3 Dots Button pressed')}
            style={styles.icon}
          />
        </Appbar.Header>

        <View
          style={{
            marginLeft: '10%',
            marginTop: '4%',
            backgroundColor: '#daedf0',
            width: '79%',
            height: '6%',
          }}>
          <Text style={styles.textTop}>Please wait for Payment approval:</Text>
        </View>

        <View
          style={{
            padding: 25,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                color: '#1f8e46',
                fontSize: 16,
                marginLeft: '2%',
                fontWeight: 'bold',
                fontFamily: 'Entypo',
              }}>
              Coaching:
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={{color: '#ff9cff'}}>Create +</Text>
            </TouchableOpacity>
          </View>
          {/* Calendar Image and button */}
          <View
            style={{
              marginTop: '11%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              style={styles.tinyLogo}
              source={require('./img/calendar.png')}
            />

            <TouchableOpacity
              style={styles.scheduleBtn}
              onPress={() => {
                Linking.openURL('https://calendly.com/info-27679/15min');
              }}>
              <Text>SCHEDULE</Text>
            </TouchableOpacity>
          </View>
          {/* Health history Image and button */}
          <View
            style={{
              marginTop: '32%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              style={styles.helpLogo}
              source={require('./img/helpp.png')}
            />

            <TouchableOpacity
              style={styles.scheduleBtn}
              onPress={() => showToastHistory()}>
              <Text>HEALTH HISTORY</Text>
            </TouchableOpacity>
          </View>
          {/* Diet plan image and button */}
          <View
            style={{
              marginTop: '40%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image style={styles.tinyLogo} source={require('./img/diet.png')} />

            <TouchableOpacity
              style={styles.scheduleBtn}
              onPress={() => showToastDiet()}>
              <Text>DIET PLAN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1f8e46',
  },
  icon: {
    width: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textTop: {
    justifyContent: 'center',
    marginLeft: '15%',
    marginTop: '2%',
    fontSize: 14,
  },
  button: {
    borderColor: '#ff9cff',
    width: '21%',
    height: '110%',
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
  },
  scheduleBtn: {
    position: 'relative',
    top: '5%',
    marginTop: '5%',
    width: '41%',
    height: '60%',
    borderColor: 'black',
    borderRadius: 1,
    alignItems: 'center',
    borderWidth: 1,
  },
  tinyLogo: {
    tintColor: '#1f8e46',
    width: '30%',
    height: '234%',
  },
  helpLogo: {
    tintColor: '#1f8e46',
    width: '37%',
    height: '325%',
  },
});
