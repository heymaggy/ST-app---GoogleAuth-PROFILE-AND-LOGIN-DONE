import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class Storycard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  loadFontsAync = async () => {
    await Font.loadAsync(customFonts);
    this.setState({
      fontsLoaded: true,
    });
  };

  componentDidMount() {
    this.loadFontsAync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        
         <TouchableOpacity 
         style= {{flex: 1}}
         onPress={()=>{
           this.props.navigation.navigate("StoryScreen", {story: this.props.story})
         }}>
          <View style={styles.cardContainer}>
            <Image
              source={require("../assets/story_image_1.png")}
              style={styles.cardImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>{this.props.story.title}</Text>
              <Text style={styles.authorText}>{this.props.story.author}</Text>
              <Text style={styles.authorDesc}>
                {this.props.story.description}
              </Text>
            </View>
            <View style={{ padding: RFValue(10) }}>
              <View style={styles.iconStyle}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
            </View>
            </TouchableOpacity>
          
        
      );
    }
  }
}

const styles = StyleSheet.create({
  androidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  cardContainer: {
    backgroundColor: "#2f345d",
    margin: RFValue(14),
    borderRadius: RFValue(20),
  },
  cardImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250),
  },
  titleText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
  },
  textContainer: {
    marginLeft: RFValue(20),
    
  },
  authorText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(15),
  },
  authorDesc: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(13),
    marginTop: RFValue(10),
  },
  iconStyle: {
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "red",
    borderRadius: RFValue(20),
    width: RFValue(160),
    height: RFValue(30),
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5),

    alignSelf: "center",
  },
});
