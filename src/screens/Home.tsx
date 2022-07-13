// import React, {useCallback, useState} from 'react';

// import {useData, useTheme, useTranslation} from '../hooks/';
// import {Block, Button, Image, Input, Product, Text} from '../components/';

// const Home = () => {
//   const { translations } = useData();
//   const [tab, setTab] = useState<number>(0);
//   const {following, trending} = useData();
//   const [products, setProducts] = useState(following);
//   const {assets, colors, fonts, gradients, sizes} = useTheme();

//   const handleProducts = useCallback(
//     (tab: number) => {
//       setTab(tab);
//       setProducts(tab === 0 ? following : trending);
//     },
//     [following, trending, setTab, setProducts],
//   );

//   return (
//     <Block safe>
//       {/* search input */}
//       <Block color={colors.card} flex={0} padding={sizes.padding}>
//         <Input search placeholder={translations.common.search} />
//       </Block>

//       {/* toggle products list */}
//       <Block
//         row
//         flex={0}
//         align="center"
//         justify="center"
//         color={colors.card}
//         paddingBottom={sizes.sm}>
//         <Button onPress={() => handleProducts(0)}>
//           <Block row align="center">
//             <Block
//               flex={0}
//               radius={6}
//               align="center"
//               justify="center"
//               marginRight={sizes.s}
//               width={sizes.socialIconSize}
//               height={sizes.socialIconSize}
//               gradient={gradients?.[tab === 0 ? 'primary' : 'secondary']}>
//               <Image source={assets.extras} color={colors.white} radius={0} />
//             </Block>
//             <Text p font={fonts?.[tab === 0 ? 'medium' : 'normal']}>
//               {translations.home.following}
//             </Text>
//           </Block>
//         </Button>
//         <Block
//           gray
//           flex={0}
//           width={1}
//           marginHorizontal={sizes.sm}
//           height={sizes.socialIconSize}
//         />
//         <Button onPress={() => handleProducts(1)}>
//           <Block row align="center">
//             <Block
//               flex={0}
//               radius={6}
//               align="center"
//               justify="center"
//               marginRight={sizes.s}
//               width={sizes.socialIconSize}
//               height={sizes.socialIconSize}
//               gradient={gradients?.[tab === 1 ? 'primary' : 'secondary']}>
//               <Image
//                 radius={0}
//                 color={colors.white}
//                 source={assets.documentation}
//               />
//             </Block>
//             <Text p font={fonts?.[tab === 1 ? 'medium' : 'normal']}>
//               {translations.home.trending}
//             </Text>
//           </Block>
//         </Button>
//       </Block>

//       {/* products list */}
//       <Block
//         scroll
//         paddingHorizontal={sizes.padding}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{paddingBottom: sizes.l}}>
//         <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
//           {products?.map((product) => (
//             <Product {...product} key={`card-${product?.id}`} />
//           ))}
//         </Block>
//       </Block>
//     </Block>
//   );
// }; 

// export default Home;

import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { useData, useTheme } from '../hooks/';
import { IArticle, ICategory } from '../constants/types';
import { Block, Button, Article, Text } from '../components/';
//import {Block, Text} from '../components/';
const Articles = () => {
  const data = useData();
  const [selected, setSelected] = useState<ICategory>();
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { colors, gradients, sizes } = useTheme();

  // init articles    
  useEffect(() => {
    console.log(data.articles[0])
    setArticles(data?.articles);
    setCategories(data?.categories);
    setSelected(data?.categories[0]);
  }, [data.articles, data.categories]);

  // // update articles on category change
  useEffect(() => {
    const category = data?.categories?.find(
      (category) => category?.id === selected?.id,
    );

    const newArticles = data?.articles?.filter(
      (article) => article?.category?.id === category?.id,
    );

    setArticles(newArticles);
  }, [data, selected, setArticles]);

  return (
    <Block >
      {/* categories list */}
      <Block color={colors.card} row flex={0} paddingVertical={sizes.padding}>
        <Block
          scroll
          horizontal
          renderToHardwareTextureAndroid
          showsHorizontalScrollIndicator={false}
          contentOffset={{ x: -sizes.padding, y: 0 }}>
          {categories?.map((category) => {
            const isSelected = category?.id === selected?.id;
            return (
              <Button
                radius={sizes.m}
                marginHorizontal={sizes.s}
                key={`category-${category?.id}}`}
                onPress={() => setSelected(category)}
                gradient={gradients?.[isSelected ? 'primary' : 'light']}>
                <Text
                  p
                  bold={isSelected}
                  white={isSelected}
                  black={!isSelected}
                  transform="capitalize"
                  marginHorizontal={sizes.m}>
                  {category?.name}
                </Text>
              </Button>
            );
          })}
        </Block>
      </Block>

      <FlatList
        data={articles}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item?.id}`}
        style={{ paddingHorizontal: sizes.padding }}
        contentContainerStyle={{ paddingBottom: sizes.l }}
        renderItem={({ item }) => <Article {...item} />}
      />
    </Block>
  );
};

export default Articles;

