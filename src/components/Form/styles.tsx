import { Form } from '.'
import { styles } from '../../helpers/theme'
import styled from 'styled-components'

export const CustomForm = styled(Form)`
  & > button,
  div:not(:first-child) {
    margin-top: ${styles.spacing.m};
  }
`
