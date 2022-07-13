
import * as React from 'react';
import {Block, Text,Switch} from '../components/';
import {useData, useTheme} from '../hooks/';
export default function Home() {
  const { colors, gradients, sizes } = useTheme();
  const { translations,isDark, handleIsDark } = useData();
  return (
    <Block padding={sizes.padding}>
      <Block row justify="space-between" marginTop={sizes.sm}>
          <Text color={colors.contrasting}>{translations.darkMode}</Text>
          <Switch
            checked={isDark}
            onPress={(checked) => {
              handleIsDark(checked);
            }}
          />
        </Block>
    </Block>
  );
}
