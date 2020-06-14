import React from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import Color from "../Constants/Color";
import Button from "../components/Button";
import { Icon, Container, Content, Text } from "native-base";
import { minStyles } from "../styles/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Input from "../components/Input";

const Pay = props => {
  const goTo = () => {
    props.navigation.navigate({
      routeName: "Success",
      params: { SuccessState: "تم الدفع" }
    });
  };

  return (
    <Container>
      <Content>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.user}>
            <Icon
              type="FontAwesome5"
              name="user-circle"
              style={styles.userIcon}
              solid
            />
            <Text style={minStyles.title}>اسم المستخدم</Text>
          </View>
          <View style={[minStyles.minMargan, styles.container]}>
            <Input plachold="رقم الكارت" keyboardType="numeric" />
          </View>
          <View style={[minStyles.minMargan, styles.container]}>
            <Input plachold="كود" name="person" keyboardType="numeric" />
          </View>
          <View style={[minStyles.minMargan, styles.container]}>
            <Button title="دفع" onPress={goTo} />
          </View>
        </KeyboardAvoidingView>
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  user: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("5%")
  },
  userIcon: {
    color: Color.color2,
    fontSize: wp("20%"),
    marginBottom: hp("1%")
  },
  container: {
    marginTop: hp("5%")
  }
});

export default Pay;
