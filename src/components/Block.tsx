import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
  StatusBar
} from 'react-native';
import { BlurView } from 'expo-blur';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { IBlockProps } from '../constants/types';
import useTheme from '../hooks/useTheme';

const Block = (props: IBlockProps) => {
  const {
    id = 'Block',
    children,
    style,
    shadow,
    card,
    center,
    outlined,
    overflow,
    row,
    safe,
    TabBarIcon,
    keyboard,
    scroll,
    color,
    gradient,
    primary,
    secondary,
    tertiary,
    black,
    white,
    gray,
    danger,
    warning,
    success,
    info,
    radius,
    height,
    width,
    margin,
    marginBottom,
    marginTop,
    marginHorizontal,
    marginVertical,
    marginRight,
    marginLeft,
    padding,
    paddingBottom,
    paddingTop,
    paddingHorizontal,
    paddingVertical,
    paddingRight,
    paddingLeft,
    justify,
    align,
    flex = 1,
    wrap,
    blur,
    intensity,
    tint,
    position,
    right,
    left,
    top,
    bottom,
    end,
    start,
    ...rest
  } = props;
  const { colors, sizes } = useTheme();

  const colorIndex = primary
    ? 'primary'
    : secondary
      ? 'secondary'
      : tertiary
        ? 'tertiary'
        : black
          ? 'black'
          : white
            ? 'white'
            : gray
              ? 'gray'
              : danger
                ? 'danger'
                : warning
                  ? 'warning'
                  : success
                    ? 'success'
                    : info
                      ? 'info'
                      : null;

  const blockColor = color
    ? color
    : colorIndex
      ? colors?.[colorIndex]
      : undefined;

  const blockStyles = StyleSheet.flatten([
    style,
    {
      ...(shadow && {
        shadowColor: colors.shadow,
        shadowOffset: {
          width: sizes.shadowOffsetWidth,
          height: sizes.shadowOffsetHeight,
        },
        shadowOpacity: sizes.shadowOpacity,
        shadowRadius: sizes.shadowRadius,
        elevation: sizes.elevation,
      }),
      ...(card && {
        backgroundColor: colors.card,
        borderRadius: sizes.cardRadius,
        padding: sizes.cardPadding,
        shadowColor: colors.shadow,
        shadowOffset: {
          width: sizes.shadowOffsetWidth,
          height: sizes.shadowOffsetHeight,
        },
        shadowOpacity: sizes.shadowOpacity,
        shadowRadius: sizes.shadowRadius,
        elevation: sizes.elevation,
      }),
      ...(margin !== undefined && { margin }),
      ...(marginBottom && { marginBottom }),
      ...(marginTop && { marginTop }),
      ...(marginHorizontal && { marginHorizontal }),
      ...(marginVertical && { marginVertical }),
      ...(marginRight && { marginRight }),
      ...(marginLeft && { marginLeft }),
      ...(padding !== undefined && { padding }),
      ...(paddingBottom && { paddingBottom }),
      ...(paddingTop && { paddingTop }),
      ...(paddingHorizontal && { paddingHorizontal }),
      ...(paddingVertical && { paddingVertical }),
      ...(paddingRight && { paddingRight }),
      ...(paddingLeft && { paddingLeft }),
      ...(radius && { borderRadius: radius }),
      ...(height && { height }),
      ...(width && { width }),
      ...(overflow && { overflow }),
      ...(flex !== undefined && { flex }),
      ...(row && { flexDirection: 'row' }),
      ...(align && { alignItems: align }),
      ...(center && { justifyContent: 'center' }),
      ...(justify && { justifyContent: justify }),
      ...(wrap && { flexWrap: wrap }),
      ...(blockColor && { backgroundColor: blockColor }),
      ...(outlined && {
        borderWidth: 1,
        borderColor: blockColor,
        backgroundColor: 'transparent',
      }),
      ...(position && { position }),
      ...(right !== undefined && { right }),
      ...(left !== undefined && { left }),
      ...(top !== undefined && { top }),
      ...(bottom !== undefined && { bottom }),
    },
  ]) as ViewStyle;

  // generate component testID or accessibilityLabel based on Platform.OS
  const blockID =
    Platform.OS === 'android' ? { accessibilityLabel: id } : { testID: id };

  if (safe) {
    return (

      <SafeAreaView {...blockID} {...rest} style={[{
        flex: 1,
        marginTop: StatusBar.currentHeight
      }, blockStyles]}>
        {children}
      </SafeAreaView>
    );
  }
  if (TabBarIcon) {
    return (

      <SafeAreaView {...blockID} {...rest} style={[{
        alignItems: 'center', justifyContent: 'center', top: 10
      }, blockStyles]}>
        {children}
      </SafeAreaView>
    );
  }

  if (keyboard) {
    return (
      <KeyboardAwareScrollView {...blockID} {...rest} style={blockStyles}>
        {children}
      </KeyboardAwareScrollView>
    );
  }

  if (scroll) {
    return (
      <ScrollView {...blockID} {...rest} style={blockStyles}>
        {children}
      </ScrollView>
    );
  }

  if (gradient) {
    return (
      <LinearGradient
        {...blockID}
        colors={gradient}
        style={blockStyles}
        end={end || { x: 0, y: 1 }}
        start={start || { x: 1, y: 0 }}
        {...rest}>
        {children}
      </LinearGradient>
    );
  }

  if (blur) {
    return (
      <BlurView
        {...blockID}
        tint={tint}
        intensity={intensity}
        style={blockStyles}>
        {children}
      </BlurView>
    );
  }

  return (
    <View {...blockID} {...rest} style={blockStyles}>
      {children}
    </View>
  );
};

export default React.memo(Block);
