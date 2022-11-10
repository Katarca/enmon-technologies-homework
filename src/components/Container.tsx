import { styles } from '../helpers/theme'
import styled, { css } from 'styled-components'

export const Div_Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Div_SubContainer = styled.div<{ backgroundcolor?: string; column?: boolean }>`
  background-color: ${props =>
    props.backgroundcolor ? props.backgroundcolor : styles.colors.white};
  padding: ${styles.spacing.m} ${styles.spacing.l};
  margin: ${styles.spacing.m};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}
`
