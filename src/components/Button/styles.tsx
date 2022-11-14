import { Button } from './index'
import { colors, styles } from '../../helpers/theme'
import styled from 'styled-components'

export const CustomButton = styled(Button)`
  padding: ${styles.spacing.xs} ${styles.spacing.m};
  cursor: pointer;
  transition: ${styles.transition.primary};
  border-radius: ${styles.borderRadius.primary};
  &.fullWidth {
    width: 100%;
  }
  &.green {
    background-color: ${colors.primaryGreen};
    border: ${styles.borderProperty.primary} ${colors.primaryGreen};
    & > p {
      color: ${colors.white};
    }
    &:hover {
      &:enabled {
        opacity: 0.8;
      }
    }
  }
  &.white {
    background-color: ${colors.white};
    border: ${styles.borderProperty.primary} ${colors.grey200};
    & > p {
      color: ${colors.black};
    }
    &:hover {
      &:enabled {
        border-color: ${colors.primaryGreen};
        & > p {
          color: ${colors.primaryGreen};
        }
      }
    }
  }
  &:disabled {
    background-color: ${colors.grey300};
    border-color: ${colors.grey300};
    cursor: not-allowed;
    & > p {
      color: ${colors.white};
    }
  }
`
