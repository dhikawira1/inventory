import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1415ProMax = () => {
  return (
    <View style={styles.iphone1415ProMax}>
      <Image
        style={[styles.clearAllIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/clear-all.png")}
      />
      <Image
        style={[styles.manageSearchIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/manage-search.png")}
      />
      <Text style={[styles.home, styles.homePosition]}>HOME</Text>
      <Text style={[styles.inventorySummary, styles.homePosition]}>
        INVENTORY SUMMARY
      </Text>
      <View style={[styles.tabelMobilePhone, styles.tabelLayout]}>
        <View style={[styles.tabelMobilePhoneChild, styles.tabelLayout]} />
        <View style={[styles.isi, styles.isiPosition]}>
          <Text style={[styles.text, styles.textTypo2]}>60</Text>
          <Text style={[styles.text1, styles.textTypo2]}>45</Text>
          <Text style={[styles.ios, styles.textTypo2]}>iOS</Text>
          <Text style={[styles.android, styles.textTypo2]}>Android</Text>
        </View>
        <Image
          style={styles.c258202f28dae23f3e326945e7f99Icon}
          resizeMode="cover"
          source={require("../assets/312c258202f28dae23f3e326945e7f99removebgpreview-1.png")}
        />
        <Text style={[styles.mobilePhone, styles.audioTypo]}>Mobile Phone</Text>
        <View style={styles.tabelMobilePhoneItem}/>
      </View>
      <View style={[styles.tabelCamera, styles.tabelPosition1]}>
        <View style={[styles.tabelMobilePhoneChild, styles.tabelLayout]} />
        <View style={[styles.isi, styles.isiPosition]}>
          <Text style={[styles.text, styles.textTypo2]}>20</Text>
          <Text style={[styles.text3, styles.textTypo1]}>25</Text>
          <Text style={[styles.ios, styles.textTypo2]}>Mechanical</Text>
          <Text style={[styles.android, styles.textTypo2]}>Office</Text>
        </View>
        <Text style={[styles.keyboard, styles.audioTypo]}>Keyboard</Text>
        <View style={styles.tabelMobilePhoneItem} />
      </View>
      <View style={[styles.tabelTablet, styles.tabelLayout]}>
        <View style={[styles.tabelMobilePhoneChild, styles.tabelLayout]} />
        <Text style={[styles.tablet, styles.audioTypo]}>Tablet</Text>
        <View style={styles.tabelMobilePhoneItem} />
        <View style={[styles.isi2, styles.isiPosition]}>
          <Text style={[styles.text4, styles.textPosition]}>10</Text>
          <Text style={[styles.text5, styles.textPosition]}>15</Text>
          <Text style={[styles.text6, styles.textTypo]}>2</Text>
          <Text style={[styles.ios, styles.textTypo2]}>iPadOS</Text>
          <Text style={[styles.android, styles.textTypo2]}>Android</Text>
          <Text style={[styles.windows, styles.textTypo]}>Windows</Text>
        </View>
      </View>
      <View style={[styles.tabelCamera1, styles.tabelPosition1]}>
        <View style={[styles.tabelMobilePhoneChild, styles.tabelLayout]} />
        <Text style={[styles.audio, styles.audioTypo]}>Audio</Text>
        <View style={styles.tabelMobilePhoneItem} />
        <View style={[styles.isi2, styles.isiPosition]}>
          <Text style={[styles.text4, styles.textPosition]}>18</Text>
          <Text style={[styles.text8, styles.textTypo2]}>12</Text>
          <Text style={[styles.text6, styles.textTypo]}>2</Text>
          <Text style={[styles.ios, styles.textTypo2]}>Headset</Text>
          <Text style={[styles.android, styles.textTypo2]}>Ear Monitor</Text>
          <Text style={[styles.windows, styles.textTypo]}>Windows</Text>
        </View>
      </View>
      <View style={[styles.tabelCamera2, styles.tabelPosition]}>
        <View style={[styles.tabelMobilePhoneChild, styles.tabelLayout]} />
        <View style={[styles.isi2, styles.isiPosition]}>
          <Text style={[styles.text10, styles.textTypo1]}>25</Text>
          <Text style={[styles.text8, styles.textTypo2]}>12</Text>
          <Text style={[styles.text12, styles.textTypo]}>15</Text>
          <Text style={[styles.ios, styles.textTypo2]}>Sony</Text>
          <Text style={[styles.android, styles.textTypo2]}>Fujifilm</Text>
          <Text style={[styles.windows, styles.textTypo]}>Linux</Text>
        </View>
        <Image
          style={[styles.sonyFe24105mmF4GOssSonyIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/sony-fe-24105mm-f4-g-oss-sony-emount-camera-lens-fullframe-digital-slr-png--free-downloadremovebgpreview-1.png")}
        />
        <Text style={[styles.camera, styles.audioTypo]}>Camera</Text>
        <View style={styles.tabelMobilePhoneItem} />
      </View>
      <View style={[styles.tabelLaptops, styles.tabelPosition]}>
        <View style={[styles.tabelMobilePhoneChild, styles.tabelLayout]} />
        <View style={[styles.isi2, styles.isiPosition]}>
          <Text style={[styles.text, styles.textTypo2]}>20</Text>
          <Text style={[styles.text5, styles.textPosition]}>15</Text>
          <Text style={[styles.text15, styles.textTypo]}>5</Text>
          <Text style={[styles.ios, styles.textTypo2]}>MacOS</Text>
          <Text style={[styles.android, styles.textTypo2]}>Windows</Text>
          <Text style={[styles.windows, styles.textTypo]}>Linux</Text>
        </View>
        <Image
          style={styles.pngtreeAppleMacbookProMockIcon}
          resizeMode="cover"
          source={require("../assets/pngtreeapplemacbookpromockuppngimage-6277127-1.png")}
        />
        <Text style={[styles.laptop, styles.audioTypo]}>Laptop</Text>
        <View style={styles.tabelMobilePhoneItem} />
      </View>
      <Image
        style={styles.ipad1Icon}
        resizeMode="cover"
        source={require("../assets/ipad-1.png")}
      />
      <Image
        style={[styles.keyboard1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/keyboard-1.png")}
      />
      <Image
        style={styles.audio1Icon}
        resizeMode="cover"
        source={require("../assets/audio-1.png")}
      />
      <View style={styles.iphone1415ProMax4Child} />
      <Image
        style={styles.homeIcon}
        resizeMode="cover"
        source={require("../assets/home.png")}
      />
      <Image
        style={styles.scanQrCodeIcon}
        resizeMode="cover"
        source={require("../assets/scanqrcode.png")}
      />
      <Image
        style={styles.profileIcon}
        resizeMode="cover"
        source={require("../assets/profile.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  homePosition: {
    color: Color.colorBlack,
    textAlign: "left",
    left: 32,
    position: "absolute",
  },
  tabelLayout: {
    height: 261,
    width: 194,
    position: "absolute",
  },
  isiPosition: {
    width: 140,
    left: 25,
    top: 170,
    position: "absolute",
  },
  textTypo2: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: -0.6,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    position: "absolute",
  },
  audioTypo: {
    letterSpacing: -0.9,
    fontSize: FontSize.size_lg,
    top: 11,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  tabelPosition1: {
    top: 729,
    height: 261,
    width: 194,
    position: "absolute",
  },
  textTypo1: {
    left: 126,
    textAlign: "right",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: -0.6,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    position: "absolute",
  },
  textPosition: {
    left: 128,
    textAlign: "right",
  },
  textTypo: {
    top: 48,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: -0.6,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    position: "absolute",
  },
  tabelPosition: {
    top: 171,
    height: 261,
    width: 194,
    position: "absolute",
  },
  iconPosition: {
    left: 47,
    position: "absolute",
  },
  clearAllIcon: {
    left: 32,
    height: 30,
    width: 30,
    top: 79,
  },
  manageSearchIcon: {
    top: 87,
    left: 377,
  },
  home: {
    fontSize: 40,
    fontFamily: FontFamily.bebasNeueRegular,
    width: 146,
    height: 47,
    textAlign: "left",
    top: 79,
    color: Color.colorBlack,
  },
  inventorySummary: {
    top: 126,
    fontSize: 15,
    fontFamily: FontFamily.poppinsRegular,
    width: 175,
    height: 23,
    textAlign: "left",
  },
  tabelMobilePhoneChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro,
    left: 0,
    top: 0,
  },
  text: {
    textAlign: "right",
    left: 125,
    fontWeight: "500",
    letterSpacing: -0.6,
    fontSize: FontSize.size_xs,
    top: 0,
  },
  text1: {
    top: 24,
    textAlign: "right",
    left: 125,
    fontWeight: "500",
    letterSpacing: -0.6,
    fontSize: FontSize.size_xs,
  },
  ios: {
    left: 0,
    top: 0,
    textAlign: "left",
  },
  android: {
    top: 24,
    left: 0,
    textAlign: "left",
  },
  isi: {
    height: 42,
  },
  c258202f28dae23f3e326945e7f99Icon: {
    top: 6,
    left: 12,
    width: 169,
    height: 169,
    position: "absolute",
  },
  mobilePhone: {
    left: 41,
  },
  tabelMobilePhoneItem: {
    top: 149,
    left: 39,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 0.5,
    width: 116,
    height: 1,
    position: "absolute",
  },
  tabelMobilePhone: {
    left: 14,
    top: 450,
    width: 194,
  },
  text3: {
    top: 24,
  },
  keyboard: {
    left: 56,
  },
  tabelCamera: {
    left: 13,
  },
  tablet: {
    left: 70,
  },
  text4: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: -0.6,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    position: "absolute",
    top: 0,
  },
  text5: {
    top: 24,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: -0.6,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    position: "absolute",
  },
  text6: {
    left: 133,
    textAlign: "right",
  },
  windows: {
    left: 0,
    textAlign: "left",
  },
  isi2: {
    height: 66,
  },
  tabelTablet: {
    left: 224,
    top: 450,
    width: 194,
  },
  audio: {
    left: 72,
  },
  text8: {
    left: 129,
    top: 24,
    textAlign: "right",
  },
  tabelCamera1: {
    left: 223,
  },
  text10: {
    top: 0,
  },
  text12: {
    left: 128,
    textAlign: "right",
  },
  sonyFe24105mmF4GOssSonyIcon: {
    top: 39,
    width: 99,
    height: 99,
  },
  camera: {
    left: 62,
  },
  tabelCamera2: {
    left: 223,
  },
  text15: {
    left: 132,
    textAlign: "right",
  },
  pngtreeAppleMacbookProMockIcon: {
    top: 23,
    left: 29,
    width: 135,
    height: 135,
    position: "absolute",
  },
  laptop: {
    left: 68,
  },
  tabelLaptops: {
    left: 13,
  },
  ipad1Icon: {
    top: 494,
    left: 279,
    width: 83,
    height: 94,
    position: "absolute",
  },
  keyboard1Icon: {
    top: 754,
    width: 126,
    height: 126,
  },
  audio1Icon: {
    top: 767,
    left: 261,
    width: 120,
    height: 120,
    position: "absolute",
  },
  iphone1415ProMax4Child: {
    top: 856,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15.1,
    elevation: 15.1,
    shadowOpacity: 1,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: "#fffefe",
    width: 430,
    height: 76,
    left: 0,
    position: "absolute",
  },
  homeIcon: {
    top: 873,
    left: 65,
    width: 33,
    height: 33,
    position: "absolute",
  },
  scanQrCodeIcon: {
    top: 874,
    left: 199,
    width: 32,
    height: 32,
    position: "absolute",
  },
  profileIcon: {
    top: 877,
    left: 340,
    width: 26,
    height: 26,
    position: "absolute",
  },
  iphone1415ProMax4: {
    backgroundColor: "#fefbf6",
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax;
