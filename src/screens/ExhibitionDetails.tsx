import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useTheme } from '@react-navigation/native';
import { ScrollView, Linking, View, Animated, Text } from 'react-native';
//mport Icon from '../common/Icon';
//import Label from '../common/Label';
//import Countdown from '../common/Countdown';
//import ActionMenu from '../common/ActionMenu';
//import openMap from "react-native-open-maps";
//import firebase from 'react-native-firebase'

const IMAGE_HEIGHT = 400;

const Image = styled(Animated.Image)`
  height: ${IMAGE_HEIGHT + 50}px;
  width: 100%;
  position: absolute;
  background: #888;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 28px;
  padding: 24px 16px;
  text-align: center;
`;

const ContentWrapper = styled.View`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: -30px;
`;

const Location = styled.Text`
  margin-left: 10px;
  font-size: 13px;
  padding-right: 20px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
`;

const DescText = styled.Text`
  margin-bottom: 16px;
  font-size: 17px;
`;

const DescWrapper = styled.View`
  padding: 20px;
  margin: 16px 0;
`;

const Subtitle = styled.Text`
  margin: 30px 0 0 20px;
  font-size: 25px;
  font-weight: 500;
`;

const Key = styled.Text`
    font-size: 16px;
    font-weight: 300;
    width: 85px;
`

const Value = styled.Text`
    font-size: 16px;
    font-weight: 300;
    padding-left: 10px;
`

interface Props {
  route: any;
  navigation: any;
}



const ExhibitionDetails: React.FC<Props> = ({ route, navigation }) => {

    const [scrollY] = useState(new Animated.Value(0));
    const { colors } = useTheme();
    const { data } = route.params;

    const ImageScale = scrollY.interpolate({
        inputRange: [-100, 0, 200],
        outputRange: [1.4, 1.2, 1],
        extrapolate: 'clamp'
      })

    return (
        <ScrollView>
            <Image source={{ uri: data.cover.src }} style={{ transform: [{ scale: ImageScale }] }}></Image>
            <ScrollView
                contentContainerStyle={{ paddingTop: IMAGE_HEIGHT }}
            >
                <View style={{ backgroundColor: colors.background }}>
                    <ContentWrapper style={{ backgroundColor: colors.background }}>
                        <Title style={{ color: colors.text }}>{data.title}</Title>
                        <Subtitle style={{ color: colors.text }}>Informations</Subtitle>
                        <DescWrapper style={{ backgroundColor: colors.secondary }}>
                            <Row>
                                <Key style={{ color: colors.text }}>Type</Key>
                                <Value style={{ color: colors.text }}>{data.type}</Value>
                            </Row>
                            <Row>
                                <Key style={{ color: colors.text }}>Subtitle</Key>
                                <Value style={{ color: colors.text }}>{data.subtitle}</Value>
                            </Row>
                            <Row>
                                <Key style={{ color: colors.text }}>Date</Key>
                                <Value style={{ color: colors.text }}>{data.start_date} ~ {data.end_date}</Value>
                            </Row>
                            <Row>
                                <Key style={{ color: colors.text }}>Performer</Key>
                                <Value style={{ color: colors.text }}>{data.performer}</Value>
                            </Row>
                            <Row>
                                <Key style={{ color: colors.text }}>Host</Key>
                                <Value style={{ color: colors.text }}>{data.host}</Value>
                            </Row>
                            <Row>
                                <Key style={{ color: colors.text }}>Location</Key>
                                <Value style={{ color: colors.text }}>{data.location}</Value>
                            </Row>
                        </DescWrapper>
                        <Subtitle style={{ color: colors.text }}>Details</Subtitle>
                        <DescWrapper style={{ backgroundColor: colors.secondary}}>
                            <Text style={{ color: colors.text }}>{data.description}</Text>
                        </DescWrapper>
                    </ContentWrapper>
                </View>
            </ScrollView>
        </ScrollView>
    )
}

export default ExhibitionDetails;