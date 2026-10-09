import { View, Text, TextInput, TextInputProps } from 'react-native';

interface FormInputProps extends TextInputProps {
  label: string;
}

export function FormInput({ label, ...props }: FormInputProps) {
  return (
    <View className="mb-4">
      <Text className="text-gray-500 text-xs mb-1 ml-1">{label}</Text>
      <TextInput
        className="bg-gray-50 rounded-lg px-4 py-3 text-black"
        placeholderTextColor="#9ca3af"
        {...props}
      />
    </View>
  );
}
