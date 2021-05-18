import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;

  .MuiIconButton-root {
    padding: 0;
  }

  .MuiTabs-flexContainer {
    display: flex;
    align-items: center;

    > button {
      margin: 0 2vw;
    }
  }

  .MuiTabs-indicator {
    background-color: #3f51b5;
  }
  .MuiToolbar-root {
    padding: 2vh 2vw;
  }

  .MuiAppBar-colorPrimary {
    color: #000;
    background-color: #fff;
  }

  .MuiTableCell-head {
    font-weight: bold;
    color: #3f51b5;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 10rem;
  padding: 0.5rem 1rem;
`;
