export const stackLayout = `
import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack />
  );
}
`

export const tabsLayout = `
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs />
  );
}
`

export const slotLayout = `
import { Slot } from 'expo-router';

export default function SlotLayout() {
  return (
    <Slot />
  );
}
`

export const screenTemplate = (name : string) => `
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>${name} Screen</Text>
    </View>
  );
}
`