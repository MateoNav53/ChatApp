import React from 'react';
import { FlatList, Text, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage';
import BG from '../assets/images/BG.png';
import InputBox from '../components/ChatMessage/InputBox';

const ChatRoomScreen = () => {

    const route = useRoute();

    // console.log(route.params)

    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
            <FlatList data={chatRoomData.messages} renderItem={({ item }) => <ChatMessage message={item} />}></FlatList>
            <InputBox />
        </ImageBackground>

        
    )
}

export default ChatRoomScreen;