import * as React from 'react'
import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native'
import User from 'src/icons/User'
import { Recipient } from 'src/recipients/recipient'
import Colors from 'src/styles/colors'
import { typeScale } from 'src/styles/fonts'

interface Props {
  style?: ViewStyle
  size?: number
  recipient: Recipient
  backgroundColor?: Colors
  foregroundColor?: Colors
  borderColor?: Colors
  DefaultIcon?: React.ComponentType<{
    color?: Colors
    backgroundColor?: Colors
    size?: number
  }>
}

const DEFAULT_ICON_SIZE = 40

const getAddressBackgroundColor = (address: string) =>
  `hsl(${parseInt(address.substring(0, 5), 16) % 360}, 53%, 93%)` as Colors
const getAddressForegroundColor = (address: string) =>
  `hsl(${parseInt(address.substring(0, 5), 16) % 360}, 67%, 24%)` as Colors
const getNameInitial = (name: string) => name.charAt(0).toLocaleUpperCase()

function ContactCircle({
  size: iconSize = DEFAULT_ICON_SIZE,
  recipient,
  style,
  backgroundColor,
  foregroundColor,
  borderColor,
  DefaultIcon = User,
}: Props) {
  const address = recipient.address
  const iconBackgroundColor = backgroundColor ?? getAddressBackgroundColor(address || '0x0')

  const renderThumbnail = () => {
    if (recipient.thumbnailPath) {
      return (
        <Image
          source={{ uri: recipient.thumbnailPath }}
          style={[
            styles.image,
            { height: iconSize, width: iconSize, borderRadius: iconSize / 2.0 },
          ]}
          resizeMode={'cover'}
        />
      )
    }

    const fontColor = foregroundColor ?? getAddressForegroundColor(address || '0x0')
    if (recipient.name) {
      const initial = getNameInitial(recipient.name)
      return (
        <Text
          allowFontScaling={false}
          style={[
            typeScale.labelMedium,
            { fontSize: iconSize / 2.0, color: fontColor, lineHeight: iconSize / 1.5 },
          ]}
        >
          {initial.toLocaleUpperCase()}
        </Text>
      )
    }

    return (
      <DefaultIcon
        size={Math.round(iconSize / 1.625)}
        color={fontColor}
        backgroundColor={iconBackgroundColor}
      />
    )
  }

  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.icon,
          {
            backgroundColor: iconBackgroundColor,
            height: iconSize,
            width: iconSize,
            borderRadius: iconSize / 2,
          },
          borderColor && {
            borderColor,
            borderWidth: 1,
          },
        ]}
      >
        {renderThumbnail()}
      </View>
    </View>
  )
}

export default ContactCircle

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    margin: 'auto',
    alignSelf: 'center',
  },
})
