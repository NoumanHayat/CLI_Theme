
import * as React from 'react';
import { Block, Text, Switch, Button } from '../components/';
import { useData, useTheme } from '../hooks/';
export default function Home() {
  const [english, setEnglish] = React.useState(true);
  const { colors, gradients, sizes } = useTheme();
  const { translations, isDark, handleIsDark, changeLanguage } = useData();
  return (
    <Block padding={sizes.padding}>
      <Block flex={0} row justify="space-between" marginTop={sizes.sm}>
        <Text color={colors.contrasting}>{translations.darkMode}</Text>
        <Switch
          checked={isDark}
          onPress={(checked) => {
            handleIsDark(checked);
          }}
        />

      </Block>
      <Block flex={0} row justify="space-between" marginTop={sizes.sm} style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text color={colors.contrasting}>{translations.common.language}</Text>
        <Button
          gradient={gradients.dark}
          marginHorizontal={sizes.s}
          onPress={() => {
            changeLanguage();
            alert('Language changed');
          }}>
          <Text white bold transform="uppercase" marginHorizontal={sizes.s}>
            {translations.data.Change_Language}
          </Text>
        </Button>

      </Block>





    </Block>
  );
}
