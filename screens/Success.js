import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/Button";
import { minStyles } from "../styles/styles";
import { Container, Content } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Success = props => {
  const { navigation } = props;

  const goToAccount = () => {
    navigation.popToTop();
  };
  return (
    <Container style={styles.scren}>
      <Content>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/images/Logo2.png")}
            style={minStyles.imageRes}
          />
        </View>

        <View>
          <Text
            style={[
              minStyles.title,
              { fontSize: wp("7%"), marginBottom: hp("4%") }
            ]}
          >
            {props.navigation.getParam("SuccessState")}
          </Text>
          <View style={minStyles.minMargan}>
            <Button title="الصفحه الرئيسيه" onPress={goToAccount} />
          </View>
        </View>
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: wp("50%"),
    height: hp("30%"),
    alignSelf: "center",
    marginTop: hp("15%"),
    marginBottom: hp("6%")
  }
});

export default Success;
