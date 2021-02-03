import React from 'react';
import styled from 'styled-components';
import { string, bool, number } from 'prop-types';

import Text from '../../Text';

const HelperWrapper = styled.View(
  ({
    full,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    width: ${full ? '100%' : `${input.width}px`};
    max-width: ${input.width}px;
    flex-direction: row;

    margin-top: ${input.helper.margin.top}px;
  `,
);

const Info = styled(Text.Regular)(
  ({
    disabled,
    error,
    right,
    theme: {
      yoga: {
        colors,
        components: { input },
      },
    },
  }) => `
    flex-shrink: ${right ? '0' : '1'};
    flex-wrap: wrap;

    color: ${input.helper.color};
    font-size: ${input.helper.font.size}px;

    ${error ? `color: ${colors.feedback.attention[1]};` : ''}
    ${disabled ? `color: ${colors.elements.backgroundAndDisabled}` : ''}
    ${right ? 'margin-left: auto;' : ''}
  `,
);

const Helper = ({ full, error, helper, disabled, maxLength, length }) => (
  <HelperWrapper full={full} disabled={disabled}>
    {(error || helper) && (
      <Info disabled={disabled} error={error}>
        {error || helper}
      </Info>
    )}
    {maxLength && (
      <Info disabled={disabled} error={error} right>
        {length}/{maxLength}
      </Info>
    )}
  </HelperWrapper>
);

Helper.propTypes = {
  disabled: bool,
  error: string,
  full: bool,
  helper: string,
  maxLength: number,
  length: number,
};

Helper.defaultProps = {
  disabled: undefined,
  error: undefined,
  full: false,
  helper: undefined,
  maxLength: undefined,
  length: undefined,
};

export default Helper;
