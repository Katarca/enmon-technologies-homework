import { ReactComponent as avatarIcon } from '../../icons/avatar-icon.svg'
import { breakpoint, colors, styles } from '../../helpers/theme'
import { ReactComponent as errorIcon } from '../../icons/error-icon.svg'
import { ReactComponent as lockIcon } from '../../icons/lock-icon.svg'
import styled, { css } from 'styled-components'

export const Div_LoginContainer = styled.div`
  padding: ${styles.spacing.s};
  width: 400px;
  ${breakpoint.phone} {
    width: 80%;
  }
`

export const Div_HeadingContainer = styled.div`
  padding: ${styles.spacing.s} 0;
  border-bottom: ${styles.borderProperty.secondary} ${colors.primaryGreen};
  width: fit-content;
  margin-bottom: ${styles.spacing.s};
`

const inputIconStyles = css`
  fill: ${colors.primaryGreen};
  width: ${styles.iconWidth.s};
`

export const AvatarIcon = styled(avatarIcon)`
  ${inputIconStyles}
`
export const LockIcon = styled(lockIcon)`
  ${inputIconStyles}
`
export const ErrorIcon = styled(errorIcon)`
  width: ${styles.iconWidth.s};
  fill: ${colors.red200};
  margin-right: ${styles.spacing.s};
`

export const Div_ErrorContainer = styled.div`
  display: flex;
  padding: ${styles.spacing.s} ${styles.spacing.m};
  background-color: ${colors.pink100};
  border: ${styles.borderProperty.primary} ${colors.pink200};
`
