import { colors, fontSizes, styles } from '../../helpers/theme'
import styled from 'styled-components'

export const Div_Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Div_SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: ${styles.spacing.m} ${styles.spacing.l};
  margin: ${styles.spacing.m};
  &.fullWidth {
    padding: ${styles.spacing.m} 0;
  }
`

export const Div_BorderContainer = styled.div`
  width: 100%;
  border-bottom: ${styles.borderProperty.primary} ${colors.grey100};
  padding: ${styles.spacing.l};
`
export const Div_InputContainer = styled.div`
  display: flex;
  padding: ${styles.spacing.xs} ${styles.spacing.s};
  background-color: ${colors.white};
  border: ${styles.borderProperty.primary} ${colors.white};
  transition: ${styles.transition.primary};
  border-radius: ${styles.borderRadius.primary};
  &.borderElement {
    border-color: ${colors.grey200};
    width: fit-content;
    & > input {
      text-align: left;
    }
  }
  &:hover {
    border-color: ${colors.primaryGreen};
  }
  &:focus-within {
    box-shadow: ${styles.boxShadowProperty.primary} ${colors.primaryGreen};
  }
  & > input {
    width: 100%;
    border: none;
    text-align: center;
    font-size: ${fontSizes.fontSizeS};
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${colors.grey300};
    }
    &:-ms-input-placeholder {
      color: ${colors.grey300};
    }
    &::-ms-input-placeholder {
      color: ${colors.grey300};
    }
  }
  & > select {
    width: 100%;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`
export const Div_PaddingContainer = styled.div<{ padding?: string }>`
  padding: ${props => (props.padding ? props.padding : styles.spacing.s)};
`
