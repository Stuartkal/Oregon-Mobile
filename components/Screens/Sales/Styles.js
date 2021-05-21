import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.secondary
    },
    addButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        zIndex: 100,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        width: 60,
        height: 60,
        borderRadius: 160,
        elevation: 3,
        shadowRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
    },
    salesTxt: {
        fontSize: 20,
    },
    saleMain: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: Colors.secondary
    },
    saleTxt1: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 20
    },
    saleForm: {
        alignItems: 'flex-start',
        width: '90%'
    },
    btnRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    rowTxt: {
        fontSize: 18,
        color: Colors.primary,
        marginLeft: 20,
        borderWidth: 1,
        borderColor: Colors.primary,
        padding: 5,
        borderRadius: 10
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 50,
        backgroundColor: Colors.primary,
        marginVertical: 10,
        borderRadius: 5
    },
    btnTxt: {
        color: Colors.secondary,
        fontSize: 20
    },
    backButton: {
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 10
    },
    inputRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        width: '95%',
        marginVertical: 10
    },
    searchList: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 50,
        flexDirection: 'row',
        marginVertical: 5,
        width: '100%',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderTopColor: 'rgba(0,0,0,0.1)'
    },
    txt1: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    txt2: {
        fontSize: 18,
        color: Colors.txtFaint
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '50%',
        height: 40,
        borderRadius: 5,
        backgroundColor: Colors.primary,
        marginVertical: 10
    },
    btnTxt: {
        color: Colors.secondary,
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 5
    },
    salesTable: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20
    },
    tableHeader: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
        borderTopWidth: 1,
        borderTopColor: Colors.primary,
        paddingVertical: 5,
        paddingHorizontal: 10,
        // backgroundColor: Colors.primary
    },
    headerTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        // color: Colors.secondary
    },
    tabledata: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    paymentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 40,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 20,
        marginVertical: 10
    },
    salesDetails: {
        width: '100%',
        marginVertical: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.txtFaint
    },
    detailsRow: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    detailsColumn: {
        marginLeft: 10
    },
    label1: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    label2: {
        fontSize: 17,
        marginRight: 5,
        color: Colors.txtFaint,
    },
    label3: {
        alignSelf: 'flex-end'
    }
})

export default Styles