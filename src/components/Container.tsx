import { styles } from '../helpers/theme'
import styled, { css } from 'styled-components'

export const Div_Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Div_SubContainer = styled.div<{
  backgroundcolor?: string
  column?: boolean
  alignItems?: string
  padding?: string
}>`
  background-color: ${props =>
    props.backgroundcolor ? props.backgroundcolor : styles.colors.white};
  padding: ${props => (props.padding ? props.padding : `${styles.spacing.m} ${styles.spacing.l}`)};
  margin: ${styles.spacing.m};
  display: flex;
  justify-content: space-between;
  align-items: ${props => (props.alignItems ? props.alignItems : null)};
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}
`

export const Div_PaddingContainer = styled.div<{ padding?: string }>`
  padding: ${props => (props.padding ? props.padding : styles.spacing.s)};
`

export const Div_BorderContainer = styled.div`
  width: 100%;
  border-bottom: ${styles.borderProperty.primary} ${styles.colors.grey100};
  padding: ${styles.spacing.l};
`
export const Div_InputContainer = styled.div`
  display: flex;
  padding: ${styles.spacing.xs} ${styles.spacing.s};
  background-color: ${styles.colors.white};
  border: ${styles.borderProperty.primary} ${styles.colors.white};
  transition: ${styles.transition.primary};
  border-radius: ${styles.borderRadius.primary};
  &.borderElement {
    border-color: ${styles.colors.grey200};
    width: fit-content;
    & > input {
      text-align: left;
    }
  }
  &:hover {
    border-color: ${styles.colors.primaryGreen};
  }
  &:focus-within {
    box-shadow: 0 0 3px ${styles.colors.primaryGreen};
  }
  & > input {
    width: 100%;
    border: none;
    text-align: center;
    font-size: ${styles.fontSize.s};
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${styles.colors.grey300};
    }
    &:-ms-input-placeholder {
      color: ${styles.colors.grey300};
    }
    &::-ms-input-placeholder {
      color: ${styles.colors.grey300};
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
