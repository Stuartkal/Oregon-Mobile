import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment'
import box from '../../../assets/images/box.png'
import Ripple from 'react-native-material-ripple'
import ProductModal from './ProductModal'
import * as actionCreators from '../../store/ActionCreators'

import Colors from '../../constants/'
import Styles from './Styles'
const Products = (props) => {

    const screenWidth = Dimensions.get('window').width

    const [open, setOpen] = useState(false)

    const [shop, setShop] = useState('')
    const [name, setName] = useState('')
    const [unit, setUnit] = useState('')
    const [quantity, setQuantity] = useState('')
    const [cost, setCost] = useState('')
    const [price, setPrice] = useState('')
    const [message, setMessage] = useState('')

    const d = new Date()
    const date = d.toISOString()


    const dispatch = useDispatch()

    const products = useSelector(state => state.request.products)
    console.log(products)

    const addProductHandler = () => {
        if (shop.length === 0 || name.length === 0 || unit.length === 0 || quantity.length === 0 || cost.length === 0 || price.length === 0) {
            return setMessage('Invalid Input')
        }
        dispatch(actionCreators.addProduct(shop, name, unit, quantity, cost, price, (res) => {
            if (res.success === true) {
                // props.navigation.navigate('Products')
                setShop('')
                setName('')
                setUnit('')
                setQuantity('')
                setCost('')
                setPrice('')
                setMessage('Product added Successfully')
                dispatch(actionCreators.getProducts())
                dispatch(actionCreators.addActivity({ activity: 'Added Product', name: name }))
                dispatch(actionCreators.getActivity())
            }
        }))
    }

    useEffect(() => {
        dispatch(actionCreators.getProducts())
        setMessage('')
        console.log("rendered")
    }, [dispatch])

    return (
        <View style={Styles.container}>
            <Ripple onPress={() => setOpen(true)} rippleCentered={true} rippleSize={150} style={Styles.addButton}>
                <MaterialCommunityIcons name="plus" size={40} color={Colors.secondary} />
            </Ripple>
            <ProductModal
                visible={open}
                close={setOpen}
                setShop={setShop}
                setName={setName}
                setUnit={setUnit}
                setQuantity={setQuantity}
                setCost={setCost}
                setPrice={setPrice}
                addProduct={addProductHandler}
                message={message}
            />
            {/* <Text style={Styles.productTxt}>No Products Found</Text> */}
            <ScrollView contentContainerStyle={{ width: screenWidth }}>
                {products.map(product => (
                    <View key={product._id} style={Styles.productDetails}>
                        <View style={Styles.detailsRow}>
                            <Image style={Styles.image} source={box} />
                            <View>
                                <Text style={Styles.label1}>{product.name}</Text>
                                <View style={Styles.detailsRow}>
                                    <Text style={Styles.label2}>Units: </Text>
                                    <Text>{product.unit}</Text>
                                </View>
                                <View style={Styles.detailsRow}>
                                    <Text style={Styles.label2}>Qty:</Text>
                                    <Text>{product.quantity}</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={Styles.label3}>{moment(product.dateCreated).fromNow()}</Text>
                    </View>
                ))
                }
            </ScrollView>
        </View>
    )
}

export default Products
