import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Color from "../Constants/Color";
import Button from "../components/Button";
import { Icon, Container, Content, Text } from "native-base";

import { minStyles } from "../styles/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import RNPickerSelect from "react-native-picker-select";

const Account = props => {
  const [radio1, setRadio1] = useState(false);
  const [radio2, setRadio2] = useState(false);
  const [radio3, setRadio3] = useState(false);
  const [taxText, setTaxText] = useState("");
  const [dataBox, setDataBox] = useState("");
  const goToPay = () => {
    props.navigation.navigate("Pay");
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
        <View style={styles.user}>
          <Icon
            type="FontAwesome5"
            name="user-circle"
            placeholder
            style={styles.userIcon}
            solid
          />
          <Text style={minStyles.title}>اسم المستخدم</Text>
        </View>
        <View style={minStyles.minMargan}>
          <View style={styles.pickerContent}>
            <RNPickerSelect
              onValueChange={value => setDataBox(value)}
              items={data}
              placeholder={{ label: "المحافظه", value: null }}
            />
          </View>
          <View style={styles.container}>
            <Text style={minStyles.title}>نوع الضريبه</Text>
            <View style={styles.radioContainer}>
              <TouchableOpacity
                style={styles.radio}
                onPress={() => {
                  setRadio1(a => !a);
                  setTaxText(() => (radio1 ? "" : "العقارات"));
                  setRadio2(false);
                  setRadio3(false);
                }}
              >
                <View
                  style={[
                    radio1
                      ? { ...styles.radioBtton, borderColor: Color.color3 }
                      : styles.radioBtton
                  ]}
                >
                  <View style={radio1 && styles.active}></View>
                </View>
                <Text
                  style={[
                    radio1
                      ? { ...styles.radioTitle, color: Color.color3 }
                      : styles.radioTitle
                  ]}
                >
                  العقارات
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.radio}
                onPress={() => {
                  setRadio1(false);
                  setRadio2(a => !a);
                  setTaxText(() => (radio2 ? "" : "الأطيان"));

                  setRadio3(false);
                }}
              >
                <View
                  style={[
                    radio2
                      ? { ...styles.radioBtton, borderColor: Color.color3 }
                      : styles.radioBtton
                  ]}
                >
                  <View style={radio2 && styles.active}></View>
                </View>
                <Text
                  style={[
                    radio2
                      ? { ...styles.radioTitle, color: Color.color3 }
                      : styles.radioTitle
                  ]}
                >
                  الأطيان
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.radio}
                onPress={() => {
                  setRadio1(false);
                  setRadio2(false);
                  setRadio3(a => !a);
                  setTaxText(() => (radio3 ? "" : "الملاهى"));
                }}
              >
                <View
                  style={[
                    radio3
                      ? { ...styles.radioBtton, borderColor: Color.color3 }
                      : styles.radioBtton
                  ]}
                >
                  <View style={radio3 && styles.active}></View>
                </View>
                <Text
                  style={[
                    radio3
                      ? { ...styles.radioTitle, color: Color.color3 }
                      : styles.radioTitle
                  ]}
                >
                  الملاهى
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.textBox}>
                <Text style={styles.valueTitle}>المحافظه :</Text>
                <Text style={styles.valueTitle}>{dataBox}</Text>
              </View>
              <View style={styles.textBox}>
                <Text style={styles.valueTitle}>اسم الضريبه :</Text>
                <Text style={styles.valueTitle}>{taxText}</Text>
              </View>

              <View style={styles.textBox}>
                <Text style={styles.valueTitle}>الضريبه المستحقه :</Text>
                <Text style={styles.valueTitle}>
                  {dataBox != "" && taxText != ""
                    ? JSON.stringify(Math.random().toFixed(2) * 1000)
                    : ""}
                </Text>
              </View>
            </View>
          </View>
          <Button title="دفع" onPress={goToPay} />
        </View>
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  user: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp("5%")
  },
  userIcon: {
    color: Color.color2,
    fontSize: wp("20%"),
    marginBottom: hp("1%")
  },
  pickerContent: {
    marginBottom: hp("4%"),
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
  },
  container: {
    backgroundColor: "#00000010",
    width: "100%",
    borderRadius: 10,
    paddingTop: hp("2.5%"),
    marginBottom: hp("4%")
  },
  radioContainer: {
    marginTop: hp("2.5%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  radioBtton: {
    width: wp("4%"),
    height: wp("4%"),
    borderColor: Color.color2,
    borderWidth: wp(".5%"),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  active: {
    width: "80%",
    height: "80%",
    backgroundColor: Color.color3,
    borderRadius: 50
  },
  radio: {
    flexDirection: "row",
    alignItems: "center"
  },
  radioTitle: {
    marginLeft: wp("1%"),
    color: Color.color2,
    fontFamily: "GE",
    fontSize: wp("3%")
  },
  infoContainer: {
    padding: hp("3%")
  },
  textBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("3%")
  },
  valueTitle: {
    color: Color.color2,
    fontFamily: "GEP",
    fontSize: wp("3.5%"),
    paddingHorizontal: wp("1%")
  }
});

export default Account;
