import React from "react";
import { StyleSheet, Image, View, KeyboardAvoidingView } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { Container, Content } from "native-base";
import { minStyles } from "../styles/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Register = props => {
  const goToSuccess = () => {
    props.navigation.navigate({
      routeName: "Success",
      params: { SuccessState: "تم تغير الرقم السرى" }
    });
  };

  return (
    <Container style={styles.scren}>
      <Content>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.imgContainer}>
            <Image
              source={require("../assets/images/Logo2.png")}
              style={minStyles.imageRes}
            />
          </View>

          <View style={minStyles.minMargan}>
            <Input
              plachold="البريد الالكتروني"
              keyboardType="email-address"
              style={{ marginBottom: hp("3%") }}
            />
            <Button title="ارسال" onPress={goToSuccess} />
          </View>
        </KeyboardAvoidingView>
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
    marginTop: hp("7%"),
    marginBottom: hp("6%")
  }
});

export default Register;
