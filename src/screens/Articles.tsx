// import React, {useEffect, useState} from 'react';
// import {FlatList} from 'react-native';

// import {useData, useTheme} from '../hooks/';
// import {IArticle, ICategory} from '../constants/types';
// import {Block, Button, Article, Text} from '../components/';

// const Articles = () => { 
//   const data = useData();
//   const [selected, setSelected] = useState<ICategory>();
//   const [articles, setArticles] = useState<IArticle[]>([]);
//   const [categories, setCategories] = useState<ICategory[]>([]);
//   const {colors, gradients, sizes} = useTheme();

//   // init articles 
//   useEffect(() => {
//     setArticles(data?.articles);
//     setCategories(data?.categories); 
//     setSelected(data?.categories[0]); 
//   }, [data.articles, data.categories]);

//   // update articles on category change
//   useEffect(() => {
//     const category = data?.categories?.find(
//       (category) => category?.id === selected?.id,
//     );

//     const newArticles = data?.articles?.filter(
//       (article) => article?.category?.id === category?.id,
//     );

//     setArticles(newArticles);
//   }, [data, selected, setArticles]);

//   return (
//     <Block>
//       {/* categories list */}
//       <Block color={colors.card} row flex={0} paddingVertical={sizes.padding}>
//         <Block
//           scroll
//           horizontal
//           renderToHardwareTextureAndroid
//           showsHorizontalScrollIndicator={false}
//           contentOffset={{x: -sizes.padding, y: 0}}>
//           {categories?.map((category) => {
//             const isSelected = category?.id === selected?.id;
//             return (
//               <Button
//                 radius={sizes.m}
//                 marginHorizontal={sizes.s}
//                 key={`category-${category?.id}}`}
//                 onPress={() => setSelected(category)}
//                 gradient={gradients?.[isSelected ? 'primary' : 'light']}>
//                 <Text
//                   p
//                   bold={isSelected}
//                   white={isSelected}
//                   black={!isSelected}
//                   transform="capitalize"
//                   marginHorizontal={sizes.m}>
//                   {category?.name}
//                 </Text>
//               </Button>
//             );
//           })}
//         </Block>
//       </Block>

//       <FlatList
//         data={articles}
//         showsVerticalScrollIndicator={false}
//         keyExtractor={(item) => `${item?.id}`}
//         style={{paddingHorizontal: sizes.padding}}
//         contentContainerStyle={{paddingBottom: sizes.l}}
//         renderItem={({item}) => <Article {...item} />}
//       />
//     </Block>
//   );
// };

// export default Articles;
import React from 'react';
import {useData, useTheme, useTranslation} from '../hooks';
import { Block, Button, Image, Input, Text } from '../components/';


const App = () => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Block safe>
      <Text h3 style={{ fontFamily: 'OpenSans-Regular' }}>okoooooooooooooooooooooooooooooo</Text>
      <Text h3 style={{ fontFamily: 'OpenSans-Regular' }}>okoooooooooooooooooooooooooooooo</Text>

     
    </Block>
  ); 
};

export default App;
