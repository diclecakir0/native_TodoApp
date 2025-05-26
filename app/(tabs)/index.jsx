import React from 'react';
import { SafeAreaView } from 'react-native';
import RootNavigation from '../../src/navigation/RootNavigation';
import { DataProvider } from '../../src/context/DataContext';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#CD5656' }}>
      <DataProvider>
        <RootNavigation />
      </DataProvider>
    </SafeAreaView>
  );
}