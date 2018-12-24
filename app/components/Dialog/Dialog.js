import React from 'react';
import {View, Modal} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import styles from './styles';

const Dialog = (props) =>{
    return(
        <Modal
          animationType="fade"
          transparent={true}
          visible={true}
          onRequestClose={() => {
            props.onClick(false)
          }}>
          <View style={styles.container}>
            <View style={styles.dialog}>
                <RadioGroup radioButtons={props.languages} onPress={props.onPress} />
            </View>
          </View>
        </Modal>
    );
}

export default Dialog;