import React  from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Button
} from 'react-native';
import 'react-native-gesture-handler';

export let userName = 'defaultPranav';
export let userNameSet = new Set();
let tempUser = '';
let tempUserName = '';
let tempRemoveUser = '';
//function printSet(set)
//{
 //   let stringA = '';
   // for(let user of set)
    //{
 //       stringA+=user + ' ';
  //  }
   // return stringA;
//}

//const setIter = userNameSet.map((type)=> <TextInput placeholder={type} />)
export default class SettingsScreen extends React.Component {
    // setIter() {
    //     return userNameSet.map(function(key,i){
    //       return(
        
    //           <Text>{key}</Text>
              
    //       );
    //     });
    //   }
    printArray()
    {
        let tempArr= Array.from(userNameSet);
        return <Text>{tempArr.toString()}</Text>
    }

    render() {


      return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView>
                <Text textAlignVertical={'top'}>Change Username</Text>
                <Text textAlignVertical={'top'}>Your Current Username is {userName}</Text>
                <Text>Please do not change your username after already sending a location.</Text>
                <TextInput  placeholder = {'Enter a Username'} onChangeText =
                {
                    (text) => {tempUserName = text;}
                }/>
                <Button style={{marginBottom: 20}} title = {'Update Username'} onPress = 
                {
                    () => {userName = tempUserName; this.forceUpdate()}
                }></Button>


                <View >
                    <Text style = {{marginTop:20}}>List of Friends:</Text>
                    {this.printArray()}
                    <Text style={{marginTop: 20}}>Add a friend by their username</Text>
                    <TextInput   placeholder = {'Enter Your Friends Username'} onChangeText=
                    {
                        (text) => {tempUser=text;}
                    }/>
                 
                    <Button  title = {'Add Friend'}onPress = 
                    {
                        () => {userNameSet.add(tempUser); this.forceUpdate()}
                    }>
                    </Button>   

                </View>
                <Text style={{marginTop: 20}}>Remove a friend by their username</Text>
                <TextInput   placeholder = {'Enter Your Friends Username'} onChangeText=
                {
                    (text) => {tempRemoveUser=text;}
                }/>
                 
                <Button title = {'Remove Friend'}onPress = 
                {
                    () => {userNameSet.delete(tempRemoveUser); this.forceUpdate()}
                }>
                </Button>
            </ScrollView>
        </View>
      );
    }
  }

