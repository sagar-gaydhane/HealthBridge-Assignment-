import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';
import { ScreenHeader } from '../../components/Header/ScreenHeader';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import { styles } from './styles';

export const AboutDoctorScreen = ({ route, navigation }) => {
  const { doctor } = route.params;
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const getPortrait = (id) => {
    switch (id) {
      case 'd1': return require('../../assets/images/dr_rao_portrait.png');
      case 'd2': return require('../../assets/images/dr_marcus_thorne.png');
      case 'd3': return require('../../assets/images/dr_elena_petrova.png');
      default: return require('../../assets/images/user_profile_photo.png');
    }
  };

  const handleBookAppointment = () => {
    navigation.navigate('AppointmentConfirmation', { doctor });
  };

  const handleOpenMap = () => {
    const query = encodeURIComponent(`${doctor.hospital}, ${doctor.location}`);
    Linking.openURL(`https://maps.google.com/?q=${query}`);
  };

  // Restructured mock data to match the UI columns
  const schedules = [
    {
      id: 'mon', day: 'MON', date: 'OCT 23',
      times: ['09:00 AM', '10:30 AM', '02:00 PM']
    },
    {
      id: 'tue', day: 'TUE', date: 'OCT 24',
      times: ['08:30 AM', '11:00 AM', '03:30 PM']
    },
    {
      id: 'wed', day: 'WED', date: 'OCT 25',
      times: ['09:15 AM', '12:00 PM', '04:15 PM']
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="HealthBridge" showBack={true} showAvatar={true} />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* Main Info Card */}
        <View style={styles.mainCard}>
          <View style={styles.doctorImage}>
            <Image source={getPortrait(doctor.id)} style={styles.portraitImage} />
          </View>
          <Text style={styles.name}>{doctor.name}, MD</Text>
          <View style={styles.chipsRow}>
            <View style={styles.chip}><Text style={styles.chipText}>Primary Care</Text></View>
            <View style={styles.chip}><Text style={styles.chipText}>{doctor.experienceYears}+ Yrs Exp.</Text></View>
          </View>
          <Text style={styles.aboutText}>{doctor.about}</Text>

          {/* Accepted Insurance */}
          <Text style={styles.insuranceTitle}>ACCEPTED INSURANCE</Text>
          <View style={styles.insuranceGrid}>
            <View style={styles.insuranceChip}><Text style={styles.insuranceText}>BLUE CROSS</Text></View>
            <View style={styles.insuranceChip}><Text style={styles.insuranceText}>AETNA GOLD</Text></View>
            <View style={styles.insuranceChip}><Text style={styles.insuranceText}>UNITEDHEALTH</Text></View>
            <View style={styles.insuranceChip}><Text style={styles.insuranceText}>CIGNA PPO</Text></View>
          </View>
        </View>

        {/* Available Appointments */}
        <View style={styles.appointmentSection}>
          <View style={styles.appointmentHeader}>
            <Text style={styles.sectionTitle}>Available Appointments</Text>
            <Text style={styles.appointmentSubtext}>Select a time to book</Text>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.datesRow}>
            {schedules.map((schedule) => (
              <View 
                key={schedule.id} 
                style={[
                  styles.dayColumn, 
                  selectedTimeSlot?.dayId === schedule.id && styles.dayColumnActive
                ]}
              >
                <Text style={styles.dayText}>{schedule.day}</Text>
                <Text style={styles.dateText}>{schedule.date}</Text>
                
                <View style={styles.timesCol}>
                  {schedule.times.map((time) => {
                    const isSelected = selectedTimeSlot?.time === time && selectedTimeSlot?.dayId === schedule.id;
                    return (
                      <TouchableOpacity 
                        key={time} 
                        style={[styles.timeButton, isSelected && styles.timeButtonActive]}
                        onPress={() => {
                          setSelectedTimeSlot({ dayId: schedule.id, time });
                        }}
                      >
                        <Text style={[styles.timeText, isSelected && styles.timeTextActive]}>{time}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Phone Booking */}
        <View style={styles.phoneCard}>
          <View style={styles.phoneIconBox}>
            <Ionicons name="call" size={20} color={colors.primaryDark} />
          </View>
          <View style={styles.phoneContent}>
            <Text style={styles.phoneTitle}>Prefer to book over the phone?</Text>
            <Text style={styles.phoneText}>Call Dr. Rao's Front Desk{'\n'}Directly at +1(555) 123-4567{'\n'}Open Mon-Fri, 8:00 AM - 5:00 PM EST</Text>
          </View>
        </View>

        {/* Office Location */}
        <View style={styles.locationCard}>
          <View style={styles.locationHeader}>
            <Ionicons name="location-outline" size={20} color={colors.primaryDark} />
            <Text style={styles.locationTitle}>Office Location</Text>
          </View>
          <Text style={styles.locationAddress}>{doctor.hospital}{'\n'}{doctor.location}</Text>
          <TouchableOpacity style={styles.mapPlaceholder} activeOpacity={0.8} onPress={handleOpenMap}>
            <Image source={require('../../assets/images/map_location.png')} style={styles.mapImage} />
            <View style={styles.mapPin}>
               <Ionicons name="location" size={32} color={colors.primary} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Verified Care */}
        <View style={styles.verifiedCareSection}>
          <View style={styles.locationHeader}>
            <Ionicons name="checkmark-seal-outline" size={20} color={colors.primaryDark} />
            <Text style={styles.locationTitle}>Verified Care</Text>
          </View>
          <View style={styles.verifiedItem}>
            <Ionicons name="star-outline" size={20} color="#F59E0B" style={styles.verifiedIcon} />
            <Text style={styles.verifiedText}>{doctor.rating}/5.0 Patient Rating</Text>
          </View>
          <View style={styles.verifiedItem}>
            <Ionicons name="thumbs-up-outline" size={20} color="#F59E0B" style={styles.verifiedIcon} />
            <Text style={styles.verifiedText}>98% Recommend Dr. Rao</Text>
          </View>
          <View style={styles.verifiedItem}>
            <Ionicons name="time-outline" size={20} color="#F59E0B" style={styles.verifiedIcon} />
            <Text style={styles.verifiedText}>Low wait times (Avg 8 mins)</Text>
          </View>
        </View>

      </ScrollView>

      {selectedTimeSlot && (
        <View style={styles.footerContainer}>
          <PrimaryButton 
            title={`Book ${selectedTimeSlot.time}`} 
            onPress={handleBookAppointment} 
          />
        </View>
      )}
    </SafeAreaView>
  );
};

