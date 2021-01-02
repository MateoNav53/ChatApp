import React, {useState} from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles'

import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicrohponePress = () => {
        console.warn('microphone')
    }

    const onSendPress = () => {
        console.warn(`Sending: ${message}`)

        //send the message to backend

        setMessage('')
    }

    const onPress = () => {
        if(!message) {
            onMicrohponePress();
        } else {
            onSendPress();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color='grey' />
                <TextInput placeholder={'Type your message'} value={message} onChangeText={setMessage} multiline numberOfLines={6} style={styles.textInput} />
                <Entypo name="attachment" size={24} color='grey' style={styles.icons} />
                {!message && <Fontisto name="camera" size={24} color='grey' style={styles.icons} /> }
            </View>
            <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                {!message
                ? <MaterialCommunityIcons name="microphone" size={24} color='white' />
                : <MaterialIcons name="send" size={28} color='white' /> }
            </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default InputBox