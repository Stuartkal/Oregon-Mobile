import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
        borderRadius: 30,
        elevation: 3,
        shadowRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
    },
    productTxt: {
        fontSize: 20
    },
    productMain: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.secondary
    },
    productTxt1: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 20
    },
    productForm: {
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
    },
    productDetails: {
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
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginRight: 10
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