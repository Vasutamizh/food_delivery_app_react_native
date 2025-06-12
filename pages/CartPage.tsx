import React, { useState,useEffect } from "react";
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import CartCard from "../componenets/CartCard";
import { supabase } from "../utils/SupabaseClient";
import Loader from "../componenets/Loader";

export default function HomePage():React.JSX.Element{

    const [products, setProducts] = useState([]);  
    const [isLoading, setisLoading] = useState(false)
    

    useEffect(()=>{
        setisLoading(true);
        const getData = async () => {
            console.log("inside cart fetch")
            setisLoading(true);   
            let { data, error } = await supabase.from('cart').select(`
                    foodId,
                    foods (
                    id, name, image, rate, describtion
                    )
                `);
            console.log(data)
            console.log(error)

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
        setisLoading(false);
    },[]);

    console.log(products)

    return(
        <>
        { isLoading ? <Loader/> :
        <View style={{ flex: 1 }}>
            <View>
                <View>
                    <Text style={{marginLeft: 20,marginTop:10, fontSize: 30}}>Cart Items</Text>
                </View>
            </View>
            <View style={{height: 500}}>
            <FlatList 
            data={products} 
            renderItem= 
            {
                ({item}) => <CartCard item={item.foods}/>
            }
            keyExtractor={item => item.id}  
            />
            </View>
            <TouchableOpacity style={{width: 270,padding: 8, backgroundColor: '#E35335', borderRadius: 20, margin: 'auto'}}>
                <Text style={{color: 'white',textAlign: 'center', margin: 7, fontSize: 20}}>Proceed</Text>
            </TouchableOpacity>
        </View> 
        }
        
        </>
    );
}