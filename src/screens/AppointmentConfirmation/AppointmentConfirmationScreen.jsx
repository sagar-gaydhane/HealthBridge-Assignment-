import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Switch, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenHeader } from '../../components/Header/ScreenHeader';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import { colors } from '../../theme/colors';
import { styles } from './styles';

export const AppointmentConfirmationScreen = ({ route, navigation }) => {
  const { doctor } = route.params;
  
  const [syncCalendar, setSyncCalendar] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);

  const handleDone = () => {
    navigation.popToTop(); // Go back to Home in the stack
  };

  const getPortrait = (id) => {
    switch (id) {
      case 'd1': return require('../../assets/images/dr_rao_portrait.png');
      case 'd2': return require('../../assets/images/dr_marcus_thorne.png');
      case 'd3': return require('../../assets/images/dr_elena_petrova.png');
      default: return require('../../assets/images/user_profile_photo.png');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="HealthBridge" showAvatar={true} avatarPosition="left" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Top Header Area */}
        <View style={styles.topSection}>
          <View style={styles.headerIcon}>
            <Ionicons name="checkmark" size={24} color="#000" />
          </View>
          <Text style={styles.title}>Booking Confirmed</Text>
          <Text style={styles.subtitle}>Your appointment has been successfully{'\n'}scheduled.</Text>
        </View>

        {/* Main Details Card */}
        <View style={styles.detailsCard}>
          
          {/* Physician Section */}
          <View style={styles.physicianSection}>
            <View style={styles.physicianTextCol}>
              <Text style={styles.sectionLabel}>PHYSICIAN</Text>
              <Text style={styles.physicianName}>{doctor.name}</Text>
              <Text style={styles.physicianSpecialty}>{doctor.specialty}</Text>
            </View>
            <View style={styles.doctorImageContainer}>
              <Image source={getPortrait(doctor.id)} style={styles.doctorImage} />
            </View>
          </View>

          {/* Date & Time */}
          <View style={styles.detailRow}>
            <View style={styles.iconBox}>
              <Ionicons name="calendar-outline" size={16} color={colors.primaryDark} />
            </View>
            <View style={styles.infoCol}>
              <Text style={styles.sectionLabel}>DATE & TIME</Text>
              <Text style={styles.infoValue}>Friday June 19, 2025</Text>
              <Text style={styles.infoSubtext}>10:30 AM EST</Text>
            </View>
          </View>

          {/* Location */}
          <View style={styles.detailRow}>
            <View style={styles.iconBox}>
              <Ionicons name="location-outline" size={16} color={colors.primaryDark} />
            </View>
            <View style={styles.infoCol}>
              <Text style={styles.sectionLabel}>LOCATION</Text>
              <Text style={styles.infoValue}>HealthBridge Medical Center</Text>
              <Text style={styles.infoSubtext}>123 Wellness Way, Suite 400{'\n'}San Francisco, CA 94103</Text>
            </View>
          </View>

          {/* Dashed Divider */}
          <View style={styles.dashedDivider} />

          {/* Receipt */}
          <View style={styles.receiptSection}>
            <View style={styles.receiptRow}>
              <Text style={styles.receiptLabel}>Consultation Fee</Text>
              <Text style={styles.receiptStrikethrough}>$240.00</Text>
            </View>
            <View style={styles.receiptRow}>
              <Text style={styles.receiptLabel}>Insurance Coverage</Text>
              <Text style={styles.receiptValue}>- $240.00</Text>
            </View>
            
            <View style={styles.solidDivider} />

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Due</Text>
              <View style={styles.totalValueContainer}>
                <Text style={styles.totalValue}>$0.00</Text>
                <View style={styles.coveredBadge}>
                  <Text style={styles.coveredText}>FULLY COVERED</Text>
                </View>
              </View>
            </View>
            
            {/* Barcode / ID */}
            <View style={styles.barcodeSection}>
               <View style={styles.barcodeLine} />
            </View>
            <Text style={styles.transactionId}>CONFIRMATION ID: HB-992-04X</Text>
          </View>
        </View>

        {/* Toggles */}
        <View style={styles.settingsSection}>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Automatically sync to my{'\n'}Google Calendar</Text>
            <Switch 
              value={syncCalendar} 
              onValueChange={setSyncCalendar} 
              trackColor={{ false: '#E5E7EB', true: colors.primaryDark }}
              thumbColor={colors.white}
            />
          </View>
          <View style={styles.settingDivider} />
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Turn off duplicate SMS alerts</Text>
            <Switch 
              value={smsAlerts} 
              onValueChange={setSmsAlerts} 
              trackColor={{ false: '#E5E7EB', true: colors.primaryDark }}
              thumbColor={colors.white}
            />
          </View>
        </View>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <Ionicons name="chatbubble-ellipses-outline" size={20} color={colors.primaryDark} style={styles.infoIcon} />
          <Text style={styles.infoBoxText}>Send appointment receipt details to family or caregiver via text message</Text>
        </View>

      </ScrollView>

      <View style={styles.footer}>
        <PrimaryButton title="Done" onPress={handleDone} />
      </View>
    </SafeAreaView>
  );
};
