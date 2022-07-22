import React, { useLayoutEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';



import { useTheme } from '../hooks/';
import { Block, Button, Input, Image, Switch, Modal, Text } from '../components/';
import { TouchableWithoutFeedback } from 'react-native';
// buttons example
const Buttons = (props) => {
  const natigation = props.prop.navigation;

  const [showModal, setModal] = useState(false);
  const [quantity, setQuantity] = useState('01');
  const { assets, colors, gradients, sizes } = useTheme();

  return (
    <Block paddingHorizontal={sizes.padding}>
      <Text p semibold marginBottom={sizes.s}>
        Buttons
      </Text>
      <Block>
        <Button
          flex={1}
          gradient={gradients.primary}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.primary} marginBottom={sizes.base} > <Text white bold transform="uppercase"> Title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            Primary
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.secondary}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.secondary} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            Secondary
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.info}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.info} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            info
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.success}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.success} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            success
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.warning}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.warning} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            warning
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.danger}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.danger} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            danger
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.light}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.light} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text bold transform="uppercase">
            light
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.dark}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.dark} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            dark
          </Text>
        </Button>
        <Block row justify="space-between" marginBottom={sizes.base}>
          <Button
            flex={1}
            row
            gradient={gradients.dark}
            onPress={() => setModal(true)}>
            <Block
              row
              align="center"
              justify="space-between"
              paddingHorizontal={sizes.sm}>
              <Text white bold transform="uppercase" marginRight={sizes.sm}>
                {quantity}
              </Text>
              <Image
                source={assets.arrow}
                color={colors.white}
                transform={[{ rotate: '90deg' }]}
              />
            </Block>
          </Button>
          <Button
            flex={1}
            gradient={gradients.dark}
            marginHorizontal={sizes.s}
            onPress={() => {
              alert(
                '<Button flex={1} gradient={gradients.dark} marginHorizontal={sizes.s} > <Text white bold transform="uppercase" marginHorizontal={sizes.s}> Delete</Text></Button>',
              );
            }}>
            <Text white bold transform="uppercase" marginHorizontal={sizes.s}>
              Delete
            </Text>
          </Button>
          <Button
            gradient={gradients.dark}
            onPress={() => {
              alert(
                '<Button gradient={gradients.dark}> <Text white bold transform="uppercase" marginHorizontal={sizes.sm}> Save for later</Text></Button>',
              );
            }}>
            <Text white bold transform="uppercase" marginHorizontal={sizes.sm}>
              Save for later
            </Text>
          </Button>
        </Block>
        {/* ================================================================================================================ */}
        <Button
          flex={1}
          gradient={gradients.custom1}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom1} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            custom1
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.custom2}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom2} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            custom2
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.custom3}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom3} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            custom3
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.custom4}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom4} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            custom4
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.custom5}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom5} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            custom5
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.custom6}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom6} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            custom6
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.custom7}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom7} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            custom7
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.custom8}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom8} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            custom8
          </Text>
        </Button>
        {/* ================================================================================================================ */}
      </Block>
      <Modal visible={showModal} onRequestClose={() => setModal(false)}>
        <FlatList
          keyExtractor={(index) => `${index}`}
          data={['01', '02', '03', '04', '05']}
          renderItem={({ item }) => (
            <Button
              marginBottom={sizes.sm}
              onPress={() => {
                setQuantity(item);
                setModal(false);
              }}>
              <Text p white semibold transform="uppercase">
                {item}
              </Text>
            </Button>
          )}
        />
      </Modal>
    </Block>
  );
};
const Card1 = (props) => {
  const { colors, gradients, icons, sizes } = useTheme();

  return (
    <TouchableWithoutFeedback onPress={() => alert('Under Process')}>
      <Block card padding={sizes.sm} marginTop={sizes.sm}>
        <Image
          height={170}
          resizeMode="cover"
          source={{
            uri: 'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
          }}
        />
        {/* article category */}

        {/* article description */}
        <Text
          h5
          bold
          size={13}
          marginTop={sizes.s}
          transform="uppercase"
          marginLeft={sizes.xs}
          gradient={gradients.primary}>
          Card 1
        </Text>
        <Text
          p
          marginTop={sizes.s}
          marginLeft={sizes.xs}
          marginBottom={sizes.sm}>
          Rather than worrying about switching offices every couple years.
        </Text>

        {/* user details */}

        <Block row marginLeft={sizes.xs} marginBottom={sizes.xs}>
          <Image
            radius={sizes.s}
            width={sizes.xl}
            height={sizes.xl}
            source={{
              uri: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fit=crop&w=80&q=80",
            }}
            style={{ backgroundColor: colors.white }}
          />
          <Block justify="center" marginLeft={sizes.s}>
            <Text p semibold>
              Devin Coldewey
            </Text>
            <Text p gray>
              Posted on 20 Jan 2020
            </Text>
          </Block>
        </Block>

        {/* location & rating */}
      </Block>
    </TouchableWithoutFeedback>
  );
};

const Card2 = (props) => {
  const { colors, gradients, icons, sizes } = useTheme();

  return (
    <TouchableWithoutFeedback onPress={() => alert('Under Process')}>
      <Block card padding={sizes.sm} marginTop={sizes.sm}>
        <Image
          height={170}
          resizeMode="cover"
          source={{
            uri: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
          }}
        />
        <Text
          h5
          bold
          size={13}
          marginTop={sizes.s}
          transform="uppercase"
          marginLeft={sizes.xs}
          gradient={gradients.primary}>
          Card 2
        </Text>
        <Text
          p
          marginTop={sizes.s}
          marginLeft={sizes.xs}
          marginBottom={sizes.sm}>
          The most beautiful and complex UI Kits built by Creative Tim.
        </Text>

        {/* location & rating */}

        <Block row align="center">
          <Image source={icons.location} marginRight={sizes.s} />
          <Text p size={12} semibold>
            {'Paris'}, {'France'}
          </Text>
          <Text p bold marginHorizontal={sizes.s}>
            •
          </Text>
          <Image source={icons.star} marginRight={sizes.s} />
          <Text p size={12} semibold>
            4.8/5
          </Text>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};
const Card3 = (props) => {
  const { colors, gradients, icons, sizes } = useTheme();

  return (
    <TouchableWithoutFeedback onPress={() => alert('Under Process')}>
      <Block card white padding={0} marginTop={sizes.sm}>
        <Image
          background
          resizeMode="cover"
          radius={sizes.cardRadius}
          source={{
            uri: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80',
          }}>
          <Block color={colors.overlay} padding={sizes.padding}>
            <Text color={colors.matching} h4 white marginBottom={sizes.sm}>
              Office space means growth.
            </Text>
            <Text color={colors.matching} p white>
              Rather than worrying about switching offices every couple years,
              you can instead stay in the same location.
            </Text>
            {/* user details */}
            <Block row marginTop={sizes.xxl}>
              <Image
                radius={sizes.s}
                width={sizes.xl}
                height={sizes.xl}
                source={{
                  uri: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80',
                }}
                style={{ backgroundColor: colors.white }}
              />
              <Block justify="center" marginLeft={sizes.s}>
                <Text color={colors.matching} p white semibold>
                  Mathew Glock
                </Text>
                <Text color={colors.matching} p white>
                  HR Manager
                </Text>
              </Block>
            </Block>
          </Block>
        </Image>
      </Block>
    </TouchableWithoutFeedback>
  );
};
const Cards = () => {
  const { assets, colors, gradients, sizes } = useTheme();

  return (
    <Block marginTop={sizes.sm}>

      {/* single card */}
      <Block>
        <Block card row>
          <Image
            resizeMode="contain"
            source={assets?.card1}
            style={{ height: 114 }}
          />
          <Block padding={sizes.s} justify="space-between">
            <Text p>Adventures - Multi day trips with meals and stays.</Text>
            <TouchableOpacity>
              <Block row align="center">
                <Text p semibold marginRight={sizes.s} color={colors.link}>
                  Read Article
                </Text>
                <Image source={assets.arrow} color={colors.link} />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
      {/* inline cards */}
      <Block row marginTop={sizes.sm}>
        <Block card marginRight={sizes.sm}>
          <Image
            resizeMode="cover"
            source={assets?.card2}
            style={{ width: '100%' }}
          />
          <Block padding={sizes.s} justify="space-between">
            <Text p marginBottom={sizes.s}>
              New ways to meet your business goals.
            </Text>
            <TouchableOpacity>
              <Block row align="center">
                <Text p semibold marginRight={sizes.s} color={colors.link}>
                  Read Article
                </Text>
                <Image source={assets.arrow} color={colors.link} />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
        <Block card>
          <Image
            resizeMode="cover"
            source={assets?.card3}
            style={{ width: '100%' }}
          />
          <Block padding={sizes.s} justify="space-between">
            <Text p marginBottom={sizes.s}>
              The highest status people.
            </Text>
            <TouchableOpacity>
              <Block row align="center">
                <Text p semibold marginRight={sizes.s} color={colors.link}>
                  Read Article
                </Text>
                <Image source={assets.arrow} color={colors.link} />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
      {/* full image width card */}
      <Block card marginTop={sizes.sm}>
        <Image
          resizeMode="cover"
          source={assets?.card4}
          style={{ width: '100%' }}
        />
        <Text
          h5
          bold
          transform="uppercase"
          gradient={gradients.primary}
          marginTop={sizes.sm}>
          Trending
        </Text>
        <Text
          p
          marginTop={sizes.s}
          marginLeft={sizes.xs}
          marginBottom={sizes.sm}>
          The most beautiful and complex UI Kits built by Creative Tim.
        </Text>
        {/* user details */}
        <Block row marginLeft={sizes.xs} marginBottom={sizes.xs}>
          <Image
            source={assets.avatar1}
            style={{ width: sizes.xl, height: sizes.xl, borderRadius: sizes.s }}
          />
          <Block marginLeft={sizes.s}>
            <Text p semibold>
              Mathew Glock
            </Text>
            <Text p gray>
              Posted on 28 February
            </Text>
          </Block>
        </Block>
      </Block>
      {/* image background card */}
      <Block card padding={0} marginTop={sizes.sm}>
        <Image
          background
          resizeMode="cover"
          source={assets.card5}
          radius={sizes.cardRadius}>
          <Block color="rgba(0,0,0,0.3)" padding={sizes.padding}>
            <Text h4 white marginBottom={sizes.sm}>
              Flexible office space means growth.
            </Text>
            <Text p white>
              Rather than worrying about switching offices every couple years,
              you can instead stay in the same location.
            </Text>
            {/* user details */}
            <Block row marginLeft={sizes.xs} marginTop={sizes.xxl}>
              <Image
                source={assets.avatar2}
                style={{
                  width: sizes.xl,
                  height: sizes.xl,
                  borderRadius: sizes.s,
                }}
              />
              <Block marginLeft={sizes.s}>
                <Text p white semibold>
                  Devin Coldewey
                </Text>
                <Text p white>
                  Marketing Manager
                </Text>
              </Block>
            </Block>
          </Block>
        </Image>
      </Block>
    </Block>
  );
};
const Inputs = () => {
  const { colors, sizes } = useTheme();

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
        <Input vactoricon vactorIconName="glass" vactorIconType="FontAwesome" vactorIconColor="red" placeholder="Vactor Icon" marginBottom={sizes.sm} />
      </Block>
    </Block>
  );
};
const ShoppingCard = () => { 
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
  const { assets, sizes } = useTheme();
  return (
    <Block >
      <Block
        scroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: sizes.padding }}>
        <Block padding={sizes.padding} paddingTop={0}>
          <Card1 prop={props} />
          <Card2 prop={props} />
          <Card3 prop={props} />
          <Cards prop={props} />
        </Block>
        <Block>
          <Buttons prop={props} />
        </Block>
        <Block>
          <Inputs prop={props} />
        </Block>
        <Block padding={sizes.padding}>
          <ShoppingCard />
        </Block>
      </Block>
    </Block>
  );
};

export default Components;
