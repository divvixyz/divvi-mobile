import * as React from 'react'
import { ViewStyle } from 'react-native'
import Svg, { Path, Rect } from 'react-native-svg'
import Colors from 'src/styles/colors'

interface Props {
  style?: ViewStyle
}

export default function KeylessBackup({ style }: Props) {
  return (
    <Svg width={80} height={80} fill="none" style={style}>
      <Rect width={80} height={80} fill={Colors.warningSecondary} rx={40} />
      <Path
        fill={Colors.warningPrimary}
        fillRule="evenodd"
        d="M53.725 29.555v3.523c.912.541 1.545 1.514 1.545 2.658v9.272c0 1.144-.633 2.118-1.545 2.658v3.524a3.1 3.1 0 0 1-3.09 3.09H28.998a3.09 3.09 0 0 1-3.09-3.09V29.555a3.09 3.09 0 0 1 3.09-3.091h21.635a3.1 3.1 0 0 1 3.091 3.09ZM52.18 45.008v-9.272H41.362v9.272H52.18ZM28.999 29.555V51.19h21.635V48.1h-9.272a3.1 3.1 0 0 1-3.09-3.092v-9.272a3.1 3.1 0 0 1 3.09-3.09h9.272v-3.091H29Zm19.317 10.817a2.318 2.318 0 1 1-4.636 0 2.318 2.318 0 0 1 4.636 0Z"
        clipRule="evenodd"
      />
      <Path
        fill={Colors.warningPrimary}
        d="M53.725 33.078h-.75v.427l.367.218.383-.645Zm0 14.588-.383-.645-.367.218v.427h.75Zm-1.545-11.93h.75v-.75h-.75v.75Zm0 9.272v.75h.75v-.75h-.75Zm-10.818-9.272v-.75h-.75v.75h.75Zm0 9.272h-.75v.75h.75v-.75ZM28.999 51.19h-.75v.75h.75v-.75Zm0-21.635v-.75h-.75v.75h.75ZM50.634 51.19v.75h.75v-.75h-.75Zm0-3.09h.75v-.75h-.75v.75Zm0-15.455v.75h.75v-.75h-.75Zm0-3.09h.75v-.75h-.75v.75Zm3.841 3.523v-3.523h-1.5v3.523h1.5Zm1.545 2.658c0-1.434-.796-2.64-1.912-3.303l-.766 1.29c.707.42 1.178 1.16 1.178 2.013h1.5Zm0 9.272v-9.272h-1.5v9.272h1.5Zm-1.912 3.303c1.116-.662 1.912-1.869 1.912-3.303h-1.5c0 .853-.47 1.594-1.178 2.013l.766 1.29Zm.367 2.879v-3.524h-1.5v3.524h1.5Zm-3.84 3.84a3.85 3.85 0 0 0 3.84-3.84h-1.5a2.35 2.35 0 0 1-2.34 2.34v1.5Zm-21.636 0h21.635v-1.5H29v1.5Zm-3.84-3.84a3.84 3.84 0 0 0 3.84 3.84v-1.5a2.34 2.34 0 0 1-2.34-2.34h-1.5Zm0-21.635V51.19h1.5V29.555h-1.5Zm3.84-3.841a3.84 3.84 0 0 0-3.84 3.84h1.5a2.34 2.34 0 0 1 2.34-2.34v-1.5Zm21.635 0H29v1.5h21.635v-1.5Zm3.841 3.84a3.85 3.85 0 0 0-3.84-3.84v1.5a2.35 2.35 0 0 1 2.34 2.34h1.5Zm-3.045 6.182v9.272h1.5v-9.272h-1.5Zm-10.068.75H52.18v-1.5H41.362v1.5Zm.75 8.522v-9.272h-1.5v9.272h1.5Zm10.068-.75H41.362v1.5H52.18v-1.5ZM29.749 51.19V29.555h-1.5V51.19h1.5Zm20.885-.75H29v1.5h21.635v-1.5Zm-.75-2.34v3.09h1.5V48.1h-1.5Zm-8.522.75h9.272v-1.5h-9.272v1.5Zm-3.84-3.842a3.85 3.85 0 0 0 3.84 3.841v-1.5a2.35 2.35 0 0 1-2.34-2.34h-1.5Zm0-9.272v9.272h1.5v-9.272h-1.5Zm3.84-3.84a3.85 3.85 0 0 0-3.84 3.84h1.5a2.35 2.35 0 0 1 2.34-2.34v-1.5Zm9.272 0h-9.272v1.5h9.272v-1.5Zm-.75-2.341v3.09h1.5v-3.09h-1.5ZM29 30.305h21.635v-1.5H29v1.5Zm17 13.135a3.068 3.068 0 0 0 3.067-3.068h-1.5c0 .866-.702 1.568-1.568 1.568v1.5Zm-3.069-3.068a3.068 3.068 0 0 0 3.068 3.068v-1.5a1.568 1.568 0 0 1-1.568-1.568h-1.5Zm3.068-3.068a3.068 3.068 0 0 0-3.068 3.068h1.5c0-.866.702-1.568 1.568-1.568v-1.5Zm3.069 3.068a3.068 3.068 0 0 0-3.069-3.068v1.5c.867 0 1.569.702 1.569 1.568h1.5Z"
        mask="url(#a)"
      />
      <Path
        fill={Colors.warningPrimary}
        stroke={Colors.warningPrimary}
        d="M67.797 51.196h-3.615v.5c0 6.115-4.931 11.065-11.015 11.065-1.937 0-3.751-.51-5.327-1.393l1.392-1.398a8.95 8.95 0 0 0 3.935.9c5.042 0 9.136-4.115 9.136-9.174v-.5h-3.615l4.554-4.574 4.555 4.574Zm-49.1-22.63v.5h3.615l-4.554 4.573-4.555-4.574h3.615v-.5c0-6.116 4.931-11.065 11.015-11.065 1.937 0 3.751.51 5.327 1.393l-1.392 1.398a8.95 8.95 0 0 0-3.935-.9c-5.042 0-9.136 4.115-9.136 9.174Z"
      />
    </Svg>
  )
}
