import React, {useLayoutEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {useHeaderHeight} from '@react-navigation/stack';

import {useTheme} from '../hooks/';
import {Block, Input, Image,  Text} from '../components/';

// buttons example

// inputs example
const Inputs = () => {
  const {colors, sizes} = useTheme();

  return (
    <Block
      color={colors.card}
      marginTop={sizes.m}
      paddingTop={sizes.m}
      paddingHorizontal={sizes.padding}>
      <Text p semibold marginBottom={sizes.s}>
        Inputs
      </Text>
      <Block>
        <Input placeholder="Regular" marginBottom={sizes.sm} />
        <Input placeholder="Search" marginBottom={sizes.sm} />
        <Input
          search
          label="Search"
          marginBottom={sizes.sm}
          placeholder="Search with label"
        />
        <Input success placeholder="Success" marginBottom={sizes.sm} />
        <Input danger placeholder="Error" marginBottom={sizes.sm} />
        <Input disabled placeholder="Disabled" marginBottom={sizes.sm} />
        <Input primary placeholder="primary" marginBottom={sizes.sm} />
        <Input secondary placeholder="secondary" marginBottom={sizes.sm} />
        <Input tertiary placeholder="tertiary" marginBottom={sizes.sm} />
        <Input black placeholder="black" marginBottom={sizes.sm} />
        <Input gray placeholder="gray" marginBottom={sizes.sm} />
        <Input info placeholder="info" marginBottom={sizes.sm} />
        <Input danger placeholder="danger" marginBottom={sizes.sm} />
        <Input icon="search" gray placeholder="Icon with gray" marginBottom={sizes.sm} />
        <Input icon="settings" gray placeholder="Setting Icon with gray" marginBottom={sizes.sm} />
        <Text>Vactor Icon with Input Icon</Text>
        <Input placeholder="Vactor Icon" marginBottom={sizes.sm} />
      </Block>
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
        contentContainerStyle={{paddingVertical: sizes.padding}}>
        <Block>
          <Inputs />
        </Block>
      </Block>
    </Block>
  );
};

export default Components;
