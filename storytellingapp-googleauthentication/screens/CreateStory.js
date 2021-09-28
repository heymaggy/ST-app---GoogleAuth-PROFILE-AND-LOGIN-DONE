import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import App from '../App';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class CreateStoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage: 'image1',
      dropDownHeight: 50,
      title: '',
      description: '',
      story: '',
      moral: '',
    };
  }

  loadFonts = async () => {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  };

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      let previewImages = {
        image1: require('../assets/story_image_1.png'),
        image2: require('../assets/story_image_2.png'),
        image3: require('../assets/story_image_3.png'),
        image4: require('../assets/story_image_4.png'),
        image5: require('../assets/story_image_5.png'),
      };
      return (
        <View style={{ flex: 1, backgroundColor: '#15193c' }}>
          <SafeAreaView style={styles.androidSafeArea} />

          <View style={styles.titleContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.logoStyle}
              />
            </View>
            <View style={styles.titleView}>
              <Text style={styles.titleText}>New Story</Text>
            </View>
          </View>
          <View style={{ flex: 0.85 }}>
            <ScrollView>
              <Image
                source={previewImages[this.state.previewImage]}
                style={styles.dropDownDefaultImg}
              />
              <View>
                <DropDownPicker
                  items={[
                    { label: 'Image 1', value: 'image1' },
                    { label: 'Image 2', value: 'image2' },
                    { label: 'Image 3', value: 'image3' },
                    { label: 'Image 4', value: 'image4' },
                    { label: 'Image 5', value: 'image5' },
                  ]}
                  defaultValue={this.state.previewImage}
                  containerStyle={{
                    height: 40,
                    borderRadius: 20,
                    marginBottom: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                  onOpen={() => {
                    this.setState({ dropDownHeight: 200 });
                  }}
                  onClose={() => {
                    this.setState({ dropDownHeight: 35 });
                  }}
                  style={{ backgroundColor: 'transparent' }}
                  itemStyle={{
                    justifyContent: 'flex-start',
                    color: 'white',
                  }}
                  dropDownStyle={{ backgroundColor: '#2f345d', margin: 10 }}
                  labelStyle={{
                    color: 'white',
                    fontFamily: 'Bubblegum-Sans',
                  }}
                  arrowStyle={{
                    color: 'white',
                    fontFamily: 'Bubblegum-Sans',
                  }}
                  onChangeItem={(item) => {
                    console.log(item.value);
                    this.setState({ previewImage: item.value });
                  }}
                />
              </View>
              <TextInput
                style={styles.inputFont}
                placeholder={'Title'}
                placeholderTextColor="white"
                onChangeText={(input) => {
                  this.setState({ title: input });
                }}></TextInput>

              <TextInput
                style={styles.inputFont}
                placeholder={'Description'}
                placeholderTextColor="white"
                multiline={true}
                numberOfLines={4}
                onChangeText={(input) => {
                  this.setState({ description: input });
                }}></TextInput>

              <TextInput
                style={styles.inputFont}
                placeholder={'Story'}
                placeholderTextColor="white"
                multiline={true}
                numberOfLines={4}
                onChangeText={(input) => {
                  this.setState({ story: input });
                }}></TextInput>

              <TextInput
                style={styles.inputFont}
                placeholder={'Moral'}
                placeholderTextColor="white"
                multiline={true}
                numberOfLines={4}
                onChangeText={(input) => {
                  this.setState({ moral: input });
                }}></TextInput>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  androidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleContainer: {
    flex: 0.07,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 0.4,
  },
  logoStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  titleText: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
  },
  titleView: {
    flex: 0.55,
    justifyContent: 'center',
  },
  dropDownDefaultImg: {
    height: RFValue(250),
    width: '93%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputFont: {
    height: RFValue(40),
    borderRadius: RFValue(10),
    borderColor: 'white',
    borderWidth: RFValue(1),
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
    marginLeft: RFValue(10),
    marginRight: RFValue(10),
    marginTop: RFValue(10),
    padding: RFValue(10),
  },
});
