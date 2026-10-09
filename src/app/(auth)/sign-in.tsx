import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Logo } from '../../components/configuration/Logo';
import { FormInput } from '../../components/configuration/FormInput';
import { PrimaryButton } from '../../components/button/PrimaryButton';
import { SocialButton } from '../../components/button/SocialButton';

export default function SignInScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        className="flex-1"
      >
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingVertical: 24 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 justify-center">
            <View className="items-center mb-8 mt-4">
              <Logo size="medium" variant="outline" />
              <Text className="text-2xl font-bold mt-6">Sign in your account</Text>
            </View>

            <View className="mb-6">
              <FormInput 
                label="Email" 
                placeholder="ex: jon.smith@email.com" 
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <FormInput 
                label="Password" 
                placeholder="*********" 
                secureTextEntry
              />
            </View>

            <PrimaryButton 
              title="SIGN IN" 
              onPress={() => console.log('Sign in pressed')} 
            />

            <View className="items-center my-6">
              <Text className="text-gray-400 text-sm">or sign in with</Text>
            </View>

            <View className="flex-row justify-between mb-8">
              <SocialButton iconName="google" color="#DB4437" />
              <SocialButton iconName="facebook" color="#4267B2" />
              <SocialButton iconName="twitter" color="#1DA1F2" />
            </View>
          </View>

          <View className="flex-row justify-center mt-auto pt-4">
            <Text className="text-gray-500">Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/sign-up')} className="p-1 -m-1">
              <Text className="text-primary font-bold">SIGN UP</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
