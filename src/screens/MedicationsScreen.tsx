import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import IconFilter from '../assets/figma/dd7be05eebbedc29dce14dd58229d81a9beacceb.svg';
import IconPill from '../assets/figma/bf148fb0fc1de4b415d64edd441fb153153e12e2.svg';
import IconAlert from '../assets/figma/6aa869d642efdcc1749a39998ad3bce31cb13de9.svg';
import IconChevron from '../assets/figma/659d62b3e2868fecf759d084ce58ffe49aba348b.svg';

export default function MedicationsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerButton} />
        <Text style={styles.headerTitle}>Moje lieky</Text>
        <View style={[styles.headerButton, styles.headerButtonBlue]}>
          <IconFilter width={20} height={20} />
        </View>
      </View>

      <View style={styles.statsRow}>
        <StatItem value="5" label="Lieky" color="#101828" />
        <View style={styles.statsDivider} />
        <StatItem value="3" label="Dnes" color="#155dfc" />
        <View style={styles.statsDivider} />
        <StatItem value="2" label="Nízka zásoba" color="#e7000b" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>VŠETKY LIEKY</Text>

        <MedicationCard
          title="Ramipril"
          subtitle="Liek na tlak"
          gradient={['#2b7fff', '#155dfc']}
          pills={[
            { label: 'Ráno 8:00', tone: 'green' },
            { label: 'Večer 20:00', tone: 'blue' },
            { label: 'Každý deň', tone: 'blue' },
          ]}
          footnote={{ Icon: IconAlert, text: 'Zostáva 5 tabliet', color: '#e7000b' }}
        />

        <MedicationCard
          title="Metformin"
          subtitle="Liek na srdce"
          gradient={['#ff6900', '#f54900']}
          pills={[
            { label: 'Poobede 14:00', tone: 'yellow' },
            { label: 'Po, St, Pi', tone: 'yellow' },
          ]}
          footnote={{ text: 'Zásoba: 28 tabliet', color: '#99a1af' }}
        />

        <MedicationCard
          title="Multivitamin Meco"
          subtitle="Vitamín"
          gradient={['#ad46ff', '#9810fa']}
          pills={[
            { label: 'Ráno 8:00', tone: 'green' },
            { label: 'Každý deň', tone: 'green' },
          ]}
          footnote={{ text: 'Zásoba: 60 kapsúl', color: '#99a1af' }}
        />

        <MedicationCard
          title="Zolpidem"
          subtitle="Liek na spanie"
          gradient={['#615fff', '#4f39f6']}
          pills={[
            { label: 'Večer 20:00', tone: 'blue' },
            { label: 'Po', tone: 'blue' },
          ]}
          footnote={{ Icon: IconAlert, text: 'Zostáva 8 tabliet', color: '#e7000b' }}
        />

        <MedicationCard
          title="Ibuprofen"
          subtitle="Liek na bolesť"
          gradient={['#f6339a', '#e60076']}
          pills={[{ label: 'Podľa potreby', tone: 'gray' }]}
          footnote={{ text: 'Zásoba: 20 tabliet', color: '#99a1af' }}
        />
      </ScrollView>

    </SafeAreaView>
  );
}

function StatItem({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <View style={styles.statItem}>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function MedicationCard({
  title,
  subtitle,
  gradient,
  pills,
  footnote,
}: {
  title: string;
  subtitle: string;
  gradient: [string, string];
  pills: Array<{ label: string; tone: 'green' | 'blue' | 'yellow' | 'gray' }>;
  footnote: { text: string; color: string; Icon?: React.ComponentType<{ width?: number; height?: number }> };
}) {
  const FootnoteIcon = footnote.Icon;
  return (
    <View style={styles.medCard}>
      <View style={styles.medRow}>
        <LinearGradient colors={gradient} start={[0, 0]} end={[1, 1]} style={styles.medIcon}>
          <IconPill width={28} height={28} />
        </LinearGradient>
        <View style={styles.medContent}>
          <Text style={styles.medTitle}>{title}</Text>
          <Text style={styles.medSubtitle}>{subtitle}</Text>
          <View style={styles.pillRow}>
            {pills.map((pill) => (
              <View key={pill.label} style={[styles.pill, styles[`pill_${pill.tone}`]]}>
                <Text style={[styles.pillText, styles[`pillText_${pill.tone}`]]}>{pill.label}</Text>
              </View>
            ))}
          </View>
          <View style={styles.footnoteRow}>
            {FootnoteIcon ? <FootnoteIcon width={14} height={14} /> : null}
            <Text style={[styles.footnoteText, { color: footnote.color }]}>{footnote.text}</Text>
          </View>
        </View>
        <IconChevron width={20} height={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    height: 57.231,
    borderBottomWidth: 1.27,
    borderBottomColor: '#e5e7eb',
    paddingHorizontal: 15.989,
    paddingTop: 11.982,
    paddingBottom: 1.27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  headerButton: {
    width: 31.998,
    height: 31.998,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButtonBlue: {
    backgroundColor: '#155dfc',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#101828',
  },
  statsRow: {
    height: 85.221,
    borderBottomWidth: 1.27,
    borderBottomColor: '#e5e7eb',
    paddingHorizontal: 15.989,
    paddingTop: 15.989,
    paddingBottom: 1.27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  statItem: {
    width: 112.537,
    alignItems: 'center',
    gap: 3.987,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 12,
    color: '#6a7282',
  },
  statsDivider: {
    width: 2,
    height: 51.974,
    backgroundColor: '#e5e7eb',
  },
  scrollContent: {
    paddingTop: 15.989,
    paddingBottom: 140,
    paddingHorizontal: 15.989,
    gap: 11.982,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6a7282',
    letterSpacing: 0.35,
    textTransform: 'uppercase',
    paddingHorizontal: 8,
  },
  medCard: {
    borderWidth: 1.27,
    borderColor: '#e5e7eb',
    borderRadius: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  medRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 11.982,
    padding: 15.989,
  },
  medIcon: {
    width: 55.981,
    height: 55.981,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  medContent: {
    flex: 1,
    gap: 7.994,
  },
  medTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#101828',
  },
  medSubtitle: {
    fontSize: 14,
    color: '#6a7282',
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7.994,
  },
  pill: {
    height: 23.963,
    borderRadius: 999,
    paddingHorizontal: 7.994,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill_green: {
    backgroundColor: '#dcfce7',
  },
  pill_blue: {
    backgroundColor: '#dbeafe',
  },
  pill_yellow: {
    backgroundColor: '#fef9c2',
  },
  pill_gray: {
    backgroundColor: '#f3f4f6',
  },
  pillText: {
    fontSize: 12,
    fontWeight: '700',
  },
  pillText_green: {
    color: '#008236',
  },
  pillText_blue: {
    color: '#1447e6',
  },
  pillText_yellow: {
    color: '#a65f00',
  },
  pillText_gray: {
    color: '#364153',
  },
  footnoteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3.987,
  },
  footnoteText: {
    fontSize: 12,
  },
});
