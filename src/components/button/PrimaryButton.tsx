import { TouchableOpacity, Text } from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
}

export function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="bg-primary rounded-lg py-4 items-center justify-center mt-2"
      onPress={onPress}
    >
      <Text className="text-white font-bold text-sm">{title}</Text>
    </TouchableOpacity>
  );
}
