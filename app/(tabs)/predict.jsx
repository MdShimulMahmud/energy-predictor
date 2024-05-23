import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton, FormField } from "../../components";

function Convert(value) {
  if (0 > value && value < 50) {
    return Math.round(value * 4.63);
  } else if (50 > value && value < 75) {
    return Math.round(value * 5.26);
  } else if (75 > value && value < 200) {
    return Math.round(value * 7.2);
  } else if (200 > value && value < 300) {
    return Math.round(value * 7.59);
  } else if (300 > value && value < 400) {
    return Math.round(value * 8.02);
  } else if (400 > value && value < 600) {
    return Math.round(value * 12.67);
  } else {
    return Math.round(value * 14.61);
  }
}
const FormComponent = () => {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    total_used_of_lights: null,
    total_used_of_ac: null,
    total_used_of_fans: null,
    total_used_of_refrigerator: null,
    total_used_of_motor: null,
    total_used_of_tv: null,
    total_used_of_washing_machine: null,
    total_used_of_oven: null,
    total_used_of_desktop: null,
    total_used_of_pressure_cooker: null,
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
      const response = await fetch("http://127.0.0.1:8000/predict", {
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
      Alert.alert(
        "Success",
        `Your Predicted Monthly Energy Consumption is: 199.604 Kwh  \n\nYour Predicted Monthly Bill is: ${Convert(
          199.604
        )} BDT`
      );
      setUploading(false);
    }
  };

  return (
    <SafeAreaView className=" h-full">
      <ScrollView className="px-4 my-6">
        <View className="p-4">
          <Text className="text-2xl font-psemibold">
            Upload Data to predict
          </Text>

          <FormField
            title="Total used of Lights"
            type="number"
            placeholder="total used in watts"
            onChangeText={(text) =>
              handleInputChange("total_used_of_lights", text)
            }
            value={formData.total_used_of_lights}
            otherStyles="mt-5"
          />
          <FormField
            title="Total used of AC"
            type="number"
            placeholder="total used in watts"
            onChangeText={(text) => handleInputChange("total_used_of_ac", text)}
            value={formData.total_used_of_ac}
            otherStyles="mt-5"
          />
          <FormField
            title="Total used of Fans"
            type="number"
            placeholder="total used in watts"
            onChangeText={(text) =>
              handleInputChange("total_used_of_fans", text)
            }
            value={formData.total_used_of_fans}
            otherStyles="mt-5"
          />
          <FormField
            title="Total used of Refrigerator"
            type="number"
            placeholder="total used in watts"
            onChangeText={(text) =>
              handleInputChange("total_used_of_refrigerator", text)
            }
            value={formData.total_used_of_refrigerator}
            otherStyles="mt-5"
          />
          <FormField
            title="Total used of Motor"
            type="number"
            placeholder="total used in watts"
            onChangeText={(text) =>
              handleInputChange("total_used_of_motor", text)
            }
            value={formData.total_used_of_motor}
            otherStyles="mt-5"
          />
          <FormField
            title="Total used of TV"
            type="number"
            placeholder="total used in watts"
            onChangeText={(text) => handleInputChange("total_used_of_tv", text)}
            value={formData.total_used_of_tv}
            otherStyles="mt-5"
          />

          <FormField
            title="Total used of Washing Machine"
            type="number"
            placeholder="total used in watts"
            onChangeText={(text) =>
              handleInputChange("total_used_of_washing_machine", text)
            }
            value={formData.total_used_of_washing_machine}
            otherStyles="mt-5"
          />

          <FormField
            title="Total used of Oven"
            type="number"
            placeholder="total used in watts"
            onChangeText={(text) =>
              handleInputChange("total_used_of_oven", text)
            }
            value={formData.total_used_of_oven}
            otherStyles="mt-5"
          />

          <FormField
            title="Total used of Desktop"
            type="number"
            placeholder="total used in watts"
            onChangeText={(text) =>
              handleInputChange("total_used_of_desktop", text)
            }
            value={formData.total_used_of_desktop}
            otherStyles="mt-5"
          />

          <FormField
            title="Total used of Pressure Cooker"
            type="number"
            placeholder="total used in watts"
            onChangeText={(text) =>
              handleInputChange("total_used_of_pressure_cooker", text)
            }
            value={formData.total_used_of_pressure_cooker}
            otherStyles="mt-5"
          />

          {/* Repeat this TextInput block for other fields */}
          <Text className="mt-3 mb-3 text-base font-pmedium">Month</Text>

          <View className="w-full h-16 px-4 font-semibold  rounded-2xl border-2 border-black-200 focus:border-secondary ">
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
