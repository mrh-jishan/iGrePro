import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
    try {
        console.log("store data: ", value);
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@iGre', jsonValue)
    } catch (e) {
        // saving error
        console.log("Error in storeData: ", e);
    }
}

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@iGre')
        console.log("read data: ", jsonValue);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
        console.log("Error in getData: ", e);
    }
}

const cleanToken = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        // error reading value
        console.log("Error in getData: ", e);
    }
}

export { storeData, getData, cleanToken };
