import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';

const Wrapper = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-bottom-width: 1px;
`;

const Thumbnail = styled.ImageBackground`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;
`;

const Title = styled.Text`
  text-align: left;
  padding-bottom: 5px;
  font-weight: 700;
`;

const Subtitle = styled.Text`
`;

const DetailsWrapper = styled.View`
  flex: 1;
  padding: 10px 5px;
`;

const Dot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;

interface Props {
    route: any;
    navigation: any
}

const exhibitions = [
    {
        "id": 275,
        "type": "show",
        "title": "戲劇小丑工作坊",
        "subtitle": "尋找你內心的小丑精神",
        "description": "一、術科課程\n    小丑的紅鼻子是全世界最小的面具，透過遊戲與即興，認識紅鼻子的魔力，了解小丑最核心的精神，讓人們重新找到生活的樂趣，進而聽取自己內在的聲音，如同卓别林、豆豆先生一般，探尋屬於你的「另一個自己」。\n時間：04/03～05/22  （週三） 14：00～17：00  （共計8週）\n地點：清華大學 校友體育館（一樓）瑜珈教室\n4/3   認識小丑：小丑基本概念的建立\n4/10  肢體表達：使用身體表達溝通\n4/17  想像力及即興練習\n4/24  發現觀眾：打破第四面牆\n5/1   尋找自己的小丑角色：認識自己\n5/8   多人組小丑：當小丑遇到小丑\n5/15  排練成果展呈現\n5/22  排練成果展呈現\n\n2/25起開放報名，採線上報名，限額15名。報名網址：https://bit.ly/2tnHSp6。03/25(一)12：00於清大藝術中心網站公告報名結果。錄取同學請繳交新台幣1000元保證金，上課出席率達80%，並參與工作坊成果展演，則全額退還。活動洽詢藝術中心 鄭小姐 03-5742899。\n    注意事項\n    1.請穿著方便運動的衣著\n    2.紅鼻子（課程辦理準備公用的紅鼻子，但若學員本身已有亦可自備）\n    3.飲用水或水壺，適時地補充水分\n    4.個人藥品與身分證件、健保卡（為維護個人健康與安全與避免意外）\n    5.毛巾與換洗衣物（僅建議，作為拭汗與更換使用，依個人需求攜帶）\n\n二、工作坊的成果展演呈現\n老師將與參與學員共同創造，凸顯每位學員特質，帶有清華校園獨特氣質的成果展演！\n時間：5/22(三)19：30\n地點：教育館一樓 大廳\n\n主辦：國立清華大學藝術中心 【沙丁龐客劇團】\n",
        "host": "清大藝術中心",
        "performer": "沙丁龐客劇團",
        "location": "清大校友體育館(一樓)瑜珈教室",
        "start_date": "2019-04-03",
        "end_date": "2019-05-22",
        "daily_start_time": "14:00:00",
        "daily_end_time": null,
        "ticket_info": null,
        "registration_link": "https://bit.ly/2tnHSp6",
        "en_title": null,
        "en_subtitle": null,
        "en_description": null,
        "en_host": null,
        "en_performer": null,
        "en_location": null,
        "en_ticket_info": null,
        "createdAt": "2019-02-21T13:14:37.799Z",
        "updatedAt": "2019-10-04T05:53:02.439Z",
        "coverId": 913,
        "cover": {
            "src": "https://arts.nthu.edu.tw/static/uploads/%E5%A0%86_%E7%AF%89.png"
        }
    },
    {
        "id": 262,
        "type": "visual_art",
        "title": "【拆/解 Dismantling】- 呂彥青個展",
        "subtitle": null,
        "description": "我們都在像星塵般的碎片裡尋找真實的自己。很多時候，我不太明白生命裡的他者的存在，甚至自己的存在，答案像是漫天飛舞的雪花，彷彿握在手裡便會消逝無蹤。拆/解 Dismantling，透過解構，我重建自己。",
        "host": "清大藝術中心",
        "performer": "呂彦青",
        "location": "藝術工坊",
        "start_date": "2018-10-17",
        "end_date": "2018-11-07",
        "daily_start_time": "09:00:00",
        "daily_end_time": "18:00:00",
        "ticket_info": null,
        "registration_link": null,
        "en_title": null,
        "en_subtitle": null,
        "en_description": null,
        "en_host": null,
        "en_performer": null,
        "en_location": null,
        "en_ticket_info": null,
        "createdAt": "2018-09-21T05:36:18.556Z",
        "updatedAt": "2019-10-04T06:01:43.895Z",
        "coverId": 703,
        "cover": {
            "src": "https://arts.nthu.edu.tw/static/uploads/%E5%A0%86_%E7%AF%89.png"
        }
    },
    {
        "id": 259,
        "type": "show",
        "title": "暗戀桃花源30周年紀念版",
        "subtitle": null,
        "description": "劇場裏，正在排練一齣因戰亂而錯過的淒美愛情舞台劇《暗戀》，卻被另一個劇團打斷，排練古裝鬧劇《桃花源》。舞台上的相撞，衝擊出華人世界最受歡迎的作品，30年來成為不朽的經典。\r\n\r\n參加方式：\r\n\r\n10/01（一）上午10：00開放線上報名，每人登記2張入場票券，不得重複報名，不得為他人報名，限額500張票券，索完為止。可領票名單將於10/04（四）15：00公布於藝術中心網站。\r\n\r\n領票方式：\r\n\r\n10月05日（五）09：00～12：00；14：00～20：00\r\n\r\n10月06日（六）09：00～12：00\r\n\r\n請於上述時間，攜帶本人有效證件至藝術中心辦公室領票，不接受代領，逾時不候。\r\n\r\n本場演出為對號入座，活動當日19:00開放進場，持票觀眾請於19:20前入座，19:25將開放未持票觀眾補位，補位觀眾請依前台工作人員指示排隊入場。\r\n報名網址：\r\nhttp://goo.gl/forms/JW9wXXqPnqgRwX2c2\r\n\r\n演出資訊：\r\n\r\n◎節目全長約 150 分鐘，建議7歲以上觀眾觀賞\r\n\r\n◎本場演出為對號入座，一人一票，憑票入場\r\n\r\n◎開演後，遲到觀眾將依工作人員安排於適當時間就近入座\r\n\r\n◎勿攜帶食物及飲料進場\r\n\r\n◎為維護版權及觀賞品質，演出全程禁止拍照、錄影、錄音\r\n\r\n活動洽詢清大藝術中心03-5742899。",
        "host": "清大藝術中心",
        "performer": "表演工作坊",
        "location": "大禮堂",
        "start_date": "2018-10-17",
        "end_date": "2018-10-17",
        "daily_start_time": "19:30:00",
        "daily_end_time": "21:30:00",
        "ticket_info": "索票",
        "registration_link": "http://goo.gl/forms/JW9wXXqPnqgRwX2c2",
        "en_title": null,
        "en_subtitle": null,
        "en_description": null,
        "en_host": null,
        "en_performer": null,
        "en_location": null,
        "en_ticket_info": null,
        "createdAt": "2018-09-21T05:36:16.398Z",
        "updatedAt": "2019-10-04T06:02:00.779Z",
        "coverId": 698,
        "cover": {
            "src": "https://arts.nthu.edu.tw/static/uploads/%E5%A0%86_%E7%AF%89.png"
        }
    },
    {
        "id": 249,
        "type": "visual_art",
        "title": "【粉紅色運算子Pink Operator 林沛瑩 vs長谷川愛雙個展】",
        "subtitle": null,
        "description": "2018.9.17-2018.10.23 (中秋節&雙十節閉館)\r\n\r\n【粉紅色運算子Pink Operator 林沛瑩 vs長谷川愛雙個展】\r\n\r\n贊助單位：  奧圖碼科技股份有限公司\r\n\r\n地點：清大藝中展覽廳綜合二館一F\r\n\r\n\r\n\r\n9/17（一）10:30茶會&記者會 \r\n\r\n9/17（一）11:15 藝術家面對面 \r\n\r\n\r\n破除普世偏見 跨領域新媒體藝術\r\n\r\n\r\n「粉紅色運算子」展名開宗明義是探討與破除普世偏見，藝術家們巧妙地構思五個系列展品各有其操控元素，嘗試讓觀者於各面向體悟反思。本展邀請旅居荷蘭當代藝術家林沛瑩與日本藝術家長谷川愛來台雙個展，倆人都是英國皇家藝術學院設計互動研究所培育的優秀藝術家，他們近幾年在藝術創作有均有亮眼表現，並得到新媒體藝術傲人獎項。其互動數位創作結合科學、生物藝術、社會文化等交互影響，引領觀者進入形而上的哲學思維。\r\n\r\n\r\n 近年來重要國際電子藝術節逐漸嶄露生物媒材、生物議題，例如奧地利林茲混種藝術獎的主要得獎作品皆為使用生物媒材的作品。生物藝術為新媒體藝術領域新興的子領域，本次展出數件以生物媒材作為創作對象的傑出作品，分別為林沛瑩的病毒系列作品《天花症候群》、《病毒馴獸師計畫》、《病毒之愛》，以及長谷川愛的《不可能的小孩》與《反偏見槍–黑膚人版 》。(節錄自賴小秋策展文字)",
        "host": "清大藝術中心",
        "performer": "林沛瑩   長谷川愛",
        "location": "清大藝中展覽廳綜合二館1F",
        "start_date": "2018-09-17",
        "end_date": "2018-10-23",
        "daily_start_time": "11:00:00",
        "daily_end_time": "17:00:00",
        "ticket_info": null,
        "registration_link": null,
        "en_title": null,
        "en_subtitle": null,
        "en_description": null,
        "en_host": null,
        "en_performer": null,
        "en_location": null,
        "en_ticket_info": null,
        "createdAt": "2018-09-21T05:36:17.756Z",
        "updatedAt": "2019-10-04T06:04:01.596Z",
        "coverId": 679,
        "cover": {
            "src": "https://arts.nthu.edu.tw/static/uploads/%E5%A0%86_%E7%AF%89.png"
        }
    },
    {
        "id": 216,
        "type": "film",
        "title": "【臺灣電影聚落串聯行動】清大場",
        "subtitle": null,
        "description": "專題講座：膠卷保存與數位修復\r\n時間：2017.09.25(一)19:00-20:00\r\n地點：清大水木書苑\r\n主講：國家電影中心數位修復組黃慧敏組長\r\n本場專題講座採線上報名，限額40名。報名網址：https://goo.gl/2ur8q4\r\n\r\n聚落＝「生活＋居住＋工作」的地方。\r\n國家電影中心今年（2017）規劃了台灣電影聚落串聯行動，提供修復完成的電影素材，從7月\r\n18日至10月28日，在全台各地方的民間團體、地方機構展開串聯，以聚落為基地，使電影藝術融入在地日常生活。新竹地區的聚落媒合串聯夥伴包括：月讀。書咖、瓦當人文書屋、竹塹城社區願景協進會、石店子69有機書店，以及新竹市文化局（新竹市影像博物館）。\r\n\r\n清大的場次由藝術中心、蘇格貓底咖啡屋與水木書苑共同執行，自9月12日至10月21日，在校園中進行11場的放映，並邀請國家電影中心數位修復組黃慧敏組長蒞臨，分享「膠卷保存與數位修復」。藉由這次參與串聯行動，讓觀眾欣賞這些再生的老電影，喚醒大家對於經典老片的熟悉度與親密感，體會永續傳承台灣電影的再生精神。除專題講座採事先線上報名之外，所有場次皆為免費自由入場，邀請學校教職員生與社區民眾一同觀賞老電影。\r\n\r\n\r\n❖新竹地區場次｜ http://taiwancinemavillage.weebly.com/260323148132291--260323148124066.html\r\n\r\n❖清大場最新訊息｜https://www.facebook.com/NTHUNIGHTCATS/\r\n❖臺灣電影聚落串聯行動官網｜ http://taiwancinemavillage.weebly.com/\r\n❖支持數位修復｜http://www.tfi.org.tw/news-info.asp?N_ID=1740\r\n❖延伸參考-臺灣電影數位修復計畫｜http://tcdrp.tfi.org.tw/\r\n\r\n指導單位｜文化部\r\n主辦單位｜財團法人國家電影中心\r\n執行單位｜（清大場次）清大藝術中心夜貓子電影院、蘇格貓底咖啡屋、水木書苑\r\n聯絡資訊｜（清大場次）清大藝術中心 陳小姐 (03)5162017、5162222",
        "host": "財團法人國家電影中心",
        "performer": "NTHU Arts Center",
        "location": "清大蘇格貓底咖啡屋、水木書苑",
        "start_date": "2017-09-12",
        "end_date": "2017-10-21",
        "daily_start_time": "19:00:00",
        "daily_end_time": "22:00:00",
        "ticket_info": "自由入場",
        "registration_link": "自由入場",
        "en_title": null,
        "en_subtitle": null,
        "en_description": null,
        "en_host": null,
        "en_performer": null,
        "en_location": null,
        "en_ticket_info": null,
        "createdAt": "2018-09-21T05:36:16.302Z",
        "updatedAt": "2019-10-04T06:07:25.149Z",
        "coverId": 601,
        "cover": {
            "src": "https://arts.nthu.edu.tw/static/uploads/%E5%A0%86_%E7%AF%89.png"
        }
    },
    {
        "id": 297,
        "type": "film",
        "title": "電影。故事。清華拍-專題放映",
        "subtitle": null,
        "description": "★線上報名https://goo.gl/N1hcw7\n\n★憑酷卡進館\n\n \n\n◎電影簡介資訊請參考清大夜貓子電影院部落格http://nightcats.blogspot.tw/\n杜篤之聲音作品\n10.31(二) 19:00《最遙遠的距離》林靖傑(2007) 118min\n11.04(六) 14:00《陽陽》鄭有傑(2009)110min\n11.07(二) 19:00《女朋友。男朋友》楊雅喆(2012) 106min\n11.11(六) 14:00《失魂》鍾孟宏(2013) 111min\n\n易智言編導作品\n11.21(二) 19:00《藍色大門》易智言(2002) 85min\n11.25(六) 14:00《阿丁的母親與子女以及樓上的女人》曹瑞原(1991) 50min、《關於愛．台北篇》易智言(2005) 30min\n11.28(二) 19:00《行動代號孫中山》易智言(2013) 90min\n12.02(六) 14:00 《浮光掠影的剎那》易智言(1998) 90min\n\n陳懷恩攝影 / 導演作品\n12.12(二) 19:00《尼羅河女兒》侯孝賢(1987) 93min\n12.16(六) 14:00《經過》鄭文堂(2005) 108min\n12.19(二) 19:00《練習曲》陳懷恩(2006) 100min\n12.23(六) 14:00《如歌的行板》陳懷恩(2014) 143min",
        "host": "清大藝術中心夜貓子電影院",
        "performer": "N",
        "location": "圖書館3樓小舞台團體室",
        "start_date": "2017-10-31",
        "end_date": "2017-12-23",
        "daily_start_time": "14:00:00",
        "daily_end_time": "21:00:00",
        "ticket_info": null,
        "registration_link": null,
        "en_title": null,
        "en_subtitle": null,
        "en_description": null,
        "en_host": null,
        "en_performer": null,
        "en_location": null,
        "en_ticket_info": null,
        "createdAt": "2019-03-06T11:31:30.453Z",
        "updatedAt": "2019-10-04T06:10:28.061Z",
        "coverId": 935,
        "cover": {
            "src": "https://arts.nthu.edu.tw/static/uploads/%E5%A0%86_%E7%AF%89.png"
        }
    },
    {
        "id": 339,
        "type": "show",
        "title": "人工智慧音樂會",
        "subtitle": "AI Concert",
        "description": "清華AI樂團的第一個公開音樂會，台北松菸誠品表演廳聽人工智慧演奏音樂，看人工智慧與人類的互動演出，這將是台灣一個重要的音樂會，歡迎1/12起向清大藝術中心索票。",
        "host": "清華大學",
        "performer": "清華AI樂團",
        "location": "台北松菸誠品表演廳",
        "start_date": "2020-01-19",
        "end_date": "2020-01-19",
        "daily_start_time": "22:30:00",
        "daily_end_time": null,
        "ticket_info": "索票入場",
        "registration_link": null,
        "en_title": null,
        "en_subtitle": null,
        "en_description": "",
        "en_host": null,
        "en_performer": null,
        "en_location": null,
        "en_ticket_info": null,
        "createdAt": "2019-10-03T02:51:49.184Z",
        "updatedAt": "2019-10-06T15:24:09.585Z",
        "coverId": 1012,
        "cover": {
            "src": "https://arts.nthu.edu.tw/static/uploads/%E5%A0%86_%E7%AF%89.png"
        }
    }
]

const Exhibitions: React.FC<Props> = ({ route, navigation }) => {
    const { colors } = useTheme();
    return (
        <ScrollView>
            {exhibitions.map((data, i) => {
                return (
                    <View key={data.id} style={{ borderColor: colors.uiAccent, borderTopWidth: i !== 0 ? 0.5 : 0 }}>
                        <Wrapper onPress={() => navigation.navigate('ExhibitionDetails', { data })}>
                            <Thumbnail source={{ uri: data.cover.src }} />
                            <DetailsWrapper>
                                <Title style={{ color: colors.text }}>{data.title}</Title>
                                <Text style={{ color: colors.text }}>{data.type}</Text>
                                <Text style={{ color: colors.text }}>{data.start_date}</Text>
                            </DetailsWrapper>
                        </Wrapper>
                    </View>
                )
            })}
            
        </ScrollView>
    )
}


export default Exhibitions;