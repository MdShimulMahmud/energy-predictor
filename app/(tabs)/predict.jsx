import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton, FormField } from "../../components";

// house_size	watts_of_lights	watts_of_ac	watts_of_fans	watts_of_refrigerator	watts_of_motor	watts_of_tv	watts_of_washing_machine	watts_of_oven	watts_of_desktop	watts_of_pressure_cooker	month

const FormComponent = () => {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    house_size: null,
    watts_of_lights: null,
    watts_of_ac: null,
    watts_of_fans: null,
    watts_of_refrigerator: null,
    watts_of_motor: null,
    watts_of_tv: null,
    watts_of_washing_machine: null,
    watts_of_oven: null,
    watts_of_desktop: null,
    watts_of_pressure_cooker: null,
    month: 1,
    // initial value for dropdown
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      console.log(formData);
      setUploading(true);
      // Make API call to send form data to backend
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();

      // Display returned result from API
      Alert.alert("Success", JSON.stringify(data));
    } catch (error) {
      Alert.alert("Error", error.message);
      setUploading(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <View className="p-4">
          <Text className="text-2xl text-white font-psemibold">
            Upload Data to predict
          </Text>

          <FormField
            title="House Size"
            type="number"
            placeholder="1000 sqft"
            onChangeText={(text) => handleInputChange("house_size", text)}
            value={formData.house_size}
            otherStyles="mt-5"
          />

          <FormField
            title="Cumulative Watts of Lights"
            type="number"
            placeholder="100 watts"
            onChangeText={(text) => handleInputChange("watts_of_lights", text)}
            value={formData.watts_of_lights}
            otherStyles="mt-5"
          />
          <FormField
            title="Cumulative Watts of AC"
            type="number"
            placeholder="100 watts"
            onChangeText={(text) => handleInputChange("watts_of_ac", text)}
            value={formData.watts_of_ac}
            otherStyles="mt-5"
          />
          <FormField
            title="Cumulative Watts of Fans"
            type="number"
            placeholder="100 watts"
            onChangeText={(text) => handleInputChange("watts_of_fans", text)}
            value={formData.watts_of_fans}
            otherStyles="mt-5"
          />
          <FormField
            title="Cumulative Watts of Refrigerator"
            type="number"
            placeholder="100 watts"
            onChangeText={(text) =>
              handleInputChange("watts_of_refrigerator", text)
            }
            value={formData.watts_of_refrigerator}
            otherStyles="mt-5"
          />
          <FormField
            title="Cumulative Watts of Motor"
            type="number"
            placeholder="100 watts"
            onChangeText={(text) => handleInputChange("watts_of_motor", text)}
            value={formData.watts_of_motor}
            otherStyles="mt-5"
          />
          <FormField
            title="Cumulative Watts of TV"
            type="number"
            placeholder="100 watts"
            onChangeText={(text) => handleInputChange("watts_of_tv", text)}
            value={formData.watts_of_tv}
            otherStyles="mt-5"
          />

          <FormField
            title="Cumulative Watts of Washing Machine"
            type="number"
            placeholder="100 watts"
            onChangeText={(text) =>
              handleInputChange("watts_of_washing_machine", text)
            }
            value={formData.watts_of_washing_machine}
            otherStyles="mt-5"
          />

          <FormField
            title="Cumulative Watts of Oven"
            type="number"
            placeholder="100 watts"
            onChangeText={(text) => handleInputChange("watts_of_oven", text)}
            value={formData.watts_of_oven}
            otherStyles="mt-5"
          />

          <FormField
            title="Cumulative Watts of Desktop"
            type="number"
            placeholder="100 watts"
            onChangeText={(text) => handleInputChange("watts_of_desktop", text)}
            value={formData.watts_of_desktop}
            otherStyles="mt-5"
          />

          <FormField
            title="Cumulative Watts of Pressure Cooker"
            type="number"
            placeholder="100 watts"
            onChangeText={(text) =>
              handleInputChange("watts_of_pressure_cooker", text)
            }
            value={formData.watts_of_pressure_cooker}
            otherStyles="mt-5"
          />

          {/* Repeat this TextInput block for other fields */}
          <Text className="mt-3 mb-3 text-base text-gray-100 font-pmedium">
            Month
          </Text>

          <View className="w-full h-16 px-4 text-white font-semibold bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary ">
            <Picker
              selectedValue={formData.month}
              onValueChange={(itemValue) =>
                handleInputChange("month", itemValue)
              }
            >
              <Picker.Item label="January" value={1} />
              <Picker.Item label="February" value={2} />
              <Picker.Item label="March" value={3} />
              <Picker.Item label="April" value={4} />
              <Picker.Item label="May" value={5} />
              <Picker.Item label="June" value={6} />
              <Picker.Item label="July" value={7} />
              <Picker.Item label="August" value={8} />
              <Picker.Item label="September" value={9} />
              <Picker.Item label="October" value={10} />
              <Picker.Item label="November" value={11} />
              <Picker.Item label="December" value={12} />
            </Picker>
          </View>

          <CustomButton
            title="Submit & Predict"
            handlePress={handleSubmit}
            containerStyles="mt-7"
            isLoading={uploading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormComponent;
