import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.valueSection}>
        <Text style={styles.sectionTitle}>{'Total Value of Investments'}</Text>
        <Text style={styles.totalValue}>{'$102.40 (+2.4%)'}</Text>
        <View style={styles.breakdown}>
          <View>
            <Text style={styles.subtitle}>{'Initial Investment'} </Text>
            <Text>{'$100.00'} </Text>
          </View>
          <View>
            <Text style={styles.subtitle}>{'Tokens to Invest'}</Text>
            <View>
              <Text>{'$0.00'} </Text>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 36, paddingVertical: 12}}>
        <Pressable
            onPress={() => null}
            disabled={false}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>
              {'Add more tokens'}
            </Text>
          </Pressable>
          </View>
      </View>
      <View style={styles.valueSection}>
        <Text style={styles.sectionTitle}>{'US Dollar Market'} </Text>
        <Text style={{ marginHorizontal: 12, marginBottom: 16 }}>
          {'Spread your investments across multiple earning opportunities that are all backed by the US dollar.'}
        </Text>
        <View style={styles.rowLineItem}>
          <Text>{'Average APY'}</Text>
          <Text>{'7.89%'}</Text>
        </View>
        <View style={styles.rowLineItem}>
          <Text>{'Market Cap'}</Text>
          <Text>{'$100M'}</Text>
        </View>
        <View style={{paddingHorizontal: 36, paddingVertical: 12}}>
        <Pressable
            onPress={() => null}
            disabled={false}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>
              {'Invest'}
            </Text>
          </Pressable>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  valueSection: {
    marginBottom: 24,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
  },
  breakdown: {
    borderTopColor: '#cccccc',
    borderTopWidth: 1,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowLineItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginBottom: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    margin: 12,
  },
  totalValue: {
    fontSize: 16,
    marginLeft: 12,
    marginBottom: 12,
  },
  subtitle: {
    marginBottom: 8,
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
    borderRadius: 48,
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
