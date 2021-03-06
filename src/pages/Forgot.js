import React from 'react'
import {View,StyleSheet,TouchableOpacity,Text,SafeAreaView,TextInput,Image,ScrollView} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import Fontiso from 'react-native-vector-icons/Fontisto'
export default function Forgot({navigation})
{
    return (
        <SafeAreaView style={style.container}>
            <View>
                <TouchableOpacity onPress={()=>navigation.goBack()}><Entypo name="chevron-left" size={RFValue(24,580)}></Entypo></TouchableOpacity>
            </View>
            <ScrollView style={style.content} showsVerticalScrollIndicator={false}>
                <View style={{flex:1}}>
                    <Text style={style.title}>Forgotten {'\n'}your password?</Text>
                    <Text style={style.description}>Enter your e-mail address and we would send you a link a reset your password.</Text>
                    <View style={[style.textinput,{marginTop:54}]}>
                        <Text style={style.label}>E-mail</Text>
                        <View style={style.inputcontainer}>
                            <TextInput style={style.input} placeholderTextColor="#676767" defaultValue="steven.neff23@gmail.com"></TextInput>
                            <Image source={require('../assets/icons/bx-mail-send.svg.png')} style={style.icon}></Image>
                        </View>
                    </View>
                    <TouchableOpacity style={[style.btncontainer,{marginTop:98}]}>
                        <Text style={style.btntext}>Send</Text>
                    </TouchableOpacity>                   
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:'white'
    },
    content:{
        padding:8,
        marginTop:24,
        flex:1,
        marginBottom:40
    },
    title:{
        fontFamily:'Avenir Heavy',
        color:'#E50914',
        fontSize:RFValue(25,580),
        fontWeight:'800'
    },
    description:{
        fontFamily:'AvenirLTStd-Book',
        color:'#BABABA',
        fontSize:RFValue(15,580)
    },
    textinput:{
        backgroundColor:'#FBFBFD',
        shadowOffset:{
            width:0,
            height:14
        },
        shadowRadius:20,
        shadowColor:'rgba(66, 76, 112, 0.09)',
        paddingLeft:16,
        paddingRight:16,
        paddingTop:8,
        paddingBottom:8,
        marginTop:20
    },
    label:{
        fontSize:RFValue(9,580),
        color:'#BABABA',
        fontFamily:'SFProDisplay-Semibold'
    },
    inputcontainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:7
    },
    input:{
        flex:1,
        fontSize:RFValue(15,580),
        fontFamily:'Avenir Heavy',
        color:'#676767',
        padding:0,
        marginRight:15
    },
    icon:{
        width:RFValue(15,580),
        height:RFValue(15,580)
    },
    forgot:{
        fontFamily:'Avenir Heavy',
        color:'#E50914',
        fontSize:RFValue(13,580),
        fontWeight:'800'
    },
    btncontainer:{
        backgroundColor:'#E50914',
        padding:11,
        flexDirection:'row',
        justifyContent:'center'
    },
    btntext:{
        fontFamily:'SFProDisplay-Semibold',
        fontSize:RFValue(17,580),
        color:'white'
    },
    descriptionsignin:{
        display:'flex',
        flexDirection:'row',
        marginTop:44,
        alignItems:'center'
    },
    descriptionside:{
        borderBottomColor:'#BABABA',
        borderBottomWidth:1,
        borderBottomColor:'#BABABA',
        flex:1
    },
    socialbtn:{
        width:48,
        height:48,
        borderRadius:24,
        display:'flex',
        alignItems:'center',
        shadowColor:'rgba(66, 76, 112, 0.09)',
        shadowOffset:{
            width:0,
            height:14
        },
        shadowRadius:20,
        elevation:1
    },
    containerflex:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:44
    },
    signuptext:{
        fontSize:RFValue(13,580),
        fontFamily:'AvenirLTStd-Roman'
    }
})