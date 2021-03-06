import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import global from "config/global"
import FormErrorMessage from "../FormErrorMessage"

const StyledInput = styled.input`
  padding: 0 15px;
  border: 2px solid ${global.colors.tertiaryColor};
  border-radius: ${global.layout.borderRadius};
  outline: none;
  font-size: 1.1em;
  height: 50px;
  font-family: ${global.font.bold};
  box-sizing: border-box;
  color: ${global.colors.tertiaryColor};
  min-width: 200px;
  width: auto;
`

const Label = styled.label`
  display: block;
  font-family: ${global.font.regular};
  font-weight: normal;
  color: ${global.colors.secondaryColor};
  margin-bottom: 3px;
`

export default function Input({
  value,
  name,
  id,
  type,
  label,
  handleChange,
  handleBlur,
  ...rest
}) {
  const hasError =
    rest.touched && rest.errors && rest.touched[name] && !!rest.errors[name]

  return (
    <div>
      {!!label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        type={type}
        value={value}
        name={name}
        id={id}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {hasError && <FormErrorMessage message={rest.errors[name]} />}
    </div>
  )
}

Input.defaultProps = {
  value: "",
  type: "text",
  label: "",
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
}
