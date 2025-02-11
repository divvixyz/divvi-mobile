// See useWallet for why we don't directly import internal modules, except for the types
import type { FiatExchangeFlowType } from '../fiatExchanges/types'
import type { Navigate } from '../navigator/NavigationService'
import type { ScreensType } from '../navigator/Screens'
import type { NetworkId as InternalNetworkId } from '../transactions/types'
import type { NetworkId } from './types'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace DivviNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends StackParamList {}
  }
}

export type StackParamList = {
  Send: undefined
  Receive: undefined
  Swap:
    | {
        fromTokenId?: string
        toTokenId?: string
        toTokenNetworkId?: NetworkId
      }
    | undefined
  Add: undefined
  Withdraw: undefined
  TabWallet: undefined
  TabActivity: undefined
  TabEarn: undefined
  TabDiscover: undefined
}

export type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type NavigateArgs = {
  [RouteName in keyof DivviNavigation.RootParamList]: undefined extends DivviNavigation.RootParamList[RouteName]
    ? [RouteName] | [RouteName, DivviNavigation.RootParamList[RouteName]]
    : [RouteName, DivviNavigation.RootParamList[RouteName]]
}[keyof DivviNavigation.RootParamList]

export function navigate(...[routeName, params]: NavigateArgs): void {
  const internalNavigate = require('../navigator/NavigationService').navigate as Navigate
  const Screens = require('../navigator/Screens').Screens as ScreensType
  const FiatExchangeFlow = require('../fiatExchanges/types')
    .FiatExchangeFlow as FiatExchangeFlowType

  switch (routeName) {
    case 'Send':
      internalNavigate(Screens.SendSelectRecipient)
      break
    case 'Receive':
      internalNavigate(Screens.QRNavigator, {
        screen: Screens.QRCode,
      })
      break
    case 'Swap':
      internalNavigate(
        Screens.SwapScreenWithBack,
        params
          ? {
              fromTokenId: params.fromTokenId,
              toTokenId: params.toTokenId,
              toTokenNetworkId: params.toTokenNetworkId as InternalNetworkId,
            }
          : undefined
      )
      break
    case 'Add':
      internalNavigate(Screens.FiatExchangeCurrencyBottomSheet, { flow: FiatExchangeFlow.CashIn })
      break
    case 'Withdraw':
      internalNavigate(Screens.WithdrawSpend)
      break
    case 'TabWallet':
      internalNavigate(Screens.TabWallet)
      break
    case 'TabActivity':
      internalNavigate(Screens.TabHome)
      break
    case 'TabEarn':
      internalNavigate(Screens.TabEarn)
      break
    case 'TabDiscover':
      internalNavigate(Screens.TabDiscover)
      break
    default:
      const exhaustiveCheck: never = routeName
      // This handles custom defined screens
      // Though also allows navigating to internal screens...
      internalNavigate(routeName, params)
      return exhaustiveCheck
  }
}
