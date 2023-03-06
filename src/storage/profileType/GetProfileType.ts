import AsyncStorage from "@react-native-async-storage/async-storage";
import { PROFILE_TYPE_COLLECTION } from "@storage/storageConfig";

export async function getProfileType() {
  try {
    const storage = await AsyncStorage.getItem(PROFILE_TYPE_COLLECTION)

    const profileType: string = storage ? storage : '';

    return profileType;
  } catch (error) {
    throw error;
  }
} 