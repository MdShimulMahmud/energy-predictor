import { Text, View } from "react-native";

const InfoBox = ({ title, subtitle, containerStyles, titleStyles }) => {
  return (
    <View className={containerStyles}>
      <Text className={` text-center font-psemibold ${titleStyles}`}>
        {title}
      </Text>
      <Text className="text-sm  text-center font-pregular">{subtitle}</Text>
    </View>
  );
};

export default InfoBox;
