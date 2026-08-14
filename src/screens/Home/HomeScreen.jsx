import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';
import { ScreenHeader } from '../../components/Header/ScreenHeader';
import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
import { LoadingIndicator } from '../../components/Loader/LoadingIndicator';
import { useDoctors } from '../../hooks/useDoctors';
import { styles } from './styles';

export const HomeScreen = () => {
  const { doctors, isLoading } = useDoctors();
  const navigation = useNavigation();
  const [filterInNetwork, setFilterInNetwork] = useState(false);
  const [filterNearest, setFilterNearest] = useState(false);

  const processedDoctors = useMemo(() => {
    let result = [...doctors];
    if (filterInNetwork) {
      result = result.filter(d => d.inNetwork);
    }
    if (filterNearest) {
      result = result.sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }
    return result;
  }, [doctors, filterInNetwork, filterNearest]);



  const renderUrgentCare = () => (
    <View style={styles.urgentCareCard}>
      <Text style={styles.urgentCareBadge}>QUICK CARE</Text>
      <Text style={styles.urgentCareTitle}>Urgent Care Wait Times</Text>
      <Text style={styles.urgentCareText}>
        Nearby facility at Westside Clinic has only a 15-minute wait currently.
      </Text>
      <TouchableOpacity style={styles.urgentCareButton}>
        <Text style={styles.urgentCareButtonText}>Get Directions</Text>
      </TouchableOpacity>
    </View>
  );

  const dataWithUrgentCare = useMemo(() => {
    const data = [...processedDoctors];
    if (data.length >= 2) {
      data.splice(2, 0, { isUrgentCare: true, id: 'urgent-care' });
    } else if (data.length > 0) {
      data.push({ isUrgentCare: true, id: 'urgent-care' });
    }
    return data;
  }, [processedDoctors]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="HealthBridge" showAvatar={true} avatarPosition="left" />
      
      <View style={styles.chipsContainer}>
        <TouchableOpacity 
          style={filterInNetwork ? styles.chipActive : styles.chipInactive} 
          onPress={() => setFilterInNetwork(!filterInNetwork)}
        >
          {filterInNetwork ? (
            <View style={styles.chipCheckBg}>
               <Ionicons name="checkmark" size={12} color={colors.primaryDark} />
            </View>
          ) : (
            <Ionicons name="checkmark-circle-outline" size={16} color={colors.textSecondary} style={{marginRight: 4}} />
          )}
          <Text style={filterInNetwork ? styles.chipActiveText : styles.chipInactiveText}>In-Network</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={filterNearest ? styles.chipActive : styles.chipInactive} 
          onPress={() => setFilterNearest(!filterNearest)}
        >
          <Ionicons 
            name="paper-plane-outline" 
            size={16} 
            color={filterNearest ? colors.white : colors.textSecondary} 
            style={{marginRight: 4, transform: [{rotate: '-45deg'}, {translateY: -2}]}} 
          />
          <Text style={filterNearest ? styles.chipActiveText : styles.chipInactiveText}>Nearest to Me</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listHeader}>
        <View style={styles.listHeaderLeft}>
          <Text style={styles.resultsCount}>{processedDoctors.length} Results for</Text>
          <Text style={styles.resultsCategory}>Specialists</Text>
        </View>
        <View style={styles.listHeaderRight}>
          <Text style={styles.sortLabel}>SORTED BY</Text>
          <Text style={styles.sortValue}>RELEVANCE</Text>
        </View>
      </View>

      <FlatList
        data={dataWithUrgentCare}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (item.isUrgentCare) return renderUrgentCare();
          return (
            <DoctorCard 
              doctor={item} 
              onPress={() => navigation.navigate('AboutDoctor', { doctor: item })}
            />
          );
        }}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
