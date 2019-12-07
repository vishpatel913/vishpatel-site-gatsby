import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Icon from "./icon";

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  display: flex;
  outline: none;
  text-align: center;
  vertical-align: middle;
`;

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => (
  <ToggleButton
    onClick={() => {
      toggleDarkMode();
    }}
  >
    <Icon name={isDarkMode ? "moon" : "sun"} />
  </ToggleButton>
);

DarkModeToggle.propTypes = {
  isDarkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func
};

const mapStateToProps = ({ isDarkMode }) => ({ isDarkMode });

const mapDispatchToProps = dispatch => ({
  toggleDarkMode: () => dispatch({ type: "TOGGLE_DARKMODE" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DarkModeToggle);
