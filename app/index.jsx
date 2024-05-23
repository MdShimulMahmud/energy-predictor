import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CustomButton, Loader } from "../components";
import Clock from "../components/Clock";
import { images } from "../constants";
import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className=" h-full">
      <Loader isLoading={loading} />

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          {/* <Image
            source={images.homeLogo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          /> */}

          <View className="flex items-center justify-center w-full h-20">
            <Clock />
          </View>
          <Image
            source={images.homescreen}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-primary font-bold text-center">
              Discover Endless Possibilities with {""}
              <Text className="text-secondary-200">Predictor</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[236px] h-[15px] absolute -bottom-3 -right-2"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-primary mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Predictor
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
