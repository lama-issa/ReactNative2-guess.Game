import React from "react";
import { TouchableOpacity, View, Text ,StyleSheet} from "react-native";
import colors from "../constants/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={.8} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
 backgroundColor:colors.primary,
 paddingVertical:14,
 paddingHorizontal:30,
 borderRadius:25
  },
  buttonText:{
color:"white",
// fontFamily:"open-span",
fontSize:18

  }
});
export default MainButton;
