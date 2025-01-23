import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import Colors from 'src/styles/colors'

export function FaceID({ color = Colors.contentPrimary }: { color?: Colors }) {
  return (
    <Svg testID="FaceIDBiometryIcon" width={24} height={24} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.719 6.586V3.89A2.675 2.675 0 0 1 4.39 1.219h2.695a.61.61 0 0 0 0-1.219H4.39A3.895 3.895 0 0 0 .5 3.89v2.696a.61.61 0 0 0 1.219 0ZM7.086 22.78a.61.61 0 0 1 0 1.219H4.39A3.895 3.895 0 0 1 .5 20.11v-2.696a.61.61 0 1 1 1.219 0v2.695a2.675 2.675 0 0 0 2.672 2.672h2.695ZM24.5 17.414v2.695A3.895 3.895 0 0 1 20.61 24h-2.696a.61.61 0 1 1 0-1.219h2.695a2.675 2.675 0 0 0 2.672-2.672v-2.695a.61.61 0 0 1 1.219 0Zm0-13.523v2.695a.61.61 0 1 1-1.219 0V3.89a2.675 2.675 0 0 0-2.672-2.672h-2.695a.61.61 0 1 1 0-1.219h2.695A3.895 3.895 0 0 1 24.5 3.89Zm-7.795 13.847a.633.633 0 0 0-.858-.93 4.918 4.918 0 0 1-3.347 1.31 4.918 4.918 0 0 1-3.347-1.31.633.633 0 0 0-.858.93 6.18 6.18 0 0 0 4.205 1.645 6.18 6.18 0 0 0 4.205-1.645Zm-2.94-8.691v4.5c0 .892-.725 1.617-1.617 1.617h-.515a.633.633 0 0 1 0-1.266h.515a.352.352 0 0 0 .352-.351v-4.5a.633.633 0 1 1 1.266 0Zm4.36 1.77V9.011a.598.598 0 0 0-1.195 0v1.804a.598.598 0 1 0 1.195 0Zm-11.11 0a.598.598 0 1 0 1.196 0V9.011a.598.598 0 0 0-1.195 0v1.804Z"
        fill={color}
      />
    </Svg>
  )
}

export default React.memo(FaceID)
