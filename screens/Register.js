import React, { useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { Container, Content } from "native-base";
import { minStyles } from "../styles/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import RNPickerSelect from "react-native-picker-select";
import Color from "../Constants/Color";

const Register = props => {
  const [dataBox, setDataBox] = useState("");
  const goToSuccess = () => {
    props.navigation.navigate({
      routeName: "Success",
      params: { SuccessState: "تم التسجيل" }
    });
  };
  const data = [
    { label: "القاهرة", value: "القاهرة" },
    { label: "الجيزة", value: "الجيزة" },
    { label: "المنيا", value: "المنيا" },
    { label: "السويس", value: "السويس" },
    { label: "الأقصر", value: "الأقصر" },
    { label: "الإسكندرية", value: "الإسكندرية" },
    { label: "بورسعيد", value: "بورسعيد" },
    { label: "دمياط", value: "دمياط" },
    { label: "أسوان", value: "أسوان" },
    { label: "القليوبية", value: "القليوبية" },
    { label: "بني سويف", value: "بني سويف" },
    { label: "الإسماعيلية", value: "الإسماعيلية" },
    { label: "سوهاج", value: "سوهاج" },
    { label: "أسيوط", value: "أسيوط" },
    { label: "البحر الأحمر", value: "البحر الأحمر" },
    { label: "البحيرة", value: "البحيرة" },
    { label: "الدقهلية", value: "الدقهلية" },
    { label: "الغربية", value: "الغربية" },
    { label: "الفيوم", value: "الفيوم" },
    { label: "قنا", value: "قنا" },
    { label: "كفر الشيخ", value: "كفر الشيخ" },
    { label: "مطروح", value: "مطروح" },
    { label: "المنوفية", value: "المنوفية" },
    { label: "الوادي الجديد", value: "الوادي الجديد" },
    { label: "السادس من أكتوبر", value: "السادس من أكتوبر" },
    { label: "شمال سيناء", value: "شمال سيناء" },
    { label: "جنوب سيناء", value: "جنوب سيناء" },
    { label: "حلوان", value: "حلوان" },
    { label: "الشارقية", value: "الشارقية" }
  ];

  return (
    <Container>
      <Content>
        <KeyboardAvoidingView behavior="position">
          <View
            style={[
              minStyles.minMargan,
              styles.container,
              { marginTop: hp("7%") }
            ]}
          >
            <Input plachold="البريد الالكتروني" keyboardType="email-address" />
          </View>
          <View style={[minStyles.minMargan, styles.container]}>
            <Input
              plachold="الــرقم الســرى"
              secure={true}
              keyboardType="numeric"
            />
          </View>
          <View style={[minStyles.minMargan, styles.container]}>
            <Input plachold="الـــرقم القــومى" keyboardType="numeric" />
          </View>
          <View style={[minStyles.minMargan, styles.container]}>
            <Input plachold="رقم المحمول" keyboardType="numeric" />
          </View>
          <View style={minStyles.minMargan}>
            <View style={styles.pickerContent}>
              <RNPickerSelect
                onValueChange={value => setDataBox(value)}
                items={data}
                placeholder={{ label: "المحافظه", value: null }}
              />
            </View>
          </View>
          <View style={[minStyles.minMargan, styles.container]}>
            <Button title="تسجيل" onPress={goToSuccess} />
          </View>
        </KeyboardAvoidingView>
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: hp("4%")
  },
  pickerContent: {
    marginTop: hp("4%"),
    width: "100%",
    alignSelf: "flex-end",
    borderColor: Color.color2,
    elevation: 3,
    borderWidth: wp(".6%"),
    borderRadius: wp("2%"),
    position: "relative",
    paddingHorizontal: wp("3%"),
    backgroundColor: "#fff",
    borderRadius: 50
  }
});

export default Register;
