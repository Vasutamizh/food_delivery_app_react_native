import React, { useState,useEffect } from "react";
import {FlatList, View, Text, ScrollView, Alert, TouchableOpacity} from 'react-native';
import ProductCard from "../componenets/ProductCard";;
import { supabase } from "../utils/SupabaseClient";
import Loader from "../componenets/Loader";
import { useNavigation } from '@react-navigation/native';


export default function HomePage():React.JSX.Element{


    const navigation = useNavigation();

    const [products, setProducts] = useState([]);  
    const [isLoading, setisLoading] = useState(false)
    

    useEffect(()=>{
        const getData = async () => {
            setisLoading(true);
            let {data, error} = await supabase.from('foods').select('*');
            console.log(data)
            if(error){
                console.log(error)
                setProducts(null);
                setisLoading(false);
            }
            else if(data){
                setProducts(data);
                setisLoading(false);
            }
            setisLoading(false);
        }

        getData();
        
    },[]);

    const updateQuantity = async (Itemid, qty) =>{
        console.log("update the item");
        
        let { data, error } = await supabase
                .from('cart')
                .update({ quantity:  qty+1})
                .eq('foodId', Itemid)
                .select();
        console.log("Quantity"+data);
        console.log(error);
    }

    const getQuantity = async (Itemid: Number) =>{
        console.log("getting the quantity");
        var { data, error } = await supabase
                .from('cart')
                .select('*')
                .eq('foodId', Itemid) 
        console.log("Quantity of the food: "+data)
        if(!error){
            if(data && data[0]){
                return data[0].quantity;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }

    const addCart = async (Itemid: Number)=>{
        console.log("inserting the item");
       var { data, error } = await supabase
                .from('cart')
                .insert([
                { foodId: Itemid, quantity: 1 },
        ]) 
        .select()
        console.log("Added"+data);
        if(!error){
            Alert.alert("Added to cart");
        }
        else{
            Alert.alert(""+error.message);
        }
    }

    const sendCart = async (Itemid: Number) =>{
        setisLoading(true);
        addCart(Itemid);
        const quantity = await getQuantity(Itemid);
        // if(quantity){
        //     await updateQuantity(Itemid, quantity)
        // }
        // else{
        //     await addCart(Itemid)
        // }
        setisLoading(false);
    }

    const addToCart = (itemId: Number) =>{
        console.log("Adding to the cart:"+itemId);
        sendCart(itemId);
    }

    const handleNavToCart = () => {
        navigation.navigate('Cart');
    }

    return(
        <>
        { isLoading ? <Loader/> :
        <View style={{ flex: 1 }}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems:'center' , paddingRight: 20}}>
                <View>
                    <Text style={{marginLeft: 20,marginTop:10, fontSize: 30}}>Food Items</Text>
                    <Text style={{marginLeft: 20,marginTop:2, color: 'gray'}}>Click to add to cart</Text>
                </View>
                <TouchableOpacity style={{width: 70,padding: 2, height: 35, backgroundColor: '#E35335', borderRadius: 20}} onPress={handleNavToCart}>
                <Text style={{color: 'white',textAlign: 'center', fontSize: 20}}>Cart</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
            data={products} 
            renderItem= 
            {
                ({item}) => <ProductCard item={item} callbackFun={()=>addToCart(item.id)}/>
            }
            keyExtractor={item => item.id}  
            />
        </View>
        }
        
        </>
    );
}