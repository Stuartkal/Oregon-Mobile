import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants'

const Styles = StyleSheet.create({
    UIcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modal: {
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.secondary,
        paddingVertical: 10
    },
    inputRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        width: '95%'
    }
})

export default Styles