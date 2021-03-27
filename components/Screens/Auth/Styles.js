import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Color from '../../constants'

const { height } = Dimensions.get('window')

const Styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Color.secondary
    },
    loginForm: {
        width: '90%',
        alignItems: 'flex-start',
        // marginVertical: 20
    },
    loginHeader: {
        width: '60%',
        alignItems: 'flex-start',
    },
    txtHeader: {
        fontSize: RFValue(20, height),
        fontWeight: 'bold',
        color: Color.primary
    },
    txtHeader1: {
        fontSize: RFValue(20, height),
        fontWeight: 'bold',
        color: Color.primary
    },
    input: {
        width: '100%',
        backgroundColor: Color.secondary,
        height: 60,
        elevation: 4,
        borderRadius: 10,
        shadowColor: 'black',
        paddingLeft: 10,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        marginVertical: 10
    },
    button: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.primary,
        marginVertical: 10,
        borderRadius: 10,
    },
    btnTxt: {
        color: Color.secondary,
        fontSize: 20
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    links: {
        width: '100%',
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    linkTxt: {
        fontSize: 17,
        color: Color.primary
    }
})

export default Styles