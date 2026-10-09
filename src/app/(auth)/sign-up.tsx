import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Logo } from '../../components/configuration/Logo';
import { FormInput } from '../../components/configuration/FormInput';
import { PrimaryButton } from '../../components/button/PrimaryButton';
import { SocialButton } from '../../components/button/SocialButton';

export default function SignUpScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        className="flex-1"
      >
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingVertical: 16 }}
          showsVerticalScrollIndicator={false}
        >
          
          <View className="flex-row justify-between items-center mb-6">
            <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
              <FontAwesome name="arrow-left" size={20} color="black" />
            </TouchableOpacity>
            <Logo size="small" variant="outline" />
          </View>

          <View className="flex-1 justify-center">
            <Text className="text-2xl font-bold mb-6">Create your account</Text>

            <View className="mb-2">
              <FormInput 
                label="Name" 
                placeholder="ex: jon smith" 
              />
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
              <FormInput 
                label="Confirm password" 
                placeholder="*********" 
                secureTextEntry
              />
            </View>

            <View className="flex-row items-center mb-6 pl-1">
              <TouchableOpacity className="w-4 h-4 border border-primary rounded-sm items-center justify-center mr-2 bg-white">
                  {/* Fake checkbox unchecked for now, user can tap to check in real app */}
              </TouchableOpacity>
              <Text className="text-gray-500 text-xs">
                I understood the <Text className="text-primary">terms & policy</Text>.
              </Text>
            </View>

            <PrimaryButton 
              title="SIGN UP" 
              onPress={() => console.log('Sign up pressed')} 
            />

            <View className="items-center my-6">
              <Text className="text-gray-400 text-sm">or sign up with</Text>
            </View>

            <View className="flex-row justify-between mb-8">
              <SocialButton iconName="google" color="#DB4437" />
              <SocialButton iconName="facebook" color="#4267B2" />
              <SocialButton iconName="twitter" color="#1DA1F2" />
            </View>
          </View>

          <View className="flex-row justify-center mt-auto pt-4">
            <Text className="text-gray-500">Have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/sign-in')} className="p-1 -m-1">
              <Text className="text-primary font-bold">SIGN IN</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
