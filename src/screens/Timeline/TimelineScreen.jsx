import React, { useState, useMemo } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenHeader } from '../../components/Header/ScreenHeader';
import { styles } from './styles';
import timelineData from '../../data/timeline.json';

const FILTERS = ['All', 'Visits', 'Labs', 'Prescriptions', 'Procedures'];

export const TimelineScreen = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredData = useMemo(() => {
    if (activeFilter === 'All') return timelineData;
    
    // Map UI filter to data 'type'
    const filterMap = {
      'Visits': 'VISIT',
      'Labs': 'LAB',
      'Prescriptions': 'PRESCRIPTION',
      'Procedures': 'PROCEDURE'
    };
    
    return timelineData.filter(item => item.type === filterMap[activeFilter]);
  }, [activeFilter]);

  const getEventConfig = (type) => {
    switch (type) {
      case 'VISIT':
        return { icon: 'calendar', color: '#8B5CF6', bgColor: '#F3E8FF' }; // Purple
      case 'LAB':
        return { icon: 'flask', color: '#3B82F6', bgColor: '#DBEAFE' }; // Blue
      case 'PRESCRIPTION':
        return { icon: 'medical', color: '#10B981', bgColor: '#D1FAE5' }; // Green
      case 'PROCEDURE':
        return { icon: 'bandage', color: '#F59E0B', bgColor: '#FEF3C7' }; // Amber
      default:
        return { icon: 'ellipse', color: '#6B7280', bgColor: '#F3F4F6' }; // Grey
    }
  };

  const renderItem = ({ item, index }) => {
    const config = getEventConfig(item.type);
    const isLast = index === filteredData.length - 1;
    
    // Format date string beautifully (e.g. "Jun 19, 2025")
    const dateObj = new Date(item.date);
    const dateString = dateObj.toLocaleDateString('en-US', { 
      month: 'short', day: 'numeric', year: 'numeric' 
    });

    const isUpcoming = item.status === 'UPCOMING';

    return (
      <View style={styles.eventRow}>
        {!isLast && <View style={styles.line} />}
        
        <View style={[styles.iconContainer, { backgroundColor: config.bgColor }]}>
          <Ionicons name={config.icon} size={20} color={config.color} />
        </View>
        
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.dateText}>{dateString}</Text>
            <View style={[
              styles.statusBadge, 
              { backgroundColor: isUpcoming ? '#DBEAFE' : '#F3F4F6' }
            ]}>
              <Text style={[
                styles.statusText, 
                { color: isUpcoming ? '#2563EB' : '#6B7280' }
              ]}>
                {item.status}
              </Text>
            </View>
          </View>
          
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text style={styles.eventDesc}>{item.description}</Text>
          
          <View style={styles.doctorRow}>
            <Ionicons name="person-outline" size={14} color="#6B7280" />
            <Text style={styles.doctorText}>{item.doctor}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="HealthBridge" showAvatar={true} avatarPosition="left" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Medical Timeline</Text>
      </View>
      
      <View style={styles.filtersContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContent}
        >
          {FILTERS.map(filter => (
            <TouchableOpacity 
              key={filter}
              style={activeFilter === filter ? styles.chipActive : styles.chipInactive}
              onPress={() => setActiveFilter(filter)}
            >
              <Text style={activeFilter === filter ? styles.chipActiveText : styles.chipInactiveText}>
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
