import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
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
        fontSize: 20
    },
    saleMain: {
        flex: 1,
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
    }
})

export default Styles