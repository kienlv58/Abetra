/* Quyền lợi và chính sách hội viên */
import React, { Component } from "react";
import { View, Text } from "react-native";
import { COLOR } from "../constant/Color";

class Benifet extends Component {
  static navigationOptions = ({ navigation }) => {
    // console.log("state change redender");
    return {
      title: "Quyền lợi & Chính sách",
      // headerStyle: {
      //   // backgroundColor: "#23b34c",
      //   alignSelf: "center",
      // },
      headerTitleStyle: { color: COLOR.COLOR_BLACK },
      headerTintColor: COLOR.COLOR_BLACK,
    };
  };
  render() {
    return (
      <View>
        <Text>Quyền lợi và chính sách hội viên</Text>
      </View>
    );
  }
}
export default Benifet;
