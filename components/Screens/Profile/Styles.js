import { StyleSheet } from 'react-native'
import Colors from '../../constants/'

const Styles = StyleSheet.create({
    container: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#9615032f',
        marginVertical: 20
    },
    profileContainer: {
        paddingVertical: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '90%',
        borderRadius: 5,
        elevation: 1,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        backgroundColor: Colors.secondary,
    },
    detailColumn: {
        marginVertical: 5,
        borderBottomWidth: 1,
        paddingVertical: 5,
        borderBottomColor: Colors.txtFaint,
        width: '100%'
    },
    detailColumn1: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 20,
        // borderBottomWidth: 1,
        // borderTopWidth: 1,
        // borderBottomColor: Colors.txtFaint,
        // borderTopColor: Colors.txtFaint,
        height: 40
    },
    profileDetails: {
        paddingLeft: 20,
        width: '100%'
    },
    profileLable: {
        fontSize: 20,
        color: Colors.txtFaint
    },
    profileText: {
        fontSize: 20,

    },
    logout: {
        fontSize: 20,
        color: Colors.primary,
        marginRight: 5
    }
})

export default Styles