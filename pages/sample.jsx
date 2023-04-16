import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  background-color: red;
`;

const StyledButtonBleu = styled(Button)`
  background-color: blue;
  color: #ffffff;
`;

const Sample = () => {
    return (
        <div>
            <StyledButton>Customized</StyledButton>
            <StyledButtonBleu>Customized</StyledButtonBleu>
            <Button variant="contained">Hello World</Button>
        </div>
    )
}

export default Sample
