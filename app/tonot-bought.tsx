import { Redirect } from 'expo-router';

export default function route1() {
    return <Redirect href="/(tabs)/not-bought" />;
}