import React, { useState } from 'react';
import {
    View,
    StyleSheet,

    Image,
    
    
    TouchableOpacity,
    FlatList,
    Animated,
} from 'react-native';
import { Block, Button, Modal,Text } from '../components/';

import { useTheme } from '../hooks/';

const ModalPoup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        toggleModal();
    }, [visible]);
    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1, 
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };
    return (
        <Modal transparent visible={showModal}> 
            <View style={styles.modalBackGround}>
                <Animated.View
                    style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    );
};

const App = () => {


    const [showModal, setModal] = useState(false);
    const [quantity, setQuantity] = useState('01');
    const { assets, colors, gradients, sizes } = useTheme();

    return (


        <Block>
            <Text style={{color:'red'}} >okk</Text>
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
                            <Text p   semibold transform="uppercase">
                                {item}
                            </Text>
                        </Button>
                    )}
                />
            </Modal>
        </Block>

    );

};
export default App;

//=============================================================================

// import React from 'react';
// import {
//   View,
//   StyleSheet,
//   Button,
//   Modal,
//   Image,
//   Text,
//   TouchableOpacity,
//   Animated,
// } from 'react-native';

// const ModalPoup = ({visible, children}) => {
//   const [showModal, setShowModal] = React.useState(visible);
//   const scaleValue = React.useRef(new Animated.Value(0)).current;
//   React.useEffect(() => {
//     toggleModal();
//   }, [visible]);
//   const toggleModal = () => {
//     if (visible) {
//       setShowModal(true);
//       Animated.spring(scaleValue, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       setTimeout(() => setShowModal(false), 200);
//       Animated.timing(scaleValue, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   };
//   return (
//     <Modal transparent visible={showModal}>
//       <View style={styles.modalBackGround}>
//         <Animated.View
//           style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
//           {children}
//         </Animated.View>
//       </View>
//     </Modal>
//   );
// };

// const App = () => {
//   const [visible, setVisible] = React.useState(false);
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <ModalPoup visible={visible}>
//         <View style={{alignItems: 'center'}}>
//           <View style={styles.header}>
//             <TouchableOpacity onPress={() => setVisible(false)}>
//               <Image
//                 source={require('../assets/images/x.png')}
//                 style={{height: 30, width: 30}}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={{alignItems: 'center'}}>
//           <Image
//             source={require('../assets/images/success.png')}
//             style={{height: 150, width: 150, marginVertical: 10}}
//           />
//         </View>

//         <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
//           Congratulations registration was successful
//         </Text>
//       </ModalPoup>
//       <Button title="Open Modal" onPress={() => setVisible(true)} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   modalBackGround: {
    // flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    // justifyContent: 'center',
    // alignItems: 'center',
//   },
//   modalContainer: {
    // width: '80%',
    // backgroundColor: 'white',
    // paddingHorizontal: 20,
    // paddingVertical: 30,
    // borderRadius: 20,
    // elevation: 20,
//   },
//   header: {
//     width: '100%',
//     height: 40,
//     alignItems: 'flex-end',
//     justifyContent: 'center',
//   },
// });

// export default App;