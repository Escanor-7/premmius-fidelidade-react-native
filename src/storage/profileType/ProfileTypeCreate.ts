import AsyncStorage from "@react-native-async-storage/async-storage";
import { PROFILE_TYPE_COLLECTION } from '@storage/storageConfig';
// import { getProfileType } from "./GetProfileType";

export async function profileTypeCreate(profileType: string) {
  try {
    // const storedProfileType = await getProfileType();
    await AsyncStorage.setItem(PROFILE_TYPE_COLLECTION, profileType)
  } catch (error) {
    throw error;
  }
}