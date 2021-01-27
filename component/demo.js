import React, { Component } from "react";
import { View, Text, Button, ScrollView, SafeAreaView } from "react-native";
import svgs from "../assets/svgs";
import SvgIcon from "../index";
export default class SVGDemo extends Component {
  state = {
    color: "#8f8f8f",
  };
  render() {
    //svgs为键值对对象，getOwnPropertyNames取键值为数组
    let arr = Object.getOwnPropertyNames(svgs);
    let mapView = arr.map((item, index) => (
      <View
        key={`svg-icon-${index}`}
        style={{ justifyContent: "center", alignItems: "center", margin: 10 }}
      >
        <SvgIcon icon={item} color={this.state.color} size={40} />
        <Text style={{ color: this.state.color, opacity: 0.6 }}>{item}</Text>
      </View>
    ));
    return (
      <>
        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            paddingVertical: 40,
          }}
        >
          {mapView}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 40,
          }}
        >
          <Button
            title="海蓝色"
            color="#1296db"
            onPress={() => {
              this.setState({ color: "#1296db" });
            }}
          />
          <Button
            title="暗红色"
            color="#D0505D"
            onPress={() => {
              this.setState({ color: "#D0505D" });
            }}
          />
          <Button
            title="黄绿色"
            color="yellowgreen"
            onPress={() => {
              this.setState({ color: "yellowgreen" });
            }}
          />
          <Button
            title="橙黄色"
            color="#FFC857"
            onPress={() => {
              this.setState({ color: "#FFC857" });
            }}
          />
        </View>
      </>
    );
  }
}
