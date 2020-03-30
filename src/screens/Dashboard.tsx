import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Banner from "../components/Banner";

interface Props {
    route: any;
    navigation: any;
}

const Wrapper = styled.SafeAreaView`
  align-items: center;
  flex: 1;
`;

const banners = [
    {
        "id": 1,
        "coverId": 1,
        "cover": {
            id: 1,
            src: "https://arts.nthu.edu.tw/static/uploads/BlueHour-Main%20PosterB1_English%20(1)-01.jpg"
        },
        exhibition: {
            "id": 341,
            "type": "film",
            "title": "Dreaming Girl 影展",
            "subtitle": null,
            "description": "【Dreaming Girl Film Festival】\n播映時間：2020.03.03-03.28 每週二、六晚間七點半\n播映地點：禾園咖啡(清大水木書苑店風雲樓一樓)\nDreaming Girl影展描繪一個個懷抱著「想望」的女性身影，有人正在路上，有人則在磕絆間忘了自己身在何方。一個想望，或許意味著確定／領悟／勇敢，以及回頭看／寶愛自己，無涉年齡，想望引著自我步往另一個嶄新的道路。\n03.03 (二) 《清晨天空無限藍》Blue Hour (2019) 箱田優子｜92min\n03.07 (六) 《紐約哈哈哈》Frances Ha (2013) Noah Baumbach｜86min\n03.10 (二) 《睡著也好醒來也罷》ASAKO I & II (2018) 濱口竜介｜119min\n03.14 (六) 《沒人愛小姐》Jeune femme (2017) Léonor Serraille｜98min\n03.17 (二) 《生命之詩》Poetry (2010) 李滄東｜139min \n03.21 (六) 《伴手禮》Souvenir (2016) Bavo Defurne｜90min \n03.24 (二) 《顛父人生》Toni Erdmann (2016) Maren Ade｜162min\n\n主辦單位｜清大藝術中心夜貓子電影院\n",
            "host": "清大藝術中心夜貓子電影院",
            "performer": "無",
            "location": "禾園咖啡(清大水木書苑店風雲樓一樓)",
            "start_date": "2020-03-03",
            "end_date": "2020-03-28",
            "daily_start_time": null,
            "daily_end_time": null,
            "ticket_info": null,
            "registration_link": "https://www.facebook.com/NTHUNIGHTCATS/",
            "en_title": null,
            "en_subtitle": null,
            "en_description": "",
            "en_host": null,
            "en_performer": null,
            "en_location": null,
            "en_ticket_info": null,
            "createdAt": "2020-03-05T05:52:03.986Z",
            "updatedAt": "2020-03-05T05:52:03.986Z",
            "coverId": 1037,
            "cover": {
                "id": 1037,
                "file": "BlueHour-Main PosterB1_English (1)-01.jpg",
                "src": "https://arts.nthu.edu.tw/static/uploads/BlueHour-Main%20PosterB1_English%20(1)-01.jpg",
                "note": null,
                "createdAt": "2020-03-05T05:51:08.834Z",
                "updatedAt": "2020-03-05T05:51:08.834Z",
                "publicationId": null,
                "exhibitionId": null
            },
            "groupImages": []
        }   
    },
    {
        "id": 2,
        "coverId": 2,
        "cover": {
            "src": "https://arts.nthu.edu.tw/static/uploads/Screenshot%20from%202020-03-10%2014-55-54.png"
        },
        "exhibition": {
            "id": 350,
            "type": "visual_art",
            "title": "從無中湧現──2020藝鳴清華：國立清華大學藝術與設計學系教授聯展",
            "subtitle": null,
            "description": "茶會&記者會04.13(一)10:30/藝術中心展廳\n藝術家面對面04.13(一)11:15/藝術中心展廳\n當代藝術幾乎無所限制，某種程度上，概念與藝術外部的思量亦已成為創作的必須主張的部分。許多藝術創作訴諸觀念，或訴諸行動，在「過程比結果重要」的思維之外，面對藝術創作的產物，我們是否還存有期待？或者，我們還有如何的期待？\n不妨回到一個基礎的設定：藝術即是自身，它有著無法替代或化約的什麼，正是這一特質使之成為藝術。它可以跨越任何領域，亦可以主張所有邊際的推移或抹除，但無論如何，藝術不是生活，藝術不是哲學，它不是社會運動，也不是任何學術研究。作為藝術，無論選擇何種形式，它都有再現的必要，亦必定從美學的立場出發。\n「從無中湧現」強調藝術創作自身的軌跡，及其獨一性、原初性，充滿動態或潛能。讓—呂克，南希（Jean-Luc Nancy）曾將素描視為純粹的藝術表現典型，認為其是屬於每個藝術家自身的描繪方式，它超出一切知識（savoir）和製作（faire）的才智（savoir-faire），無可取代。本展雖未限定素描創作，但同樣強調創作的本質，亦即每位藝術家展現自我的描繪／表現方式，及其之為藝術回應世界的能力。\n",
            "host": "清大藝術中心",
            "performer": "藝設系師生",
            "location": "藝術中心展覽廳",
            "start_date": "2020-04-13",
            "end_date": "2020-05-06",
            "daily_start_time": null,
            "daily_end_time": null,
            "ticket_info": null,
            "registration_link": null,
            "en_title": null,
            "en_subtitle": null,
            "en_description": "",
            "en_host": null,
            "en_performer": null,
            "en_location": null,
            "en_ticket_info": null,
            "createdAt": "2020-03-07T05:48:05.059Z",
            "updatedAt": "2020-03-20T06:12:39.340Z",
            "coverId": 1047,
            "cover": {
                "id": 1047,
                "file": "Screenshot from 2020-03-10 14-55-54.png",
                "src": "https://arts.nthu.edu.tw/static/uploads/Screenshot%20from%202020-03-10%2014-55-54.png",
                "note": null,
                "createdAt": "2020-03-10T06:56:57.767Z",
                "updatedAt": "2020-03-10T06:56:57.767Z",
                "publicationId": null,
                "exhibitionId": null
            },
            "groupImages": []
        }
    }
]
const Dashboard: React.FC<Props> = ({ route, navigation }) => {
    return (
        <Wrapper>
            <ScrollView scrollEnabled={true} style={{ width: "100%" }}>
                {banners.map((item, i) => {
                    const data = item.exhibition;
                    return (
                        <View key={item.id} style={{ height: 500 }}>
                            <Banner data={item} onPress={() => navigation.navigate('ExhibitionDetails', { data })}></Banner>
                        </View>
                    )
                })}
            </ScrollView>
        </Wrapper>
    )
}


export default Dashboard;