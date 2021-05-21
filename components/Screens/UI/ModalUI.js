import React from 'react'
import { View, Modal, TouchableWithoutFeedback } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Colors from '../../constants'
import Styles from './Styles'
const ModalUI = (props) => {
    return (
        <Modal
            visible={props.visible}
            animationType="slide"
            transparent={true}
        >
            <TouchableWithoutFeedback onPress={() => props.setOpen(false)}>
                <View style={Styles.UIcontainer}>
                    <View style={Styles.modal}>
                        {props.children}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default ModalUI
