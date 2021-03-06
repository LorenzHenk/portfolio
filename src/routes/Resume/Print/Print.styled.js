import styled from 'styled-components';

// export const Wrapper = styled.main`
export default styled.main`
  margin-top: 8em;
  margin-bottom: 4em;
  padding: 1.4cm;
  padding-bottom: 4em;
  color: black;
  background-color: white;
  box-shadow: 0 0 18pt rgba(black, 0.4), 0 0 4pt rgba(65, 65, 65, 0.5);
  font-size: 11pt;

  @media print {
    margin: 0;
    padding: 0;
    box-shadow: none;
    a[href]:after {
      content: none;
    }
  }

  hr {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    opacity: 0.2;
  }

  .profile {
    h3,
    h5 {
      color: $black8;
    }
  }

  .perks {
    font-size: 0.65em;
  }

  #SkillList {
    align-items: flex-start;

    .design-list,
    .frontend-list,
    .backend-list,
    .wish-list {
      margin-top: 0;
      padding-right: 0.25em;
      padding-left: 0.25em;
      align-items: flex-start;
      justify-content: start;
      align-content: flex-start;
      flex-direction: column;
      border-left: 1pt solid rgba(black, 0.1);
      flex: 1 1 25%;

      > li[data-tip] {
        display: flex;
        padding: 0 0.25em;
        flex: 0 1 auto;
        align-items: center;
        &:after {
          color: black;
        }
      }
    }

    .Hex {
      width: 1.2em;
      height: 1.2em;
      color: black;
      font-size: 0.9em;
      flex: 0 0 auto;
      .hex-svg {
        display: none;
      }
      img {
        width: 100%;
        margin: 0;
      }
    }

    .show-print {
      display: block;
      margin: 0.75em;
      color: black;
      text-align: left;
      line-height: 1.15;
      font-size: 0.6em;
      @media print {
        font-size: 0.6em;
      }
    }
  }
`;
