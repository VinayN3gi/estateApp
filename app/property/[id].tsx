import {
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Platform,
    TouchableOpacity,
    FlatList,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import { useLocalSearchParams, useRouter } from 'expo-router';
  import { Property } from '@/lib/propertyInterface';
  import { getPropertyById } from '@/lib/appwrite';
  import NoResults from '@/components/NoResults';
  import icons from '@/constants/icons';
  import images from '@/constants/images';
  import { facilities } from '@/constants/data';
  
  const PropertyPage = () => {
    const { id } = useLocalSearchParams<{ id?: string }>();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [property, setProperty] = useState<Property | null>(null);
  
    const windowHeight = Dimensions.get('window').height;
  
    useEffect(() => {
      if (id) {
        fetchPropertyById();
      } else {
        setProperty(null);
      }
    }, [id]);
  
    const fetchPropertyById = async () => {
      setLoading(true);
      const data: Property | null = await getPropertyById({ id: id! });
      setProperty(data);
      setLoading(false);
    };
  
    if (loading) {
      return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white px-6">
          <ActivityIndicator size="large" className="color-primary-300" />
          <Text className="mt-4 text-lg font-rubik-medium text-black-300">
            Fetching property...
          </Text>
        </SafeAreaView>
      );
    }
  
    if (property == null) {
      return <NoResults />;
    }
  
    return (
      <View className="flex-1 bg-white relative">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerClassName="pb-44 bg-white"
        >
          {/* Hero Image */}
          <View className="relative w-full" style={{ height: windowHeight / 2 }}>
            <Image source={{ uri: property.image }} className="size-full" resizeMode="cover" />
            <Image source={images.whiteGradient} className="absolute top-0 w-full z-40" />
  
            <View
              className="z-50 absolute inset-x-7"
              style={{ top: Platform.OS === 'ios' ? 70 : 20 }}
            >
              <View className="flex flex-row items-center w-full justify-between">
                <TouchableOpacity
                  onPress={() => router.back()}
                  className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
                >
                  <Image source={icons.backArrow} className="size-5" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
  
          {/* Property Details */}
          <View className="px-5 mt-7 flex gap-2">
            <Text className="text-2xl font-rubik-extrabold">{property.name}</Text>
  
            <View className="flex flex-row items-center gap-3 mt-2">
              <View className="flex flex-row items-center px-4 py-2 bg-primary-100 rounded-full">
                <Text className="text-xs font-rubik-bold text-primary-300">{property.type}</Text>
              </View>
            </View>
  
            {/* Info Chips */}
            <View className="flex flex-row items-center mt-5 flex-wrap gap-5">
              <InfoChip icon={icons.bed} label={`${property.bedrooms} Beds`} />
              <InfoChip icon={icons.bath} label={`${property.bathrooms} Baths`} />
              <InfoChip icon={icons.area} label={`${property.area} sqft`} />
            </View>
  
            {/* Overview */}
            <View className="mt-7">
              <Text className="text-black-300 text-xl font-rubik-bold">Overview</Text>
              <Text className="text-black-200 text-base font-rubik mt-2">{property.description}</Text>
            </View>
  
            {/* Facilities */}
            <View className="mt-7">
              <Text className="text-black-300 text-xl font-rubik-bold">Facilities</Text>
              {property.facilities && property.facilities.length > 0 && (
                <View className="flex flex-row flex-wrap items-start justify-start mt-2 gap-5">
                  {property.facilities.map((item, index) => {
                    const facility = facilities.find((f) => f.title === item);
                    if (!facility) return null;
  
                    return (
                      <View
                        key={index}
                        className="flex flex-1 flex-col items-center min-w-16 max-w-20"
                      >
                        <View className="size-14 bg-primary-100 rounded-full flex items-center justify-center">
                          <Image source={facility.icon} className="size-6" />
                        </View>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          className="text-black-300 text-sm text-center font-rubik mt-1.5"
                        >
                          {item}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
  
            {/* Gallery */}
            {property.gallery && property.gallery.length > 0 && (
              <View className="mt-7">
                <Text className="text-black-300 text-xl font-rubik-bold">Gallery</Text>
                <FlatList
                  data={property.gallery}
                  keyExtractor={(item) => item.$id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <Image source={{ uri: item.image }} className="size-40 rounded-xl mr-4 mt-3" />
                  )}
                />
              </View>
            )}
  
            {/* Location */}
            <View className="mt-7">
              <Text className="text-black-300 text-xl font-rubik-bold">Location</Text>
              <View className="flex flex-row items-center mt-4 gap-2">
                <Image source={icons.location} className="w-7 h-7" />
                <Text className="text-black-200 text-sm font-rubik-medium">{property.address}</Text>
              </View>
            </View>
  
            {/* Price */}
            <View className="mt-7">
              <Text className="text-black-300 text-xl font-rubik-bold">Price</Text>
              <Text className="text-black-200 text-xl font-rubik-bold mt-4">
                ${property.price}
              </Text>
            </View>
          </View>
        </ScrollView>
  
        {/* Bottom CTA */}
        <View className="absolute bottom-0 w-full px-5 pb-5 bg-white pt-3 shadow-lg shadow-black/10 border-t border-gray-200">
          <TouchableOpacity className="bg-primary-300 py-4 rounded-2xl items-center">
            <Text className="text-white font-rubik-bold text-lg">Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  // Reusable Info Chip
  const InfoChip = ({ icon, label }: { icon: any; label: string }) => (
    <View className="flex flex-row items-center">
      <View className="bg-primary-100 rounded-full size-10 items-center justify-center">
        <Image source={icon} className="size-4" />
      </View>
      <Text className="text-black-300 text-sm font-rubik-medium ml-2">{label}</Text>
    </View>
  );
  
export default PropertyPage;
  