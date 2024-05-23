import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    return `${date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`;
  };

  const formatTime = (time) => {
    return `${time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })}`;
  };

  return (
    <View className="flex items-center justify-center h-full">
      <Text className="text-2xl font-bold">{formatDate(currentTime)}</Text>
      <Text className="text-xl font-semibold">{formatTime(currentTime)}</Text>
    </View>
  );
};

export default Clock;
