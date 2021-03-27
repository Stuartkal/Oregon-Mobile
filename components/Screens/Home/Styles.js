import { StyleSheet, Dimensions } from 'react-native'


import Color from '../../constants'
const Styles = StyleSheet.create({
    container: {
        marginTop: 150,
        alignItems: 'center',
        justifyContent: 'center',

    },
    welcomeTxt: {
        fontSize: 27,
        marginBottom: 20
    },
    homeRow: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        marginBottom: 20
    },
    rowCard: {
        overflow: 'hidden',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        backgroundColor: Color.primary,
    },
    cardTxt: {
        color: Color.secondary,
        fontSize: 12
    },
    iconColumn: {
        width: Dimensions.get('window').width < 780 ? 90 : 100,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        backgroundColor: Color.primary,
    },
    labelTxt: {
        fontSize: 12,
        color: Color.secondary
    },
    recent: {
        flexGrow: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50

    },
    scrollInner: {
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 20
    },
    scrollTxt: {

    }
})

export default Styles