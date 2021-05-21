import { StyleSheet, Dimensions } from 'react-native'


import Color from '../../constants'
const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.secondary,
        flex: 1
    },
    mainView: {
        // alignItems:
    },
    welcomeTxt: {
        fontSize: 27,
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 10
    },
    homeRow: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
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
        backgroundColor: Color.secondary,
        width: '100%'
    },
    scrollInner: {
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 20,
    },
    scrollTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.7)',
        marginTop: 10,
        color: Color.primary
    },
    recentActivity: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        marginVertical: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: 'rgba(0,0,0,0.1)',
        // paddingVertical: 5
    },
    recentColumn: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    recentTxt1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.7)'
    },
    unitRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    recentTxt2: {
        color: 'rgba(0,0,0,0.3)',
        margin: 1,
        fontSize: 16
    },
    recentTxt3: {
        color: 'rgba(0,0,0,0.3)',
        margin: 1
    },
    debtorContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        backgroundColor: Color.secondary
    },
    debtors: {
        width: '100%',
        flex: 1
    },
    debtorsRow: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 10
    },
    debtorTxt: {
        fontWeight: '400',
        fontSize: 25,
        color: Color.primary
    },
    debtor: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '95%',
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: Color.txtFaint,
        paddingVertical: 5
    },
    debtorIcon: {
        width: '30%',
        // backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 5,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    debtorColumn: {
        width: '60%',
        alignItems: 'flex-start'
    },
    debtorTxt1: {
        fontSize: 20,
        fontWeight: '500'
    },
    debtorTxt3: {
        fontSize: 18,
        color: Color.primary,
        fontWeight: 'bold'
    },
    balanceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Styles