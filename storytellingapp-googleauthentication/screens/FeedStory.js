import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  SafeAreaView,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import {RFValue} from "react-native-responsive-fontsize"
import {FlatList} from "react-native-gesture-handler"
import Storycard from "./Storycard"

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

let stories = require("./TempStories.json")

export default class DisplayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

   loadFontsAsync=async()=>{
    await Font.loadAsync(customFonts);
    this.setState({
      fontsLoaded: true,
    });
  };

  componentDidMount() {
    this.loadFontsAsync();
  }

  keyExtractor=(item,index)=>{index.toString()}

  renderItem=({item:story})=>{
    return(
      <Storycard  story={story} navigation = {this.props.navigation} />
    )
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={{ flex: 1,backgroundColor: "#15193c" }}>
          <SafeAreaView style={styles.androidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
            <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>StoryTelling App</Text>
            </View>
          </View>
          <View style={{flex: 0.85}}>
              <FlatList 
                keyExtractor={this.keyExtractor}
                renderItem = {this.renderItem}
                data={stories}
              />
            </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  androidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  titleContainer:{
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5

  },
  titleText:{
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(28),
    color: "white",
  },
  flatListContainer:{
    flex: 0.85,
  }
});
