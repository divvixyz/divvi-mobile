import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{'How to Start Earning'}</Text>
      <Text style={{...styles.text, marginBottom: 8}}>{'Crypto can be scary and confusing, but it doesn’t need to be.'}</Text>
      <Text style={{...styles.text, marginBottom: 16}}>
        {'Follow these steps to start earning today!'}
      </Text>
      <BulletList />
    </View>
  )
}

const steps = [
  { id: '1', text: 'Get some crypto! Click "Add more tokens" on the home screen to easily get crypto tokens to invest.' },
  { id: '2', text: 'Invest your crytpo! Click the "Invest" button on the home screen and start earning instantly.' },
  { id: '3', text: 'Watch your money grow. At any time you can withdraw your investments, and convert them back to USD with the "Withdraw" button.' },
];

const BulletList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.bullet}>&#8226; </Text>{/* Unicode for bullet point */}
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={steps}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  bullet: {
    fontSize: 16,
    marginRight: 8,
    lineHeight: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 20
  },
  container: {
    padding: 36,
  },
  infoText: {
    marginBottom: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  error: {
    color: '#dc2626',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  loader: {
    marginLeft: 8,
  },
  feeContainer: {
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  feeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  feeLabel: {
    fontSize: 14,
    color: '#4b5563',
    flex: 1,
  },
  feeAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },
  hashesContainer: {
    backgroundColor: '#f0fdf4',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  hashesTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#166534',
    marginBottom: 8,
  },
  hash: {
    fontSize: 13,
    color: '#166534',
    fontFamily: 'monospace',
  },
  warningContainer: {
    backgroundColor: '#fff7ed',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  warningTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9a3412',
    marginBottom: 4,
  },
  warningText: {
    fontSize: 13,
    color: '#9a3412',
  },
})
