import {Alert, Platform} from 'react-native';
import Toast from 'react-native-toast-message';

export default class CustomToast {
  static onPressAlert = (title, body) => {
    Alert.alert(title, body, [{text: 'Хаах'}], {cancelable: false});
  };
  static onPressToast = (text1, text2, position, type) => {
    Toast.show({
      type: type ? type : 'success',
      text1: text1,
      text2: text2,
      topOffset: Platform.OS === 'android' ? 0 : 40,
      bottomOffset: 10,
      position: position ? position : 'top',
    });
  };
}
