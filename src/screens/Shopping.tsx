import React, {useLayoutEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {useHeaderHeight} from '@react-navigation/stack';

import {useTheme} from '../hooks/';
import {Block, Button, Input, Image, Switch, Modal, Text} from '../components/';
import {TouchableWithoutFeedback} from 'react-native';

// buttons example

const Cards = () => {
  const {assets, colors, gradients, sizes} = useTheme();

  return (
    <Block>
      <Block  paddingBottom={sizes.sm} paddingLeft={0} paddingRight={sizes.sm}   >
        <Text> horizontal ScrollView</Text>
      <Block
        row
        scroll
        horizontal
        paddingLeft={2}
        renderToHardwareTextureAndroid
        showsHorizontalScrollIndicator={false}
        
        contentOffset={{x: -sizes.padding, y: 0}}
        
        >
        <Block card flex={1} style={{alignItems: 'center',justifyContent: 'center'}} margin={sizes.sm} paddingBottom={sizes.xl}  padding={sizes.sm} >
          <Image
            resizeMode="cover"
            source={assets?.shoppingItem1}
            style={{width: 314, height: 314}}
          />
          <Block padding={sizes.s} justify="space-between">
            <Text p semibold marginBottom={sizes.s}>
              Modern Helmet HO3
            </Text>
            <Text p semibold marginBottom={sizes.s}>
              1450$
            </Text>
            <TouchableOpacity>
              <Block row align="center">
                <Text p semibold marginRight={sizes.s} color={colors.link}>
                  More Details
                </Text>
                <Image source={assets.arrow} color={colors.link} />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
        <Block card flex={1} style={{alignItems: 'center',justifyContent: 'center'}} margin={sizes.sm}  paddingBottom={sizes.xl}   padding={sizes.sm} >
          <Image
            resizeMode="cover"
            source={assets?.shoppingItem2}
            style={{width: 314, height: 314}}
          />
          <Block padding={sizes.s} justify="space-between">
            <Text p semibold marginBottom={sizes.s}>
              Modern Helmet HO3
            </Text>
            <Text p semibold marginBottom={sizes.s}>
              1450$
            </Text>
            <TouchableOpacity>
              <Block row align="center">
                <Text p semibold marginRight={sizes.s} color={colors.link}>
                  More Details
                </Text>
                <Image source={assets.arrow} color={colors.link} />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
        <Block card flex={1} style={{alignItems: 'center',justifyContent: 'center'}} margin={sizes.sm}  paddingBottom={sizes.xl}   padding={sizes.sm} >
          <Image
            resizeMode="cover"
            source={assets?.shoppingItem1}
            style={{width: 314, height: 314}}
          />
          <Block padding={sizes.s} justify="space-between">
            <Text p semibold marginBottom={sizes.s}>
              Modern Helmet HO3
            </Text>
            <Text p semibold marginBottom={sizes.s}>
              1450$
            </Text>
            <TouchableOpacity>
              <Block row align="center">
                <Text p semibold marginRight={sizes.s} color={colors.link}>
                  More Details
                </Text>
                <Image source={assets.arrow} color={colors.link} />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
        <Block card flex={1} style={{alignItems: 'center',justifyContent: 'center'}} margin={sizes.sm}  paddingBottom={sizes.xl}   padding={sizes.sm} >
          <Image
            resizeMode="cover"
            source={assets?.shoppingItem2}
            style={{width: 314, height: 314}}
          />
          <Block padding={sizes.s} justify="space-between">
            <Text p semibold marginBottom={sizes.s}>
              Modern Helmet HO3
            </Text>
            <Text p semibold marginBottom={sizes.s}>
              1450$
            </Text>
            <TouchableOpacity>
              <Block row align="center">
                <Text p semibold marginRight={sizes.s} color={colors.link}>
                  More Details
                </Text>
                <Image source={assets.arrow} color={colors.link} />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
      </Block>
      <Text>  Dubble Item</Text>
      <Block row marginTop={sizes.sm}>
        <Block card marginRight={sizes.sm}>
          <Image
            resizeMode="cover"
            source={assets?.shoppingItem1}
            style={{width: 114, height: 114}}
          />
          <Block padding={sizes.s} justify="space-between">
            <Text p semibold marginBottom={sizes.s}>
              Modern Helmet HO3
            </Text>
            <Text p semibold marginBottom={sizes.s}>
              1450$
            </Text>
            <TouchableOpacity>
              <Block row align="center">
                <Text p semibold marginRight={sizes.s} color={colors.link}>
                  More Details
                </Text>
                <Image source={assets.arrow} color={colors.link} />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
        <Block card marginRight={sizes.sm}>
          <Image
            resizeMode="cover"
            source={assets?.shoppingItem2}
            style={{width: 114, height: 114}}
          />
          <Block padding={sizes.s} justify="space-between">
            <Text p semibold marginBottom={sizes.s}>
              Black Barrel Helmet
            </Text>
            <Text p semibold marginBottom={sizes.s}>
              1150$
            </Text>
            <TouchableOpacity>
              <Block row align="center">
                <Text p semibold marginRight={sizes.s} color={colors.link}>
                  More Details
                </Text>
                <Image source={assets.arrow} color={colors.link} />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
      <Block row marginTop={sizes.sm}>
        <Block card marginRight={sizes.sm}>
          <Image
            resizeMode="cover"
            source={assets?.shoppingItem1}
            style={{width: 114, height: 114}}
          />
          <Block padding={sizes.s} justify="space-between">
            <Text p semibold marginBottom={sizes.s}>
              Modern Helmet HO3
            </Text>
            <Text p semibold marginBottom={sizes.s}>
              1450$
            </Text>
            <TouchableOpacity>
              <Block row align="center">
                <Text p semibold marginRight={sizes.s} color={colors.link}>
                  More Details
                </Text>
                <Image source={assets.arrow} color={colors.link} />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
        <Block card marginRight={sizes.sm}>
          <Image
            resizeMode="cover"
            source={assets?.shoppingItem2}
            style={{width: 114, height: 114}}
          />
          <Block padding={sizes.s} justify="space-between">
            <Text p semibold marginBottom={sizes.s}>
              Black Barrel Helmet
            </Text>
            <Text p semibold marginBottom={sizes.s}>
              1150$
            </Text>
            <TouchableOpacity>
              <Block row align="center">
                <Text p semibold marginRight={sizes.s} color={colors.link}>
                  More Details
                </Text>
                <Image source={assets.arrow} color={colors.link} />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
     
      <Text>  Single  Item</Text>
      {/* single card */}
      <Block>
        <Block card row marginTop={sizes.sm}>
          <Image
            resizeMode="contain"
            source={assets?.shoppingItem1}
            style={{height: 114, width: 114}}
          />
          <Block padding={sizes.s} justify="space-between">
            <Text h4>Modern Helmet HO3</Text>
            <Text h5 semibold>
              $786.00
            </Text>
            <TouchableOpacity>
              <Block row align="center">
                <Text p semibold marginRight={sizes.s} color={colors.link}>
                  More details
                </Text>
                <Image source={assets.arrow} color={colors.link} />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
      {/* inline cards */}
    </Block>
  );
};

const Components = (props) => {
  const {assets, sizes} = useTheme();
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackground: () => (
        <Image
          radius={0}
          resizeMode="cover"
          width={sizes.width}
          height={headerHeight}
          source={assets.header}
        />
      ),
    });
  }, [assets.header, navigation, sizes.width, headerHeight]);

  return (
    <Block safe>
      <Block
        scroll
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: sizes.padding}}
        contentContainerStyle={{paddingVertical: sizes.padding}}>
        <Block>
          <Cards prop={props} />
        </Block>
      </Block>
    </Block>
  );
};

export default Components;
