import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Color from "../Constants/Color";
import { Container, Content } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Info = props => {
  return (
    <Container style={styles.scren}>
      <Content>
        <Image
          source={require("../assets/images/Logo2.png")}
          style={[styles.img, { marginTop: hp("5%") }]}
        />
        <Image
          source={require("../assets/images/Logo4.png")}
          style={styles.img}
        />
        <Image
          source={require("../assets/images/Logo3.png")}
          style={styles.img}
        />
        <Image
          source={require("../assets/images/Logo5.png")}
          style={styles.img}
        />
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  scren: {
    flex: 1,
    backgroundColor: Color.color2
  },
  img: {
    resizeMode: "contain",
    width: wp("50%"),
    height: hp("20%"),
    alignSelf: "center"
  }
});

export default Info;
