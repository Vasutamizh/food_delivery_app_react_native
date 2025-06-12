import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function ProductCard({item, callbackFun}){
    return(
        <TouchableOpacity onPress={callbackFun}>
        <View style={{display: 'flex', width: 325, flexDirection: 'row', gap: 25, alignItems: 'center', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', marginTop: 10, marginLeft: 20, padding: 10, borderRadius: 10}}>
            <Image 
            source={{uri: item.image}}
            resizeMode="cover"
            style={{ width: 100, height: 100 }}
            />
            <View>
                <Text style={{fontSize: 25}}>{item.name}</Text>
                <Text>Rs. {item.rate}</Text>
                <Text>{item.describtion}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
}